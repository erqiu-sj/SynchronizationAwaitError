/*
 * @Author: 邱狮杰
 * @Date: 2021-05-08 23:01:29
 * @LastEditTime: 2021-05-08 23:19:58
 * @FilePath: /SynchronizationAwaitError/test/test.ts
 * @Description: test
 */

import { SynchronizationAwaitError } from "../src/index";
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
    Promise.resolve({ res: "1" }),
    (result: Service) => {
      const replace = Object.assign(result, { res: parseInt(result.res) });
      return replace;
    },
    { errorText: "hava a error!" }
  );
  console.log(err, val); // null 1 => number
})();
