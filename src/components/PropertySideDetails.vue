<script setup>
import { User } from '@element-plus/icons-vue'
const props = defineProps({
  property: Object,
})

const property = toRef(props, 'property')

</script>

<template>
  <el-card>
    <el-descriptions
      class="margin-top"
      title="Property Details"
      :column="3"
      size="28px"
      border
    >
      <el-descriptions-item>
        <template #label>
          <div>
            <el-icon margin-right="6">
              <user />
            </el-icon>
            Owner
          </div>
        </template>
        Timothy Church
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>
