export class Interceptor {
  constructor() {
    return new Proxy(this, {
      get: (target: Record<string, any>, property: string): any => {
        return async (...args: any[]) => {
          const [arg] = args;
          const result = await target[property](arg);

          if (typeof result === 'object') {
            console.log(
              `Emmiting the result ${JSON.stringify(result)} for everyone`
            );
          }

          return result;
        };
      },
    });
  }
}
