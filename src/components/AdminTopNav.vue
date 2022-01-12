<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <el-card padding-bottom="10 0" align="middle">
    <el-row :gutter="20" align="middle">
      <el-col :span="8">
        <el-input
          class="w-50 m-2"
          placeholder="Search...."
        >
          <template #prepend>
            <el-icon class="el-input_icon">
              <search />
            </el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <SiteQuickAdd />
      </el-col>
    </el-row>
  </el-card>
</template>
