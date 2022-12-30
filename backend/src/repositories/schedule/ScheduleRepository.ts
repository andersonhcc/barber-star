import { Schedule } from "../../models/Schedule";
import prismaClient from "../../prisma";

import {
  ICreateScheduleDTO,
  IScheduleRepository,
  IListScheduleDTO
} from './IScheduleRepository';

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

  async list({ user_id }: IListScheduleDTO): Promise<Schedule[]> {
    
    const schedule = await this.service.findMany({
      where:{
        user_id,
      },
      select:{
        customer: true,
        id: true,
        haircut: true,
      }
    })
    
    return schedule;
  }
}

export { ScheduleRepository };