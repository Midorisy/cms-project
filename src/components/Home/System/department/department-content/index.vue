<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { computed, onMounted, ref } from 'vue'
import useSystemUserStore from '@/store/Home/System/useSystemUserStore.ts'
import { formatDateByUtc } from '@/utils/formatDate/formatDate.ts'
import contentConfig from './content.config.ts'

const emit = defineEmits(['clickCreateUser', 'clickEditUser'])

const systemUserStore = useSystemUserStore()
// 进入页面时默认请求所有数据
const userSearchTypeInfoList = computed(() => systemUserStore?.userSearchInfo?.list ?? [])

const paginationConfig = ref({
  currentPage: 1,
  pageSize: 10,
})

/**
 * 点击新建用户按钮
 * 触发新建用户事件
 * 发送获取部门列表请求、角色列表请求
 */
function CreateUserBtnClick() {
  emit('clickCreateUser')
  systemUserStore.getDepartmentList()
  systemUserStore.getRoleTypeList()
}

function handleEdit(row: any) {
  emit('clickEditUser', row)
  systemUserStore.getDepartmentList()
  systemUserStore.getRoleTypeList()
}

/**
 * 删除用户
 * @param row 选中的用户行数据
 */
async function handleDelete(row: any) {
  const res = await systemUserStore.deleteUserInfo(row.id)
  if (res.code === 200) {
    ElMessage.success('删除成功')
  }
  // 删除成功后，刷新用户列表
  systemUserStore.getSearchTypechList(contentConfig.contentType, {}, paginationConfig.value)
}

/**
 * 分页器改变时触发
 */
function handleSizeChange() {
  systemUserStore.getSearchTypechList(contentConfig.contentType, {}, paginationConfig.value)
}

/**
 * 当前页改变时触发
 */
function handleCurrentChange() {
  systemUserStore.getSearchTypechList(contentConfig.contentType, {}, paginationConfig.value)
}

onMounted(async () => {
  // 初始化时获取部门列表
  await systemUserStore.getSearchTypechList(contentConfig.contentType, {}, paginationConfig.value)
})
</script>

<template>
  <div class="user-content">
    <div class="content-header">
      <div class="title">
        {{ contentConfig.header.title }}
      </div>
      <div class="btn">
        <el-button type="primary" @click="CreateUserBtnClick">
          {{ contentConfig.header.btnName }}
        </el-button>
      </div>
    </div>
    <div class="content-table">
      <el-table :data="userSearchTypeInfoList" :border="true" style="width: 100%">
        <!-- 遍历所有的表格列 -->
        <el-table-column v-for="item in contentConfig.elTable" :key="item.prop" v-bind="item">
          <template v-if="item.slotName" #default="{ row }">
            {{ formatDateByUtc(row[item.prop]) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" :width="140">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button type="danger" size="small" @click="handleDelete(row)">
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
          :total="systemUserStore?.userSearchInfo?.totalCount ?? 0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-content{
    margin-top: 20px;
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
