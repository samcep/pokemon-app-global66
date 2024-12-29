<script setup lang="ts">

import { RouterLink } from 'vue-router'
import AllIcon from '@/modules/common/Icons/AllIcon.vue'
import FavoriteIcon from '@/modules/common/Icons/FavoriteIcon.vue'
</script>

<template>
<footer class="footer-container">
  <RouterLink activeClass="active" class="pa-router-inactive margin" to="/pokemon/all"><all-icon></all-icon> All</RouterLink>
  <RouterLink activeClass="active" class="pa-router-inactive margin" to="/pokemon/favorites"><favorite-icon></favorite-icon> Favorites</RouterLink>
</footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 1);
  padding-top:1.125rem ;
  padding-bottom:1.125rem ;
  height: 5rem;
  width: 100%;
  z-index: 99;
  font-size: 1.125rem;
}
.margin{
  margin-left: 0.469rem;
  margin-right: 0.469rem;
}

.active {
  background-color: var(--pa-button-normal);
}
</style>
