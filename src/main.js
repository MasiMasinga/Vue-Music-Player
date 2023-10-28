// CSS
import "./assets/css/base.css";
import "./assets/css/main.css";

// Pinia
import { createApp } from "vue";
import { createPinia } from "pinia";

// Firebase
import { auth } from "./includes/firebase";

// Vue Router
import router from "./router";

// Vee Validate
import VeeValidatePlugin from "./includes/validation";

// Directives
import Icon from './directives/icon'

// Components
import App from "./App.vue";

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.directive('icon', Icon)

        app.mount("#app");
    }
});
