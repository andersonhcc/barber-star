import { Schedule } from "../../models/Schedule";
import prismaClient from "../../prisma";

import {
  ICreateScheduleDTO,
  IScheduleRepository,
  IListScheduleDTO,
  IDeleteScheduleDTO,
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
      data: {
        customer,
        haircut_id,
        user_id,
      }
    })

    return schedule;

  }

  async list({ user_id }: IListScheduleDTO): Promise<Schedule[]> {

    const schedule = await this.service.findMany({
      where: {
        user_id,
      },
      select: {
        customer: true,
        id: true,
        haircut: true,
      }
    })


    return schedule;
  }

  async verifyFinishService({ user_id, schedule_id: id }: IDeleteScheduleDTO): Promise<Schedule | null> {

    const findToUser = await this.service.findFirst({
      where: {
        id,
        user_id,
      }
    })
    return findToUser;

  }

  async deleteService({ schedule_id: id }: IDeleteScheduleDTO): Promise <void> {

    const schedule = await this.service.delete({
      where: {
        id,
      }
    })
  }

}

export { ScheduleRepository };