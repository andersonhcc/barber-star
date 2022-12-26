import { User } from '../../models/User';

interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserUpdateDTO {
  user_id: string;
  name: string;
  endereco: string;
}

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): void;
  findEmail(email: string): Promise<User | null>;
  signIn(email: string, password: string): Promise<User | null>;
  detailsUser(user_id: string): Promise<User | null>;
  updateUser({ user_id , name, endereco }: IUserUpdateDTO): Promise<User | null>;
}

export { IUserRepository, IUserCreateDTO, IUserUpdateDTO };