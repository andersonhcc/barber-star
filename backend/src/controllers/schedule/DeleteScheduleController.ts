import { Response, Request } from "express";
import { DeleteScheduleService } from "../../services/schedule/DeleteScheduleService";
import { ScheduleRepository } from "../../repositories/schedule/ScheduleRepository";

const scheduleRepository = new ScheduleRepository();

class ScheduleController {
  async handle(req: Request, res: Response) {

    const user_id = req.user_id;
    const  schedule_id  = req.query.schedule_id as string;

    const deleteScheduleService = new DeleteScheduleService(scheduleRepository);

    if(schedule_id === '' || user_id === ''){
      throw new Error('Error');
    }

    const schedule = deleteScheduleService.execute({ user_id, schedule_id });

    return res.json(schedule);


  }
}

export { ScheduleController };