<script setup lang="ts">

import FavoriteIcon from '@/modules/common/Icons/FavoriteIcon.vue'
import type { Pokemon } from '@/modules/pokemon/interfaces'
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'
import PokemonDescriptionModal from '@/modules/pokemon/components/PokemonDescriptionModal.vue'
import { ref } from 'vue'

interface  Props {
  pokemon: Pokemon
}


const pokemonStore = usePokemonStore();
const openModal  = ref<boolean>(false);
defineProps<Props>();
</script>

<template>
  <div class="pokemon-description" >
      <span class="pokemon-name" @click="openModal = true">{{pokemon.name}}</span>
      <div class="container-icon" @click="pokemonStore.toggleFavorites(pokemon)">
        <favorite-icon  :type=" pokemon.favorite ? 'filled' : 'no-filled'" ></favorite-icon>
      </div>
  </div>

  <pokemon-description-modal v-if="openModal"  :pokemon="pokemon"
  @closeModal="openModal = false"></pokemon-description-modal>
</template>

<style scoped>

.pokemon-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--pa-bg);
  border-radius: 0.313rem;
  margin-bottom: 0.625rem;
  height: 3.75rem;
}
@media (min-width: 375px) {
  .pokemon-description {
    width: 19.688rem;
  }

}
@media (min-width: 1024px) {
  .pokemon-description {
    width: 35.625rem;
  }
}
.pokemon-name {
  flex-grow: 1;
  text-align: left;
  cursor: pointer;
}


.container-icon {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pa-button-font-color);
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
  border-radius: 50%;
  flex-shrink: 0; /* Prevents shrinking of the icon */
}



</style>
