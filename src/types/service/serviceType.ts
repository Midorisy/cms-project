export interface IApiResponseType<T = any> {
  code: number
  msg: string
  data: T
}
