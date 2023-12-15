import { randomUUID } from "crypto";
import { Contact } from "../contact/Contact";

export class HotelInternalInformation {
  #id: string;
  #hotelPolicies: string;
  #breakfastTax: number;
  #issTax: number;
  #serviceTax: number;
  #contacts: Contact[];

  public constructor(attr: IHotelInternalInformation) {
    this.#id = attr.id ?? randomUUID();
    this.#hotelPolicies = attr.hotelPolicies;
    this.#breakfastTax = attr.breakfastTax;
    this.#issTax = attr.issTax;
    this.#serviceTax = attr.serviceTax;
    this.#contacts = attr.contacts.map(
      (contact) => new Contact(contact)
    );
  }

  public get get(): IHotelInternalInformation {
    return {
      id: this.#id,
      hotelPolicies: this.#hotelPolicies,
      breakfastTax: this.#breakfastTax,
      issTax: this.#issTax,
      serviceTax: this.#serviceTax,
      contacts: this.#contacts.map((contact) => contact.get)
    };
  }

  public set(_values: IHotelInternalInformation) {
    throw new Error(
      "Cannot modify HotelInternalInformation directly. Use the entity-related service that uses this Value Object"
    );
  }
}
