# synchronizationawaiterror

# wow! this awesome!

## install

`npm i -D synchronizationawaiterror`

or

`yarn add synchronizationawaiterror`

> **Its implementation is very simple**

## definition

```typescript
export declare function SynchronizationAwaitError<T, B, E = Error>(
  promise: Promise<T>,
  beautifyTeturnValue?: (res: T) => B,
  errorCaptured?: object
): Promise<[E, null] | [null, T | B]>;
```

## use

> The return value of the first parameter will be the second value of the array you return

```typescript
const [err, val] = SynchronizationAwaitError(Promise.resolve(1));

console.log(err, val); // null 1
```

> The second parameter is the same as his name to help you beautify your return value

```typescript
import { SynchronizationAwaitError } from "synchronizationawaiterror";
interface Service {
  res: string;
}
interface replaceType {
  res: number;
}
interface ErrorInterface {
  errorText: string;
}
(async function () {
  const [err, val] = await SynchronizationAwaitError<
    Service,
    replaceType,
    ErrorInterface
  >(
    // here！
    Promise.resolve({ res: "1" }),
    (result: Service) => {
      const replace = Object.assign(result, { res: parseInt(result.res) });
      return replace;
    },
    { errorText: "hava a error!" }
  );
  console.log(err, val); // null 1 => number
})();
```

> The third parameter determines your error return value

```typescript
import { SynchronizationAwaitError } from "synchronizationawaiterror";
interface Service {
  res: string;
}
interface replaceType {
  res: number;
}
interface ErrorInterface {
  errorText: string;
}
(async function () {
  const [err, val] = await SynchronizationAwaitError<
    Service,
    replaceType,
    ErrorInterface
  >(
    // Pay attention here!
    Promise.reject({ err: "hiahia!" }),
    (result: Service) => {
      const replace = Object.assign(result, { res: parseInt(result.res) });
      return replace;
    },
    { errorText: "hava a error!" }
  );
  console.log(err, val); // { errorText: "hava a error!" , err: "hiahia!"  }
})();
```

**Remember it synchronizationawaiterror!**
