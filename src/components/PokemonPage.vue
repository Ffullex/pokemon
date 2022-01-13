<template>
  <div class="pokemon-page">
    <div class="pokemon-page__content">
      <div class="pokemon-page__sidebar">
        <div>
          Список покемонов
          <button
            class="pokemon-page__button"
            @click="getPokemonList"
          >
            getPokemonList
          </button>
        </div>
        <div class="pokemon-page__pokemon-list">
          <button
            v-for="item in pokemonList"
            :key="item.name"
            @click="choosePokemon(item.name)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
      <div>
        <div>
          <span>Введите имя покемона En</span>
          <input v-model="name">
        </div>
        <div>
          <textarea v-model="result" />
          <button
            class="pokemon-page__button"
            @click="getPokemon"
          >
            hueta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PokemonPage',
  props: {
    msg: String
  },
  data () {
    return {
      result: null,
      name: 'ditto',
      pokemonList: [
        {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
        {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
        {"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},
        {"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},
      ]
    }
  },
  methods: {
    choosePokemon(item) {
      this.name = item
    },
       async getPokemon() {
         let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
         console.log(result)
         this.result = await result.text()
       },
       async getPokemonList() {
         let arrayPokemonObjects = []
         await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
         .then(response => response.json())
         .then(pokemons => arrayPokemonObjects = pokemons.results)
         this.pokemonList = arrayPokemonObjects
       }
  }
}
</script>

<style scoped lang="scss">
.pokemon-page {
  &__button {
    background-color: #FF845D;
    border: none;
    border-radius: 7px;
    color: white;
  }
  &__content {
    display: inline-flex;
    width: 100%;
  }
  &__sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #999;
  }
  &__pokemon-list {
    overflow: scroll;
    height: 800px;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    & button {
      margin: 10px 0;
      background-color: white;
      color: #FF845D;
      border: 1px solid #FF845D;
      border-radius: 7px;
      padding-left: 10px;
    }
  }
}
</style>
