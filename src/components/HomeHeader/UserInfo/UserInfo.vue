<script setup lang="ts">
import defaultAvatar from '@/assets/img/avatar.jpg'
import useLoginStore from '@/store/Login/useLoginStore'

const loginStore = useLoginStore()
</script>

<template>
  <div class="user-info">
    <div class="notify-area">
      <el-icon class="dot">
        <Message />
      </el-icon>
      <el-icon><ChatDotRound /></el-icon>
      <el-icon><Search /></el-icon>
    </div>
    <div class="avatar-menu">
      <el-avatar :size="30" :src="defaultAvatar" />
      <el-dropdown>
        <span>
          {{ loginStore.userInfo.name ?? '用户' }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><SwitchButton /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/index.scss';
.user-info{
    @include flex-center;
    .notify-area{
        @include flex-center;
        font-size: 24px;
        .el-icon{
            position: relative;
            margin-left: 15px;
            &.dot::after{
                position: absolute;
                content: '';
                top: -5px;
                left: 25px;
                width: 8px;
                height: 8px;
                background-color: red;
                border-radius: 50%;
            }
        }
    }
    .avatar-menu{
        @include flex-center;
        margin-left: 16px;
        .el-dropdown {
            margin-left:10px;
            cursor: default;
        }
    }
}
</style>
