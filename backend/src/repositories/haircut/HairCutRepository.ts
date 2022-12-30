import prismaClient from "../../prisma";
import { HairCut } from "../../models/HairCut";
import {
  IHairCutCreateDTO,
  IHairCutRepository,
  IHairListDTO,
  IHairUpdateDTO,
  IHairVerifyDTO,
} from "./IHairCutRepository";

class HairCutRepository implements IHairCutRepository {
  private hairCut = prismaClient.haircut;
  private user = prismaClient.user;

  constructor() {
    this.hairCut = prismaClient.haircut;
    this.user = prismaClient.user;
  }


  async create({
    user_id,
    name,
    price
  }: IHairCutCreateDTO): Promise<IHairCutCreateDTO | null> {

    //checking if it has already reached the limit

    const myHairCuts = await this.hairCut.count({
      where: {
        user_id,
      }
    });

    const user = await this.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscription: true,
      }
    });

    if (myHairCuts >= 3 && user?.subscription?.status !== 'active') {
      throw new Error('Not authorized');
    }



    const hairCut = await this.hairCut.create({
      data: {
        name,
        price,
        user_id,
      }
    });

    return hairCut;

  }

  async list({
    user_id,
    status
  }: IHairListDTO): Promise<IHairListDTO[] | null> {

    const hairCut = await this.hairCut.findMany({
      where: {
        user_id,
        status: status === 'true' ? true : false
      }
    });

    return hairCut;

  }

  async update({
    haircut_id,
    name,
    price,
    status,
    user_id
  }: IHairUpdateDTO): Promise<IHairUpdateDTO | null> {

    const user = await this.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscription: true,
      }
    })

    if (user?.subscription?.status !== 'active') {
      throw new Error('Not authorized');
    }

    const hairCut = await this.hairCut.update({
      where: {
        id: haircut_id,
      },
      data: {
        name,
        price,
        status: status === 'true' ? true : false
      }
    })

    return hairCut;


  }

  async verifySignature({ user_id }: IHairVerifyDTO): Promise<IHairVerifyDTO | null> {

    const status = await this.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        subscription: {
          select: {
            id: true,
            status: true,
          }
        },
      }
    })



    return status;


  }

  async countHairCut(user_id: string): Promise<number | null> {

    const count = await this.hairCut.count({
      where: {
        user_id,
      }
    })

    return count;
  }


  async detailsHairCut(haircut_id: string): Promise<HairCut | null> {

    const haircut = await this.hairCut.findFirst({
      where: {
        id: haircut_id
      }
    })

    return haircut;
  }

}
export { HairCutRepository };
