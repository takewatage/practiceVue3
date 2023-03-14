<script setup lang="ts">
import { ref, inject } from 'vue'
import AppDateForm from '@/components/AppDateForm.vue'
import AppSelectForm from '@/components/AppSelectForm.vue'
import { useLoadKey, LoadStore } from '@/composables/useLoad'
import { prefectures } from '@/const/prefectures'
import { ICity } from '@/const/interface'
import realEstateTransactionApi from '@/api/realEstateTransactionApi'
import RealEstateTransaction from '@/models/realEstateTransaction'
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Legend, ChartData } from 'chart.js'
import { Scatter } from 'vue-chartjs'
import { chartOptions, chartConfig } from '@/const/chartConfig'

ChartJS.register(LinearScale, PointElement, LineElement, Legend)
const realEstateTransaction = ref<RealEstateTransaction>(new RealEstateTransaction())
const cities = ref<ICity[]>([])
const ScatteringData = ref<ChartData<'scatter'>>({
  datasets: chartConfig.datasets,
})
const { onLoading, state } = inject(useLoadKey) as LoadStore

const changePrefecture = async (value: string) => {
  realEstateTransaction.value.city = null
  ScatteringData.value.datasets[0].data = []

  await onLoading(async () => {
    cities.value = await realEstateTransactionApi.getCities(value)
  })
}

const getScatteringData = async () => {
  if (!realEstateTransaction.value.checkRequired()) return
  if (!realEstateTransaction.value.validationCheck()) return

  await onLoading(async () => {
    ScatteringData.value.datasets[0].data = await realEstateTransactionApi.getScatteringData(
      new RealEstateTransaction(realEstateTransaction.value)
    )
  })
}
</script>

<template>
  <form class="trading-forms">
    <div class="trading-form">
      <AppDateForm
        v-model="realEstateTransaction.tradingTimeFrom"
        label="取引時期From"
        @change="getScatteringData"
      />
    </div>
    <div class="trading-form">
      <AppDateForm
        v-model="realEstateTransaction.tradingTimeTo"
        label="取引時期To"
        @change="getScatteringData"
      />
    </div>
    <div class="trading-form">
      <AppSelectForm
        v-model="realEstateTransaction.area"
        label="都道府県"
        :options="prefectures"
        value-field="id"
        text-field="name"
        @change="changePrefecture"
      />
    </div>
    <div class="trading-form">
      <AppSelectForm
        v-model="realEstateTransaction.city"
        label="市区町村"
        :options="cities"
        value-field="id"
        text-field="name"
        @change="getScatteringData"
        :disabled="!realEstateTransaction.area"
      />
    </div>
  </form>

  <div
    v-if="!state"
    style="height: 400px"
  >
    <p>結果：{{ScatteringData.datasets[0].data.length}}件</p>
    <Scatter
      :data="ScatteringData"
      :options="chartOptions"
    />
  </div>
</template>

<style lang="scss" scoped>
.trading-forms {
  padding-top: 50px;
  margin-bottom: 50px;

  .trading-form {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
