import { Response, Request } from "express";
import { ScheduleRepository } from "../../repositories/schedule/ScheduleRepository";
import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

const scheduleRepository = new ScheduleRepository();

class CreateScheduleController {

  async handle(req: Request, res: Response){

    const user_id = req.user_id as string;


    const { haircut_id, customer } = req.body;

    if(customer === '' || haircut_id === ''){
      throw new Error('Error schedule new service.');
    }

    const createScheduleService = new CreateScheduleService(scheduleRepository);

    const schedule = await createScheduleService.execute({
      user_id,
      customer,
      haircut_id
    });

    return res.json(schedule);
  
  }
}

export { CreateScheduleController };