import { Request, response, Response } from "express";
import { UserDetailsService } from "../../services/user/UserDetailsService";
import { UserRepository } from "../../repositories/user/UserRepository";

const userRepository = new UserRepository();

class UserDetailsController {
  async handle(req: Request, res: Response){

    const user_id = req.user_id;

    const userDetailsService = new UserDetailsService(userRepository);

    const user = await userDetailsService.execute({ user_id });

    return res.json(user);

  }
}

export { UserDetailsController };