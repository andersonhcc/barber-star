import { IHairCuts } from '@screens/HairCuts/types';


export interface Props {
  hairCuts: IHairCuts[];
  setVisibleDrop: () => void;
  setHairCutSelected: (value: IHairCuts) => void;
}