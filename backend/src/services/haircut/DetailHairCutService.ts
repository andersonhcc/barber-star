import { IHairCutRepository } from "../../repositories/haircut/IHairCutRepository";

interface IResponse {
  haircut_id: string;
}


class DetailHairCutService {
  constructor(private hairCutRepository: IHairCutRepository) { }

  async execute({ haircut_id }: IResponse) {

    const haircut = await this.hairCutRepository.detailsHairCut(haircut_id);

    return haircut;

  }
}

export { DetailHairCutService };