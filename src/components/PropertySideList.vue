<script setup>
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
    <div v-else>
      <el-scrollbar height="inherit">
        <el-card v-for="property in props.data.properties" :key="property.name" class="py-4 flex">
          <router-link :to="`/property/${property._id}`">
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                {{ property.name }}
              </p>
              <p class="text-sm text-gray-500">
                {{ property.status }}
              </p>
            </div>
          </router-link>
        </el-card>
      </el-scrollbar>
    </div>
  </div>
</template>
