import { Router } from "express";

import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { UserDetailsController } from "../controllers/user/UserDetailsController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";

import { isAuthenticated } from "../middlewares/isAuthenticated";

const routerUser = Router();



routerUser.post('/', new CreateUserController().handle);

routerUser.post('/session', new AuthUserController().handle);

routerUser.get('/me', isAuthenticated, new UserDetailsController().handle);

routerUser.put('/', isAuthenticated, new UpdateUserController().handle);



export { routerUser };