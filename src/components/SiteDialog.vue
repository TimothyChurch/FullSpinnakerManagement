<script setup>
import { showDialog } from '~/composables/dialog'

</script>

<template>
  <el-dialog v-model="showDialog">
    <slot />
  </el-dialog>
</template>
