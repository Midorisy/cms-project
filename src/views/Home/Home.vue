<script setup lang="ts">
import useHomeStore from '@/store/useHomeStore/useHomeStore'

const homeStore = useHomeStore()
</script>

<template>
  <div class="home">
    {{ homeStore.count }}
    <router-link to="/notFound">
      notFound
    </router-link>
  </div>
</template>

<style scoped>

</style>
