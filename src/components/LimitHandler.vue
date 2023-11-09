<template>
  <div class="w-full">
    <div class="form-control w-full max-w-xs my-4 float-right">
      <label class="label">
        <span class="label-text">Pokemon per Page</span>
      </label>
      <select class="select select-bordered" v-model="_limit">
        <option
          v-for="limitValue in [20, 30, 50]"
          :key="limitValue"
          :selected="_limit === limitValue"
        >
          {{ limitValue }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  limit: string;
  setLimit: (newLimit: number) => void;
}>();
const _limit = ref<string>(props.limit);

watch(_limit, (newLimit) => {
  props.setLimit(parseInt(newLimit));
});
</script>

<style></style>
