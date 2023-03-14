import { Model, IIndexable } from '@team-decorate/alcts'
import dayjs from 'dayjs'

const FILLABLE = ['tradingTimeFrom', 'tradingTimeTo', 'area', 'city']

const PRESENTS = ['prefectureCode', 'cityCode']

export default class RealEstateTransaction extends Model {
  tradingTimeFrom: Date = new Date()
  tradingTimeTo: Date = new Date()
  area: string | null = null
  city: string | null = null

  constructor(data?: IIndexable) {
    super()

    this.fillable = FILLABLE
    this.presents = PRESENTS
    this.convert = true

    if (data) {
      this.data = data
    }
  }

  checkRequired() {
    let flag = true
    if (!this.tradingTimeFrom) flag = false
    if (!this.tradingTimeTo) flag = false
    if (!this.area) flag = false
    if (!this.city) flag = false
    return flag
  }

  convertFromData(date: Date) {
    const d = dayjs(date)
    const month = d.month() + 1
    let requestMonth = ''
    if (month > 0 && month <= 3) {
      requestMonth = '1'
    } else if (month > 3 && month <= 6) {
      requestMonth = '2'
    } else if (month > 6 && month <= 10) {
      requestMonth = '3'
    } else if (month > 10 && month <= 12) {
      requestMonth = '4'
    }

    return d.format('YYYY') + requestMonth
  }

  getRequest() {
    return {
      from: this.convertFromData(this.tradingTimeFrom),
      to: this.convertFromData(this.tradingTimeTo),
      area: this.area,
      city: this.city,
    }
  }
}
