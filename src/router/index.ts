import type { RUserData } from '@/types/Login/LoginTypes'
import { createRouter, createWebHashHistory } from 'vue-router'
import { USER_DATA_KEY } from '@/global/constant'
import { local } from '@/utils/storage'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/Home.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, _from) => {
  const userData: RUserData = local.getItem(USER_DATA_KEY)
  // 如果不是登录页，且没有登陆，就跳转登录页
  if (to.path !== '/login') {
    // 如果不是前往登录页
    if (userData?.token) {
      // 如果有token,就放行
      return true
    }
    else {
      // 如果没有token,就跳转登录页
      router.replace({
        path: '/login',
      })
    }
  }
  else {
    console.log('来到登录页')
  }
})

export default router
