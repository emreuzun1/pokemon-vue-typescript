<template>
  <div
    class="card w-full bg-base-200 shadow-xl cursor-pointer transition-all hover:scale-105"
    v-if="pokemonData"
    @click="router.push(`/pokemon/${pokemonData.id}`)"
  >
    <PokemonCardBody
      :name="pokemonData.name"
      :id="pokemonData.id"
      :types="pokemonData.types"
    />
    <PokemonCardImage
      :image="pokemonData.sprites.front_default"
      :name="pokemonData.name"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import PokemonCardBody from "./PokemonCardBody.vue";
import PokemonCardImage from "./PokemonCardImage.vue";
import { useRouter } from "vue-router";
import { NamedApiSource, Pokemon } from "../../interfaces/Pokemon";
const router = useRouter();
const props = defineProps<{ pokemon: NamedApiSource }>();
const pokemonData = ref<Pokemon>();

watchEffect(async () => {
  const response = await fetch(props.pokemon.url);
  const data: Pokemon = await response.json();
  pokemonData.value = data;
});
</script>
