<script setup>
import { gql, useQuery } from '@urql/vue'

const Owners = gql`
  query Owners {
  owners {
    firstName
    lastName
    email
    }
  }
`

const results = useQuery({ query: Owners })

const data = results.data
const fetching = results.fetching
const error = results.error
</script>

<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="person in data?.owners" :key="person.firstName" class="py-4 flex">
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          {{ person.firstName }} {{ person.lastName }}
        </p>
        <p class="text-sm text-gray-500">
          {{ person.email }}
        </p>
      </div>
    </li>
  </ul>
</template>
