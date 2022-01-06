<script setup>
import { setComponent, showDialog } from '~/composables/dialog'

const comp = computed(() => {
  return setComponent.value
})

</script>

<template>
  <el-dialog v-model="showDialog">
    {{ setComponent }}
    {{ comp }}
    <component :is="comp" />
  </el-dialog>
</template>
