import type { UserSearchInfoType } from '@/types/Home/System/user'
import { service } from '@/service/index.ts'

/**
 * 获取type列表
 * @param searchType 搜索类型
 * @param searchInfo 搜索信息
 * @param {object} pageConfig 分页配置
 * @returns type列表数据
 */
export async function getSearchTypechListApi(searchType: string, searchInfo: any, pageConfig = { offset: 0, limit: 10 }) {
  return await service.post<any>({
    url: `/home/system/${searchType}/list`,
    data: {
      searchInfo,
      ...pageConfig,
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
