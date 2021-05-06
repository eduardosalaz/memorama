import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jugar from '../views/Jugar.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/jugar',
    name: 'jugar',
    component: Jugar
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;