import prismaClient from "../../prisma";
import { IUserRepository, IUserCreateDTO } from './IUserRepository';
import { hash } from 'bcryptjs';
import { User } from "../../models/User";

class UserRepository implements IUserRepository {
  private users = prismaClient.user;

  constructor() {
    this.users = prismaClient.user;
  }

  async create({ name, password, email }: IUserCreateDTO) {
    const passwordHash = await hash(password, 8);

    const user = await this.users.create({
      data: {
        name,
        password: passwordHash,
        email,
      }
    })
    return user;
  }

  async findEmail(email: string): Promise<User | null> {

    const user = await this.users.findFirst({
      where: {
        email,
      }
    })

    return user;

  }
}

export { UserRepository };