import type { departmentType } from '@/types/Home/System/department.ts'
import { service } from '@/service/index.ts'

export function getDepartmentListApi() {
  return service.get<departmentType[]>({
    url: '/home/system/department/list',
  })
}
