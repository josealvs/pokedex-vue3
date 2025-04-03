// src/store/pokemonStore.js
import { defineStore } from 'pinia'
import { getPokemonList, getPokemonDetails } from '../services/pokemonService'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    selectedPokemon: null,
    isLoading: false
  }),
  
  actions: {
    async fetchPokemons(limit = 20, offset = 0) {
      this.isLoading = true
      try {
        const pokemonList = await getPokemonList(limit, offset)
        const detailsPromises = pokemonList.map(pokemon => getPokemonDetails(pokemon.name))
        this.pokemons = await Promise.all(detailsPromises)
      } catch (error) {
        console.error('Erro ao buscar Pokémons:', error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchPokemonDetails(name) {
      this.isLoading = true
      try {
        this.selectedPokemon = await getPokemonDetails(name)
      } catch (error) {
        console.error('Erro ao buscar detalhes do Pokémon:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
