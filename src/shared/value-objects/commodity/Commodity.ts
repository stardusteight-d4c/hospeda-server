import { randomUUID } from "crypto";

export class Commodity {
  #id: string;
  #icon: string;
  #title: string;
  #description: string;

  public constructor(attr: ICommodity) {
    this.#id = attr.id ?? randomUUID();
    this.#icon = attr.icon;
    this.#title = attr.title;
    this.#description = attr.description;
  }

  public get get(): ICommodity {
    return {
      id: this.#id,
      icon: this.#icon,
      title: this.#title,
      description: this.#description
    };
  }

  public set(_values: ICommodity) {
    throw new Error(
      "Cannot modify Commodity directly. Use the entity-related service that uses this Value Object"
    );
  }
}
