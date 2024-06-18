<template>
  <div>{{ dataListQuery }}</div>
  <div>{{ typeQuery }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const dataListQuery = ref(route.query.dataList ?? '');
const typeQuery = ref(route.query.type ?? '');

watchEffect(() => {
  dataListQuery.value = route.query.dataList ?? '';
  typeQuery.value = route.query.type ?? '';
});
</script>

<style></style>

