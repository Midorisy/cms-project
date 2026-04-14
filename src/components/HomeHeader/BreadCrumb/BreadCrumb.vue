<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBreadCrumbName } from '@/utils/route/getBreadCrumbName'

const route = useRoute()

// 根据当前路径显示面包屑的名称列表
const breadNameList = computed(() => {
  return getBreadCrumbName(route.fullPath)
})
</script>

<template>
  <div class="bread-crumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) in breadNameList" :key="index" :to="{ path: item.path }">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>

</style>
