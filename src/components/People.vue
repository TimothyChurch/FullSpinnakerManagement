<script setup>
import { gql, useQuery } from '@urql/vue'

const Owners = gql`
  query {
    owners {
      firstName
      lastName
    }
  }
`

const results = useQuery({ query: Owners })

const data = results.data
const fetching = results.fetching
const error = results.error
</script>

<template>
  <div>
    <h1>Data: {{ data?.owners }}</h1>
    <h1>Fetching: {{ fetching }}</h1>
    <h1>Error: {{ error }}</h1>
  </div>
</template>
