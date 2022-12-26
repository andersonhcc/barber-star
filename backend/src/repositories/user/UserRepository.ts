import prismaClient from "../../prisma";
import { User } from "../../models/User";
import { IUserRepository, IUserCreateDTO } from './IUserRepository';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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
      },
      select: {
        id: true,
        name: true,
        email: true,
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

  async signIn(email: string, password: string): Promise<User | null> {

    const user = await this.users.findFirst({
      where: {
        email,
      },
      include: {
        subscription: true,
      }
    });

    if(!user){
      throw new Error('Email/Password incorret');
    }

    const passwordFormatted = await compare(password, user?.password);

    if(!passwordFormatted){
      throw new Error('Email/Password incorret');
    }

    const token = sign({
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: '30d',
    }
    
    )

    return { 
      id: user?.id,
      name: user?.name,
      email: user?.email,
      endereco: user?.endereco,
      token,
      subscriptions: user.subscription ? {
        id: user?.subscription?.id,
        status: user?.subscription?.status,
      } : null,
    };

    
  }


}

export { UserRepository };