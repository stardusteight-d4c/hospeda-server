type TUserRole = "user" | "promoter" | "admin";

interface IUser {
  id?: string;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  role: TUserRole;
  profileImage: string;
}
