<script setup>
import * as Realm from 'realm-web'
import { useAddPropertyMutation, usePeopleQuery } from '~/graphql/graphql'
import { toggleDialog } from '~/composables/dialog'

const form = reactive({
  name: '',
  status: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  bedrooms: '',
  bathrooms: '',
  guests: '',
  owner: '',
  cleaner: '',
})

const status = [
  { label: 'Active', value: 'active' },
  { label: 'Pipeline', value: 'pipeline' },
  { label: 'Pending', value: 'pending' },
  { label: 'Ended', value: 'ended' },
  { label: 'Lost', value: 'lost' },
]

const { data: people, fetching: ownerFetching, error: ownerError } = usePeopleQuery()
const addProperty = useAddPropertyMutation()
// TODO move execute function to script and add recursive addition to owner and cleaner
const error = addProperty.error
const fetching = addProperty.fetching
</script>

<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    {{ form.owners }}
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Status">
      <el-select v-model="form.status">
        <el-option
          v-for="option in status"
          :key="option.label"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Street">
      <el-input v-model="form.street" />
    </el-form-item>
    <el-form-item label="City">
      <el-input v-model="form.city" />
    </el-form-item>
    <el-form-item label="State">
      <el-input v-model="form.state" />
    </el-form-item>
    <el-form-item label="Zip">
      <el-input v-model="form.zip" />
    </el-form-item>
    <el-form-item label="Bedrooms">
      <el-input v-model="form.bedrooms" />
    </el-form-item>
    <el-form-item label="Bathrooms">
      <el-input v-model="form.bathrooms" />
    </el-form-item>
    <el-form-item label="Guests">
      <el-input v-model="form.guests" />
    </el-form-item>
    <el-form-item label="Owner">
      <el-select v-model="form.owner">
        <el-option
          v-for="owner in people?.owners"
          :key="owner.firstName"
          :label="owner.firstName"
          :value="owner._id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Cleaner">
      <el-select v-model="form.cleaner">
        <el-option
          v-for="cleaner in people?.cleaners"
          :key="cleaner.company"
          :label="cleaner.company"
          :value="cleaner._id"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="addProperty.executeMutation(form)">
        Save
      </el-button>
      <el-button @click="toggleDialog()">
        Cancel
      </el-button>
    </el-form-item>
  </el-form>
</template>
