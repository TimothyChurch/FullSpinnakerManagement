<script setup>
const props = defineProps({
  property: Object,
})
const property = toRef(props, 'property')

</script>

<template>
  <el-card>
    <el-row align="middle">
      <el-col :span="2">
        <el-avatar size="large" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </el-col>
      <el-col :span="12">
        <h1>{{ property.name }}</h1>
        <h1>{{ property.address.street }}</h1>
        <h1>{{ property.address.city }}, {{ property.address.state }} {{ property.address.zip }}</h1>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
</style>
