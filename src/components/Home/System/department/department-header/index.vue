<script setup lang="ts">
import { ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore'
import headerConfig from './hearder.config'

const systemUserStore = useSystemUserStore()

const searchForm = ref()

const searchFormData = ref<{
  [index: string]: any
}>(headerConfig.defaultData)

function resetForm() {
  searchForm.value.resetFields()
}

function startSearch() {
  // 默认的校验表单
  searchForm.value.validate((valid: boolean) => {
    if (valid) {
      systemUserStore.getSearchTypechList(headerConfig.searchType, searchFormData.value)
    }
    else {
      console.log('校验失败')
    }
  })
}
</script>

<template>
  <div class="user-search">
    <!-- header表单 -->
    <el-form ref="searchForm" :model="searchFormData" label-width="100px">
      <el-row>
        <el-col v-for="item in headerConfig['el-form-item']" :key="item.prop" :span="8">
          <template v-if="item.type === 'input'">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-input v-model="searchFormData[item.prop]" :type="item.type" :placeholder="item.placeholder" />
            </el-form-item>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-form-item :prop="item.prop" :label="item.label">
              <el-select v-model="searchFormData[item.prop]" :placeholder="item.placeholder">
                <el-option v-for="option in item.options" :key="option.value" :value="option.value" :label="option.label" />
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="item.type === 'daterange'">
            <el-form-item :prop="item.prop" :label="item.label">
              <el-date-picker
                v-model="searchFormData[item.prop]"
                :type="item.type"
                :range-separator="item.rangeSeparator"
                :start-placeholder="item.startPlaceholder"
                :end-placeholder="item.endPlaceholder"
              />
            </el-form-item>
          </template>
        </el-col>
        <el-col :span="8" :offset="20">
          <el-button type="primary" @click="resetForm">
            重置
          </el-button>
          <el-button type="primary" @click="startSearch">
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
