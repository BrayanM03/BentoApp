<template>
    <div class="logo">
        <router-link :to="{name: 'Home'}">
                                <img src="../../assets/img/logo-bento.png" alt="">
                                <!-- <h2>Mary <span class="text-muted">ERP</span></h2> -->
         </router-link>
    </div>
                
</template>
<script setup lang="ts">

</script>
<style scoped>
.logo{
    display: flex;
    gap: 0.8rem;
}

 .logo img{
    width: 150px;
    height: 55px;
}
</style>