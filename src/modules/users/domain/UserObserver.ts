import { IUserService } from "@modules/users/types";

import { FindByIdCommand } from "@shared/events";

export class UserObserver implements IObserver {
  watching: string[] = ["find_by_id"];

  private static instance: UserObserver;
  private readonly userService: IUserService;

  private constructor(userService: IUserService) {
    this.userService = userService;
  }

  public static getInstance(
    UserService?: IUserService
  ): UserObserver {
    if (!UserObserver.instance) {
      if (!UserService) {
        throw new Error(
          "UserService must be provided when creating the first instance of UserObserver"
        );
      }
      UserObserver.instance = new UserObserver(UserService);
    }
    return UserObserver.instance;
  }

  async notifyService(command: ICommand) {
    if (command.name === "find_by_id") {
      const { id } = command as FindByIdCommand;
      return await this.userService.get(id);
    }
  }
}
