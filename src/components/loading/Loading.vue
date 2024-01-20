<template>
    <div class="lootie-player-container">
    <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_yh4qwczn.json"
      background="transparent"  
      speed=".8" 
      style="width: 100px; 
      height: 100px;"  
      loop autoplay></lottie-player>
        
    </div>
</template>
<script setup lang="ts">
 if(localStorage.getItem("theme")== "dark"){
        document.body.classList.add('dark-theme-variables'); 

       }
</script>
<style scoped>
    .lootie-player-container{
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        margin: 0;
        
    }
</style>