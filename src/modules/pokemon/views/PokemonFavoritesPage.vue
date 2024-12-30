<script setup lang="ts">
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'
import { computed, ref, watch } from 'vue'
import PokemonName from '@/modules/pokemon/components/PokemonName.vue'
import SearchHeader from '@/modules/pokemon/components/SearchHeader.vue'
import BackHome from '@/modules/common/BackHome.vue'
const searchValue = ref<string>('');
const pokemonStore = usePokemonStore();
const pokemons = computed(() => pokemonStore.pokemonsFavorites)
const pokemonsFiltered = computed(() => {
  if(searchValue.value === '') {
    return pokemons.value;
  }
  return pokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchValue.value.toLowerCase())
  )
})
const isEmpty = computed(() => pokemonsFiltered.value.length === 0);
watch(isEmpty , (newValue) => {
  pokemonStore.canShowNav = newValue;
});

</script>

<template>
  <search-header @search="searchValue = $event"></search-header>
  <div class="wrapper">
    <pokemon-name v-for="pokemon in pokemonsFiltered" :key="pokemon.id" :pokemon="pokemon"></pokemon-name>
    <BackHome v-if="isEmpty"></BackHome>
  </div>
</template>

