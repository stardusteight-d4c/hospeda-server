import { afterAll, beforeEach, describe, expect, it } from "vitest";

import { UserError, useUserFactory } from "@modules/users/domain";

const { make, makeError, makeService } = useUserFactory();

const service = makeService();

describe("UserService", () => {
  beforeEach(async () => {
    await service.removeAll();
  });

  afterAll(async () => {
    await service.removeAll();
  });

  it("must be able to <register> a new user", async () => {
    expect(async () => await service.register(make())).toBeTruthy();
  });

  it("must be not able to <register> a user with already exist email", async () => {
    await service.register(make());
    expect(
      async () => await service.register(make())
    ).rejects.toThrowError(makeError().emailAlreadyExists.error);
  });

  it("must be able to <get> a user by id", async () => {
    const user = await service.register(make());
    const getUserById = await service.get(user.get.id);
    expect(getUserById.get.id).toStrictEqual(user.get.id);
  });

  it("must be able to <get> a user by email", async () => {
    const user = await service.register(make());
    const getUserByEmail = await service.getByEmail(user.get.email);
    expect(getUserByEmail).toStrictEqual(user);
  });

  it("must be able to <getAll> users", async () => {
    await service.register(make({ email: "email1@ex.com" }));
    await service.register(make({ email: "email2@ex.com" }));
    await service.register(make({ email: "email3@ex.com" }));
    const getUsers = await service.getAll();
    expect(getUsers.length).toStrictEqual(3);
  });

  it("must be able to <remove> a user", async () => {
    const user = await service.register(make());
    const beforeDeleted = await service.get(user.get.id);
    await service.remove(user.get.id);
    const deletedUser = await service.get(user.get.id);
    expect(beforeDeleted).toStrictEqual(user);
    expect(deletedUser).toStrictEqual(null);
  });

  it("must be able to <edit> a user", async () => {
    const user = await service.register(make());
    await service.edit({
      ...user.get,
      name: "New name"
    });
    const editedUser = await service.get(user.get.id);
    expect(editedUser.get.name).toStrictEqual("New name");
  });

  it("must be not able to send the property <id> in the user registry", async () => {
    expect(
      async () => await service.register(make({ id: "my-fake-id" }))
    ).rejects.toThrowError(UserError.propertyIdNotAccepted.error);
  });

  it("must be not able to create a user with a invalid role", async () => {
    expect(
      async () =>
        // @ts-ignore
        await service.register(make({ role: "my-fake-role" }))
    ).rejects.toThrowError(UserError.invalidRole.error);
  });

  it("must be able modify the password when user is found", async () => {
    const user = await service.register(make());
    await service.modifyPassword({
      newPassword: "new_password",
      userId: user.get.id
    });
    const updatedPassword = (await service.get(user.get.id)).get
      .password;
    expect(updatedPassword).toStrictEqual("new_password");
  });

  it("must be throw UnauthorizedException when user is not found", async () => {
    expect(async () => {
      await service.modifyPassword({
        newPassword: "new_password",
        userId: "nonexistent_user_id"
      });
    }).rejects.toThrowError(UserError.userNotFound.error);
  });
});
