import { IUserRepository } from "../../repositories/user/IUserRepository";


interface IRequest {
  email: string;
  password: string;
}

class AuthUserService {
  constructor(private userRepository: IUserRepository){}
  
  async execute ({ email, password} : IRequest){

    const user = await this.userRepository.signIn(email, password);

    return user;

  }

}

export { AuthUserService };