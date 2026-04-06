import Service from './createService'

const service1 = new Service({
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('实例1的拦截器')
      return config
    },
  },
})

const service2 = new Service({
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('实例2的拦截器')
      return config
    },
  },
})

export default {
  service2,
  service1,
}
