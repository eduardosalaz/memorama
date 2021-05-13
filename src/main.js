import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "@/store"

//createApp(App).use(router).use(store).mount('#app')

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
app.provide('appName','Vue3')