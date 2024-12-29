import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/modules/pokemon/layouts/HomeLayout.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/modules/pokemon/layouts/AppLayout.vue'),
      children: [
        {
          path: "all",
          name:'all',
          component: () => import('@/modules/pokemon/views/PokemonAllPage.vue'),
        },
        {
          path: "favorites",
          name:'favorites',
          component: () => import('@/modules/pokemon/views/PokemonFavoritesPage.vue'),
        },
      ]
    },
  ],
})

export default router
