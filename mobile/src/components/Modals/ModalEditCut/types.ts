import { IHairCuts } from "@screens/HairCuts/types";

export interface Props {
  closeModal(): void;
  data: IHairCuts;
  setAtt(): void;
}
