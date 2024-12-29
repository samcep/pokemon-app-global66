<template>
  <section class="container">
<!--    <loading></loading>-->
    <search-header></search-header>
    <main>
      <RouterView></RouterView>
<!--      <PokemonName></PokemonName>-->
<!--      <PokemonName></PokemonName>-->
<!--      <PokemonName></PokemonName>-->

<!--      <PokemonCard :is-modal-open="false"></PokemonCard>-->
    </main>
  </section>
  <Footer></Footer>

</template>
<script setup lang="ts">
import SearchHeader from '@/modules/pokemon/components/SearchHeader.vue'
import Footer from '@/modules/pokemon/components/Footer.vue'
import PokemonName from '@/modules/pokemon/components/PokemonName.vue'
import PokemonCard from '@/modules/pokemon/components/PokemonDescriptionModal.vue'
import Loading from '@/modules/common/Icons/Loading.vue'
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
