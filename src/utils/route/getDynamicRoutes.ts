import type { RouteRecordRaw } from 'vue-router'
import type { RUserMenusType } from '@/types/Login/LoginTypes'
import { getRouteName } from '@/utils/route/index'

/**
 * 从菜单中中提取动态路由
 * @param allMenus 所有菜单
 * @returns 动态路由数组
 */
export function getDynamicRoutes(allMenus: RUserMenusType[]) {
  const myDynamicRoutes: RouteRecordRaw[] = [] as any

  allMenus.forEach((menu) => {
  // 如果有子菜单,就进行二次循环
    if (menu.children.length > 0) {
      menu.children.forEach((childMenu) => {
        const formatRoute = {
          path: childMenu.url,
          name: getRouteName(childMenu.url),
          component: () => import(`/src/views${childMenu.url}/index.vue`),
        }
        if (childMenu.url) {
          myDynamicRoutes.push(formatRoute)
        }
      })
    }
  })
  return myDynamicRoutes
}
