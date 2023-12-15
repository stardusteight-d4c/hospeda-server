import { getUser } from "@/shared/utils";
import { RegisterPromoter } from "@modules/users/app/usecases";
import { FastifyRequest } from "fastify";

namespace UserUserUseCases {
  export function makeRegisterPromoter(
    req: FastifyRequest,
    company: CompanyDTO
  ) {
    return new RegisterPromoter({ user: getUser(req), company });
  }
}

export default UserUserUseCases;
