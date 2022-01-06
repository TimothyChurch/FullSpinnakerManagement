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
  { name: 'name', model: form.name },
  { name: 'status', model: form.status },
  { name: 'street', model: form.address.street },
  { name: 'city', model: form.address.city },
  { name: 'state', model: form.address.state },
  { name: 'zip', model: form.address.zip },
  { name: 'bedrooms', model: form.details.bedrooms },
  { name: 'bathrooms', model: form.details.bathrooms },
  { name: 'guests', model: form.details.guests },
]

const addProeprty = useAddPropertyMutation()

</script>

<template>
  <el-form ref="formRef" :model="form">
    <el-form-item v-for="item in schema" :key="item.name" :label="item.name">
      <el-input :v-model="item.model" />
    </el-form-item>
  </el-form>
</template>
