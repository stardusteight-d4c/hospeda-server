import { randomUUID } from "node:crypto";

export class Category {
  #id: string;
  #reference: TReference;
  #title: string;

  public constructor(attr: ICategory) {
    this.#id = attr.id ?? randomUUID();
    this.#reference = attr.reference;
    this.#title = attr.title;
  }

  public get get(): ICategory {
    return {
      id: this.#id,
      reference: this.#reference,
      title: this.#title
    };
  }

  public set(_values: ICategory) {
    throw new Error(
      "Cannot modify Category directly. Use the entity-related service that uses this Value Object"
    );
  }
}
