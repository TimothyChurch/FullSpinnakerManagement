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
})

const schema = [
  { name: 'name', model: form.name, class: 'sm:col-span-6' },
  { name: 'status', model: form.status, class: 'sm:col-span-6' },
  { name: 'street', model: form.address.street, class: 'sm:col-span-6' },
  { name: 'city', model: form.address.city, class: 'sm:col-span-6' },
  { name: 'state', model: form.address.state, class: 'sm:col-span-6' },
  { name: 'zip', model: form.address.zip, class: 'sm:col-span-6' },
  { name: 'bedrooms', model: form.details.bedrooms, class: 'sm:col-span-6' },
  { name: 'bathrooms', model: form.details.bathrooms, class: 'sm:col-span-6' },
  { name: 'guests', model: form.details.guests, class: 'sm:col-span-6' },
]

const addProeprty = useAddPropertyMutation()

</script>

<template>
  <el-form ref="formRef" :model="form">
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item>
  </el-form>
</template>
