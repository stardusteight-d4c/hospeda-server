import { afterAll, beforeEach, describe, expect, it } from "vitest";

import { Hotel, useHotelFactory } from "@modules/hotels/domain";

import { useAddressFactory } from "@shared/value-objects/address";
import { HotelPrismaRepository } from "../http";

const { makeHotel, makeHotelError } = useHotelFactory();
const hotelRepository = HotelPrismaRepository.getInstance();

describe("Hotel", () => {
  beforeEach(async () => {
    await hotelRepository.deleteAll();
  });

  afterAll(async () => {
    await hotelRepository.deleteAll();
  });

  it("must be not able to access the attributes directly", () => {
    const hotel = new Hotel(makeHotel());
    // @ts-ignore
    expect(hotel.id).toBeUndefined();
    // @ts-ignore
    expect(hotel.password).toBeUndefined();
  });

  it("must be able to access the attributes via public get method", () => {
    const hotel = new Hotel(makeHotel());
    expect(hotel.get.name).toStrictEqual(makeHotel().name);
    expect(hotel.get.description).toStrictEqual(
      makeHotel().description
    );
  });

  it("must be able create a hotel", () => {
    const hotelData = makeHotel();
    const hotel = new Hotel(hotelData).inspect();
    expect(hotel.get.name).toStrictEqual(hotelData.name);
  });

  describe("inspect Hotel method", () => {
    it("must be created <id> automatically if not informed", () => {
      expect(() =>
        new Hotel(makeHotel({ id: undefined })).inspect()
      ).not.toThrowError(makeHotelError().idIsRequired.error);
    });

    it("must not be able to create a hotel without a <name>", () => {
      expect(() =>
        new Hotel(makeHotel({ name: undefined })).inspect()
      ).toThrowError(makeHotelError().nameIsRequired.error);
    });

    it("must not be able to create a hotel without a <category>", () => {
      expect(() =>
        new Hotel(makeHotel({ categories: undefined })).inspect()
      ).toThrowError(makeHotelError().categoriesIsRequired.error);
    });

    it("must be throw an error when called set method of Hotel", () => {
      const hotel = new Hotel(makeHotel());
      expect(() => {
        hotel.set(makeHotel());
      }).toThrowError(
        "Cannot modify Hotel directly. Use the HotelService methods instead"
      );
    });
  });
});
