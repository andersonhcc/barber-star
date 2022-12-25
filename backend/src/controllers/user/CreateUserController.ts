import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserRepository} from '../../repositories/user/UserRepository';

class CreateUserController {
  constructor() {
    
  }
    
  async handle(req: Request, res: Response) {

    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    
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