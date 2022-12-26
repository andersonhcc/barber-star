import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "../controllers/haircut/ListHairCutController";
import { UpdateHairController } from "../controllers/haircut/UpdateHairController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const routerHairCut = Router();

routerHairCut.post('/', isAuthenticated, new CreateHairCutController().handle);

routerHairCut.get('/', isAuthenticated, new ListHairCutController().handle);

routerHairCut.put('/', isAuthenticated, new UpdateHairController().handle);




export { routerHairCut };