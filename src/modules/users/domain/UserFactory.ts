import { app } from "@setup/bootstrap";

import { UserError } from "@modules/users/domain";

export function useUserFactory() {
  function make(params?: Partial<IUser>): IUser {
    return {
      email: "user@example.com",
      name: "John Doe",
      password: "password123",
      role: "user",
      phoneNumber: "+55 13 98855-3731",
      profileImage: "https://example.com/user_123_mini.jpg",
      ...params
    };
  }

  function makeService() {
    return app().userService;
  }

  function makeError() {
    return UserError;
  }

  return {
    make,
    makeService,
    makeError
  };
}
