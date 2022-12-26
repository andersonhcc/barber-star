import { HairCut } from '../../models/HairCut';

interface IHairCutCreateDTO {
  user_id: string;
  name: string;
  price: number;
}

interface IHairCutRepository {
  create({ user_id, name, price}: IHairCutCreateDTO): void;

}

export { IHairCutRepository, IHairCutCreateDTO };