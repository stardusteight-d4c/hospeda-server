import { Prisma } from "@prisma/client";

namespace Queries {
  export function userCreateInput(user: IUser) {
    const data: Prisma.UserCreateInput = user;
    return {
      data
    };
  }

  export function userWhereUniqueInputID(userId: string) {
    const where: Prisma.UserWhereUniqueInput = {
      id: userId
    };
    return { where };
  }

  export function userWhereUniqueInputEmail(email: string) {
    const where: Prisma.UserWhereUniqueInput = {
      email: email
    };
    return { where };
  }

  export function userUpdateInput(user: IUser) {
    const where: Prisma.UserWhereUniqueInput = { id: user.id };
    const data: Prisma.UserCreateInput = user;
    return { where, data };
  }

  export function userUpdatePasswordInput(input: {
    newPassword: string;
    userId: string;
  }) {
    const { newPassword, userId } = input;
    const where: Prisma.UserWhereUniqueInput = { id: userId };
    const data: Prisma.UserUpdateInput = { password: newPassword };
    return {
      where,
      data
    };
  }
}
export default Queries;
