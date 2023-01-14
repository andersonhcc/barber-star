import prismaClient from "../../prisma";
import Stripe from "stripe";

class SubscribeService {
  async execute(user_id: string) {

    const stripe = new Stripe(
      process.env.STRIPE_API_KEY,
      {
        apiVersion: '2022-11-15',
        appInfo: {
          name: 'BarberStar',
          version: '1',
        }
      }
    );

    const findUser = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      }
    });

    let custommerId = findUser.stripe_customer_id;

    if (!custommerId) {
      const stripeCustommer = await stripe.customers.create({
        email: findUser.email,
      });

      await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          stripe_customer_id: stripeCustommer.id
        }
      });

      custommerId = stripeCustommer.id;
    }


    //checkout pay

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: custommerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: process.env.STRIPE_PRICE, quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return { sessionId: stripeCheckoutSession.id }

  }

}

export { SubscribeService };