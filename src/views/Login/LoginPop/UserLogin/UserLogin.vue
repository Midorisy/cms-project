<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import type { RUserData, TypeUserAccount } from '@/types/Login/LoginTypes'
import { ElMessage } from 'element-plus'

import { onMounted, ref } from 'vue'

import { IS_REMEMBER_PW_KEY, USER_DATA_KEY } from '@/global/constant'

import router from '@/router'
import useLoginStore from '@/store/Login/useLoginStore.ts'
import { local } from '@/utils/storage'

defineExpose({
  userLoginEvent,
})

const loginStore = useLoginStore()

const userAccount = ref<TypeUserAccount>({
  username: '',
  password: '',
})

const userDataRules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 10, message: '账号长度必须在3到10之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '密码长度必须在6到12之间', trigger: 'blur' },
  ],
}

// 获取登录表单实例
const loginFormRef = ref<FormInstance>()

/**
   * 用户点击登录时触发的事件
   */
function userLoginEvent() {
  loginFormRef.value?.validate(async (valid) => {
    try {
      if (valid) {
        await loginStore.userLogin(userAccount.value)
        ElMessage.success('登录成功')
        router.push('/home')
      }
      else {
        ElMessage.error('登录验证未通过')
      }
    }
    catch (error: any) {
      ElMessage({
        message: error,
        type: 'error',
      })
    }
  })
}

/**
 * 显示本地存储的用户数据
 */
function showLocalUserData() {
  const localUserData: RUserData = local.getItem(USER_DATA_KEY)
  // 如果本地存储有用户数据,就回显账号
  if (localUserData?.username) {
    userAccount.value.username = localUserData.username
  }

  // 如果是记住密码，并且本地有密码,就回显密码
  const isRememberPw = local.getItem(IS_REMEMBER_PW_KEY)
  if (isRememberPw && localUserData?.password) {
    userAccount.value.password = localUserData.password
  }
}

onMounted(() => {
  showLocalUserData()
})
</script>

<template>
  <div class="user-login">
    <el-form ref="loginFormRef" label-width="auto" :model="userAccount" :rules="userDataRules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="userAccount.username" placeholder="Please input" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userAccount.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">

</style>
