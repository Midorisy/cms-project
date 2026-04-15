export interface UserSearchInfoType {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface RUserSearchInfoObjectType {
  list: UserSearchInfoType[]
  totalCount: number
}
