import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { UserRepository} from '../../repositories/user/UserRepository';

const userRepository = new UserRepository();

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService(userRepository);

    const auth = await authUserService.execute({
      email,
      password
    });

    return res.json(auth);

  }
}

export { AuthUserController };