import { Router } from "express";

import { SubscribeController } from "../controllers/subscription/SubscribeController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const routerSubscribe = Router();

routerSubscribe.post("/subscribe", isAuthenticated, new SubscribeController().handle);

