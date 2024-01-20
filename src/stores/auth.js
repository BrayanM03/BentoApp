import { defineStore } from "pinia";
import { supabase } from '../lib/supabaseClient.js';
import router from '../router/index';
import { useStorage } from '@vueuse/core'

const RUTA_SERVIDOR = import.meta.env.VITE_RUTA_LOCAL;


const url_redirect =RUTA_SERVIDOR;
export const userSessionStore = defineStore('auth', {
    id: 'userSession',
    state: ()=>({
            user: null, 
            returnUrl: null 
    }),
    
    getters: {
        currentUser: (state) => {
          if (state.user) {
            return JSON.parse(JSON.stringify(state.user.user));
          }
          return null;
        },
      },

    actions: {
        async  getSession(){
            //comprabación de la sesión
            const { data, error } = await supabase.auth.getSession()

            if(data){

                if (data.session != null) {
                    this.$state.user = data.session;
                    
                }else{
                    this.$state.user = null;
                }
            }else if(error){
            }
        },

        async signInWithGoogle() {
            console.log(url_redirect);
           const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                 options: {
                    redirectTo: url_redirect
                } 
            })

            if (data) {
                const { data, error } = await supabase.auth.getSession()
                
                this.user = localStorage.setItem('user', JSON.stringify(data));
                
            }
            if (error) {
                console.log(error)
            }
            // redirect to previous url or default to home page
            
        },

        async signOut() {
            const { error } =  await supabase.auth.signOut()
            this.user = null;
            if (error) {
                console.log(error)
            }
            this.$state.user = null;
            location.reload()

            //router.push({ path: '/login' })
        }
    }
})