<script setup lang="ts">
import * as Realm from 'realm-web'
import { cacheExchange, createClient, dedupExchange, fetchExchange, provideClient } from '@urql/vue'
import { authExchange } from '@urql/exchange-auth'
import schema from '~/graphql/graphql.schema.json'

useHead({
  title: 'Full Spinnaker',
  meta: [{ name: 'description', content: 'Management app for vacation rentals' }],
})

const app = Realm.getApp('fullspinnaker-ydwol') // TODO move to config

const client = createClient({
  url:
    'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/fullspinnaker-ydwol/graphql', // TODO move to config
  exchanges: [
    dedupExchange,
    cacheExchange({ schema }),
    authExchange({
      addAuthToOperation: ({
        authState,
        operation,
      }) => {
        // the token isn't in the auth state, return the operation without changes
        if (!authState)
          return operation
        // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        const fetchOptions
          = typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {}

        return {
          ...operation,
          context: {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                Authorization: `Bearer ${authState.token}`,
              },
            },
          },
        }
      },
      getAuth: async({ authState }) => {
        // for initial launch, fetch the auth state from storage (local storage, async storage etc)
        if (!authState) {
          if (app.currentUser) {
            await app.currentUser.refreshAccessToken()
            const token = app.currentUser.accessToken
            const refreshToken = app.currentUser.refreshToken
            return { token, refreshToken }
          }
          return null
        }
      },
    }),
    fetchExchange,
  ],
})

provideClient(client)
</script>

<template>
  <router-view />
</template>
