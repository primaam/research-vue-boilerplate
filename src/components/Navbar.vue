<template>
    <nav>
        <router-link to="/">Home</router-link>
        <button v-if="isAuthenticated" @click="handleLogout">Logout</button>
        <router-link v-else to="/login">Login</router-link>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAuthenticated = computed(() => localStorage.getItem("isAuthenticated"));

const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
};
</script>

<!-- <style></style> -->
