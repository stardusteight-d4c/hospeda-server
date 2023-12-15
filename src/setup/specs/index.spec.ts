import { describe, expect, it } from "vitest";

import { app } from "@setup/bootstrap";
import { HotelService } from "@modules/hotels/domain";
import { HotelPrismaRepository } from "@modules/hotels/http";

import { RoomService } from "@modules/rooms/domain";
import { RoomPrismaRepository } from "@modules/rooms/http";

import { UserService } from "@modules/users/domain";
import { UserPrismaRepository } from "@modules/users/http";

describe("InitializeModules", () => {
  it("must be able initialize with Prisma repositories", () => {
    const instance = app();
    expect(instance.userService).toStrictEqual(
      new UserService(UserPrismaRepository.getInstance())
    );
    expect(instance.hotelService).toStrictEqual(
      new HotelService(HotelPrismaRepository.getInstance())
    );
    expect(instance.roomService).toStrictEqual(
      new RoomService(RoomPrismaRepository.getInstance())
    );
  });
});
