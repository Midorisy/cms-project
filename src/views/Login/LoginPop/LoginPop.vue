<script setup lang="ts">
import { ref } from 'vue'
import PhoneLogin from './PhoneLogin/PhoneLogin.vue'
import UserLogin from './UserLogin/UserLogin.vue'

const isRemember = ref<boolean>(true)

const activeTab = ref('account')

// 获取账号登录的组件实例
const userLoginRef = ref<InstanceType<typeof UserLogin>>()

function userLoginClick() {
  console.log('父组件调用')
  userLoginRef.value?.userLoginEvent()
}
</script>

<template>
  <div class="login-pop">
    <div class="login-pop-head">
      后台管理系统
    </div>
    <!-- 登录部分开始 -->
    <div class="login-pop--body">
      <el-tabs
        v-model="activeTab" :style="{
          boxShadow: `var(--el-box-shadow-light)`,
        }" type="border-card" class="body-tabs" :stretch="true"
      >
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="pane-label">
              <el-icon>
                <User />
              </el-icon>
              <span>账号登录</span>
            </div>
          </template>
          <template #default>
            <UserLogin ref="userLoginRef" />
          </template>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="pane-label">
              <el-icon>
                <Iphone />
              </el-icon>
              <span>手机登录</span>
            </div>
          </template>
          <template #default>
            <PhoneLogin />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 登录部分结束 -->
    <div class="login-pop-foot">
      <div class="login-password-option">
        <div class="left">
          <el-checkbox v-model="isRemember" class="left-checkbox" label="记住密码" size="small" />
        </div>
        <div class="right">
          <el-link class="right-link" type="primary">
            忘记密码？
          </el-link>
        </div>
      </div>
      <div class="login-btn">
        <el-button class="login-elBtn" type="primary" @click="userLoginClick">
          立即登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-pop {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 250px;

  .login-pop-head {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .login-pop--body {
    width: 100%;
    flex: 1;

    .body-tabs {
      height: 100%;

      .pane-label {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
      }
    }
  }

  .login-pop-foot {
    height: 50px;
    width: 100%;

    .login-password-option {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        .left-checkbox {
          color: #666;
        }
      }

      .right {
        .right-link {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }

    .login-btn {
      height: 50px;

      .login-elBtn {
        width: 100%;
      }
    }
  }
}
</style>
