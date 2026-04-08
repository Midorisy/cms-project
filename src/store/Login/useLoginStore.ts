import type { TypeUserData } from '@/types/Login/LoginTypes'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userLoginApi } from '@/service/Login/LoginApis'

const useLoginStore = defineStore('loginStore', () => {
  const token = ref('')
  const id = ref('')
  const username = ref('')

  async function userLogin(account: TypeUserData) {
    return await userLoginApi(account)
  }

  return {
    id,
    token,
    username,
    // 下面是导出方法
    userLogin,
  }
})

export default useLoginStore
