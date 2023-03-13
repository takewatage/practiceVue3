<script setup lang="ts">
import { ref } from 'vue'
import { DateFormat } from '@/utilities/dateUtility'
import AppDateForm from '@/components/AppDateForm.vue'
const tradingTimeFrom = ref<Date>(new Date())
const tradingTimeTo = ref<Date>(new Date())
const prefectureNum = ref<number|null>(null)
</script>

<template>
  <form class="trading-forms">
    <div class="trading-form">
      <AppDateForm
        v-model="tradingTimeFrom"
        label="取引時期From"
      />
    </div>
    <div class="trading-form">
      <AppDateForm
        v-model="tradingTimeTo"
        label="取引時期To"
      />
    </div>
    <div class="trading-form">
      <label>取引時期To</label>
    </div>
    <div class="trading-form">
      <label>取引時期To</label>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.trading-forms {
  padding-top: 50px;

  .trading-form {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
