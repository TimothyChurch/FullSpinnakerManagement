<script setup>
import db from '../testdb'
import useRealmFunctions from '~/composables/realmFunctions'

const form = reactive({
  address: '',
  bedrooms: '',
  bathrooms: '',
  accommodates: '',
})
const path = '/client/v1/rentalizer/estimate'
const results = () => { return useRealmFunctions('airdna', path, form) }

</script>

<template>
  <el-card>
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="Address">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-col :span="8">
        <el-form-item label="Bedrooms">
          <el-select v-model="form.bedrooms">
            <el-option v-for="index in 6" :key="index" :label="index" :value="index.toString()" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Bathrooms">
          <el-select v-model="form.bathrooms">
            <el-option v-for="index in 6" :key="index" :label="index" :value="index.toString()" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Guests">
          <el-select v-model="form.accommodates">
            <el-option v-for="index in 20" :key="index" :label="index" :value="index.toString()" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-button title="run" @click="results()">
          Run
        </el-button>
      </el-col>
    </el-form>
  </el-card>
  <el-card>
    {{ db.property_stats }}
  </el-card>
</template>
