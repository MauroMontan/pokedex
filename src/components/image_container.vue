<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { usePokemonStore } from "../store";

const store = usePokemonStore();

const { currentPokemon } = storeToRefs(store);

const pokemonImage = computed(() => {
  if (!currentPokemon.value.sprite) {
    return "https://cdn-icons-png.flaticon.com/512/287/287221.png";
  }

  return currentPokemon.value.sprite;
});
</script>

<template>
  <div class="image-container">
    <h2>{{ currentPokemon.name }}</h2>
    <img :src="pokemonImage" alt="pokemon picture" />
  </div>
</template>
