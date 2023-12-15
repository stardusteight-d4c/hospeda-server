import { randomUUID } from "crypto";

export class Contact {
  #id: string;
  #name: string;
  #phoneNumber?: string;
  #email?: string;
  #note?: string;

  public constructor(attr: IContact) {
    this.#id = attr.id ?? randomUUID();
    this.#name = attr.name;
    this.#phoneNumber = attr.phoneNumber;
    this.#email = attr.email;
    this.#note = attr.note;
  }

  public get get(): IContact {
    return {
      id: this.#id,
      name: this.#name,
      phoneNumber: this.#phoneNumber,
      email: this.#email,
      note: this.#note
    };
  }

  public set(_values: IContact) {
    throw new Error(
      "Cannot modify Contact directly. Use the entity-related service that uses this Value Object"
    );
  }
}
