// src/store/pokemonStore.js
import { defineStore } from 'pinia'
import { getPokemonList, getPokemonDetails } from '@/services/pokemonService'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    currentPage: 0,
    limit: 20,
    isLoading: false
  }),

  actions: {
    async fetchPokemons(page = 0) {
      this.isLoading = true
      this.currentPage = page
      const offset = page * this.limit
      try {
        const pokemonList = await getPokemonList(this.limit, offset)
        const detailsPromises = pokemonList.map(pokemon => getPokemonDetails(pokemon.name))
        this.pokemons = await Promise.all(detailsPromises)
      } catch (error) {
        console.error('Erro ao buscar Pokémons:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
