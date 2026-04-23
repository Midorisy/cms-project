<script setup lang="ts">
import { ref } from 'vue'
import DepartmentContent from '@/components/home/system/department/department-content/index.vue'
import DepartmentDialog from '@/components/home/system/department/department-dialog/index.vue'
import DepartmentHeader from '@/components/home/system/department/department-header/index.vue'

const dialogModal = ref<InstanceType<typeof DepartmentDialog>>()
/**
   * 监听是否触发了新建用户事件
   * @param val 是否新建用户
   */
function createUserOnClick() {
  dialogModal.value?.openDialog()
}

function userEditBtnClick(row: any) {
  dialogModal.value?.openDialog(row)
}
</script>

<template>
  <div class="system-department">
    <div class="department-header">
      <DepartmentHeader />
    </div>
    <div class="department-content">
      <DepartmentContent @click-create-user="createUserOnClick" @click-edit-user="userEditBtnClick" />
    </div>
    <div class="dialog">
      <DepartmentDialog ref="dialogModal">
        <template #roleList="{ scope }">
          <div>
            我是权限列表的插槽{{ scope }}
            <!-- 之后就是根据scope来渲染权限列表 -->
          </div>
        </template>
      </DepartmentDialog>
    </div>
  </div>
</template>

<style scoped lang="scss">
.system-user{
  height: 100%;
  width: 100%;
}
</style>
