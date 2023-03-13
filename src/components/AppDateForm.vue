<script setup lang="ts">
import { computed, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { UUID } from 'uuidjs'
import { DateFormat } from '@/utilities/dateUtility'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(
  defineProps<{
    modelValue: Date
    label?: string
  }>(),
  {
    label: '',
  }
)

// data
const innerDate = ref<Date>(props.modelValue)
const eId = UUID.generate()

const updateDate = (modelData: Date) => {
  console.log('update', modelData)
  emit('update:modelValue', modelData)
}

const pickerDisplayDate = computed(() => {
  return DateFormat(innerDate.value)
})
</script>

<template>
  <div class="app-date-form">
    <label class="app-date-form__label" :for="eId"> {{ props.label }} </label>
    <div class="form-control w-100 pointer">
      <VueDatePicker
        v-model="innerDate"
        :uid="eId"
        locale="jp"
        format="yyyy年mm月dd日"
        :enable-time-picker="false"
        :clearable="false"
        :auto-apply="true"
        @update:model-value="updateDate"
      >
        <template #input-icon></template>
        <template #trigger>
          <div class="app-date-form__input">
            <div class="app-date-form__value">
              {{ pickerDisplayDate }}
            </div>
            <div class="app-date-form__icon">
              <svg viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                />
              </svg>
            </div>
          </div>
        </template>
      </VueDatePicker>
    </div>
  </div>
</template>

<style lang="scss">
.app-date-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__label {
    width: 30%;
  }

  &__input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    border: 1px solid #000;
  }

  &__value {
    padding: 10px;
    min-width: 140px;
  }

  &__icon {
    display: flex;
    align-items: center;
    background-color: #000;
    padding: 11px;

    svg {
      fill: white;
      width: 15px;
      height: 15px;
    }
  }
}
</style>
