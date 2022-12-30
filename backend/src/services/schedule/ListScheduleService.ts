import { IScheduleRepository } from '../../repositories/schedule/IScheduleRepository';

interface IRequest {
  user_id: string;
}

class ListScheduleService {
  constructor(public scheduleRepository: IScheduleRepository){}

  async execute({ user_id } : IRequest){

    const schedule = await this.scheduleRepository.list({ user_id });


    return schedule;


  }
}

export { ListScheduleService };