import type { TypeUserData } from '@/types/Login/LoginTypes'
import { service } from '@/service/index.ts'

export async function userLoginApi(account: TypeUserData) {
  return await service.post({
    url: '/login/user',
    data: account,
  })
}
