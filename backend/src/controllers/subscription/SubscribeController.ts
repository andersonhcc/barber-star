import { Request, Response } from "express";
import { SubscribeService } from "../../services/subscriptions/SubscribeService";


const subscribeService = new SubscribeService();

class SubscribeController {

  async handle(req: Request, res:Response){
    const user_id = req.user_id;

    const result = await subscribeService.execute(user_id);

    return res.json(result);

  }

}

export { SubscribeController };