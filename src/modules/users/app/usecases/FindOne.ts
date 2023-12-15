import type { IUserService } from "@modules/users/types";
import { Service } from "@modules/users/decorators";
import { userTransformer } from "@modules/users/http/transformers";

@Service
export class FindOne {
  service: IUserService;
  id: string;

  constructor(attr: { id: string }) {
    this.id = attr.id;
  }

  public async execute() {
    return this.service.get(this.id).then((user) => ({
      message: "Get user successfully",
      error: null,
      statusCode: 200,
      data: userTransformer(user.get)
    }));
  }
}
