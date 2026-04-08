import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { IApiResponseType } from '@/types/service/serviceType'
import axios from 'axios'
import URL from './baseConfig'

// 定义自己的axios配置项，继承自axios的配置项
// 生成实例时可以传入自己专属的拦截器
interface IInterceptorceptors {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailFn?: (error: any) => Promise<any>
  responseSuccessFn?: (response: AxiosResponse) => AxiosResponse
  responseFailFn?: (error: any) => Promise<never>
}

// 实例传入配置项的类型
interface IConfig extends AxiosRequestConfig {
  baseURL?: string
  timeout?: number
  interceptors?: IInterceptorceptors

}

// 主要的axios请求类
class Service {
  service: AxiosInstance
  constructor(config?: IConfig) {
    this.service = axios.create({
      baseURL: URL.BASE_URL,
      timeout: URL.TIMEOUT,

      ...config,
    })

    // 全局请求拦截器
    this.service.interceptors.request.use(
      // 请求成功时调用
      (config) => {
        return config
      },
      // 请求失败时调用
      (error: any) => {
        return Promise.reject(error)
      },
    )

    // 全局响应拦截器
    this.service.interceptors.response.use(
      // 响应成功时调用
      // 这里的类型还需要进一步修改
      (response) => {
        console.log('已在全局拦截')
        return response.data
      },
      // 响应失败时调用
      (error: any) => {
        // 可能会出现某些提示，需要根据实际情况处理
        return Promise.reject(error)
      },
    )

    // 处理实例拦截器
    if (config?.interceptors) {
      this.service.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailFn,
      )
      this.service.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailFn,
      )
    }
  }

  request(config: IConfig) {
    return this.service.request<any, IApiResponseType>(config)
  }

  get(config: IConfig) {
    return this.request({
      ...config,
      method: 'GET',
    })
  }

  post(config: IConfig) {
    return this.request({
      ...config,
      method: 'POST',
    })
  }

  put(config: IConfig) {
    return this.request({
      ...config,
      method: 'PUT',
    })
  }

  delete(config: IConfig) {
    return this.request({
      ...config,
      method: 'DELETE',
    })
  }
}

export default Service
