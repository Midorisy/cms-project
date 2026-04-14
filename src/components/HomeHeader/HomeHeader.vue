<script setup lang="ts">
import BreadCrumb from '@/components/HomeHeader/BreadCrumb/BreadCrumb.vue'
import UserInfo from '@/components/HomeHeader/UserInfo/UserInfo.vue'
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
      <div class="temp">
        <BreadCrumb />
      </div>
      <div class="user-info">
        <UserInfo />
      </div>
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
  .header-body{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
}
</style>
