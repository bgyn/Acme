import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CovidRespond from '../views/CovidRespond.vue';
import About from './../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/CovidRespond',
      name : 'CovidRespond',
      component : CovidRespond
    },
    {
      path: '/About',
      name : 'about',
      component : About
    }
  ]
})

export default router
