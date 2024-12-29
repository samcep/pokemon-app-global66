<template>
    <div class="welcome-section ">
      <div class="welcome-icon">
        <HomeIcon></HomeIcon>
      </div>
      <h1>Welcome to Pokédex</h1>
      <p  class="welcome-paragraph">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <RouterLink class="pa-button-primary" to="/pokemon/all">Get started</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeIcon from '@/modules/common/Icons/HomeIcon.vue'
</script>

<style scoped>
.welcome-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.welcome-paragraph {
  text-align: center;
  color: var(--pa-color-grey);
  line-height: 1.688rem;
  margin-bottom: 3.125rem;
}
@media (min-width: 375px) {
  .welcome-paragraph {
    max-width: 19.688rem;
    height: 5.125rem;
  }

}
@media (min-width: 376px) {
  .welcome-paragraph {
    max-width: 35.625rem;
    height: 3.375rem;
  }
}
</style>
