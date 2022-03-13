<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store";

const store = usePokemonStore();

const { currentPokemon } = storeToRefs(store);
</script>

<template>
  <div class="table">
    <h4>stats:</h4>
    <div class="stats">
      <table>
        <tr>
          <th v-for="stat in currentPokemon.stats">
            {{ stat.stat.name }}
          </th>
        </tr>
        <tr>
          <td v-for="stat in currentPokemon.stats">{{ stat.base_stat }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
