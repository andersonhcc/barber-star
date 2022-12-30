import { Router } from "express";

import { CreateScheduleController } from "../controllers/schedule/CreateScheduleController";
import { ListScheduleController } from "../controllers/schedule/ListScheduleController";

import { isAuthenticated } from "../middlewares/isAuthenticated";


const routerSchedule = Router();


routerSchedule.post('/', isAuthenticated, new CreateScheduleController().handle);

routerSchedule.get('/', isAuthenticated, new ListScheduleController().handle);


export { routerSchedule };