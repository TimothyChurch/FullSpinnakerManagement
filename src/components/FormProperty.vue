<script setup>
import { useAddPropertyMutation } from '~/graphql/graphql'

const form = reactive({
  name: '',
  status: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  details: {
    bedrooms: '',
    bathrooms: '',
    guests: '',
  },
  owner: [ObjectId],
  cleaner: [ObjectId],
})

const schema = [
  { name: 'name', model: 'form.name', class: 'sm:col-span-6' },
  { name: 'status', model: 'form.status', class: 'sm:col-span-6' },
  { name: 'street', model: 'form.address.street', class: 'sm:col-span-6' },
  { name: 'city', model: 'form.address.city', class: 'sm:col-span-6' },
  { name: 'state', model: 'form.address.state', class: 'sm:col-span-6' },
  { name: 'zip', model: 'form.address.zip', class: 'sm:col-span-6' },
  { name: 'bedrooms', model: 'form.details.bedrooms', class: 'sm:col-span-6' },
  { name: 'bathrooms', model: 'form.details.bathrooms', class: 'sm:col-span-6' },
  { name: 'guests', model: 'form.details.guests', class: 'sm:col-span-6' },
]

const addProeprty = useAddPropertyMutation()

</script>

<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Add Property
          </h3>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div v-for="item in schema" :key="item.name" :class="item.class">
            <label :for="item.name" class="block text-sm font-medium text-gray-700">
              {{ item.name }}
            </label>
            <div class="mt-1">
              <input
                :id="item.name"
                v-model="item.model"
                type="text"
                :name="item.name"
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
