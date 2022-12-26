import { IHairCutRepository } from '../../repositories/haircut/IHairCutRepository';

interface IRequest {
  user_id: string;
  status: boolean | string;
}

class ListHairCutService {
  constructor(private hairCurtRepository: IHairCutRepository){}

  async execute({ user_id, status } : IRequest){

    const hairCut = await this.hairCurtRepository.list({ user_id, status });

    return hairCut;
    

  }
}
 
export { ListHairCutService };