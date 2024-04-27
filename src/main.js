import { createApp } from 'vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import App from './App.vue'

const app= createApp(App);
const pina = createPinia();

app.use(router).use(pina);

app.mount('#app');
