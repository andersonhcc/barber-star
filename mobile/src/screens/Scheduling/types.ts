import { IHairCuts } from '@screens/HairCuts/types';

export interface IScheduling {
  id: string;
  customer: string;
  haircut: IHairCuts;
}
