<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent, ref, watchEffect } from "vue";
import { PokemonListResponse } from "../interfaces/Pokemon";
import { pokemonStore } from "../stores/pokemon";
import LimitHandler from "../components/LimitHandler.vue";
import PokemonCard from "../components/PokemonCard/PokemonCard.vue";
import Pagination from "../components/Pagination.vue";

const store = pokemonStore();

const { pokemonList } = storeToRefs(store);
const limit = ref<number>(20);

const url = ref<string>("https://pokeapi.co/api/v2/pokemon");

watchEffect(async () => {
  const response = await fetch(url.value + `?limit=${limit.value}`);
  const data: PokemonListResponse = await response.json();
  store.getPokemonList(data);
});

const pagination = (next: boolean) => {
  if (next && pokemonList.value.next) {
    url.value = pokemonList.value.next;
    return;
  }
  if (pokemonList.value.previous) url.value = pokemonList.value.previous;
};

const setLimit = (newLimit: number) => {
  limit.value = newLimit;
};
</script>

<template>
  <div class="flex flex-col items-center my-12 mx-48">
    <LimitHandler :limit="limit.toString()" :setLimit="setLimit" />
    <ul v-if="pokemonList" class="w-full grid grid-cols-5 gap-6">
      <PokemonCard
        v-for="pokemon in pokemonList.results"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </ul>
    <div class="w-1/3 mt-4">
      <Pagination
        v-if="pokemonList"
        :pagination="pagination"
        :isStart="!pokemonList.previous"
        :isEnd="!pokemonList.next"
      />
    </div>
  </div>
</template>
