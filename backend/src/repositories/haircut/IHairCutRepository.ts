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
  haircut_id: string;
  name: string;
  price: number;
  status: boolean;
}


interface IHairCutRepository {
  create({ user_id, name, price }: IHairCutCreateDTO): void;
  list({ user_id, status }: IHairListDTO): HairCut;
  update({ haircut_id, name, price, status, user_id}: IHairUpdateDTO): HairCut;

}

export { IHairCutRepository, IHairCutCreateDTO, IHairListDTO };