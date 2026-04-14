import type { RUserData, RUserMenusType } from '@/types/Login/LoginTypes'
import { createRouter, createWebHashHistory } from 'vue-router'
import { USER_DATA_KEY } from '@/global/constant'
import { filterDynamicRoutes } from '@/utils/route/filterDynamicRoutes'
import { local } from '@/utils/storage'

// 从本地获取一个对应的路由数组
// const modules = import.meta.glob('@/views/**/index.vue')
// console.log(modules[`/src/views/home/analysis/dashboard/index.vue`])

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
      component: () => import('@/views/home/Home.vue'),
      children: [],

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

/**
 * 方法2，从已设置的路由表中提取动态路由
 */
// 从本地获取用户菜单
const userMenus: RUserMenusType[] = local.getItem('userMenus')
// 遍历第一层菜单
const myRoutes = filterDynamicRoutes(userMenus)
/**
 *
// 方法1，自动根据本地数据创建路由对象并添加到路由表中
// 从用户菜单中提取动态路由
const myRoutes = getDynamicRoutes(userMenus)
 */
myRoutes.forEach((route) => {
  router.addRoute('Home', route)
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
