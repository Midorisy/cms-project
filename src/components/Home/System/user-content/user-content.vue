<script setup lang="ts">
import { computed, onMounted } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore.ts'

const systemUserStore = useSystemUserStore()
const userSearchInfoList = computed(() => systemUserStore?.userSearchInfo?.list ?? [])

onMounted(async () => {
  // 初始化时获取用户列表
  await systemUserStore.getUserSearchList()
})
</script>

<template>
  <div class="user-content">
    <div class="content-header">
      <div class="title">
        用户列表
      </div>
      <div class="btn">
        <el-button type="primary">
          新建用户
        </el-button>
      </div>
    </div>
    <div class="content-table">
      <el-table :data="userSearchInfoList" :border="true" style="width: 100%">
        <el-table-column align="center" type="selection" />
        <el-table-column align="center" :width="60" type="index" label="序号" />
        <el-table-column prop="name" label="用户名" />
        <el-table-column prop="realname" label="真实姓名" />
        <el-table-column prop="cellphone" label="手机号码" />
        <el-table-column align="center" prop="enable" :width="60" label="状态" />
        <el-table-column prop="createAt" label="创建时间" />
        <el-table-column prop="updateAt" label="更新时间" />
        <el-table-column label="操作">
          <template #default>
            <el-button type="primary" size="small">
              编辑
            </el-button>
            <el-button type="danger" size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-content{
    margin-top: 50px;
    width: 100%;
    height: 640px;
    background-color: #fff;
   .content-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    .title {
        font-size:large;
        font-weight: bold;
    }
   }
}
</style>
