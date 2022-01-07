<script setup>
import { setComponent } from '~/composables/dialog'
</script>

<template>
  <SiteDialog>
    <FormOwner v-if="setComponent == 'FormOwner'" />
    <FormProperty v-if="setComponent == 'FormProperty'" />
  </SiteDialog>
</template>
