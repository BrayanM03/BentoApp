<template lang="">
  <div class="flex justify-center">
    <div class="mt-40 w-1/2 bg-white h-14">
      <section>
        <header
          class="bg-white space-y-4 p-4 dark:bg-gray-700 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6"
        >
          <div class="flex items-center justify-between">
            <h2 class="font-semibold text-slate-900 dark:text-white">Mis salones</h2>
            <!-- <fwb-button
            @click="showModal"
              class="hover:bg-blue-400 group flex items-center rounded-md bg-purple-400 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2"
                aria-hidden="true"
              >
                <path
                  d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
                />
              </svg>
              Nuevo
            </fwb-button> -->
            <Modal></Modal>
          </div>
          <form class="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Filter projects"
              placeholder="Filter projects..."
            />
          </form>
        </header>
        <ul
          class="bg-slate-50 dark:bg-gray-700 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6"
        >

        
   <li class="pb-3 sm:pb-4" v-for="salon in salones">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
            <img class="w-20 h-20 rounded-lg" :src="getIMGPath(salon.url_image)">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {{salon.nombre}}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
         </div>
      </div>
   </li>

          <li class="flex">
            <a
              href="/new"
              class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
            >
              <svg
                class="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
                />
              </svg>
              Nuevo salón
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script setup>
import { supabase } from '../../../lib/supabaseClient.js';
import { onMounted, ref } from 'vue'
import { FwbModal } from 'flowbite-vue'
import Modal from '../modal.vue'
const salones = ref([])

function getIMGPath(url_image){
   const publicUrl = supabase.storage.from('salones').getPublicUrl('salon-1.jpeg'/* ,{
    transform:{
      width:150,
      height:100,
      resize:'cover'
    }
   } */)
   console.log(publicUrl.data.publicUrl);
   return publicUrl.data.publicUrl;
}
async function getHalls() {
  const { data } = await supabase.from('salones').select('nombre')
  salones.value = data
}

onMounted(() => {
  getHalls()
})
</script>

<style lang=""></style>
