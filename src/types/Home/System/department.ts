export interface departmentType {
  list?: {
    id: number
    name: string
    departmentId: number
    parentId: number
    createAt: string
    updateAt: string
    leader: string
  }[]
  totalCount?: number
}
