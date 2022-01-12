<script setup>
import { usePropertyQuery } from '~/graphql/types'

const props = defineProps({
  id: String,
})

const _id = toRef(props, 'id')

const { data, fetching, error } = usePropertyQuery({ variables: { _id } })

</script>

<template>
  <div>
    <div v-if="fetching">
      {{ fetching }}
      <h1>Loading....</h1>
    </div>
    <div v-else-if="error">
      <h1>Error: {{ error }}</h1>
    </div>
    <div v-else>
      <el-container>
        <el-header class="TopDetails">
          <PropertyTopDetails :property="data.property" />
        </el-header>
        <el-container>
          <el-main class="main-tabs">
            <PropertyMainTabs />
          </el-main>
          <el-aside class="side-details">
            <PropertySideDetails :property="data.property" />
          </el-aside>
        </el-container>
      </el-container>
      {{ data }}
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>

<style scoped>
.TopDetails{
  height: auto;
  padding: 0 0 0 0 !important;
}
.main-tabs{
  padding: 10px 10px 0 0 !important;
}
.side-details{
  padding: 10px 0 0 0 !important;
}
</style>
