<script setup lang="ts">
import headerBar from "../components/headerbar.vue";
import statsTable from "../components/stats_table.vue";
import imageFrame from "../components/image_container.vue";
import description from "../components/pokemon_description.vue";
</script>

<template>
  <!-- app header -->
  <headerBar />
  <!-- TABLE -->
  <statsTable />
  <!-- image container -->
  <image-frame />

  <!-- pokemon description -->

  <description />

  <footer>
    <footer><i class="fa-brands fa-github"></i> MauroMotan</footer>
  </footer>
</template>
