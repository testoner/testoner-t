<script lang="ts" setup>
import HeaderUi from "@/components/ui/header/HeaderUi.vue";
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster/>
    <HeaderUi class="px-3 py-2 max-w-7xl mx-auto"></HeaderUi>
    <main class="px-3 py-2 max-w-7xl mx-auto flex flex-col gap-8">
      <RouterView></RouterView>
    </main>
</template>

<style scoped></style>
