/*
 * @Author: 邱狮杰
 * @Date: 2021-05-08 21:20:19
 * @LastEditTime : 2021-06-15 13:25:41
 * @FilePath     : /SynchronizationAwaitError/src/index.ts
 * @Description: SynchronizationAwaitError this is awesome!
 */
/**
 * @description Synchronization capture error
 * @param { Promise } promise Need to catch wrong promise
 * @param { Function } beautifyReturnValue It's the same as his name
 * @param { object }  errorCaptured The error object is added to the catch error and returned together
 * @returns { Promise }
 */
export function SynchronizationAwaitError<T, B = T, E = Error>(promise: Promise<T>, beautifyReturnValue?: (res: T) => B, errorCaptured?: object): Promise<[E, null] | [null, T | B]> {
  return promise
    .then<[null, T | B]>((result: T) => {
      return [null, beautifyReturnValue ? beautifyReturnValue(result) : result]
    })
    .catch<[E, null]>((causeOfError: E) => {
      if (errorCaptured) return [Object.assign(causeOfError, errorCaptured), null]
      return [causeOfError, null]
    })
}
