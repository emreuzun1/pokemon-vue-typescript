<template>
  <div class="join grid grid-cols-2 gap-4">
    <button
      class="join-item btn btn-outline"
      @click="pagination(false)"
      :disabled="props.isStart"
    >
      Previous page
    </button>
    <button
      class="join-item btn btn-outline"
      @click="pagination(true)"
      :disabled="props.isEnd"
    >
      Next
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  pagination: (value: boolean) => void;
  isStart: boolean;
  isEnd: boolean;
}>();
</script>
