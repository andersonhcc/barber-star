import { IUserRepository } from "../../repositories/user/IUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}


class CreateUserService {
   
  constructor(private userRepository: IUserRepository){}
  
  async execute({ name, email, password } : IRequest){
    
    const userAlreadyExists =  this.userRepository.findEmail(email);

    if(userAlreadyExists){
      throw new Error("User/Email already exists");
    }

    const createUser = this.userRepository.create({ name, email, password});

    return createUser;
  }
}

export { CreateUserService };