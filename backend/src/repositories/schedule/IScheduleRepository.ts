import { Schedule } from "../../models/Schedule";

interface ICreateScheduleDTO {
  user_id: string;
  haircut_id: string;
  customer: string;
}


interface IListScheduleDTO {
  user_id: string;
}

interface IScheduleRepository {
  create({ customer, haircut_id, user_id} : ICreateScheduleDTO): Promise<ICreateScheduleDTO | null>;
  list({ user_id } : IListScheduleDTO): Promise<Schedule[] | null>;
  
}

export { IScheduleRepository, ICreateScheduleDTO, IListScheduleDTO }; 