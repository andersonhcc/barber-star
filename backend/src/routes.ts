import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();


// --- rotas user --- 

router.post('/user', new CreateUserController().handle);

export { router };