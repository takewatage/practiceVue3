import dayjs from 'dayjs'

const FORMAT = 'YYYY年MM月DD日'

export const DateFormat = (date: Date, format = FORMAT) => {
  return dayjs(date).format(format)
}
