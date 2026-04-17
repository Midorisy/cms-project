export interface UserSearchInfoType {
  id?: number
  name: string
  realname: string
  cellphone: number | null
  enable?: number
  departmentId: number | null
  roleId: number | null
  createAt: string
  updateAt: string
  password?: string
}

export interface RUserSearchInfoObjectType {
  list: UserSearchInfoType[]
  totalCount: number
}
