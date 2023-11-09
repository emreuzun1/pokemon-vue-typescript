<template>
  <ul class="flex gap-1">
    <li v-for="stat in stats" :key="stat.stat.name" class="stat px-1">
      <div class="stat-figure">
        <img :src="getStatSvg(stat.stat.name)" alt="logo" />
      </div>
      <div class="stat-title">
        <p class="uppercase font-bold text-md">{{ stat.stat.name }}</p>
      </div>
      <div class="stat-value">{{ stat.base_stat }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PokemonStat } from "../interfaces/Pokemon.ts";
import hp from "/icons/hp.svg";
import attack from "/icons/attack.svg";
import defense from "/icons/defense.svg";
import specialAttack from "/icons/special-attack.svg";
import specialDefense from "/icons/special-defense.svg";
import speed from "/icons/speed.svg";

const getStatSvg = (name: string) => {
  switch (name) {
    case "hp":
      return hp;
    case "attack":
      return attack;
    case "defense":
      return defense;
    case "special-attack":
      return specialAttack;
    case "special-defense":
      return specialDefense;
    case "speed":
      return speed;
  }
};

defineProps<{ stats: PokemonStat[] }>();
</script>

<style></style>
