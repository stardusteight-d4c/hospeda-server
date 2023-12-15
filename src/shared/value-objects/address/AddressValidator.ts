import { Address, AddressError } from "@shared/value-objects/address";

export class AddressValidator {
  #address: Address;

  constructor(address: Address) {
    this.#address = address;
  }

  public isValidId(): AddressValidator {
    const id = this.#address.get.id;
    AddressError.idIsRequired.apply(id);
    return this;
  }

  public isValidStreet(): AddressValidator {
    const street = this.#address.get.street;
    AddressError.invalidStreet.apply(street);
    return this;
  }

  public isValidNeighbourhood(): AddressValidator {
    const neighbourhood = this.#address.get.neighbourhood;
    AddressError.invalidNeighbourhood.apply(neighbourhood);
    return this;
  }

  public isValidPostalCode(): AddressValidator {
    const postalCode = this.#address.get.postalCode;
    AddressError.invalidPostalCode.apply(postalCode);
    return this;
  }

  public isValidCity(): AddressValidator {
    const city = this.#address.get.city;
    AddressError.cityIsRiquired.apply(city);
    return this;
  }

  public isValidState(): AddressValidator {
    const state = this.#address.get.state;
    AddressError.invalidState.apply(state);
    return this;
  }

  public isValidLatitude(): AddressValidator {
    const latitude = this.#address.get.latitude;
    AddressError.invalidLatitude.apply(latitude);
    return this;
  }

  public isValidLongitude(): AddressValidator {
    const longitude = this.#address.get.longitude;
    AddressError.invalidLongitude.apply(longitude);
    return this;
  }
}
