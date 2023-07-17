import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import '@/styles/tailwind.postcss';
import '@/styles/index.postcss';
import App from './App.vue';
import router from '@/router';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('@/mocks/browser');

//   worker.start();
// }

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount('#app');
