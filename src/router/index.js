import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ring',
      name: 'ring',
      component: () => import('../views/ring/RingView.vue')
    },
    {
      path: '/ring-detail',
      name: 'ringDetail',
      component: () => import('../views/ring/RingDetail.vue')
    },
    {
      path: '/necklace',
      name: 'necklace',
      component: () => import('../views/necklace/NecklaceView.vue')
    },
    {
      path: '/necklace-detail',
      name: 'necklaceDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/necklace/NecklaceDetail.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShoppingCartView.vue')
    }
  ]
})

export default router
