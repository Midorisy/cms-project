<script setup lang="ts">
import { ref } from 'vue'

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
    <el-dialog v-model="dialogVisible" :width="400">
      <template #header>
        <span>新增用户</span>
      </template>
      <template #default>
        <div class="dialog-body">
          <el-form>
            <el-form-item label="用户名" prop="username">
              <el-input placeholder="请输入用户名" />
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
}
</style>
