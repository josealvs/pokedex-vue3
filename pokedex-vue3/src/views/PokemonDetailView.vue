<!-- src/views/PokemonDetailView.vue -->
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemonStore } from '@/store/pokemonStore'

const route = useRoute()
const store = usePokemonStore()

onMounted(() => {
  store.fetchPokemonDetails(route.params.id)
})
</script>

<template>
  <v-container v-if="store.selectedPokemon">
    <h1 class="text-h4 text-center">{{ store.selectedPokemon.name }}</h1>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="store.selectedPokemon.sprites.front_default" height="200"></v-img>
          <v-card-title class="text-center">{{ store.selectedPokemon.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-list>
      <v-list-item v-for="stat in store.selectedPokemon.stats" :key="stat.stat.name">
        <v-list-item-title>{{ stat.stat.name }}: {{ stat.base_stat }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>

  <v-progress-circular v-if="store.isLoading" indeterminate></v-progress-circular>
</template>
