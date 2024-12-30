<script setup lang="ts">
import CloseIcon from '@/modules/common/Icons/CloseIcon.vue'
import FavoriteIcon from '@/modules/common/Icons/FavoriteIcon.vue'
import { computed, onMounted } from 'vue'
import { usePokemonStore } from '@/modules/pokemon/store/pokemon-store.ts'
import type { Pokemon } from '@/modules/pokemon/interfaces'

interface  Props {
  pokemon: Pokemon,
}
const props = defineProps<Props>();
const emit = defineEmits(['closeModal']);
const pokemonStore = usePokemonStore();
onMounted(async () => {
  await pokemonStore.getPokemonInfo(props.pokemon.name);
})
const pokemonImageUrl = computed<string>(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`,
);
const copy = () => {
  const text =generatePokemonText();
  copyToClipboard(text);
}
const generatePokemonText = () => {
  const { name, weight, height } = pokemonStore.currentPokemonInfo!;
   return `${name},${weight},${height},${pokemonStore.currentTypesPokemonInfo}`;
}
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert('Copied!')
    },
    (err) => {
      console.log('something went wrong! ' + err);
    }
  )
}


</script>

<template>
    <div  class="modal-overlay" >
      <div class="modal-content">
        <div class="modal-header">
          <img class="overlay-image" :src="pokemonImageUrl"  alt="Overlay Image" />
          <CloseIcon @click="emit('closeModal')" class="close-button"></CloseIcon>
        </div>
        <div class="modal-body">
          <div class="modal-item">
            <span class="modal-Item-tittle">Name: </span>
            <span class="modal-Item-value">{{pokemon.name}}</span>
          </div>
          <div class="modal-item">
            <span class="modal-Item-tittle">Weight: </span>
            <span class="modal-Item-value">{{pokemonStore?.currentPokemonInfo?.weight}}</span>
          </div>
          <div class="modal-item">
            <span class="modal-Item-tittle">Height: </span>
            <span class="modal-Item-value">{{pokemonStore?.currentPokemonInfo?.height}}</span>
          </div>
          <div class="modal-item">
            <span class="modal-Item-tittle">Types: </span>
            <span class="modal-Item-value">{{pokemonStore?.currentTypesPokemonInfo}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <a class="pa-button-primary" @click="copy">Share to my friends</a>
          <favorite-icon  :type=" pokemon.favorite ? 'filled' : 'no-filled'" ></favorite-icon>
        </div>
      </div>
    </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 31.625rem;
}
@media (min-width: 1024px) {
  .modal-content {
    width: 35.625rem;
  }
}

.modal-header {
  position: relative;
  background-image: url("src/modules/common/Icons/PokemonBackground.svg");
  background-size: cover;
  background-position: center;
  height: 13.75rem;
}

.overlay-image {
  position: absolute;
  top: 20px;
  height: 180px;
  right: 67px;
  width: 180px;
  z-index: 1;
}

@media (min-width: 768px) {
  .overlay-image {
    right: 150px;
  }

}
@media (min-width: 1024px) {
  .overlay-image{
    right: 194px;
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.modal-body {
  padding: 0.625rem 1.875rem  0.625rem 1.875rem;
}

.modal-item{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  width: 15.938rem;
  height: 2.938rem;
  font-size: 1.125rem;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  text-align: left;

}
@media (min-width: 1024px) {
  .modal-item {
    width: 31.875rem;
  }
}
.modal-Item-tittle {
  font-weight: 700;

}

.modal-Item-value {
  font-weight: 500;
}

.modal-footer  {
  margin: 0;
  padding: 0.625rem 1.875rem  0.625rem 1.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .modal-footer {
    width: 31.625rem;
  }

}
@media (min-width: 1024px) {
  .modal-footer {
    width: 35.625rem;
  }
}
</style>
