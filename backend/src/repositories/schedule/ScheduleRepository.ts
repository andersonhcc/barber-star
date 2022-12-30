import prismaClient from "../../prisma";
import { ICreateScheduleDTO, IScheduleRepository } from './IScheduleRepository';

class ScheduleRepository implements IScheduleRepository {
  private service = prismaClient.service;
  
  constructor() {
    this.service = prismaClient.service;
  }

  async create({
    customer,
    haircut_id,
    user_id
  }: ICreateScheduleDTO): Promise<ICreateScheduleDTO | null> {
    
    const schedule = await this.service.create({
      data:{
        customer,
        haircut_id,
        user_id,
      }
    })

    return schedule;

  
  }

}

export { ScheduleRepository };