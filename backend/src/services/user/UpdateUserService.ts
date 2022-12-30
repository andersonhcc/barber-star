import { IUserRepository } from '../../repositories/user/IUserRepository';

interface IRequest {
  user_id: string;
  name: string;
  endereco: string;
}

class UpdateUserService {
  constructor(private userRepository: IUserRepository) { };

  async execute({ user_id, name, endereco }: IRequest) {

    console.log({ teste: user_id, endereco, name })

    const user = await this.userRepository.updateUser({ user_id, name, endereco });
    return user;

  }
}

export { UpdateUserService };