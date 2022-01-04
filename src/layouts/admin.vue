<script>
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Top nav-->
    <AdminTopNav />
    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Narrow sidebar-->
      <AdminSideNav />
      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last">
          <router-view />
          <SiteDialog />
        </section>
      </main>
    </div>
  </div>
</template>
