import { IScheduleRepository } from "../../repositories/schedule/IScheduleRepository";

interface IResponse {
  user_id: string;
  schedule_id: string;
}


class DeleteScheduleService {
  constructor(private scheduleRepository: IScheduleRepository) { }

  async execute({ user_id, schedule_id }: IResponse) {

    try {

      const schedule = await this.scheduleRepository.verifyFinishService({
        user_id, schedule_id
      });

      if (!schedule) {
        throw new Error('Not authorized to delete schedule');
        
      }

      await this.scheduleRepository.deleteService({ schedule_id });

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }

  }
}

export { DeleteScheduleService };