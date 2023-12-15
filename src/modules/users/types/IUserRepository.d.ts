import { User } from "@modules/users/domain";

interface IUserRepository {
  save(user: User): Promise<User>;
  saveCompany(
    company: CompanyDTO,
    userId: string
  ): Promise<CompanyDTO>;
  update(updatedUser: IUser): Promise<User>;
  updatePassword(input: {
    newPassword: string;
    userId: string;
  }): Promise<void>;
  delete(id: string): Promise<void>;
  deleteAll(): Promise<void>;
  find(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  findEmail(email: string): Promise<User | null>;
}
