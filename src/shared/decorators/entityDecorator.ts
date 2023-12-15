import { randomUUID } from "node:crypto";

interface IEntity {
  id: string;
}

export function Entity<T extends Constructor>(constructor: T) {
  return class extends constructor {
    props: IEntity;

    constructor(...args: any[]) {
      super(...args);
      this.props.id = randomUUID();
    }
  };
}
