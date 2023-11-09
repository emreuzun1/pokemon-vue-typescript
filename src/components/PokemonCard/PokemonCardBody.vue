<script setup lang="ts">
import PokemonTypes from "../PokemonTypes.vue";
import type { PokemonType } from "../../interfaces/Pokemon.ts";
defineProps<{ name: string; id: number; types: PokemonType[] }>();
</script>

<template>
  <div class="card-body">
    <h2 class="card-title">
      {{ name.toUpperCase() }}
    </h2>
    <p class="font-bold">#{{ id }}</p>
    <PokemonTypes :types="types" />
  </div>
</template>
