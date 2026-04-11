<script setup lang="ts">
import useHomeStore from '@/store/Home/useHomeStore'

const homeStore = useHomeStore()
</script>

<template>
  <div class="home-header">
    <div class="aside-switch" @click="homeStore.changeCollapse">
      <el-icon v-if="!homeStore.isCollapse">
        <Fold />
      </el-icon>
      <el-icon v-else>
        <Expand />
      </el-icon>
    </div>
    <div class="header-body">
      正式内容
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-header{
    display: flex;
    align-items: center;
  height: 60px;
  background-color: #f5f7fa;
  .aside-switch{
    font-size: 24px;
  }
}
</style>
