import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Pastikan path sesuai

const app = createApp(App);
app.use(router);
app.mount('#app');