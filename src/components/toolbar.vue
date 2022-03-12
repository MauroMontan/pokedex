<script setup lang="ts">
import { ref } from "vue";
import { usePokemonStore } from "../store";

const store = usePokemonStore();

const search = ref("");

const findPokemon = () => {
  store.getPokemon(search.value);
  console.log(store.currentPokemon);
};
</script>

<template>
  <div class="searchBar">
    <input v-model="search" type="text" placeholder="searchbar" />
    <button @click="findPokemon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<style>
.searchBar {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: center;
}

.searchBar input {
  color: black;
  width: 35%;
  border: none;
  padding: 1rem;
  margin-right: 1rem;
  background-color: #f0dba5;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  text-align: center;
  font-size: 1rem;
}

.searchBar button {
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;

  background-color: #c04c4b;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 19px 38px;
  transition: all 0.3s ease 0s;
}
.searchBar button i {
  color: black;
}

.searchBar button:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 19px 38px;
  transform: translateY(-3px);
}
.searchBar button:active {
  transform: scale(95%);
}

@media (max-width: 768px) {
  .searchBar {
    justify-content: center;
  }
  .searchBar input {
    width: 100%;
  }
}
</style>
