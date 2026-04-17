import type { RUserSearchInfoObjectType } from '@/types/Home/System/user'
import { service } from '@/service/index.ts'

export async function getUserSearchListApi(offset = 0, limit = 10) {
  return await service.post<RUserSearchInfoObjectType>({
    url: '/home/system/userSearch',
    data: {
      offset,
      limit,
    },
  })
}

export async function deleteUserInfoApi(userId: number) {
  return await service.delete({
    url: '/home/system/userDelete',
    data: {
      userId,
    },
  })
}
