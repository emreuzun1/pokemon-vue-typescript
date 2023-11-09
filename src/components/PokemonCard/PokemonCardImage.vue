<template>
  <figure>
    <img :src="image" :alt="name" class="w-full" />
  </figure>
</template>
<script setup lang="ts">
defineProps<{ image: string; name: string }>();
</script>
