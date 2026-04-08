import Service from './createService'

export const service = new Service({
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('实例1的拦截器')
      return config
    },
  },
})

export const service2 = new Service({
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('实例2的拦截器')
      return config
    },
  },
})
