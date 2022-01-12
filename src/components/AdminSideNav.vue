<script setup>
import { Files, House, User } from '@element-plus/icons-vue'

const sidebarNavigation = [
  { name: 'Dashboard', path: '/dashboard', icon: Files },
  { name: 'People', path: '/people', icon: User },
  { name: 'Property', path: '/property', icon: House },
]

</script>

<template>
  <el-card :body-style="{ padding: '0px', align: center }">
    <el-avatar />
    <el-menu :router="true">
      <el-menu-item v-for="item in sidebarNavigation" :key="item.name" :index="item.path">
        <div flex="auto">
          <component :is="item.icon" style="icon" />
        </div>
      </el-menu-item>
    </el-menu>
  </el-card>
</template>

<style scoped>
.label{
  font-size: small;
}
.card{
  padding: 0 !important
}
.icon{
  width: 30px;
  height: 30px;
}
</style>
