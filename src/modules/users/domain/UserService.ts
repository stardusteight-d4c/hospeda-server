import type {
  IUserService,
  IUserRepository
} from "@modules/users/types";

import { User, UserError } from "@modules/users/domain";

export class UserService implements IUserService {
  public constructor(readonly repository: IUserRepository) {}

  public async register(user: IUser): Promise<User> {
    UserError.propertyIdNotAccepted.apply(user.id);
    const newUser = new User(user).inspect();
    const findedUser = await this.repository.findEmail(
      newUser.get.email
    );
    UserError.emailAlreadyExists.apply(findedUser?.get?.email);
    return this.repository
      .save(newUser)
      .then((createdUser) => createdUser);
  }

  public async edit(user: IUser): Promise<User> {
    return this.repository
      .update(user)
      .then((updatedUser) => updatedUser);
  }

  public async remove(id: string): Promise<void> {
    return this.repository.delete(id);
  }

  public async removeAll(): Promise<void> {
    return this.repository.deleteAll();
  }

  public async get(id: string): Promise<User> {
    return this.repository.find(id).then((user) => {
      if (!user) {
        return null;
      }
      return user;
    });
  }

  public async getAll(): Promise<User[]> {
    return this.repository.findAll().then((users) => users);
  }

  public async getByEmail(email: string): Promise<User> {
    return this.repository.findEmail(email).then((user) => user);
  }

  public async modifyPassword(input: {
    newPassword: string;
    userId: string;
  }): Promise<void> {
    const user = await this.repository.find(input.userId);
    UserError.userNotFound.apply(user?.get);
    return await this.repository.updatePassword(input);
  }

  public async registerCompany(
    company: CompanyDTO,
    userId: string
  ): Promise<CompanyDTO> {
    return await this.repository.saveCompany(company, userId);
  }
}
