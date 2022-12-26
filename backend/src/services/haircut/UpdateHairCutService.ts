import { IHairCutRepository } from "../../repositories/haircut/IHairCutRepository";

interface IResponse{
  user_id: string;
  haircut_id: string;
  name: string;
  price: number;
  status: boolean;
}

class UpdateHairService {
  constructor(private hairCutRepository: IHairCutRepository) { }

  async execute({
    haircut_id,
    name,
    price,
    status,
    user_id
  } : IResponse){

    const hairCut = await this.hairCutRepository.update({ 
      haircut_id,
      name,
      price,
      status,
      user_id
    });

    return hairCut;

  }


}

export { UpdateHairService };