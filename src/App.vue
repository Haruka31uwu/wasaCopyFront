<template>
  <div id="app">
    <!--<main-chat class="main-chat"></main-chat> -->
    <main-page></main-page>
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

<style scoped>
.main-chat{
  overflow: hidden;
}
</style>
