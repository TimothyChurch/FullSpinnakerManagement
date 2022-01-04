<script setup>
import { gql, useQuery } from '@urql/vue'

const Properties = gql`
query Properties {
  properties {
    name
    status
  }
}
`

const { data, fetching, error } = useQuery({ query: Properties })
</script>

<template>
  <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
    <!-- Primary column -->
    <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
      <router-view />
      {{ error }}
    </section>
    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
      <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto">
        <PropertySideList :data="data" :fetching="fetching" :error="error" />
      </div>
    </aside>
  </main>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
