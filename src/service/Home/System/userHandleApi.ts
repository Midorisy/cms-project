import type { RUserSearchInfoObjectType, UserSearchInfoType } from '@/types/Home/System/user'
import { service } from '@/service/index.ts'

/**
 * 获取用户列表
 * @param offset 偏移量
 * @param limit 限制数量
 * @returns
 */
export async function getUserSearchListApi(offset = 0, limit = 10) {
  return await service.post<RUserSearchInfoObjectType>({
    url: '/home/system/userSearch',
    data: {
      offset,
      limit,
    },
  })
}

/**
 * 删除用户
 * @param userId 用户ID
 * @returns
 */
export async function deleteUserInfoApi(userId: number) {
  return await service.delete({
    url: '/home/system/userDelete',
    data: {
      userId,
    },
  })
}

export async function updateUserInfoApi(updateUserInfo: UserSearchInfoType) {
  return await service.post({
    url: '/home/system/userUpdate',
    data: updateUserInfo,
  })
}

/**
 * 新增用户
 * @param createUserInfo 新增用户信息
 * @returns
 */
export async function addCreatedUserApi(createUserInfo: UserSearchInfoType) {
  return await service.post({
    url: '/home/system/userAdd',
    data: createUserInfo,
  })
}
