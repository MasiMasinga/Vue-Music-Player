// CSS
import "./assets/css/base.css";
import "./assets/css/main.css";

// Pinia
import { createApp } from "vue";
import { createPinia } from "pinia";

// Vue Router
import router from "./router";

// Vee Validate
import VeeValidatePlugin from "./includes/validation";

// Components
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
