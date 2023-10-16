// Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Components
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Manage from "../views/Manage.vue";

// Pinia
import useUserStore from "../stores/user";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/manage-music",
        //alias: "/manage",
        name: "Manage",
        component: Manage,
        beforeEnter(to, from, next) {
            console.log("Manage Route Guard");
            next();
        },
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/manage",
        redirect: { name: "Manage" },
    },
    {
        path: "/:catchAll(.*)*",
        redirect: { name: "Home" },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
    // console.log("Global Guard");

    if (!to.meta.requiresAuth) {
        next();
        return;
    }

    const store = useUserStore();

    if (store.userLoggedIn) {
        next();
    } else {
        next({ name: "Home" });
    }
});

export default router;
