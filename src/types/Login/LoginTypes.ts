export interface TypeUserAccount {
  username: string
  password: string
}

export interface TypeLoginResponse {
  id: number
  name: string
  token: string
}

export interface RUserData {
  username: string
  password?: string
  userId: number
  token: string
}

export interface TypeUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: {
    id: number
    name: string
    intro: string
    createAt: string
    updateAt: string
  }
  department: {
    id: number
    name: string
    parentId: null
    createAt: string
    updateAt: string
    leader: string
  }
}

export interface RUserMenusType {
  id: number
  name: string
  type: number
  url: string
  icon?: string
  sort: number
  children: MenusChildType[]
}

export interface MenusChildType {
  id: number
  name: string
  url: string
  sort: number
  type: number
  children: any[] | null
  parentId?: number
  permission?: string
}
