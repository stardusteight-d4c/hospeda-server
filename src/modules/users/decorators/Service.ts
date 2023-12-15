import { app } from "@setup/bootstrap";

import { IUserService } from "@modules/users/types";

interface IService {
  service: IUserService;
}

export function Service<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    service = app().userService;
  };
}
