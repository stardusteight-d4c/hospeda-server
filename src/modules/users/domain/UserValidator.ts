import { User, UserError } from "@modules/users/domain";

export class UserValidator {
  #user: User;

  constructor(user: User) {
    this.#user = user;
  }

  public isValidId(): UserValidator {
    const id = this.#user.get.id;
    UserError.idIsRequired.apply(id);
    return this;
  }

  public isValidName(): UserValidator {
    const name = this.#user.get.name;
    UserError.invalidName.apply(name);
    return this;
  }

  public isValidEmail(): UserValidator {
    const email = this.#user.get.email;
    UserError.invalidEmail.apply(email);
    return this;
  }

  public isValidPassword(): UserValidator {
    const password = this.#user.get.password;
    UserError.invalidPassword.apply(password);
    return this;
  }

  public isValidRole(): UserValidator {
    const role = this.#user.get.role;
    UserError.invalidRole.apply(role);
    return this;
  }

  public isValidPhoneNumber(): UserValidator {
    const phoneNumber = this.#user.get.phoneNumber;
    UserError.invalidPhoneNumber.apply(phoneNumber);
    return this;
  }
}
