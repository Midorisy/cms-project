<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore'
import dialogConfig from './dialog.config.ts'

const systemUserStore = useSystemUserStore()

const { departmentList, userCreateInfo } = storeToRefs(systemUserStore)
const dialogformRef = ref<InstanceType<typeof ElForm>>()
// 暴露方法
defineExpose({
  openDialog,
})

const dialogVisible = ref(false)
const isEdit = ref(false)

const typeCreateInfo = ref<{
  [key: string]: any
}>(dialogConfig.collectionTypeInfo)

/**
 * 提交表单
 */
async function submitForm() {
  /**
   * 1.首先判断是新增还是编辑
   * 2.如果是新增，调用新增方法
   * 3.如果是编辑，调用编辑方法
   * 4.刷新部门列表
   * 5.清空表单数据
   */
  // 点击确认时的数据,之后发送到store里做进一步处理
  console.log(typeCreateInfo.value)
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
  await systemUserStore.getSearchTypechList(dialogConfig.collectionType, {})
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
    typeCreateInfo.value = {
      ...userCreateInfo.value,
      ...row,
    }
  }
}
</script>

<template>
  <div class="dialog-modal">
    <el-dialog v-model="dialogVisible" :width="400" header-class="model-header" footer-class="model-footer">
      <template #header>
        <div class="header-title">
          {{ isEdit ? dialogConfig.header.editTitle : dialogConfig.header.addTitle }}
        </div>
      </template>
      <template #default>
        <div class="dialog-body">
          <ElForm ref="dialogformRef" :model="typeCreateInfo" :label-width="80">
            <el-form-item v-for="item in dialogConfig.elFormItem" :key="item.prop" :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="typeCreateInfo[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-model="typeCreateInfo[item.prop]" :placeholder="item.placeholder">
                  <el-option v-for="department in departmentList" :key="department.departmentId" :label="department.name" :value="department.departmentId" />
                </el-select>
              </template>
              <template v-else-if="item.type === 'slot'">
                <slot v-for="slot in item.slotList" :key="slot.slotName" :name="slot.slotName" :scope="typeCreateInfo" />
              </template>
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
