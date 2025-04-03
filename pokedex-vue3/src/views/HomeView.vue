<template>
  <div class="pokedex-container">
    <h1>Pokédex</h1>
    <input v-model="searchQuery" placeholder="Buscar Pokémon..." />
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <div v-for="pokemon in filteredPokemon" :key="pokemon.id" class="pokemon-card">
        <img :src="pokemon.image" :alt="pokemon.name" />
        <h2>{{ pokemon.name }}</h2>
        <p>Tipo: {{ pokemon.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      pokemonList: [],
      loading: true
    };
  },
  computed: {
    filteredPokemon() {
      return this.pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        pokemon.id.toString() === this.searchQuery
      );
    }
  },
  async created() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      this.pokemonList = response.data.results.map((p, index) => ({
        id: index + 1,
        name: p.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        type: 'Desconhecido' // Removendo tipos detalhados
      }));
    } catch (error) {
      console.error('Erro ao buscar os Pokémon', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.pokedex-container {
  text-align: center;
}
.pokemon-card {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
