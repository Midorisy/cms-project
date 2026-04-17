import type { departmentType } from '@/types/Home/System/department.ts'
import type { roleType } from '@/types/Home/System/roleType.ts'
import type { RUserSearchInfoObjectType, UserSearchInfoType } from '@/types/Home/System/user.ts'
import type { IApiResponseType } from '@/types/service/serviceType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getDepartmentListApi } from '@/service/Home/System/departmentApi'
import { getRoleTypeListApi } from '@/service/Home/System/roleListApi'
import { deleteUserInfoApi, getUserSearchListApi } from '@/service/Home/System/userHandleApi'

const useSystemUserStore = defineStore('systemUserStore', () => {
  const userSearchInfo = ref<RUserSearchInfoObjectType>()

  // 新建用户信息
  const userCreateInfo = ref<UserSearchInfoType>({
    name: '',
    realname: '',
    password: '',
    cellphone: null,
    createAt: '',
    updateAt: '',
    roleId: null,
    departmentId: null,
  })
  // 部门列表
  const departmentList = ref<departmentType[]>([])
  // 角色列表
  const roleTypeList = ref<roleType[]>([])

  /**
   * 删除用户
   * @param userId 用户ID
   * @returns 删除结果
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

  /**
   * 获取部门列表
   */
  async function getDepartmentList() {
    const res: IApiResponseType<departmentType[]> = await getDepartmentListApi()
    departmentList.value = res.data
  }

  async function getRoleTypeList() {
    const res: IApiResponseType<roleType[]> = await getRoleTypeListApi()
    roleTypeList.value = res.data
  }

  return {
    userSearchInfo,
    userCreateInfo,
    departmentList,
    roleTypeList,
    // 下面是方法
    getUserSearchList,
    deleteUserInfo,
    getDepartmentList,
    getRoleTypeList,
  }
})

export default useSystemUserStore
