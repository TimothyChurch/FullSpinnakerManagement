<script setup>
const props = defineProps({
  data: Object,
  fetching: Boolean,
  error: String,
})

const keys = computed(() => {
  if (data.value)
    return Object.keys(data.value)
})

</script>

<template>
  <el-scrollbar>
    <ul role="list" class="divide-y divide-gray-200" overflow="auto">
      <li v-for="item in data?.owners" :key="item.name" class="py-4 flex">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            {{ item.name }}
          </p>
        </div>
      </li>
    </ul>
  </el-scrollbar>
</template>
