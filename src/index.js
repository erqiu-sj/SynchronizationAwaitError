/*
 * @Author: 邱狮杰
 * @Date: 2021-05-08 21:20:19
 * @LastEditTime: 2021-05-22 12:10:50
 * @FilePath: /SynchronizationAwaitError/src/index.js
 * @Description: SynchronizationAwaitError this is awesome!
 */
/**
 * @description Synchronization capture error
 * @param { Promise } promise Need to catch wrong promise
 * @param { Function } beautifyTeturnValue It's the same as his name
 * @param { object }  errorCaptured The error object is added to the catch error and returned together
 * @returns { Promise }
 */
export function SynchronizationAwaitError(
  promise,
  beautifyTeturnValue,
  errorCaptured
) {
  return promise
    .then(function (result) {
      return [null, beautifyTeturnValue ? beautifyTeturnValue(result) : result];
    })
    .catch(function (causeOfError) {
      if (errorCaptured)
        return [Object.assign(causeOfError, errorCaptured), null];
      return [causeOfError, null];
    });
}
