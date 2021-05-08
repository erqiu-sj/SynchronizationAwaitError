/*
 * @Author: 邱狮杰
 * @Date: 2021-05-08 22:17:01
 * @LastEditTime: 2021-05-08 22:19:38
 * @FilePath: /SynchronizationAwaitError/src/index.d.ts
 * @Description: SynchronizationAwaitError.d.ts file
 */
export declare function SynchronizationAwaitError<T, B, E = Error>(
  promise: Promise<T>,
  beautifyTeturnValue?: (res: T) => B,
  errorCaptured?: object
): Promise<[E, null] | [null, T | B]>;
