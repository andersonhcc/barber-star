import { Request, Response } from "express";
import { UserRepository } from "../../repositories/user/UserRepository";
import { UpdateUserService } from "../../services/user/UpdateUserService";

const userRepository = new UserRepository();


class UpdateUserController {
  async handle(req: Request, res: Response){

    const { name, endereco } = req.body;
    const user_id = req.user_id;

    const updateUserService = new UpdateUserService(userRepository);

    const user = await updateUserService.execute({
      name,
      endereco,
      user_id
    });

    return res.json(user);

  }
}

export { UpdateUserController };