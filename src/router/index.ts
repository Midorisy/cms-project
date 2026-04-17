import type { RUserData, RUserMenusType } from '@/types/Login/LoginTypes'
import { createRouter, createWebHashHistory } from 'vue-router'
import { USER_DATA_KEY } from '@/global/constant'
import { filterDynamicRoutes } from '@/utils/route/filterDynamicRoutes'
import { checkIsFirstLayerMenu } from '@/utils/route/getBreadCrumbName'
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

router.beforeEach((to, _from) => {
  const userData: RUserData = local.getItem(USER_DATA_KEY) ?? {}
  // 重构路由守卫
  if (to.path === '/login') {
    console.log('来到了登录页，什么都不做')
  }
  else {
    // 此时来到的是其他页面
    if (userData.token && userData.token !== '') {
      // 判断是否有token同时且token不为空，判断用户是否处于登录状态
      if (to.path === '/home') {
      // 如果直接访问的是home页,就跳转到第一个子路由
        // 从本地获取用户菜单
        const userMenus: RUserMenusType[] = local.getItem('userMenus')
        // 查找添加的动态路由
        const myRoutes = filterDynamicRoutes(userMenus)
        router.push({
          path: myRoutes[0].path,
        })
      }

      // 如果是通过面包屑点击的第一层菜单，比如/home/analysis
      // 就跳转到该菜单的第一个子路由
      const firstChildPath = checkIsFirstLayerMenu(to.path)
      if (firstChildPath) {
        router.push({
          path: firstChildPath,
        })
      }
      // 最后做保底放行
      return true
    }
    else {
      // 没有token或者token为空,就跳转登录页
      router.push({
        path: '/login',
      })
    }
  }
})

export default router
