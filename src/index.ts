/*
 * @Author: 邱狮杰
 * @Date: 2021-05-08 21:20:19
 * @LastEditTime: 2021-05-08 21:47:23
 * @FilePath: /SynchronizationAwaitError/src/index.ts
 * @Description: SynchronizationAwaitError this is awesome!
 */

/**
 * @description Synchronization capture error
 * @param { Promise } promise Need to catch wrong promise
 * @param { object }  errorCaptured The error object is added to the catch error and returned together
 * @returns { Promise }
 */
export function SynchronizationAwaitError<T, B, E = Error>(
  promise: Promise<T>,
  beautifyTeturnValue?: (res: T) => B,
  errorCaptured?: object
): Promise<[E, null] | [null, T | B]> {
  return promise
    .then<[null, T | B]>((result: T) => [
      null,
      beautifyTeturnValue ? beautifyTeturnValue(result) : result,
    ])
    .catch<[E, null]>((causeOfError: E) => {
      if (errorCaptured) Object.assign(causeOfError, errorCaptured);
      return [causeOfError, null];
    });
}
