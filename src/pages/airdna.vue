<script setup>
const options = [
  {
    label: 'Property Valuations',
    options: [
      {
        name: 'Rentalizer',
      },
      {
        name: 'Rentalizer Summary',
      },
    ],
  },
  {
    label: 'Listing Data',
    options: [
      {
        name: 'Comp List',
      },
      {
        name: 'Available',
      },
      {
        name: 'Single Property',
      },
    ],
  },
  {
    label: 'Market Data',
    options: [
      {
        name: 'Find Market',
      },
      {
        name: 'Summary',
      },
      {
        name: 'Monthly Revenue',
      },
      {
        name: 'Monthly RevPAR',
      },
      {
        name: 'Monthly ADR',
      },
      {
        name: 'Monthly Occupancy',
      },
      {
        name: 'Monthly Listing Counts',
      },
      {
        name: 'Future Daily Pricing',
      },
      {
        name: 'Future Rates and Supply',
      },
    ],
  },
  {
    label: 'Availability',
    options: [
      {
        name: 'Property Availability',
      },
    ],
  },
  {
    label: 'Smart Rates',
    options: [
      { name: 'Smart Rates' },
    ],
  },
]

const value = ref('')

</script>

<template>
  <el-container class="!p-2">
    <el-header class="!px-0 !h-auto">
      <el-card>
        <h1>Header</h1>
        <el-select v-model="value" placeholder="Select">
          <el-option-group v-for="group in options" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.name" :label="item.name" :value="item.name" />
          </el-option-group>
        </el-select>
      </el-card>
    </el-header>
    <el-main class="!py-2 !px-0">
      <el-card>
        <h1>Body</h1>
        <AirdnaRentalizer v-if="value == 'Rentalizer'" />
      </el-card>
    </el-main>
  </el-container>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
