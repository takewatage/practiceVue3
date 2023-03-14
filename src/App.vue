<script setup lang="ts">
import { provide } from 'vue'
import useLoad, { useLoadKey } from './composables/useLoad'
import LoadingOverlay from '@/components/parts/LoadingOverlay.vue'

provide(useLoadKey, useLoad())
</script>

<template>
  <div class="container">
    <LoadingOverlay />
    <router-view v-slot="{ Component, route }">
      <Transition
        name="page"
        mode="out-in"
      >
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.container {
  margin: auto;
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
}
</style>
