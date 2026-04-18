<script setup lang="ts">
import { ref } from 'vue'
import DialogModal from '@/components/Home/System/dialog-modal/dialog-modal.vue'
import UserContent from '@/components/Home/System/user-content/user-content.vue'
import UserSearch from '@/components/Home/System/UserHeader/user-search.vue'

const dialogModal = ref<InstanceType<typeof DialogModal>>()

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
  <div class="system-user">
    <div class="user-header">
      <UserSearch />
    </div>
    <div class="user-content">
      <UserContent @click-create-user="createUserOnClick" @click-edit-user="userEditBtnClick" />
    </div>
    <div class="dialog">
      <DialogModal ref="dialogModal" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.system-user{
  height: 100%;
  width: 100%;
}
</style>
