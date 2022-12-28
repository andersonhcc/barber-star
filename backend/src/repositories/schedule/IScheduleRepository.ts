import { Schedule } from "../../models/Schedule";

interface ICreateScheduleDTO {
  user_id: string;
  haircut_id: string;
  customer: string;
}

interface IScheduleRepository {
  create({ customer, haircut_id, user_id} : ICreateScheduleDTO): Promise<ICreateScheduleDTO | null>;
}

export { IScheduleRepository, ICreateScheduleDTO }; 