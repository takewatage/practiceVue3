<script setup lang="ts"></script>

<template>
  <div class="container">
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
}
</style>
