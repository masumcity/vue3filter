import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Website from '@/pages/Website.vue';
import App from '@/pages/App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/website',
    name: 'Website',
    component: Website
  },
  {
    path: '/app',
    name: 'App',
    component: App
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});


export default router