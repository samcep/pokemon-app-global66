<template>
  <section class="container">
    <main>
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </RouterView>
    </main>
  </section>
  <Footer v-show="!isEmpty"></Footer>
</template>
<script setup lang="ts">
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'

const pokemonStore =  usePokemonStore();
const isEmpty = computed(() => pokemonStore.canShowNav);
import Footer from '@/modules/pokemon/components/Footer.vue'
import { computed } from 'vue'
</script>

<style  scoped>

.container {
  display: flex;
  padding-top: 2.188rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5rem);
}
</style>
