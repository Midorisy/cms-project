import type { RUserData, TypeLoginResponse, TypeUserAccount } from '@/types/Login/LoginTypes'
import type { IApiResponseType } from '@/types/service/serviceType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IS_REMEMBER_PW_KEY, USER_DATA_KEY } from '@/global/constant'
import { userLoginApi } from '@/service/Login/LoginApis'
import { local } from '@/utils/storage/index'

const useLoginStore = defineStore('loginStore', () => {
  const token = ref('')
  const id = ref(0)
  const username = ref('')
  const isRemember = ref(false)
  if (local.getItem(IS_REMEMBER_PW_KEY) !== null) {
    isRemember.value = true
  }

  /**
   * 用户登录
   * @param account 账号密码
   */
  async function userLogin(account: TypeUserAccount) {
    const result: IApiResponseType<TypeLoginResponse> = await userLoginApi(account)

    // 登录成功后，将token、id、username赋值给响应数据
    token.value = result.data.token
    id.value = result.data.id
    username.value = result.data.name
    // 存入UserData到本地存储
    const userData: RUserData = {
      username: username.value,
      userId: id.value,
      token: token.value,
      password: account.password,
    }

    if (!isRemember.value) {
      // 如果不记住密码,就将密码删除
      delete userData.password
    }

    local.setItem(USER_DATA_KEY, userData)
  }

  return {
    id,
    token,
    username,
    isRemember,
    // 下面是导出方法
    userLogin,
  }
})

export default useLoginStore
