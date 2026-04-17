import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import { hasLocalDynamicRoutes } from '@/router/home/pushDynamicRoutes'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'modern-normalize/modern-normalize.css'
import 'reset-css/reset.css'
import './assets/css/index.scss'

const app = createApp(App)

// 注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
// 如果本地已经保存了路由权限数据，就直接添加对应的动态路由
hasLocalDynamicRoutes()
app.use(router)

app.mount('#app')
