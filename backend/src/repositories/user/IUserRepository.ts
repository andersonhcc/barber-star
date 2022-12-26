import { User } from '../../models/User';

interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;

}

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): void;
  findEmail( email: string): Promise<User | null>;
  signIn(email: string, password: string): Promise<User | null>;
}

export { IUserRepository, IUserCreateDTO };