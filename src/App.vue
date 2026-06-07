<script setup lang="ts">
import { ref } from 'vue';
import UniversalPagination from './UniversalPagination.vue';
const page = ref(1);
</script>

<template>
  <UniversalPagination 
  v-model="page"
  :totalPage="50"
  :pageSize="10"
  :pageRange="2"
  :firstEllipsis="true"
  :lastEllipsis="true"
  :nextText="'Next >'"
  :prevText="'< Prev'"
  variant="default"
  position="center"

  @change="(p) => console.log('Page changed to:', p)"
/>

 
 
</template>
