<script setup>
const today = ref(new Date())
</script>

<template>
  <el-calendar v-model="today" />
</template>
