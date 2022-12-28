import { IScheduleRepository } from '../../repositories/schedule/IScheduleRepository';

interface IRequest {
  user_id: string;
  haircut_id: string;
  customer: string;
}


class CreateScheduleService {
  constructor(private scheduleRepository: IScheduleRepository) { }

  async execute({
    user_id,
    haircut_id,
    customer
  }: IRequest) {

    const schedule = await this.scheduleRepository.create({
      user_id,
      haircut_id,
      customer
    });

    return schedule;

  }
}

export { CreateScheduleService };