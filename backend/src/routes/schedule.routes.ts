import { Router } from "express";

import { CreateScheduleController } from "../controllers/schedule/CreateScheduleController";
import { ListScheduleController } from "../controllers/schedule/ListScheduleController";
import { ScheduleController } from "../controllers/schedule/DeleteScheduleController";

import { isAuthenticated } from "../middlewares/isAuthenticated";


const routerSchedule = Router();


routerSchedule.post('/', isAuthenticated, new CreateScheduleController().handle);

routerSchedule.get('/', isAuthenticated, new ListScheduleController().handle);

routerSchedule.delete('/', isAuthenticated, new ScheduleController().handle);



export { routerSchedule };