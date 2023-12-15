import { describe, expect, it } from "vitest";
import {
  Address,
  useAddressFactory
} from "@shared/value-objects/address";

const { makeAddress, makeAddressError } = useAddressFactory();

describe("Address", () => {
  it("must be not able to access the attributes directly", () => {
    const address = new Address(makeAddress());
    // @ts-ignore
    expect(address.id).toBeUndefined();
    // @ts-ignore
    expect(address.postalCode).toBeUndefined();
  });

  it("must be able to access the attributes via public get method", () => {
    const address = new Address(makeAddress());
    expect(address.get.id).toStrictEqual(makeAddress().id);
    expect(address.get.postalCode).toStrictEqual(
      makeAddress().postalCode
    );
  });

  it("must be able create a address", () => {
    const address = new Address(makeAddress()).inspect();
    expect(address.get).toStrictEqual(makeAddress());
  });

  describe("inspect Address method", () => {
    it("must be created <id> automatically if not informed", () => {
      expect(() =>
        new Address(makeAddress({ id: undefined })).inspect()
      ).not.toThrowError(makeAddressError().idIsRequired.error);
    });

    it("must be not able to instance a Address with invalid <id>", () => {
      expect(() =>
        new Address(makeAddress({ id: "" })).inspect()
      ).toThrowError(makeAddressError().idIsRequired.error);
    });

    it("must be not able to instance a Address with invalid <street>", () => {
      expect(() =>
        new Address(makeAddress({ street: "" })).inspect()
      ).toThrowError(makeAddressError().invalidStreet.error);
    });

    it("must be not able to instance a Address with invalid <neighbourhood>", () => {
      expect(() =>
        new Address(makeAddress({ neighbourhood: "" })).inspect()
      ).toThrowError(makeAddressError().invalidNeighbourhood.error);
    });

    it("must be not able to instance a Address with invalid <city>", () => {
      expect(() =>
        new Address(makeAddress({ city: "" })).inspect()
      ).toThrowError(makeAddressError().cityIsRiquired.error);
    });

    it("must be not able to instance a Address with invalid <postalCode>", () => {
      expect(() =>
        new Address(makeAddress({ postalCode: "" })).inspect()
      ).toThrowError(makeAddressError().invalidPostalCode.error);
    });

    it("must be not able to instance a Address with invalid <state>", () => {
      expect(() =>
        new Address(makeAddress({ state: "" })).inspect()
      ).toThrowError(makeAddressError().invalidState.error);
    });

    it("must be not able to instance a Address with invalid <latitude>", () => {
      expect(() =>
        // @ts-ignore
        new Address(makeAddress({ latitude: "invalid" })).inspect()
      ).toThrowError(makeAddressError().invalidLatitude.error);
    });

    it("must be not able to instance a Address with invalid <longitude>", () => {
      expect(() =>
        // @ts-ignore
        new Address(makeAddress({ longitude: "invalid" })).inspect()
      ).toThrowError(makeAddressError().invalidLongitude.error);
    });

    it("<latitude> and <longitude> must be optional", () => {
      const address1 = new Address(
        makeAddress({ latitude: undefined })
      );
      const address2 = new Address(
        makeAddress({ longitude: undefined })
      );
      address1.inspect();
      address2.inspect();
      expect(address1.get.latitude).toBeUndefined();
      expect(address2.get.longitude).toBeUndefined();
    });

    it("<number> and <complement> must be optional", () => {
      const address1 = new Address(
        makeAddress({ number: undefined })
      );
      const address2 = new Address(
        makeAddress({ complement: undefined })
      );
      address1.inspect();
      address2.inspect();
      expect(address1.get.number).toBeUndefined();
      expect(address2.get.complement).toBeUndefined();
    });

    it("must be throw an error when called set method of Address", () => {
      const address = new Address(makeAddress());
      expect(() => {
        address.set(makeAddress());
      }).toThrowError(
        "Cannot modify Address directly. Use the entity-related service that uses this Value Object"
      );
    });
  });
});
