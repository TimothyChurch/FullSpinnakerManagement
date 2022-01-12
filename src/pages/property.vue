<script setup>
import { usePropertiesQuery } from '~/graphql/types'

const { data, fetching, error } = usePropertiesQuery()
</script>

<template>
  <el-container>
    <el-aside>
      <PropertySideList :data="data" :fetching="fetching" :error="error" />
    </el-aside>
    <!-- Primary column -->
    <el-main class="property-main">
      <el-container>
        <el-header class="top-nav">
          <AdminTopNav />
        </el-header>
        <el-main class="property-sub-main">
          <router-view />
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<style scoped>
  .top-nav{
    padding: 0 0 0 0 !important;
    height: auto
  }
  .property-main{
    padding: 10px 10px 10px 10px !important;
  }
  .property-sub-main{
    padding: 10px 0 0 0 !important;
  }
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
