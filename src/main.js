import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

import * as te from 'tw-elements';
import './assets/main.css'



createApp(App).use(router).mount('#app')
