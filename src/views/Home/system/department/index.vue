<script setup lang="ts">
import DepartmentContent from '@/components/home/system/department/department-content/index.vue'
import DepartmentHeader from '@/components/home/system/department/department-header/index.vue'
</script>

<template>
  <div class="system-department">
    <div class="department-header">
      <DepartmentHeader />
    </div>
    <div class="department-content">
      <DepartmentContent />
    </div>
    <div class="dialog" />
  </div>
</template>

<style scoped lang="scss">
.system-user{
  height: 100%;
  width: 100%;
}
</style>
