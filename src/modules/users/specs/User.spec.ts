import { describe, expect, it } from "vitest";
import {
  User,
  UserError,
  useUserFactory
} from "@modules/users/domain";
import {
  BadRequestException,
  UnauthorizedException
} from "@shared/errors";

const { make, makeError } = useUserFactory();

describe("User", () => {
  it("must be not able to access the attributes directly", () => {
    const user = new User(make());
    // @ts-ignore
    expect(user.id).toBeUndefined();
    // @ts-ignore
    expect(user.password).toBeUndefined();
  });

  it("must be able to access the attributes via public get method", () => {
    const user = new User(make());
    expect(user.get.password).toStrictEqual(make().password);
    expect(user.get.name).toStrictEqual(make().name);
  });

  it("must be able create a user", () => {
    const userData = make();
    const user = new User(userData).inspect();
    expect(user.get).toStrictEqual({
      ...userData,
      id: user.get.id
    });
  });

  describe("inspect User method", () => {
    it("must be not able to instance a user with invalid <email>", () => {
      expect(() =>
        new User(make({ email: "invalidemail.com" })).inspect()
      ).toThrowError(makeError().invalidEmail.error);
    });

    it("must be not able to instance a user without <id>, the id is automatically created if there is not", () => {
      expect(() =>
        new User(make({ id: undefined })).inspect()
      ).not.toThrowError(makeError().idIsRequired.error);
    });

    it("the <password> must not contain spaces and must be at least 8 characters", () => {
      expect(() =>
        new User(make({ password: "pass word" })).inspect()
      ).toThrowError(makeError().invalidPassword.error);
    });

    it("must not be able to instance a user with an invalid <role>", () => {
      expect(() =>
        new User(make({ role: undefined })).inspect()
      ).not.toThrowError(makeError().invalidRole.error);
    });

    it("must not be able to instance a user with an invalid <name>", () => {
      expect(() =>
        new User(make({ name: "Ash" })).inspect()
      ).toThrowError(makeError().invalidName.error);
    });

    it("must be a valid phone number when entering a <number>", () => {
      expect(() =>
        new User(
          make({ phoneNumber: "invalid-phoneNumber" })
        ).inspect()
      ).toThrowError(makeError().invalidPhoneNumber.error);
    });

    it("must not validate a <number> if it is not informed", () => {
      const phoneNumber1 = new User(
        make({ phoneNumber: undefined })
      ).inspect().get.phoneNumber;
      const phoneNumber2 = new User(
        make({ phoneNumber: null })
      ).inspect().get.phoneNumber;
      expect(phoneNumber1).toStrictEqual(undefined);
      expect(phoneNumber2).toStrictEqual(null);
    });

    it('must be set the role to "admin" if email is in the admins list', () => {
      const email = "admin@test.com";
      const user = new User(make({ email }));
      expect(user.get.role).toStrictEqual("admin");
    });

    it("must be not change the role if email is not in the admins list", () => {
      const email = "regular@test.com";
      const user = new User(make({ email }));
      expect(user.get.role).not.toBe("admin");
    });

    it("must be throw an error when called set method of User", () => {
      const user = new User(make());
      expect(() => {
        user.set(make());
      }).toThrowError(
        "Cannot modify User directly. Use the UserService methods instead"
      );
    });

    it("must be throw UnauthorizedException if email or password is invalid", () => {
      const { apply, error } = UserError.invalidSignIn;
      const email = "test@test.com";
      const isValidPassword = false;

      expect(() => {
        apply(email, isValidPassword);
      }).toThrowError(UnauthorizedException);

      expect(() => {
        apply(email, isValidPassword);
      }).toThrowError(error);
    });

    it("must be not throw an error if both email and password are valid", () => {
      const { apply } = UserError.invalidSignIn;
      const email = "test@test.com";
      const isValidPassword = true;

      expect(() => {
        apply(email, isValidPassword);
      }).not.toThrow();
    });
  });

  it("must be throw BadRequestException if email is not provided", () => {
    const { apply, error } = UserError.emailNotFound;
    const email = "";
    expect(() => {
      apply(email);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(email);
    }).toThrowError(error);
  });

  it("must be not throw an error if email is provided", () => {
    const { apply } = UserError.emailNotFound;
    const email = "test@test.com";
    expect(() => {
      apply(email);
    }).not.toThrow();
  });

  it("should throw UnauthorizedException with the correct error message", () => {
    const { apply, error } = UserError.invalidRefreshToken;
    expect(() => {
      apply();
    }).toThrowError(UnauthorizedException);
    expect(() => {
      apply();
    }).toThrowError(error);
  });

  it("should throw BadRequestException if user is not provided", () => {
    const { apply, error } = UserError.userNotFound;
    const user: IUser | null = null;
    expect(() => {
      apply(user);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(user);
    }).toThrowError(error);
  });

  it("should not throw an error if user is provided", () => {
    const { apply } = UserError.userNotFound;
    const user = make();
    expect(() => {
      apply(user);
    }).not.toThrow();
  });

  it("should throw BadRequestException if id is not provided", () => {
    const { apply, error } = UserError.idIsRequired;
    const id = "";
    expect(() => {
      apply(id);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(id);
    }).toThrowError(error);
  });

  it("must be able to enter some valid phone number templates", () => {
    const phoneNumbers = [
      { phoneNumber: "+55 13 98855-3731" },
      { phoneNumber: "+1 555-123-4567" },
      { phoneNumber: "+44 20 1234 5678" },
      { phoneNumber: "+81 3-1234-5678" },
      { phoneNumber: "+61 2 9876 5432" }
    ];

    for (const item of phoneNumbers) {
      const phoneNumber = new User(make(item)).inspect().get
        .phoneNumber;
      expect(phoneNumber).toStrictEqual(item.phoneNumber);
    }
  });
});
