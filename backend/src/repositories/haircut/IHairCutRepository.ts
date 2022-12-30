import { HairCut } from '../../models/HairCut';

interface IHairCutCreateDTO {
  user_id: string;
  name: string;
  price: number;
}

interface IHairListDTO {
  user_id: string;
  status: boolean | string;
}

interface IHairUpdateDTO {
  user_id: string;
  haircut_id?: string;
  name: string;
  price: number;
  status: boolean | string;
}

interface IHairVerifyDTO {
  user_id: string;
  status?: boolean;
}




interface IHairCutRepository {
  create({ user_id, name, price }: IHairCutCreateDTO): Promise<IHairCutCreateDTO | null>;
  list({ user_id, status }: IHairListDTO): Promise<IHairListDTO[] | null>;
  update({ haircut_id, name, price, status, user_id}: IHairUpdateDTO): Promise<IHairUpdateDTO| null>;
  verifySignature({ user_id } : IHairVerifyDTO ): Promise<IHairVerifyDTO | null> ;
  countHairCut(user_id: string): Promise<number | null>;
  detailsHairCut(haircut_id: string): Promise<HairCut | null>;

}

export { IHairCutRepository, IHairCutCreateDTO, IHairListDTO, IHairUpdateDTO, IHairVerifyDTO  };