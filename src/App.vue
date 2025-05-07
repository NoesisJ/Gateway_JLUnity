<template>
  <div class="app-container w-screen h-screen overflow-hidden">
    <LayoutHub class="w-full h-full" />
  </div>
</template>

<script lang="ts" setup>
import LayoutHub from './layouts/layoutHub.vue'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
