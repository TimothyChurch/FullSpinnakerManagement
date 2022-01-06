<script setup>
import { PencilAltIcon } from '@heroicons/vue/outline'
import { setComponent, toggleDialog } from '~/composables/dialog'

const setDialog = (form) => {
  setComponent.value = form
  toggleDialog()
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
      <PencilAltIcon class="block h-6 w-6" aria-hidden="true" />
    </MenuButton>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="setDialog('FormOwner')">
              Owner
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="setDialog('FormProperty')">
              Property
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
