import { Router } from "express";

import { CreateHairCutController } from "../controllers/haircut/CreateHairCutController";
import { ListHairCutController } from "../controllers/haircut/ListHairCutController";
import { UpdateHairController } from "../controllers/haircut/UpdateHairController";
import { VerifySignatureController } from "../controllers/haircut/VerifySignatureController";
import { CountHairCutController } from "../controllers/haircut/CountHairCutController";
import { DetailHairCurtController } from "../controllers/haircut/DetailHairCurtController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const routerHairCut = Router();

routerHairCut.post('/', isAuthenticated, new CreateHairCutController().handle);

routerHairCut.get('/', isAuthenticated,  new ListHairCutController().handle);

routerHairCut.put('/', isAuthenticated, new UpdateHairController().handle);

routerHairCut.get('/check', isAuthenticated, new VerifySignatureController().handle);

routerHairCut.get('/count', isAuthenticated, new CountHairCutController().handle);

routerHairCut.get('/detail', isAuthenticated, new DetailHairCurtController().handle);



export { routerHairCut };