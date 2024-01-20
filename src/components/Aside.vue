<template>
   
        <aside>
            <div class="top">
                <!-- <Logo/> -->
                 <div class="close" id="close-btn" v-on:click="closeAside">
                    <span class="material-symbols-sharp">close</span>
                  </div>
            </div>

            <div class="sidebar"> 
                <router-link :to="{name: 'Home'}">
                    <span class="material-symbols-rounded">store</span>
                    <h3>Salones</h3>
                </router-link>

                <!-- <router-link :to="{name: 'Panel'}" >
                    <span class="material-symbols-sharp">dashboard</span>
                    <h3>Dashboard</h3>
                </router-link> -->

                <a>
                    <span class="material-symbols-sharp">logout</span>
                    <h3>Cerrar sesión</h3>>
                </a>

            </div>
        </aside>
   
</template>
<script lang="ts">
import Logo from '../components/panel/Logo.vue';

export default {
    name: "Aside",
    methods: {
        closeAside: function(){
            const sideMenu = document.querySelector('aside') as HTMLButtonElement;
            sideMenu.style.display = 'none';
            
        },
        selectView(name:any) {
        this.$emit("selectView", name);
        }
    },
    components: {
        Logo
    }
   
}
</script>
<style lang="css">
    
</style>