<script setup lang="ts">

import SearchIcon from '@/modules/common/Icons/SearchIcon.vue'
</script>

<template>
  <div class="search-bar">
    <search-icon></search-icon>
    <input type="text" placeholder="Search" class="search-input" />
  </div>
</template>

<style scoped>

.search-bar {
  border-radius: 0.313rem;
  background-color: var(--pa-bg);
  color: var(--pa-font-color);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  padding: 1rem 0.938rem 1rem 0.938rem;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
}

.search-input{
  border:none;
  outline: none;
  margin-left: 0.625rem;
}

@media (min-width: 375px) {
  .search-bar {
    width: 19.688rem;
    height:3.125rem ;
  }

}
@media (min-width: 1024px) {
  .search-bar {
    width: 35.625rem;
    height: 3.125rem;
  }
}
</style>
