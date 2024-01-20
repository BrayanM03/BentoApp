import {createRouter, createWebHistory } from 'vue-router';

//import Vue from 'vue';
import Panel from '../views/Panel.vue'
import Home from '../views/Home.vue'
import SingUp from '../views/SingUp.vue'
import Profile from '../views/Profile.vue'
import misSalones from '../views/misSalones.vue'
import { userSessionStore } from '../stores/auth'

import Sistema from '../views/Sistema.vue'
import Login from '../views/Login.vue'

const routes =[
    {
    path: '/',
    component: Sistema,
    meta:{
        title: "Inicio"
    },
    children:    
    [{
        path: '/panel',
        name: "Panel",
        component: Panel,
        meta:{
            title: "Panel"
        }
    },
    {
        path: '/',
        name: "Home",
        component: Home,
        meta:{
            title: "Home"
        }
    }]},
    {
        path: '/login',
        name: "Login",
        component: Login,
        meta:{
            title: "Iniciar sesión"
        }
    },
    {
        path: '/singup',
        name: "Singup",
        component: SingUp,
        meta:{
            title: "Registrar"
        }
    },
    {
        path: '/profile',
        name: "Profile",
        component: Profile,
        meta:{
            title: "Perfil | Bento app"
        }
    },
    {
        path: '/mis-salones',
        name: "Mis salones",
        component: misSalones,
        meta:{
            title: "Mis salones | Bento app"
        }
    },
]

 

const router = createRouter({
    history : createWebHistory(),
    routes
})



router.beforeEach(async (to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    document.title = `${to.meta.title} | Mary Erp`;
    
    const auth = userSessionStore();
    
    const publicPages = ['/login', '/home'];
    const authRequired = !publicPages.includes(to.path);
    
    await auth.getSession()
    const currentUser = auth.currentUser;
    //console.log(currentUser);
    //next();
    if (authRequired && !currentUser) {
        auth.returnUrl = to.fullPath;
        
      return '/login';
    }

    // next(); 
});

export default router;