const URL = {
  BASE_URL: 'www.baidu.com',
  TIMEOUT: 5000,
}

const isDev = import.meta.env.DEV

if (isDev) {
  URL.BASE_URL = 'www.baidu.com'
}
else {
  URL.BASE_URL = 'www.google.com'
}

export default URL
