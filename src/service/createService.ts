import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { RUserData } from '@/types/Login/LoginTypes'
import type { IApiResponseType } from '@/types/service/serviceType'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { USER_DATA_KEY } from '@/global/constant'
import { local } from '@/utils/storage'
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
        const userData: RUserData = local.getItem(USER_DATA_KEY)
        // 每次请求都添加token
        config.headers.Authorization = `Bearer ${userData ? userData.token : ''}`
        return config
      },
      // 请求失败时调用
      (error: any) => {
        console.log('请求失败')

        return Promise.reject(error)
      },
    )

    // 全局响应拦截器
    this.service.interceptors.response.use(
      // 响应成功时调用
      // 这里的类型还需要进一步修改
      (response) => {
        if (response.data.code !== 200) {
          ElMessage({
            type: 'error',
            message: `${response.data.code}错误`,
          })
          return Promise.reject(response.data)
        }
        return response.data
      },
      // 响应失败时调用
      (error: AxiosError) => {
        // 可能会出现某些提示，需要根据实际情况处理
        ElMessage({
          type: 'error',
          message: error.message,
        })
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

  request<T>(config: IConfig) {
    return this.service.request<any, IApiResponseType<T>>(config)
  }

  get<T>(config: IConfig) {
    return this.request<T>({
      ...config,
      method: 'GET',
    })
  }

  post<T>(config: IConfig) {
    return this.request<T>({
      ...config,
      method: 'POST',
    })
  }

  put<T>(config: IConfig) {
    return this.request<T>({
      ...config,
      method: 'PUT',
    })
  }

  delete<T>(config: IConfig) {
    return this.request<T>({
      ...config,
      method: 'DELETE',
    })
  }
}

export default Service
