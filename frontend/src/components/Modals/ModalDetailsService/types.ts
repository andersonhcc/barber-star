import { IScheduling } from "@screens/Scheduling/types";

export interface Props {
  closeModal(): void;
  data: IScheduling
  handleFinishService(): void;
  setAtt():void

}