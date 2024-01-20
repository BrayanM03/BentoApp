<template>
    <div class="right">
            <div class="top">
                <button id="menu-btn" v-on:click="openAside">
                    <span class="material-symbols-sharp">
                        menu
                    </span>
                </button>
                <div class="theme-toggler" v-on:click="changeTheme">
                    <span class="material-symbols-sharp active">light_mode</span>
                    <span class="material-symbols-sharp">dark_mode</span>
                </div>
                <div class="profile" v-on:click="displayProfileOptions">
                    <div class="info">
                        <p>Hola <b>{{ first_name }}</b></p>
                        <small class="text-muted">Manager</small>
                    </div>
                    <div class="profile-photo">
                        <img :src="url_profile_picture" alt="google-user">
                    </div>
                </div>

                <div class="profile-options">
                    <ul>
                        <li><b>{{ user_name }}</b></li>
                        <li style="font-size:9px">{{ correo }}</li>
                       
                        <li style="margin-top:15px">Perfil</li>
                        <li>Configuración</li>
                        <li  v-on:click="sessionStore.signOut">Cerrar sesión</li>
                    </ul>
                </div>
            </div>
            <!-- END TOP -->
            <div class="recent-updates">
                <h2>Recent updates</h2>
                <div class="updates">
                    <div class="update">
                        <div class="profile-photo">
                             <img src="../../assets/img/profiles/brayan.jpeg" alt="">
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b> recibio un mensaje tuyo.</p>
                            <small class="text-muted">Hace 2 minutos</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                             <img src="../../assets/img/profiles/brayan.jpeg" alt="">
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b> recibio un mensaje tuyo.</p>
                            <small class="text-muted">Hace 2 minutos</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                             <img src="../../assets/img/profiles/brayan.jpeg" alt="">
                        </div>
                        <div class="message">
                            <p><b>Mike Tyson</b> recibio un mensaje tuyo.</p>
                            <small class="text-muted">Hace 2 minutos</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- END OF RECENT UPDATES -->
            <div class="sales-analytics">
                <h2>Analiticas de ventas</h2>
                <div class="item online">
                    <div class="icon">
                        <span class="material-symbols-sharp">shopping_cart</span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Ordenes en linea</h3>
                            <small class="text-muted">Ultimas 24 horas</small>
                        </div>
                        <h5 class="success">+39%</h5>
                        <h3>865</h3>
                    </div>
                </div>

                <div class="item offoline">
                    <div class="icon">
                        <span class="material-symbols-sharp">local_mall</span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Ordenes pendientes</h3>
                            <small class="text-muted">Ultimas 24 horas</small>
                        </div>
                        <h5 class="danger">-40%</h5>
                        <h3>865</h3>
                    </div>
                </div>

                <div class="item customers">
                    <div class="icon">
                        <span class="material-symbols-sharp">person</span>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Clientes registrados</h3>
                            <small class="text-muted">Ultimas 24 horas</small>
                        </div>
                        <h5 class="success">+39%</h5>
                        <h3>865</h3>
                    </div>
                </div>

                <div class="item add-product">
                    <div>
                         <span class="material-symbols-sharp">add</span>
                        <h3>Agregar producto</h3>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import { userSessionStore } from '../../stores/auth'
import { themeStore } from '../../stores/theme'

export default {
    setup(){
        
       const sessionStore = userSessionStore();
       const themeApptore = themeStore();
       const currentUser = sessionStore.currentUser;
        console.log(currentUser)
       if(currentUser){
        var user_name = currentUser.user_metadata.name
        var first_name = user_name.split(' ')[0]
        var url_profile_picture = "//wsrv.nl/?url=" + currentUser.user_metadata.picture + "&w=300&h=300"
        var correo = currentUser.user_metadata.email
       } else{
        var url_profile_picture = "";
        
        console.log("no hay usuario")
       }
       

        function changeTheme(){
            const themeToggler = document.querySelector('.theme-toggler');
            
            document.body.classList.toggle('dark-theme-variables');
            themeToggler?.querySelector('span:nth-child(1)')?.classList.toggle('active');
            themeToggler?.querySelector('span:nth-child(2)')?.classList.toggle('active'); 
            
            let actualTheme = localStorage.getItem("theme")
            if(actualTheme == "light"){
                actualTheme = "dark"
            }else{
                actualTheme = "light"
            }
            
            themeApptore.changeTheme(actualTheme)
        }

        function displayProfileOptions(){
            document.querySelector('.profile-options')?.classList.toggle('active');

        }

        function openAside(){

            const sideMenu = document.querySelector('aside');
            sideMenu.style.display = 'block';

            }

        return {
            changeTheme,
            openAside,
            displayProfileOptions,
            sessionStore,
            user_name,
            url_profile_picture,
            correo,
            first_name
            
        }
    },
    mounted() {
      
      
      if(localStorage.getItem("theme")== "dark"){
       const themeToggler = document.querySelector('.theme-toggler');
       document.body.classList.add('dark-theme-variables');
       themeToggler?.querySelector('span:nth-child(1)')?.classList.toggle('active');
       themeToggler?.querySelector('span:nth-child(2)')?.classList.toggle('active'); 

      }
  },
    name: "Right",
}
</script>
<style scoped>
    .profile{
        cursor: pointer;
    }


    .profile-options{
        position: absolute;
        display: block;
        padding: 1rem;
        top: 4.6rem;
        right: 4rem;
        border: 1px solid rgb(219, 218, 218);
        border-radius: 7px;
        background: var(--color-background); 
        width: 11rem;
        transition: all;
        display: none;
        transition: all 0.4s linear 0.2s;
    }

    @keyframes AnimacionProfileOptions {
  from {height: 0rem;}
  to {height: auto;}
}

    .profile-options ul li{
        margin-top: .4rem;
    }

    .profile-options ul li:hover{
        cursor: pointer;
        font-weight: 700;
    }

    .active{
       
        display: block;
    }
</style>