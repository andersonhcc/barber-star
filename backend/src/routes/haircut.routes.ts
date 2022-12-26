import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircut/CreateHairCutController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const routerHairCut = Router();

routerHairCut.post('/', isAuthenticated, new CreateHairCutController().handle)


export { routerHairCut };