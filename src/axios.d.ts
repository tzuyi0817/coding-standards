/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
export {}

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
