<template>
  <div>
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
    <div v-else>
      <navbar></navbar>
      <!-- component -->
      <section class="pt-16 bg-blueGray-50">
        <div class="w-7/12 lg:w-4/12 px-4 mx-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 dark:bg-gray-700">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full h-48 px-4 border-2 flex justify-center">
                  <div class="w-40">
                    <img :src="url_profile_picture"
                      class="shadow-xl rounded-full align-middle border-none absolute -mt-5 max-w-150-px w-40">

                  </div>
                </div>
                <!--  <div class="w-full px-4 text-center mt-20">
          <div class="flex justify-center py-4 lg:pt-4 pt-8">
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                22
              </span>
              <span class="text-sm text-blueGray-400">Friends</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                10
              </span>
              <span class="text-sm text-blueGray-400">Photos</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                89
              </span>
              <span class="text-sm text-blueGray-400">Comments</span>
            </div>
          </div>
        </div> -->
              </div>
              <div class="text-center">
                <h3 class="text-2xl font-semibold leading-normal text-blueGray-700 mb-2">
                  {{ first_name }}
                </h3>

                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Manager
                </div>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Matamoros, Tamaulipas
                </div>
              </div>
              <div class="mt-2 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Fundador, gerente general y director del desarrollo de la aplicación.
                    </p>
                    <a href="javascript:void(0);" class="font-normal text-pink-500">
                      Editar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-2 w-2/3 border-indigo-500 place-content-center mx-auto">
          <!-- style="border:1px solid red !important;" -->
          <div class="grid grid-cols-4 gap-4">
            <div>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-5 p-4 dark:bg-gray-700">
                <div class="flex flex-wrap justify-start mb-3">
                  <font-awesome-icon :icon="['fas', 'archway']" size="4x" style="color:#828ce7" />
                </div>
                <div
                  class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  Mis salones
                </div>
                <div class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400">
                  En esta seccion estan los salones registrados en el sistema.
                </div>
              </div>
            </div>
            <!-- ... -->
            <div>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-5 p-4 dark:bg-gray-700">
                <div class="flex flex-wrap justify-start mb-3">
                  <font-awesome-icon :icon="['fas', 'cheese']" size="4x" style="color:#828ce7" />
                </div>
                <div
                  class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  Mis componentes eventuales
                </div>
                <div class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400">
                  En esta seccion estan los paquetes o servicios que pueden complementar tu evento.
                </div>
              </div>
            </div>
            <!-- ... -->
            <div>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-5 p-4 dark:bg-gray-700">
                <div class="flex flex-wrap justify-start mb-3">
                  <font-awesome-icon :icon="['fas', 'calendar-check']" size="4x" style="color:#828ce7" />
                </div>
                <div
                  class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  Mis reservaciones
                </div>
                <div class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400">
                  En esta seccion estan las reservaciones de tus eventos.
                </div>
              </div>
            </div>
            <!-- ... -->
            <div>
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-5 p-4 dark:bg-gray-700">
                <div class="flex flex-wrap justify-start mb-3">
                  <font-awesome-icon :icon="['fas', 'handshake-angle']" size="4x" style="color:#828ce7" />
                </div>
                <div
                  class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  Mis colaboraciones
                </div>
                <div class="flex flex-wrap justify-start text-sm leading-normal mt-0 mb-2 text-blueGray-400">
                  En esta seccion estan los servicios complementarios de terceros.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <footer class="relative  pt-8 pb-6 mt-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> -->
      </section>
    </div>
  </div>
</template>
<script>
import Aside from '../components/Aside.vue';
import Loading from '../components/loading/Loading.vue';
import navbar from '../components/principales/navbar/navbar.vue';
import { userSessionStore } from '../stores/auth'
import { themeStore } from '../stores/theme'
import { ref } from 'vue'

export default {
  setup() {
    const sessionStore = userSessionStore();
    const themeApptore = themeStore();
    const currentUser = sessionStore.currentUser;

    if (currentUser) {
      var user_name = currentUser.user_metadata.name
      var first_name = user_name.split(' ')[0]
      var url_profile_picture = "//wsrv.nl/?url=" + currentUser.user_metadata.picture + "&w=300&h=300"
      var correo = currentUser.user_metadata.email
    } else {
      var url_profile_picture = "";
      console.log("no hay usuario")
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
  components: {
    navbar,
    Aside,
    Loading
  }
}

</script>
<style lang="">
      
  </style>