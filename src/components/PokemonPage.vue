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
          <div>Введите имя покемона En или выберите из списка слева</div>
          <input v-model="name">
          <button
            class="pokemon-page__button"
            @click="getPokemon"
          >
            getPokemonInfo
          </button>
        </div>
        <div>
          <div class="pokemon-page__pokemon-photo">
            <img
              :src="pokemonInfo.sprites.front_default"
              alt=""
            >
            <img
              :src="pokemonInfo.sprites.back_default"
              alt=""
            >
          </div>
          <div class="pokemon-page__pokemon-name">
            Имя:
            <div class="pokemon-page__data">{{ pokemonInfo.name }}</div>
          </div>
          <div class="pokemon-page__pokemon-height">
            Рост:
            <div class="pokemon-page__data">{{ pokemonInfo.height }}</div>
          </div>
          <div class="pokemon-page__pokemon-skills">
            Навыки:
            <div
              class="pokemon-page__data"
              v-for="item in pokemonInfo.abilities"
              :key="item.index"
            >
              {{ item.ability.name }}<br />
            </div>
          </div>

          <div>
            <span />
          </div>
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
      ],
      pokemonInfo: {
        sprites: {
        }
      }
    }
  },
  methods: {
    choosePokemon(item) {
      this.name = item
    },
       async getPokemon() {
      let pokemon = ''
         await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
             .then(response => response.json())
             .then(pokemons => pokemon = pokemons)
         console.log(pokemon)
         this.pokemonInfo = pokemon
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
  &__pokemon-photo {
    display: flex;
    justify-content: start;
    padding: 20px;
    background-color: #999999;
    & img {
      border: 1px solid white;
    }
  }
  &__pokemon-name {
    display: flex;
    justify-content: start;
    padding: 10px;
    border: 1px solid white;
    background-color: #999999;
    color: #FF845D;
  }
  &__pokemon-height {
    display: flex;
    justify-content: start;
    padding: 10px;
    border: 1px solid white;
    background-color: #999;
    color: #FF845D;
  }
  &__pokemon-skills {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    padding: 10px;
    border: 1px solid white;
    background-color: #999;
    color: #FF845D;
  }
  &__data {
    color: aqua;
  }
}
</style>
