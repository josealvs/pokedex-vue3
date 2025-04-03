<!-- src/views/PokemonDetailView.vue -->
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemonId = route.params.id
</script>

<template>
  <v-container>
    <h1 class="text-h4 text-center">Detalhes do Pokémon {{ pokemonId }}</h1>
  </v-container>
</template>
