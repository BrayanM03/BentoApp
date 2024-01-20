<template>
  <div>
    <div v-if="isLoading">
             <Loading></Loading>
            </div>
            <div v-else>
              <navbar></navbar>
              <div class="container-fluid">
                <Aside></Aside>
                <router-view></router-view>
              </div>
            </div>
  </div>
</template>
<script lang="ts">
import Aside from '../components/Aside.vue';
import Loading from '../components/loading/Loading.vue';
import navbar from '../components/principales/navbar/navbar.vue';
import { ref } from 'vue'

export default{
    setup(){
        const isLoading = ref(true)
        setTimeout(() => {
            isLoading.value = false
            }, 2000)
            return { isLoading }

    },
    components:{
        navbar,
        Aside,
        Loading
    }
}

</script>
<style lang="">
    
</style>