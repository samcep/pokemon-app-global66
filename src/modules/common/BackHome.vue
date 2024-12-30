<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'
const pokemonStore  = usePokemonStore();
</script>

<template>
  <div class="back-section ">
    <h2>Uh-oh!</h2>
    <p  class="back-section-paragraph">You look lost on your journey!</p>
    <RouterLink class="pa-button-primary" to="/" @click="pokemonStore.canShowNav = false" >Go back home</RouterLink>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2.25rem;
  font-weight: 700;
}

.back-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.back-section-paragraph  {
  line-height: 1.875rem;
  margin-top: 0.625rem;
}
.pa-button-primary {
  margin-top: 1.875rem;
}
</style>
