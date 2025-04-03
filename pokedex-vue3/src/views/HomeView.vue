<!-- src/views/HomeView.vue -->
<script setup>
import { onMounted } from 'vue'
import { usePokemonStore } from '../store/pokemonStore'

const store = usePokemonStore()

onMounted(() => {
  store.fetchPokemons(20, 0) // Buscar os primeiros 20 Pokémon
})
</script>

<template>
  <v-container>
    <h1 class="text-h4 text-center">Pokédex</h1>

    <v-row>
      <v-col v-for="pokemon in store.pokemons" :key="pokemon.id" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-img :src="pokemon.sprites.front_default" height="150"></v-img>
          <v-card-title>{{ pokemon.name }}</v-card-title>
          <v-card-actions>
            <v-btn :to="`/pokemon/${pokemon.name}`" color="primary">Detalhes</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-progress-linear v-if="store.isLoading" indeterminate></v-progress-linear>
  </v-container>
</template>
