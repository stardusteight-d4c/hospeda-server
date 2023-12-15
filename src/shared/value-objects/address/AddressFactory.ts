import { AddressError } from "@shared/value-objects/address";

export function useAddressFactory() {
  function makeAddress(params?: Partial<IAddress>): IAddress {
    return {
      id: "d52e5107-9004-4ded-8bdf-552edbdc4ba2",
      city: "Cityville",
      complement: "Apt 123",
      neighbourhood: "Downtown",
      number: "123",
      street: "Rua. Padre Bernado, Bairro Brasília, Joinville - SC",
      postalCode: "12345-678",
      state: "ST",
      latitude: 40.7128,
      longitude: -74.006,
      ...params,
    };
  }

  function makeAddressError() {
    return AddressError;
  }

  return {
    makeAddress,
    makeAddressError,
  };
}
