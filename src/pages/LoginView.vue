<template>
 <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="form.email" type="email" placeholder="Email" required>
      <input v-model="form.password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  email: '',
  password: ''
});
const error = ref('');

const handleLogin = () => {
  if (form.value.email === 'admin@example.com' && form.value.password === '123456') {
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/');
  } else {
    error.value = 'Email atau password salah';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  height: 100px;
}
.error {
  color: red;
}
</style>