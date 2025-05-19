<template>
    <div class="auth-layout">
        <header class="auth-header">
            <h1>My App</h1>
        </header>
        <main>
            <slot />
            <p></p>
        </main>
        <footer class="auth-footer">
            <p>© 2025 Test APP</p>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
