import { service } from '@/service/index.ts'

export async function getUserSearchListApi() {
  return await service.post({
    url: '/home/system/userSsearch',
    data: {
      offset: 0,
      limit: 10,
    },
  })
}
