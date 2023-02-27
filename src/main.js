import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './assets/main.css';
import * as te from 'tw-elements';



createApp(App).use(router).mount('#app')
