import type { RUserSearchInfoObjectType } from '@/types/Home/System/user.ts'
import type { IApiResponseType } from '@/types/service/serviceType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserSearchListApi } from '@/service/Home/System/userSeachApi.ts'

const useSystemUserStore = defineStore('systemUserStore', () => {
  const userSearchInfo = ref<RUserSearchInfoObjectType>()

  async function getUserSearchList() {
    const res: IApiResponseType<RUserSearchInfoObjectType> = await getUserSearchListApi()
    userSearchInfo.value = res.data
  }

  return {
    userSearchInfo,
    // 下面是方法
    getUserSearchList,
  }
})

export default useSystemUserStore
