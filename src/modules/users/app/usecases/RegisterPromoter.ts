import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { BadRequestException } from "@/shared/errors";

@Service
export class RegisterPromoter {
  service: IUserService;
  user: UserTokenDTO;
  company: CompanyDTO;

  constructor(attr: { user: UserTokenDTO; company: CompanyDTO }) {
    this.user = attr.user;
    this.company = attr.company;
  }

  public async execute() {
    if (this.user.role !== "user") {
      throw new BadRequestException(
        "Apenas usuários com a role <user> são permitidos se tornarem promotores"
      );
    }
    return {
      message: "Company registered successfully, promoter created!",
      error: null,
      statusCode: 200,
      data: await this.service
        .registerCompany(this.company, this.user.id)
        .then(async (company) => {
          const updatedUser = await this.service.edit({
            id: this.user.id,
            role: "promoter"
          } as IUser);
          return { company, updatedUser };
        })
    };
  }
}
