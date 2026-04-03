import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'modern-normalize/modern-normalize.css'
import 'reset-css/reset.css'
import './assets/css/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
