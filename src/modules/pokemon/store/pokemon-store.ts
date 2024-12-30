import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Pokemon, PokemonInfo, PokemonListResponse, Result } from '@/modules/pokemon/interfaces'
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi.ts'

export const usePokemonStore = defineStore('pokemons', () => {

  const pokemons = ref<Pokemon[]>([]);
  const currentPokemonInfo = ref<PokemonInfo>();
  const currentTypesPokemonInfo = ref('');
  const isLoading = ref<boolean>(false);
  const canShowNav = ref(false);

  const getPokemons = async () : Promise<void> => {
    isLoading.value = true;
    const response = await pokemonApi.get<PokemonListResponse>('/pokemon');
    const pokemonsArray : Result[]   = response.data.results;
     const pokemonsAdapter : Pokemon[] = pokemonsArray.map((pokemon: Result) => {
       const urlParts = pokemon.url.split('/');
       const id = Number(urlParts[urlParts.length - 2]) ?? 0;
       return {
         ...pokemon,
         id,
         favorite: false
       }
     } )
    pokemons.value = pokemonsAdapter;
     isLoading.value = false;
  };

  const getPokemonInfo = async (name : string) : Promise<void> => {
    const response = await pokemonApi.get<PokemonInfo>(`/pokemon/${name}`);
    const pokemonInfo : PokemonInfo  = response.data;
    if(pokemonInfo.types.length > 0) {
      currentTypesPokemonInfo.value = pokemonInfo.types.map((slot) => slot.type.name).join(',');
    }
    currentPokemonInfo.value = pokemonInfo;
  };

  const toggleFavorites = (currentPokemon: Pokemon ) => {
    console.log(currentPokemon.id);
    const pokemon = pokemons.value.find((pokemon) => pokemon.id === currentPokemon.id);
    if(!pokemon) return;
    pokemon.favorite = !currentPokemon.favorite;
  }
  const pokemonsFavorites  = computed<Pokemon[]>(() => pokemons.value.filter(x => x.favorite));
  return {
    pokemons,
    pokemonsFavorites,
    currentPokemonInfo,
    currentTypesPokemonInfo,
    getPokemons,
    getPokemonInfo,
    toggleFavorites,
    isLoading,
    canShowNav
  }
})
