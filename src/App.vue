<script setup lang="ts">
import pokemonInfo from "./pages/pokemon_info.vue";
</script>
<template>
  <pokemonInfo />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Press Start 2P", cursive;
  color: #464646;
}
::placeholder {
  color: #9c9c9c;
  font-size: 1em;
}
body {
  height: 100vh;
  background-color: #689aaf;
}

#app {
  height: 100%;
  max-width: 95%;
  margin: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header header header header"
    "image-container image-container table table"
    "image-container  image-container content content"
    "footer footer footer footer";
}

#app header {
  margin-top: 1rem;
  grid-area: header;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#app header img {
  width: 2rem;
}

#app header h3 {
  padding: 0.5rem;
}

#app .table {
  grid-area: table;
  display: flex;
  height: 100%;
  margin: auto;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
}

#app .image-container {
  padding: 1rem;
  border: solid 4px black;
  border-radius: 16px;
  background-color: #f0dba5;
  grid-area: image-container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app .image-container h2 {
  color: #464646;
}

@keyframes changewidth {
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(10px);
  }
}

#app .image-container img {
  width: 60%;
  animation-duration: 0.8s;
  animation-name: changewidth;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

#app main {
  width: 100%;
  grid-area: content;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 90px;
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.3rem;
}
#app .table .stats {
  display: flex;
  margin: auto;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;

  overflow: auto;
}

#app main .about {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
#app main .about h4 {
  width: 100%;
  padding: 0.5rem;
}

#app .table .stats table {
  border-collapse: collapse;
}

#app .table .stats table th {
  border: solid 1px rgb(0, 0, 0, 0.2);
  font-size: 0.8rem;
  text-align: center;
  padding: 0.4rem;
}

#app .table .stats table td {
  border: solid 1px rgb(0, 0, 0, 0.2);
  padding: 0.4rem;
  text-align: center;
  font-size: 1.3rem;
}

#app main .types {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#app main .types ul {
  display: flex;
  list-style: none;
}
#app main .types ul li {
  margin-left: 1rem;
  margin-right: 1rem;
  color: #e7e7e6;
}

#app footer {
  grid-area: footer;
}

#app footer i {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  #app {
    grid-template-areas:
      "header header header header"
      "image-container image-container image-container image-container"
      "table table table table"
      "content content content content"
      "footer footer footer footer";
  }

  #app header {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  #app .table {
    flex-direction: column;
    text-align: left;
  }

  #app main h2 {
    font-size: 1rem;
    color: #f0dba5;
  }
  #app .table .stats {
    overflow-x: auto;

    max-width: 100%;
  }
  #app main .types {
    flex-direction: column;
  }

  #app main .about {
    width: 100%;
    display: flex;
    margin: 1rem;
  }
  #app main .about h4 {
    padding: 0.3rem;
    font-size: 0.9rem;
  }
}
</style>
