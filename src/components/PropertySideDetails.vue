<script setup>
import { ToiletPaper, User } from '@element-plus/icons-vue'
const props = defineProps({
  property: Object,
})

const property = toRef(props, 'property')

const details = [
  { name: 'Owner' },
  { name: 'Cleaner' },
  { name: 'Entry Code' },
  { name: 'HOT number' },
  { name: 'Start Date' },
  { name: 'Subscription Fee' },
  { name: 'PMS ID' },
]

const active = ref(['1'])

</script>

<template>
  <el-card>
    <el-collapse v-model="active">
      <el-collapse-item title="Details" name="1">
        <el-descriptions
          class="margin-top"
          :column="1"
          border
        >
          <el-descriptions-item v-for="detail in details" :key="detail.name" :label="detail.name">
            {{ detail.data }}
            {{ property[detail.data] }}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>
