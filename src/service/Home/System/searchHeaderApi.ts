import { service } from '@/service/index.ts'

/**
 * 获取指定的搜索列表
 * @param searchType 搜索类型
 * @returns 搜索列表
 */
export function getSearchListByConditionApi(searchType: string, searchInfo: unknown) {
  return service.post({
    url: `/home/system/${searchType}/list`,
    data: searchInfo,
  })
}
