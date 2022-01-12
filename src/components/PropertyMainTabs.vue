<script setup>
const activeTab = ref('Calendar')

const tabs = [
  { name: 'Calendar' },
  { name: 'Performance' },
  { name: 'Pricing' },
]

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('handledClick')
}
</script>

<template>
  <el-card>
    <el-tabs v-model="activeTab" stretch @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.name" :name="tab.name">
        <SiteCalendar />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
