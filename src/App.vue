<template>
  <div id="app">
    <!--<main-chat class="main-chat"></main-chat> -->
    <main-page></main-page>
    <div class="preloader-overlay align-items-center justify-content-center" id="loader">
      <div class="spinner-border text-light" role="status">
      </div>
      </div>
  </div>
</template>

<script>
import echo from './sockets/index'
// import MainChat from './components/MainChat.vue'
import MainPage from './components/Auth/MainPage.vue'
export default{
  components:{
    //MainChat,
    MainPage
  },
  data(){
    return {

    }
  },
  created(){
    echo
  }
}
</script>

<style>
.main-chat{
  overflow: hidden;
  
}
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Color semitransparente */
  z-index: 9999; /* Z-index alto para que esté por encima de todo */
  display: none /* Inicialmente oculto */
}

.preloader-active {
  overflow: hidden; /* Evita que el cuerpo haga scroll */
}

.preloader-active {
  display: flex !important; /* Mostrar el overlay cuando el preloader está activo */
}
</style>
