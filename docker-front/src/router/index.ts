import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import VehiculesView from '../views/VehiculesView.vue';
import VehiculeAdd from '../views/VehiculeAdd.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/vehicules',
      name: 'vehicule_list',
      component: VehiculesView
    },{
      path: '/vehicules/add',
      name: 'vehicule_add',
      component: VehiculeAdd,
    }
  ]
})

export default router
