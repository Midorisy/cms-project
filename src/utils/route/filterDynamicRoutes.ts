import type { RouteRecordRaw } from 'vue-router'
import type { RUserMenusType } from '@/types/Login/LoginTypes'
import dynamicRoutes from '@/router/home/dynamicRoutes'

/**
 * 从已设置的路由表中提取动态路由
 * @param userMenus 用户菜单
 * @returns
 */
export function filterDynamicRoutes(userMenus: RUserMenusType[]) {
  const myRoutes: RouteRecordRaw[] = []
  userMenus.forEach((menu) => {
    // 如果第一层菜单里有子菜单
    if (menu.children.length > 0) {
      // 遍历子菜单
      menu.children.forEach((childMenu) => {
        // 如果子菜单有url
        if (childMenu.url) {
          // 从动态路由中查找对应的路由
          const findRoute = dynamicRoutes.find((route) => {
            return route.path === childMenu.url
          })
          // 如果找到对应的路由
          if (findRoute) {
            myRoutes.push(findRoute)
          }
        }
      })
    }
  })
  return myRoutes
}
