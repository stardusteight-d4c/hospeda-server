import { User } from "@modules/users/domain";

interface IUserService {
  register(user: IUser): Promise<User>;
  registerCompany(
    company: CompanyDTO,
    userId: string
  ): Promise<CompanyDTO>;
  edit(updatedUser: IUser): Promise<User>;
  remove(id: string): Promise<void>;
  removeAll(): Promise<void>;
  get(id: string): Promise<User>;
  getAll(): Promise<User[]>;
  getByEmail(email: string): Promise<User>;
  modifyPassword(input: {
    newPassword: string;
    userId: string;
  }): Promise<void>;
}
