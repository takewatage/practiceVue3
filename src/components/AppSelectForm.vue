<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import { UUID } from 'uuidjs'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    options: []
    label: string
    textField: string
    valueField: string
    disabled?: boolean
  }>(),
  {
    label: '',
    textField: 'text',
    valueField: 'value',
    disabled: false,
  }
)
const eId = UUID.generate()

const updateDate = (event: { target: HTMLButtonElement }) => {
  emit('update:modelValue', event.target.value)
  emit('change', event.target.value)
}
</script>

<template>
  <div class="app-select-form">
    <label
      class="app-select-form__label"
      :for="eId"
    >
      {{ props.label }}
    </label>
    <div class="form-control select-box" :class="{'disabled': disabled}">
      <select @input="updateDate" :disabled="disabled">
        <option value="null">選択してください</option>
        <template v-if="props.options.length">
          <option
            v-for="option in props.options"
            :key="option.id"
            :value="option[props.valueField]"
          >
            {{ option[props.textField] }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-select-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__label {
    width: 30%;
  }

  .select-box {
    position: relative;
    border: 1px solid #000;
    width: 100%;
    max-width: 230px;
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 100%;
      padding: 0;
      content: '';
      background: #000;
      z-index: -1;
    }

    &:after {
      background-image: url('/arrow-down.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 8px;
      margin: auto;
      width: 20px;
      height: 20px;
      content: '';
    }

    select {
      position: relative;
      width: 100%;
      padding: 10px;
      z-index: 1;
    }
  }
}
</style>
