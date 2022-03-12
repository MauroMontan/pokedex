import { defineStore } from "pinia";
import axios from "axios";
import { Pokemon } from "../interfaces/interfaces";

export const usePokemonStore = defineStore("pokemons", {
  state: () => ({
    pokemon: {} as Pokemon,
  }),
  getters: {
    currentPokemon: (store): Pokemon => store.pokemon,
  },
  actions: {
    async getPokemon(payload: string) {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${payload}`
        );

        const data = res.data;

        const newPokemon: Pokemon = {
          name: data.name,
          base_experience: data.base_experience,
          height: data.height,
          species: data.species.name,
          weight: data.weight,
          types: data.types,
          stats: data.stats,
          sprite: data.sprites.other["official-artwork"].front_default,
        };

        this.pokemon = newPokemon;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
