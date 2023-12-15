import { Container } from "./Container";

export function Injectable() {
  return function Injectable<T extends Constructor>(
    constructor: T
  ): T | void {
    return class extends constructor {
      constructor(...args: any[]) {
        const injections = (constructor as any)
          .injections as Injection[];
        const injectedArgs: any[] = injections.map(({ key }) => {
          console.log(
            `Injecting an instance identified by key ${key}`
          );
          return Container.get(key);
        });
        super(...injectedArgs);
      }
    };
  };
}
