<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store";

const store = usePokemonStore();

const { currentPokemon } = storeToRefs(store);
</script>

<template>
  <main class="content">
    <h2>About {{ currentPokemon.name }}</h2>

    <div class="about">
      <h4>Species: {{ currentPokemon.species }}</h4>
      <h4>Xp base: {{ currentPokemon.base_experience }}</h4>
      <h4>height: {{ currentPokemon.height }}</h4>

      <h4>weight: {{ currentPokemon.weight }}</h4>
    </div>

    <div class="types">
      <h4>types:</h4>
      <ul>
        <li v-for="type in currentPokemon.types">{{ type.type.name }}</li>
      </ul>
    </div>
  </main>
</template>
