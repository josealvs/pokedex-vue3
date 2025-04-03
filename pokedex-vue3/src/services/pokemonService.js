// src/services/pokemonService.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
  return response.data.results
}

export const getPokemonDetails = async (name) => {
  const response = await api.get(`pokemon/${name}`)
  return response.data
}
