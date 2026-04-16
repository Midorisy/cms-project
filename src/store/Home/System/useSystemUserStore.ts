import type { RUserSearchInfoObjectType } from '@/types/Home/System/user.ts'
import type { IApiResponseType } from '@/types/service/serviceType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { deleteUserInfoApi, getUserSearchListApi } from '@/service/Home/System/userHandleApi'

const useSystemUserStore = defineStore('systemUserStore', () => {
  const userSearchInfo = ref<RUserSearchInfoObjectType>()

  /**
   * 删除用户
   * @param userId 用户ID
   * @returns
   */
  async function deleteUserInfo(userId: number) {
    const res: IApiResponseType<any> = await deleteUserInfoApi(userId)
    return res
  }

  /**
   * 获取用户列表
   * @param pageConfig 分页配置
   */
  async function getUserSearchList(pageConfig: any) {
    // 计算偏移量
    const offset = (pageConfig.currentPage - 1) * pageConfig.pageSize
    const limit = pageConfig.pageSize

    const res: IApiResponseType<RUserSearchInfoObjectType> = await getUserSearchListApi(offset, limit)
    userSearchInfo.value = res.data
  }

  return {
    userSearchInfo,
    // 下面是方法
    getUserSearchList,
    deleteUserInfo,
  }
})

export default useSystemUserStore
