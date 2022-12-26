import { IUserRepository } from '../../repositories/user/IUserRepository';

interface IRequest {
  user_id: string;
}


class UserDetailsService {
  constructor(private userRepository: IUserRepository){}
  
  async execute ({ user_id } : IRequest){

    const user = await this.userRepository.detailsUser(user_id);

    return user;

  }
}

export { UserDetailsService };