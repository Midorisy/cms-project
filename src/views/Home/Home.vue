<script setup lang="ts">
import HomeAside from '@/components/HomeAside/HomeAside.vue'
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'

import useHomeStore from '@/store/Home/useHomeStore'

const homeStore = useHomeStore()
</script>

<template>
  <div class="home">
    <el-container>
      <el-aside class="el-aside" :class="{ collapse: homeStore.isCollapse }">
        <HomeAside />
      </el-aside>
      <el-container>
        <el-header>
          <HomeHeader />
        </el-header>
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
      width: 250px;
      &.collapse{
        width: 64px;
        transition: all 0.3s ease-in-out;
      }
    }
    .el-container{
      background-color: skyblue;

      .el-header{
        --el-header-padding:0px;
      }
    }
  }
}
</style>
