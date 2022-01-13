<template>
  <pokemon-page />
</template>

<script>

import PokemonPage from "./components/PokemonPage";
export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
body {
  background-color: #999999;
}
  *::-webkit-scrollbar {
    border-radius: 6px;
    width: 6px;
    height: 6px;
    opacity: 0.5;
  }

  *::-webkit-scrollbar-thumb {
    outline: 1px solid #fff;
    border-radius: 6px;
    background-color: #999;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
