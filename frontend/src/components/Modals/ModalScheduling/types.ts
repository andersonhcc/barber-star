import { ICreateServiceDTO } from '@dtos/ICreateService';
import { IHairCuts } from '@screens/HairCuts/types';

export interface Props {
  closeScheduling(): void;
  hairCuts: [] | IHairCuts[]
  cadasterService({ customer, haircut_id }: ICreateServiceDTO): void;
}
