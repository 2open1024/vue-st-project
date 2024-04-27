import { createApp } from 'vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import App from './App.vue'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "./tailMain.css"

const app= createApp(App);

// 自动引入图标
Object.keys(ElementPlusIconsVue).forEach((key) => {
    app.component(key, ElementPlusIconsVue[key]);
  });


const pina = createPinia();

app.use(router).use(pina).use(ElementPlus);

app.mount('#app');
