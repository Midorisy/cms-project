<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore'

const systemUserStore = useSystemUserStore()

const { departmentList, roleTypeList, userCreateInfo } = storeToRefs(systemUserStore)
const dialogformRef = ref<InstanceType<typeof ElForm>>()
// 暴露方法
defineExpose({
  openDialog,
})

const dialogVisible = ref(false)

const isEdit = ref(false)

/**
 * 提交表单
 */
async function submitForm() {
  dialogVisible.value = false
  // 新增用户
  if (!isEdit.value) {
    await systemUserStore.addCreatedUser()
  }
  else {
    // 编辑用户
    await systemUserStore.updateUserInfo()
  }
  // 刷新用户列表
  await systemUserStore.getUserSearchList()
  // 清空表单数据
  dialogformRef.value?.resetFields()
  userCreateInfo.value.roleId = null
  userCreateInfo.value.departmentId = null
}

/**
 * 打开弹窗
 */
function openDialog(row: any = null) {
  isEdit.value = !!row
  dialogVisible.value = true
  if (row) {
    userCreateInfo.value = {
      ...userCreateInfo.value,
      ...row,
    }
    console.log(userCreateInfo.value)
  }
}
</script>

<template>
  <div class="dialog-modal">
    <el-dialog v-model="dialogVisible" :width="400" header-class="model-header" footer-class="model-footer">
      <template #header>
        <div class="header-title">
          {{ isEdit ? '编辑用户' : '新增用户' }}
        </div>
      </template>
      <template #default>
        <div class="dialog-body">
          <ElForm ref="dialogformRef" :model="userCreateInfo" :label-width="80">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userCreateInfo.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="真实姓名" prop="realname">
              <el-input v-model="userCreateInfo.realname" placeholder="请输入真实姓名" />
            </el-form-item>
            <el-form-item v-if="!isEdit" label="密码" prop="password">
              <el-input v-model="userCreateInfo.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item label="手机号码" prop="cellphone">
              <el-input v-model="userCreateInfo.cellphone" placeholder="请输入手机号码" />
            </el-form-item>
            <el-form-item label="选择角色">
              <el-select v-model="userCreateInfo.roleId" placeholder="请选择角色">
                <el-option v-for="item in roleTypeList" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="选择部门">
              <el-select v-model="userCreateInfo.departmentId" placeholder="请选择部门">
                <el-option v-for="item in departmentList" :key="item.id" :label="item.name" :value="item.departmentId" />
              </el-select>
            </el-form-item>
          </ElForm>
        </div>
      </template>
      <template #footer>
        <el-button type="default" @click="dialogVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="submitForm">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.dialog-modal{
  height: 100%;
  width: 100%;

    // 弹窗标题
:deep(.model-header){
    display: flex;
    justify-content: center;
    font-size: 18px;
    padding: 8px 0 24px;
  }

  // 弹窗底部
  :deep(.model-footer){
    display: flex;
    justify-content: center;
  }

}
</style>
