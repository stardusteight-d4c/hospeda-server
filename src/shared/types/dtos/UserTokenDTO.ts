interface UserTokenDTO {
  id?: string;
  name: string;
  email: string;
  role: TUserRole;
  profileImage: string;
  iat: number;
  exp: number;
}
