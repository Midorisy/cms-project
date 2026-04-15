<script setup lang="ts">
import { ref } from 'vue'

const searchForm = ref()

const searchFormData = ref({
  name: '',
  realName: '',
  cellphone: 0,
  enable: 1,
  createAt: [],
})

function resetForm() {
  searchForm.value.resetFields()
}
</script>

<template>
  <div class="user-search">
    <!-- header表单 -->
    <el-form ref="searchForm" :model="searchFormData" label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchFormData.name" placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realName" label="真实姓名">
            <el-input v-model="searchFormData.realName" placeholder="请输入真实姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="cellPhone" label="手机号码">
            <el-input v-model="searchFormData.cellphone" placeholder="请输入手机号码" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="enable" label="状态">
            <el-select v-model="searchFormData.enable" placeholder="please select your zone">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="searchFormData.createAt"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="20">
          <el-button type="primary" @click="resetForm">
            重置
          </el-button>
          <el-button type="primary">
            查询
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.user-search{
  height: 250px;
  background-color: #fff;
  padding-top: 50px;
  padding-right: 50px;

  .el-form{
    .el-form-item{
      margin-bottom: 40px;
    }
  }
}
</style>
