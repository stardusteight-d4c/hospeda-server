import {
  UnauthorizedException,
  BadRequestException
} from "@shared/errors";

export class UserError {
  public static get idIsRequired() {
    const error = `<id> field is required`;
    function apply(id: string) {
      if (!id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidEmail() {
    const error = `<email> field is not a valid email`;
    function apply(email: string) {
      const validEmailRegex = /\S+@\S+\.\S+/;
      if (!validEmailRegex.test(email)) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidRole() {
    const error = `<role> field is invalid, role must be <"user" | "promoter" | "admin">`;
    function apply(role: TUserRole) {
      const acceptedRoles = ["user", "promoter", "admin"];
      if (!acceptedRoles.includes(role)) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidPhoneNumber() {
    const error = `<phoneNumber> field is invalid`;
    function apply(phoneNumber: string) {
      const globalInternationPhoneNumberRegex =
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
      if (phoneNumber !== undefined && phoneNumber !== null) {
        if (!globalInternationPhoneNumberRegex.test(phoneNumber)) {
          throw new BadRequestException(error);
        }
      }
    }
    return { error, apply };
  }

  public static get invalidName() {
    const error = `<name> field must contain between 5 to 55 characters`;
    function apply(name: string) {
      if (name.length < 5 || name.length > 55) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidPassword() {
    const error = `<password> field must not contain spaces and must be at least 8 characters`;
    function apply(password: string) {
      if (password.length < 8 || password.includes(" ")) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get emailAlreadyExists() {
    const error = "<email> already exists";
    function apply(email: string) {
      if (email) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get propertyIdNotAccepted() {
    const error = "<id> property cannot come in user register";
    function apply(id: string) {
      if (id) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidSignIn() {
    const error = "Incorrect email or password";
    function apply(email: string, isValidPassword: boolean) {
      if (!email || !isValidPassword) {
        throw new UnauthorizedException(error);
      }
    }
    return { error, apply };
  }

  public static get emailNotFound() {
    const error = "There is no account with this email";
    function apply(email: string) {
      if (!email) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }

  public static get invalidRefreshToken() {
    const error = "Refresh Token is invalid";
    function apply() {
      throw new UnauthorizedException(error);
    }
    return { error, apply };
  }

  public static get userNotFound() {
    const error = "User <id> does not exist";
    function apply(user: IUser) {
      if (!user) {
        throw new BadRequestException(error);
      }
    }
    return { error, apply };
  }
}
