<script setup lang="ts">
import useHomeStore from '@/store/Home/useHomeStore'

const homeStore = useHomeStore()
</script>

<template>
  <div class="home">
    {{ homeStore.count }}
  </div>
</template>

<style scoped>

</style>
