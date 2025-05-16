import { createApp } from 'vue';
import 'virtual:svg-icons-register';

import { createPinia } from './stores';
import '@/styles/index.css';
import App from './App.vue';
import router from '@/router';
import i18NPlugin from '@/plugins/i18n';

if (import.meta.env.VITE_APP_MOCK === 'service-worker') {
  const { worker } = await import('@/mocks/browser');

  worker.start();
}

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(i18NPlugin);
app.mount('#app');
