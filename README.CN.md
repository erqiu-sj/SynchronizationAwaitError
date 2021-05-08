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

> 第一个参数的返回值将是您返回的数组的第二个值

```typescript
const [err, val] = SynchronizationAwaitError(Promise.resolve(1));

console.log(err, val); // null 1
```

> 第二个参数和他的名字一样，帮助你美化你的返回值

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

> 第三个参数确定错误返回值

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

**记住它的名字！ synchronizationawaiterror!**
