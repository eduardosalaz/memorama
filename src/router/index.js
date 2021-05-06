import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jugar from '../views/Jugar.vue';
import Aprende from '../views/Aprende.vue';
import Scrum from '../views/Scrum.vue';
import PMI from '../views/PMI.vue';
import Acerca from '../views/Acerca.vue';
import Ganador from '../views/Ganador.vue';
import Perdedor from '../views/Perdedor.vue';
import Tablero from '../views/Tablero.vue';

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

  {
    path: '/aprende',
    name: 'aprende',
    component: Aprende
  },

  {
    path: '/scrum',
    name: 'scrum',
    component: Scrum
  },

  {
    path: '/pmi',
    name: 'pmi',
    component: PMI
  },

  {
    path: '/acerca',
    name: 'acerca',
    component: Acerca
  },

  {
    path: '/ganador',
    name: 'ganador',
    component: Ganador
  },

  {
    path: '/perdedor',
    name: 'perdedor',
    component: Perdedor
  },
  {
    path: '/tablero',
    name: 'tablero',
    component: Tablero
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;