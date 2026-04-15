import dayjs from 'dayjs'

export function formatDateByUtc(utcDate: string) {
  return dayjs(utcDate).format('YYYY-MM-DD HH:mm:ss')
}
