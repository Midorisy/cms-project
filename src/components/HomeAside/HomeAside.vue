<script setup lang="ts">
import type { RUserMenusType } from '@/types/Login/LoginTypes'
import useLoginStore from '@/store/Login/useLoginStore'

const loginStore = useLoginStore()
const menuList: RUserMenusType[] = loginStore.userMenus
</script>

<template>
  <div class="home-aside">
    <div class="aside-header">
      <div class="logo">
        <img src="@/assets/avatar2.916294c1.png">
      </div>
      <div class="title">
        王小桃管理系统
      </div>
    </div>

    <div class="aside-body">
      <el-menu>
        <el-sub-menu v-for="(menuParent) in menuList" :key="menuParent.id" :index="String(menuParent.id)">
          <!-- 一级菜单标题 -->
          <template #title>
            <el-icon>
              <component :is="menuParent.icon.split('el-icon-')[1]" />
            </el-icon>
            <span>{{ menuParent.name }}</span>
          </template>
          <!-- 一级菜单子项 -->
          <el-menu-item v-for="menuChild in menuParent.children" :key="menuChild.id" :index="String(menuChild.id)">
            {{ menuChild.name }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-aside{
    display: flex;
    flex-direction: column;
    // align-items: center;
  height: 100%;
  .aside-header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .logo {
      img {
        width: 24px;
      }
    }
    .title{
      margin-left: 16px;
      font-size: 16px;
      font-weight: bold;
      color: #409eff;
    }
  }
}
</style>
