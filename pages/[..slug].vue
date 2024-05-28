<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <h1 class="text-h2 text-red-500">404 Not Found</h1>
    <p class="tezt-h3">找不到頁面</p>
    <p class="text-h3">{{ route.params.slug }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

definePageMeta({
  layout: false
});
</script>
