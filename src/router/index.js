import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Website from '@/pages/Website.vue';
import App from '@/pages/App.vue';
import Login from '@/pages/Login.vue';
import Admin from '@/pages/Admin.vue';

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});


export default router