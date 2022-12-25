import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserRepository} from '../../repositories/user/UserRepository';

const userRepository = new UserRepository();


class CreateUserController {
    
  async handle(req: Request, res: Response) {

    const { name, email, password } = req.body;
    
    const createUserService = new CreateUserService(userRepository);  

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    return res.json(user);

  }
}

export { CreateUserController };