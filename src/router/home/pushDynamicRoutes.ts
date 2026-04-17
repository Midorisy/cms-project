import type { RUserMenusType } from '@/types/Login/LoginTypes'
import { USER_MENUS_KEY } from '@/global/constant'
import router from '@/router/index'
import { filterDynamicRoutes } from '@/utils/route/filterDynamicRoutes'
import { local } from '@/utils/storage'

export function pushDynamicRoutes() {
  /**
   * 方法2，从已设置的路由表中提取动态路由
   */
  // 从本地获取用户菜单
  const userMenus: RUserMenusType[] = local.getItem('userMenus') ?? []

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
  // router.replace(router.currentRoute.value.fullPath)
  return myRoutes
}

export function hasLocalDynamicRoutes() {
  const localMenus = local.getItem(USER_MENUS_KEY)
  if (localMenus) {
    pushDynamicRoutes()
  }
}
