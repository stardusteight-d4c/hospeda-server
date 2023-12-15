import { randomUUID } from "node:crypto";
import { AddressValidator } from "@shared/value-objects/address";

export class Address {
  #id: string;
  #postalCode: string;
  #number: string;
  #street: string;
  #complement: string;
  #neighbourhood: string;
  #city: string;
  #state: string;
  #latitude: number;
  #longitude: number;

  public constructor(attr: IAddress) {
    this.#id = attr.id ?? randomUUID();
    this.#postalCode = attr.postalCode;
    this.#number = attr.number;
    this.#street = attr.street;
    this.#complement = attr.complement;
    this.#neighbourhood = attr.neighbourhood;
    this.#city = attr.city;
    this.#state = attr.state.toUpperCase();
    this.#latitude = attr.latitude;
    this.#longitude = attr.longitude;
  }

  public get get(): IAddress {
    return {
      id: this.#id,
      postalCode: this.#postalCode,
      number: this.#number,
      street: this.#street,
      complement: this.#complement,
      neighbourhood: this.#neighbourhood,
      city: this.#city,
      state: this.#state,
      latitude: this.#latitude,
      longitude: this.#longitude,
    };
  }

  public inspect(): Address {
    new AddressValidator(this)
      .isValidId()
      .isValidPostalCode()
      .isValidStreet()
      .isValidNeighbourhood()
      .isValidCity()
      .isValidState()
      .isValidLatitude()
      .isValidLongitude();
    return this;
  }

  public set(_values: IAddress) {
    throw new Error(
      "Cannot modify Address directly. Use the entity-related service that uses this Value Object"
    );
  }
}
