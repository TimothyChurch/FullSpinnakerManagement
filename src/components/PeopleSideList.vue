<script setup>
const props = defineProps({
  data: Object,
  fetching: Boolean,
  error: Object,
})

const types = computed(() => {
  if (props.data.value)
    Object.keys(props.data)
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
      <div v-for="type in Object.keys(props.data)" :key="type">
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="person in props.data[type]" :key="person.name" class="py-4 flex">
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                {{ person }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
