import { IHairCuts } from "@screens/HairCuts/types";

export interface Props {
  closeModal(): void;
  setAtt(): void;
  hairCuts: IHairCuts[];
}
