<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import type { TypeLoginResponse, TypeUserData } from '@/types/Login/LoginTypes'
import type { IApiResponseType } from '@/types/service/serviceType'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import useLoginStore from '@/store/Login/useLoginStore.ts'

defineExpose({
  userLoginEvent,
})

const loginStore = useLoginStore()

const userData = ref<TypeUserData>({
  username: '123456',
  password: '123456',
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

function userLoginEvent() {
  loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      const result: IApiResponseType<TypeLoginResponse> = await loginStore.userLogin(userData.value)
      console.log(result)
      ElMessage.success('登录成功')
    }
    else {
      ElMessage.error('登录验证未通过')
    }
  })
}
</script>

<template>
  <div class="user-login">
    <el-form ref="loginFormRef" label-width="auto" :model="userData" :rules="userDataRules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="userData.username" placeholder="Please input" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userData.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">

</style>
