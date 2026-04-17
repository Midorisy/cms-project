import type { roleType } from '@/types/Home/System/roleType.ts'
import { service } from '@/service/index.ts'

export function getRoleTypeListApi() {
  return service.get<roleType[]>({
    url: '/home/system/role/list',
  })
}
