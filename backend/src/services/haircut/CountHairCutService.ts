import { IHairCutRepository } from '../../repositories/haircut/IHairCutRepository';

interface IResponse {
  user_id: string;
}

class CountHairCutService {
  constructor(private hairCutRepository: IHairCutRepository) { };

  async execute({ user_id }: IResponse) {

    const count = await this.hairCutRepository.countHairCut(user_id);

    return count;
  }
}

export { CountHairCutService };