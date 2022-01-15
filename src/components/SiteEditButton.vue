<script setup>
import { Edit } from '@element-plus/icons-vue'
import { useMutation } from '@urql/vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: String,
  type: String,
})

const confirmDialog = ref(false)
const id = toRef(props, 'id')
const router = useRouter()

const deleteItem = useMutation(
  `mutation ($_id: ObjectId) {
    ${props.type} (query: {
      _id: $_id,
    }) {
      _id
    }
  }`,
)
// TODO Make this an edit function
const handleClick = () => {
  deleteItem.executeMutation({ _id: id.value })
  confirmDialog.value = false
  router.push('/property')
}

</script>

<template>
  <el-button type="primary" :icon="Edit" @click="confirmDialog = true" />
  <el-dialog v-model="confirmDialog" title="Delete" width="300px">
    <span>
      Are you sure?
    </span>
    <template #footer>
      <span>
        <el-button @click="confirmDialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleClick()">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
