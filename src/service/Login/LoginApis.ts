import type { TypeUserAccount } from '@/types/Login/LoginTypes'
import { service } from '@/service/index.ts'

/**
 * 用户登录接口
 * @param account 用户账号密码
 * @returns 登录响应
 */
export async function userLoginApi(account: TypeUserAccount) {
  return await service.post({
    url: '/login/user',
    data: account,
  })
}

/**
 * 获取用户信息接口
 * @param id 用户ID
 * @returns 用户信息
 */
export function getUserInfoByIdApi(id: number) {
  return service.get({
    url: `/login/user/${id}`,
  })
}

/**
 * 获取用户菜单接口
 * @param roleId 角色ID
 * @returns 用户菜单
 */
export function getUserMenusByRoleIdApi(roleId: number) {
  return service.get({
    url: `/login/user/${roleId}/menus/`,
  })
}
