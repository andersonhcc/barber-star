import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";
import { ScheduleRepository } from "../../repositories/schedule/ScheduleRepository";

const scheduleRepository = new ScheduleRepository();



class ListScheduleController {
  async handle(req: Request, res: Response) {

    const user_id = req.user_id;

    const listScheduleService = new ListScheduleService(scheduleRepository);

    const schedule = await listScheduleService.execute({ user_id});

    return res.json(schedule);
  }
}

export { ListScheduleController };