import { describe, expect, it } from "vitest";

import {
  Room,
  RoomError,
  useRoomFactory
} from "@modules/rooms/domain";

import { BadRequestException } from "@shared/errors";
import { RoomPrismaRepository } from "../http";

const { makeRoom, makeRoomError } = useRoomFactory();

describe("Room", () => {
  it("must be not able to access the attributes directly", () => {
    const room = new Room(makeRoom());
    // @ts-ignore
    expect(room.id).toBeUndefined();
    // @ts-ignore
    expect(room.password).toBeUndefined();
  });

  it("must be able to access the attributes via public get method", () => {
    const room = new Room(makeRoom());
    expect(room.get.name).toStrictEqual(makeRoom().name);
  });

  it("must be able create a room", () => {
    const roomData = makeRoom();
    const room = new Room(roomData).inspect();
    expect(room.get.name).toStrictEqual(roomData.name);
  });

  describe("inspect Room method", () => {
    it("must be created <id> automatically if not informed", () => {
      expect(() =>
        // @ts-ignore
        new Room(makeRoom({ id: undefined })).inspect()
      ).not.toThrowError(makeRoomError().idIsRequired.error);
    });

    it("must not be able to create a room without a <name>", () => {
      expect(() =>
        // @ts-ignore
        new Room(makeRoom({ name: undefined })).inspect()
      ).toThrowError(makeRoomError().invalidName.error);
    });

    it("must not be able to create a room with a <name> of less than 5 characters", () => {
      expect(() =>
        new Room(makeRoom({ name: "room" })).inspect()
      ).toThrowError(makeRoomError().invalidName.error);
    });

    it("must not be able to create a room without a <hotelId>", () => {
      expect(() =>
        new Room(makeRoom({ hotelId: undefined })).inspect()
      ).toThrowError(makeRoomError().hotelIdIsRequired.error);
    });

    it("must not be able to create a room with negative <maxGuest>", () => {
      expect(() =>
        new Room(makeRoom({ maxGuest: -1 })).inspect()
      ).toThrowError(makeRoomError().invalidMaxGuest.error);
    });

    it("must not be able to create a room with float <maxGuest>", () => {
      expect(() =>
        new Room(makeRoom({ maxGuest: 1.1 })).inspect()
      ).toThrowError(makeRoomError().invalidMaxGuest.error);
    });

    it("must not be able to create a room with negative <beds>", () => {
      expect(() =>
        new Room(makeRoom({ beds: -1 })).inspect()
      ).toThrowError(makeRoomError().invalidBeds.error);
    });

    it("must not be able to create a room with float <beds>", () => {
      expect(() =>
        new Room(makeRoom({ beds: 1.1 })).inspect()
      ).toThrowError(makeRoomError().invalidBeds.error);
    });
  });

  it("must be throw an error when called <set> method of Room", () => {
    const room = new Room(makeRoom());
    expect(() => {
      room.set(makeRoom());
    }).toThrowError(
      "Cannot modify Room directly. Use the RoomService methods instead"
    );
  });

  it("must be throw BadRequestException if <id> is not provided", () => {
    const { apply, error } = RoomError.idIsRequired;
    const id = "";
    expect(() => {
      apply(id);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(id);
    }).toThrowError(error);
  });

  it("should throw BadRequestException if availability is not valid", () => {
    const { apply, error } = RoomError.invalidAvailability;
    const availability = "invalid_availability";
    expect(() => {
      // @ts-ignore
      apply(availability);
    }).toThrowError(BadRequestException);
    expect(() => {
      // @ts-ignore
      apply(availability);
    }).toThrowError(error);
  });
});
