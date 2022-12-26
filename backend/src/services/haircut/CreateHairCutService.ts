import { IHairCutRepository } from '../../repositories/haircut/IHairCutRepository';
interface IRequest {
  user_id: string;
  name: string;
  price: number;
}


class CreateHairCutService {
  constructor(private haircutRepository: IHairCutRepository){}
  
  async execute({
    name,
    user_id,
    price
  } : IRequest){
    
    const hairCut = await this.haircutRepository.create({ user_id, name, price});

    return hairCut;
  }

}

export { CreateHairCutService };