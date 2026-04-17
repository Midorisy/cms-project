const URL = {
  BASE_URL: 'http://localhost:3000/api',
  TIMEOUT: 3000,
}

const isDev = import.meta.env.DEV

if (isDev) {
  URL.BASE_URL = 'http://localhost:3000/api'
}
else {
  URL.BASE_URL = 'http://localhost:3000/api'
}

export default URL
