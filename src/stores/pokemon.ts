import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import { PokemonListResponse } from "../interfaces/Pokemon";

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface State {
  pokemonList: PokemonListResponse;
  loading: boolean;
}

export const pokemonStore = defineStore("pokemon", {
  state: (): State => {
    return {
      pokemonList: [],
      loading: false,
    };
  },
  actions: {
    getPokemonList(list) {
      this.pokemonList = list;
    },
  },
});
