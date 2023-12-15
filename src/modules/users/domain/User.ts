import { randomUUID } from "node:crypto";

import { UserValidator } from "@modules/users/domain";

export class User {
  private props: IUser;

  public constructor(props: IUser) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props,
      role: props.role ?? "user"
    };
    this.setAdmin();
    this.setPromoter();
  }

  public get get(): IUser {
    return this.props;
  }

  public inspect(): User {
    new UserValidator(this)
      .isValidId()
      .isValidName()
      .isValidEmail()
      .isValidPassword()
      .isValidPhoneNumber()
      .isValidRole();
    return this;
  }

  private setAdmin() {
    const admins = ["admin@test.com"];
    if (admins.includes(this.props.email)) {
      this.props.role = "admin";
    }
  }

  private setPromoter() {
    const promoters = ["promoter1@test.com", "promoter2@test.com"];
    if (promoters.includes(this.props.email)) {
      this.props.role = "promoter";
    }
  }

  public set(_values: IUser) {
    throw new Error(
      "Cannot modify User directly. Use the UserService methods instead"
    );
  }
}
