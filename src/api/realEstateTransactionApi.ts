import axios from 'axios'
import RealEstateTransaction from '@/models/realEstateTransaction'
import { ITradeList } from '@/const/interface'

class realEstateTransactionApi {
  async getCities(code: string) {
    const url = `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`
    const { data } = await axios.get(url)
    if (data.status === 'ERROR') {
      throw new Error('データの取得に失敗しました')
    }
    return data.data
  }

  async getScatteringData(model: RealEstateTransaction) {
    if (!model.checkRequired()) {
      throw new Error('パラメータが足りません')
    }
    const url = `https://www.land.mlit.go.jp/webland/api/TradeListSearch`
    const { data } = await axios.get(url, {
      params: model.getRequest(),
    })
    if (data.status === 'ERROR') {
      throw new Error('データの取得に失敗しました')
    }

    return this.#convertScatteringData([...data.data])
  }

  // 散布図用データを作成
  #convertScatteringData(data: ITradeList[]) {
    const regex = /㎡以上$/
    return data.map((x) => {
      const ob = {
        x: x.Area,
        y: x.TradePrice,
      }
      if (regex.test(ob.x)) {
        ob.x = ob.x.replace(regex, '')
      }
      return {
        x: Number(ob.x),
        y: Number(ob.y),
      }
    })
  }
}

export default new realEstateTransactionApi()
