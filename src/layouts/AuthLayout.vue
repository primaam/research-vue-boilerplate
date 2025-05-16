<template>
    <div class="auth-layout">
        <header class="auth-header">
            <h1>My App</h1>
        </header>
        <main>
            <slot />
        </main>
        <footer class="auth-footer">
            <p>© 2025 Test APP</p>
        </footer>
    </div>
</template>

<script setup>
export default {};
</script>

<style>
.auth-layout {
    background: #f5f5f5;
    min-height: 100vh;
}
.auth-header,
.auth-footer {
    text-align: center;
    padding: 1rem;
}
</style>
