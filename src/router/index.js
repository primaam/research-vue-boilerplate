import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

import HomeView from "../pages/HomeView.vue";
import DetailView from "../pages/DetailView.vue";
import LoginView from "../pages/LoginView.vue";

const routes = [
    {
        path: "/",
        component: AppLayout,
        meta: { requiresAuth: true },
        children: [
            { path: "", component: HomeView },
            { path: "detail/:id", component: DetailView },
        ],
    },
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            { path: "login", component: LoginView },
            { path: "register", component: RegisterView },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (to.meta.requiresAuth && !isAuthenticated) {
        next("/auth/login");
    } else {
        next();
    }
});

export default router;
