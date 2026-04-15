<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore.ts'
import { formatDateByUtc } from '@/utils/formatDate/formatDate.ts'

const systemUserStore = useSystemUserStore()
const userSearchInfoList = computed(() => systemUserStore?.userSearchInfo?.list ?? [])

const paginationConfig = ref({
  currentPage: 1,
  pageSize: 10,
})

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
        <el-table-column align="center" prop="enable" :width="80" label="状态">
          <template #default="{ row }">
            <el-button :type="row.enable ? 'primary' : 'danger'" size="small">
              {{ row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间">
          <template #default="{ row }">
            {{ formatDateByUtc(row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间">
          <template #default="{ row }">
            {{ formatDateByUtc(row.updateAt) }}
          </template>
        </el-table-column>
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
      <div class="pagination">
        <el-pagination
          v-model:current-page="paginationConfig.currentPage"
          v-model:page-size="paginationConfig.pageSize"
          :page-sizes="[5, 10, 15, 20]"
          size="default"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
        />
      </div>
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
   .content-table{
    padding: 0 20px;
    .pagination{
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
   }
}
</style>
