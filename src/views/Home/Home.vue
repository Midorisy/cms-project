<script setup lang="ts">
</script>

<template>
  <div class="home">
    <el-container>
      <el-aside width="250px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home{
  height: 100%;
  .el-container{
    height: 100%;
    .el-aside{
      background-color: pink;
    }
    .el-container{
      background-color: aquamarine;
    }
  }
}
</style>
