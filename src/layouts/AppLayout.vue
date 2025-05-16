<template>
    <div class="app-layout">
        <Navbar />
        <main class="app-content">
            <slot />
        </main>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style></style>
