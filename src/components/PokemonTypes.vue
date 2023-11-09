<script setup lang="ts">
import { Type } from "../utils/getTypeColor";
import type { PokemonType } from "../interfaces/Pokemon.ts";

defineProps<{ types: PokemonType[] }>();
const getBgColor = (type: string) => {
  return Type[type];
};
</script>

<template>
  <ul class="flex gap-1">
    <li
      v-for="type in types"
      :key="type.name"
      :style="{
        backgroundColor: getBgColor(type.type.name),
        backgroundImage: getBgColor(type.type.name),
      }"
      class="p-1 rounded-lg"
    >
      <p class="text-lg text-slate-100">{{ type.type.name }}</p>
    </li>
  </ul>
</template>

<style></style>
