// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonDetailView from '@/views/PokemonDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/pokemon/:id', component: PokemonDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
