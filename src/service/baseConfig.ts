const URL = {
  BASE_URL: 'https://www.baidu.com',
  TIMEOUT: 3000,
}

const isDev = import.meta.env.DEV

if (isDev) {
  URL.BASE_URL = 'http://localhost:3000/api'
}
else {
  URL.BASE_URL = 'www.google.com'
}

export default URL
