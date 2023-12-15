import { db } from "@/connect";

import { IUserRepository } from "@modules/users/types";
import { User } from "@modules/users/domain";
import { Queries as q } from "@/modules/users/http/factories";
import { BadRequestException } from "@/shared/errors";

export class UserPrismaRepository implements IUserRepository {
  private static instance: UserPrismaRepository;
  private constructor() {}

  public static getInstance(): UserPrismaRepository {
    if (!UserPrismaRepository.instance) {
      UserPrismaRepository.instance = new UserPrismaRepository();
    }
    return UserPrismaRepository.instance;
  }

  public async save(user: User): Promise<User> {
    return db.user
      .create(q.userCreateInput(user.get))
      .then((user) => new User(user));
  }

  public async find(id: string): Promise<User | null> {
    return db.user
      .findUnique(q.userWhereUniqueInputID(id))
      .then((user) => (user ? new User(user) : null));
  }

  public async findAll(): Promise<User[]> {
    return db.user
      .findMany()
      .then((users) => users.map((user) => new User(user)));
  }

  public async findEmail(email: string): Promise<User | null> {
    return db.user
      .findUnique(q.userWhereUniqueInputEmail(email))
      .then((user) => (user ? new User(user) : null));
  }

  public async update(user: IUser): Promise<User> {
    return db.user
      .update(q.userUpdateInput(user))
      .then((user) => new User(user));
  }

  public async updatePassword(input: {
    newPassword: string;
    userId: string;
  }): Promise<void> {
    await db.user.update(q.userUpdatePasswordInput(input));
  }

  public async delete(id: string): Promise<void> {
    await db.user.delete(q.userWhereUniqueInputID(id));
  }

  public async deleteAll(): Promise<void> {
    await db.user.deleteMany();
    await db.company.deleteMany()
  }

  public async saveCompany(
    company: CompanyDTO,
    userId: string
  ): Promise<CompanyDTO> {
    const alreadyExistingCnpj = await db.company.findFirst({
      where: {
        cnpj: company.cnpj
      }
    });

    if (alreadyExistingCnpj) {
      throw new BadRequestException("<cnpj> já existente");
    }

    const { address, ...transformedCompany } = company;
    const savedCompany = await db.company.create({
      data: {
        ...transformedCompany,
        collaborators: {
          connect: {
            id: userId
          }
        }
      }
    });
    await db.address.create({
      data: {
        ...address,
        company: {
          connect: {
            id: savedCompany.id
          }
        }
      }
    });
    return savedCompany as unknown as CompanyDTO;
  }
}
