<template>
  <MainHeader />
  <div class="pb-[300px] pt-[56px] lg:pt-[120px]">
    <slot />
  </div>
  <footer>FOOTER</footer>
</template>

<script setup lang="ts">
//
import { useRouter, useRoute } from 'vue-router';

//取得所有路由 getRoute
const router = useRouter();
const route = useRoute();

//客戶端才執行
if (process.client) {
  console.log(router.getRoutes());
}
</script>

