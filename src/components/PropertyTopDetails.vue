<script setup>
const props = defineProps({
  property: Object,
})
const property = toRef(props, 'property')
</script>

<template>
  <el-card>
    <el-row align="middle" :gutter="10">
      <el-col :span="2">
        <el-avatar size="large" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </el-col>
      <el-col :span="19">
        <h1>{{ property.name }}</h1>
        <h1>{{ property.address.street }}</h1>
        <h1>{{ property.address.city }}, {{ property.address.state }} {{ property.address.zip }}</h1>
      </el-col>
      <el-col :span="1" class="column">
        <SiteEditButton :id="property._id" type="updateOneProperty" />
      </el-col>
      <el-col :span="1" class="column">
        <SiteDeleteButton :id="property._id" type="deleteOneProperty" />
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
  .column{
    min-width: auto !important;
    max-width: 100px !important;
  }
</style>
