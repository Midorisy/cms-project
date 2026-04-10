import type { RUserData, RUserMenusType, TypeLoginResponse, TypeUserAccount, TypeUserInfo } from '@/types/Login/LoginTypes'
import type { IApiResponseType } from '@/types/service/serviceType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IS_REMEMBER_PW_KEY, USER_DATA_KEY, USER_INFO_KEY, USER_MENUS_KEY } from '@/global/constant'
import { getUserInfoByIdApi, getUserMenusByRoleIdApi, userLoginApi } from '@/service/Login/LoginApis'
import { local } from '@/utils/storage/index'

const useLoginStore = defineStore('loginStore', () => {
  const token = ref('')
  const id = ref(0)
  const username = ref('')
  const isRemember = ref(local.getItem(IS_REMEMBER_PW_KEY) ?? false)
  const userInfo = ref<TypeUserInfo>(local.getItem(USER_INFO_KEY) ?? {})
  const userMenus = ref<RUserMenusType[]>(local.getItem(USER_MENUS_KEY) ?? [])

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

    // 登录成功后，获取用户信息
    const userInfoResult: IApiResponseType<TypeUserInfo> = await getUserInfoByIdApi(id.value)
    // 存入用户信息到本地pinia
    userInfo.value = userInfoResult.data
    // 存入用户信息到本地存储
    local.setItem(USER_INFO_KEY, userInfoResult.data)

    // 登录成功后，根据用户权限获取用户菜单
    const userMenusResult: IApiResponseType<RUserMenusType[]> = await getUserMenusByRoleIdApi(userInfoResult.data.role.id)
    // 存入用户菜单到本地pinia
    userMenus.value = userMenusResult.data
    // 存入用户菜单到本地存储
    local.setItem(USER_MENUS_KEY, userMenusResult.data)
  }

  return {
    id,
    token,
    username,
    isRemember,
    userInfo,
    userMenus,
    // 下面是导出方法
    userLogin,
  }
})

export default useLoginStore
