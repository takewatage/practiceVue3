<script setup lang="ts">
import { inject } from 'vue'
import { LoadStore, useLoadKey } from '@/composables/useLoad'

const { state } = inject(useLoadKey) as LoadStore
</script>

<template>
  <div
    v-if="state"
    class="load-overlay">
    <i class="loading-icon"></i>
  </div>
</template>

<style lang="scss" scoped>
.load-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000050;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-icon {
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow:
    0 -30px 0 #eee,
    21px -21px 0 #ddd,
    30px 0 0 #ccc,
    21px 21px 0 #bbb,
    0 30px 0 #aaa,
    -21px 21px 0 #999,
    -30px 0 0 #666,
    -21px -21px 0 #000;
  animation: rotate 1s steps(8) 0s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
