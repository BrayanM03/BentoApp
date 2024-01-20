<template>
    <div>
        <div v-if="isLoading">
            <Loading></Loading>
        </div>
        <div v-else>
            <navbar></navbar>
            <contenedorPrincipal></contenedorPrincipal>
           <!--  <contenedor-tabla></contenedor-tabla> -->
        </div>
    </div>
</template>
<script>
  import Aside from '../components/Aside.vue';
  import Loading from '../components/loading/Loading.vue';
  import navbar from '../components/principales/navbar/navbar.vue';
  import contenedorPrincipal from '../components/principales/contenedores/contenedor-principal.vue';
  import { userSessionStore } from '../stores/auth'
  import { themeStore } from '../stores/theme'
  import { ref } from 'vue'
  
  export default{
      setup(){
       const sessionStore = userSessionStore();
       const themeApptore = themeStore();
       const currentUser = sessionStore.currentUser;
    
       if(currentUser){
        var user_name = currentUser.user_metadata.name
        var first_name = user_name.split(' ')[0]
        var url_profile_picture = "//wsrv.nl/?url=" + currentUser.user_metadata.picture + "&w=300&h=300"
        var correo = currentUser.user_metadata.email
       } else{
        var url_profile_picture = "";
       }

          const isLoading = ref(true)
          setTimeout(() => {
              isLoading.value = false
              }, 2000)
          return { 
            isLoading,
            sessionStore,
            user_name,
            url_profile_picture,
            correo,
            first_name
             }
  
      },
      components:{
          navbar,
          Aside,
          Loading,
          contenedorPrincipal
      }
  }
  
</script>
<style lang="">
    
</style>