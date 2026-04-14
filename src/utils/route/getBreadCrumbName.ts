import { USER_MENUS_KEY } from '@/global/constant'
import { local } from '@/utils/storage/index'

interface BreadCrumbNameType {
  name: string
  path: string
}

/**
 * 获取面包屑名称
 * @param Routeurl 路由路径
 * @returns 面包屑名称数组
 */
export function getBreadCrumbName(Routeurl: string) {
  const menuList = local.getItem(USER_MENUS_KEY)
  const breadNameList: BreadCrumbNameType[] = []
  for (const menu of menuList) {
    if (menu.children.length > 0) {
      for (const childMenu of menu.children) {
        if (childMenu.url === Routeurl) {
          breadNameList.push({ name: menu.name, path: menu.url })
          breadNameList.push({ name: childMenu.name, path: childMenu.url })
          break
        }
      }
    }
  }
  return breadNameList
}

/**
 * 检查是否是一级菜单
 * @param Routeurl 路由路径
 * @returns
 */
export function checkIsFirstLayerMenu(Routeurl: string) {
  const menuList = local.getItem(USER_MENUS_KEY)
  for (const menu of menuList) {
    if (menu.url === Routeurl) {
      return menu.children[0].url
    }
  }
}
