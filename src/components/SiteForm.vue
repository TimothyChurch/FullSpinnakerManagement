<script setup>
import { schema } from '~/composables/form'

</script>

<template>
  <el-form ref="formRef" :model="form">
    <el-form-item v-for="item in schema" :key="item.label" :label="item.label">
      <el-input v-if="item.type == 'input'" />
      <el-select v-if="item.type == 'select'">
        <el-option v-for="option in item.options" :key="option.name" :label="option.label" :value="option.value" />
      </el-select>
      <el-checkbox :size="item.size ? item.size : 'small'" />
      <el-date-picker :type="item.date ? item.date : 'date'" :placeholder="item.placeholder" />
    </el-form-item>
  </el-form>
</template>
