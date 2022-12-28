import { Router } from "express";

import { CreateScheduleController } from "../controllers/schedule/CreateScheduleController";

import { isAuthenticated } from "../middlewares/isAuthenticated";


const routerSchedule = Router();


routerSchedule.post('/', isAuthenticated, new CreateScheduleController().handle);


export { routerSchedule };