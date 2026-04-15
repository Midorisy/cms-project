import { service } from '@/service/index.ts'

export async function getUserSearchListApi(offset = 0, limit = 10) {
  return await service.post({
    url: '/home/system/userSsearch',
    data: {
      offset,
      limit,
    },
  })
}
