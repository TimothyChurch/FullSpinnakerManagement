<script>
</script>

<template>
  <el-container>
    <el-aside width="100px" height="100vh">
      <AdminSideNav />
    </el-aside>
    <el-main class="LayoutMain">
      <router-view />
      <Forms />
    </el-main>
  </el-container>
</template>

<style scoped>
  .LayoutMain {
    padding: 0;
    height: 100vh
  }

</style>
