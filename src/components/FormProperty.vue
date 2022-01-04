<script setup>
import { gql, useMutation } from '@urql/vue'

const form = reactive({
  name: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
})

const insertOneOwner = gql`
mutation ($firstName: String, $lastName: String, $phone: String, $email: String, $address: String) {
  insertOneOwner(data: {
    firstName: $firstName, 
    lastName: $lastName, 
    phone: $phone, 
    email: $email, 
    address: $address
  }) {
    firstName
    lastName
    phone
    email
    address
  }
}
`

const addOwner = useMutation(insertOneOwner)

</script>

<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Add Owner
          </h3>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div class="mt-1">
              <input
                id="first-name"
                v-model="form.firstName"
                type="text"
                name="first-name"
                autocomplete="given-name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div class="mt-1">
              <input
                id="last-name"
                v-model="form.lastName"
                type="text"
                name="last-name"
                autocomplete="family-name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div class="mt-1">
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                name="phone"
                autocomplete="phone"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="address" class="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div class="mt-1">
              <input
                id="address"
                v-model="form.address"
                type="text"
                name="address"
                autocomplete="address"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="flex justify-end">
          <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button
            type="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click.prevent="addOwner.executeMutation(form)"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
