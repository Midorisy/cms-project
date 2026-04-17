<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore'

const systemUserStore = useSystemUserStore()

const { departmentList, roleTypeList, userCreateInfo } = storeToRefs(systemUserStore)

// 暴露方法
defineExpose({
  openDialog,
})

const dialogVisible = ref(false)

/**
 * 打开弹窗
 */
function openDialog() {
  dialogVisible.value = true
}
</script>

<template>
  <div class="dialog-modal">
    <el-dialog v-model="dialogVisible" :width="400" header-class="model-header" footer-class="model-footer">
      <template #header>
        <div class="header-title">
          新增用户
        </div>
      </template>
      <template #default>
        <div class="dialog-body">
          <el-form :model="userCreateInfo" :label-width="80">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userCreateInfo.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="真实姓名" prop="realname">
              <el-input v-model="userCreateInfo.realname" placeholder="请输入真实姓名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
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
          </el-form>
        </div>
      </template>
      <template #footer>
        <el-button type="default" @click="dialogVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogVisible = false">
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
