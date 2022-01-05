<script setup>
import {
  HomeIcon,
  TemplateIcon,
  UserIcon,
} from '@heroicons/vue/outline'

const sidebarNavigation = [
  { name: 'Dashboard', to: '/dashboard', icon: TemplateIcon, current: false }, // TODO Set determine current based on route
  { name: 'People', to: '/people', icon: UserIcon, current: false },
  { name: 'Property', to: '/property', icon: HomeIcon, current: false },
]

</script>

<template>
  <nav aria-label="Sidebar" class="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
    <div class="relative w-20 flex flex-col p-3 space-y-3">
      <div v-for="item in sidebarNavigation" :key="item.name" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700', 'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']">
        <router-link :to="item.to">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </router-link>
      </div>
    </div>
  </nav>
</template>
