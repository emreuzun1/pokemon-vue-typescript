import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Pokemon from "./pages/Pokemon.vue";
import "./assets/main.css";

const routes = [
  { path: "/", component: App },
  { path: "/pokemon/:id", component: Pokemon },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp({});
app.use(router);
app.use(createPinia());

app.mount("#app");
