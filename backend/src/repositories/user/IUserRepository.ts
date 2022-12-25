import { User } from '../../models/User';

interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;

}

interface IUserRepository {
  create({ name, email, password }: IUserCreateDTO): void;
  findEmail( email: string): User | null;
}

export { IUserRepository, IUserCreateDTO };