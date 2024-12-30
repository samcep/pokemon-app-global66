<script setup lang="ts">
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'
import { computed, onMounted, ref, watch } from 'vue'
import Loading from '@/modules/common/Icons/Loading.vue'
import PokemonName from '@/modules/pokemon/components/PokemonName.vue'
import type { Pokemon } from '@/modules/pokemon/interfaces'
import SearchHeader from '@/modules/pokemon/components/SearchHeader.vue'
import BackHome from '@/modules/common/BackHome.vue'
const searchValue = ref<string>('');
const pokemonStore = usePokemonStore();
const pokemons = computed<Pokemon[]>(() => pokemonStore.pokemons)
const isLoading = computed(() => pokemonStore.isLoading)
const pokemonsFiltered = computed(() => {
  if(searchValue.value === '') {
    return pokemons.value;
  }
  return pokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchValue.value.toLowerCase())
  )
})

const isEmpty = computed(() => pokemonsFiltered.value.length === 0);
onMounted(async() => {
  await pokemonStore.getPokemons();
})

watch(isEmpty , (newValue) => {
  pokemonStore.canShowNav = newValue;
});

</script>

<template>
  <template v-if="isLoading">
    <Loading></Loading>
  </template>
  <template v-else>
    <search-header @search="searchValue = $event"></search-header>
    <div class="wrapper" >
      <pokemon-name v-for="pokemon in pokemonsFiltered" :key="pokemon.id" :pokemon="pokemon"></pokemon-name>
      <BackHome v-if="isEmpty"></BackHome>
    </div>
  </template>
</template>
