import prismaClient from "../../prisma";
import { HairCut } from "../../models/HairCut";
import { IHairCutCreateDTO, IHairCutRepository } from "./IHairCutRepository";

class HairCutRepository implements IHairCutRepository { 
  private hairCut = prismaClient.haircut;
  private user = prismaClient.user;

  constructor(){
    this.hairCut = prismaClient.haircut;
    this.user = prismaClient.user;
  }
  async create({ user_id, name, price }: IHairCutCreateDTO): void {

    //checking if it has already reached the limit

    const myHairCuts = await this.hairCut.count({
      where: {
        user_id,
      }
    });

    const user = await this.user.findFirst({
      where:{
        id: user_id,
      },
      include: {
        subscription: true,
      }
    });

    if(myHairCuts >= 3 && user?.subscription?.status !== 'active'){
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

}


export { HairCutRepository };
