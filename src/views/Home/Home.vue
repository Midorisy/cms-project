<script setup lang="ts">
import HomeAside from '@/components/HomeAside/HomeAside.vue'
</script>

<template>
  <div class="home">
    <el-container>
      <el-aside width="250px">
        <HomeAside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home{
  height: 100%;
  .el-container{
    height: 100%;
    .el-aside{
      height: 100%;
    }
    .el-container{
      background-color: aquamarine;
    }
  }
}
</style>
