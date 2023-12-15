export function inject(key: string) {
  return function (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    const injection: Injection = { index: parameterIndex, key };
    const existingInjections: Injection[] =
      (target as any).injections || [];
    Object.defineProperty(target, "injections", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: [...existingInjections, injection]
    });
  };
}
