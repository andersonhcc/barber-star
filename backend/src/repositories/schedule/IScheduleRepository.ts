import { Schedule } from "../../models/Schedule";

interface ICreateScheduleDTO {
  user_id: string;
  haircut_id: string;
  customer: string;
}


interface IListScheduleDTO {
  user_id: string;
}

interface IDeleteScheduleDTO {
  user_id?: string;
  schedule_id: string;
}


interface IScheduleRepository {
  create({ customer, haircut_id, user_id} : ICreateScheduleDTO): Promise<ICreateScheduleDTO | null>;
  list({ user_id } : IListScheduleDTO): Promise<Schedule[] | null>;
  verifyFinishService({ user_id, schedule_id} : IDeleteScheduleDTO): Promise<Schedule | null>;
  deleteService({ schedule_id } : IDeleteScheduleDTO): void;
  
}

export {
  IScheduleRepository,
  ICreateScheduleDTO,
  IListScheduleDTO,
  IDeleteScheduleDTO
}; 