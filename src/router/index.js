import { createRouter, createWebHistory } from 'vue-router';  
import HomeView from '../pages/HomeView.vue'; 
import DetailView from '../pages/DetailView.vue';
import LoginView from '../pages/LoginView.vue';

const routes = [  
    { 
        path: '/login', 
        component: LoginView,
        meta: { requiresAuth: false } 
    },
    { 
        path: '/', 
        component: HomeView,
        meta: { requiresAuth: true }  
    },
    {   path: '/detail/:id', 
        component: DetailView, 
        meta: { requiresAuth: true }
    }  
  ];  
  
  const router = createRouter({  
    history: createWebHistory(),  
    routes  
  });  

  router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  });
  
  export default router;