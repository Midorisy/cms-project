/**
 * 从url中提取name
 * @param url 路径'/home/analysis'
 * @returns name:'analysis'
 */
export function getRouteName(url: string) {
  const urlArr = url?.split('/')
  return urlArr?.at(-1) ?? ''
}
