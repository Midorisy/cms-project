<script setup lang="ts">
import LoginPop from './LoginPop/LoginPop.vue'
</script>

<template>
  <div class="login">
    <LoginPop class="login-pop" />
  </div>
</template>

<style scoped lang="scss">
.login {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('@/assets/img/login-bg.svg');
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;

}
</style>
