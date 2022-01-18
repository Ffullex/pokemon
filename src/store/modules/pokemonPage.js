import {getPokemonInfo, getPokemonList} from "../../api/pokemon-page";

const state = {
    pokemonInfo: null,
    pokemonList: [],
}

const mutations = {
    SET_POKEMON_INFO: (state, pokemonInfo) => {
        state.pokemonInfo = pokemonInfo
    },
    SET_POKEMON_LIST: (state, pokemonList) => {
        console.log(111, state.pokemonList)
        state.pokemonList = pokemonList
        console.log(222, state.pokemonList)
    },
}

const getters = {
    pokemonInfo: (state) => state.pokemonInfo,
    pokemonList: (state) => state.pokemonList,
}

const actions = {
    getPokemonInfo({ commit }, query) {
        return new Promise((resolve, reject) => {
            getPokemonInfo(query)
                .then((response) => {
                    console.log(1, response)
                    commit('SET_POKEMON_INFO', response)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getPokemonList({commit}){
        return new Promise((resolve, reject) => {
            getPokemonList()
                .then((response) => {
                commit('SET_POKEMON_LIST', response.results)
                resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}