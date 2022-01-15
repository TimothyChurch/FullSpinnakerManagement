<script setup>
import { House } from '@element-plus/icons-vue'
const props = defineProps({
  data: Object,
  fetching: Boolean,
  error: Object,
})

</script>

<template>
  <div>
    <div v-if="props.fetching">
      {{ props.fetching }}
      <h1>Loading....</h1>
    </div>
    <div v-else-if="props.error">
      <h1>Error: {{ props.error }}</h1>
    </div>
    <div v-else height="100vh">
      <div>
        <h1>Header area</h1>
      </div>
      <el-scrollbar height="100vh">
        <div v-for="property in props.data.properties" :key="property.name" flex="auto">
          <router-link :to="`/property/${property._id}`">
            <el-card class="list-card" :body-style="{ padding: '5px' }">
              <el-row>
                <el-col :span="5">
                  <el-avatar :size="50" :icon="House" />
                </el-col>
                <el-col :span="18">
                  <p class="text-sm font-medium text-gray-900">
                    {{ property.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ property.status }}
                  </p>
                </el-col>
              </el-row>
            </el-card>
          </router-link>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
  .list-card{
    padding: 0 0 0 0 !important;
  }
</style>
