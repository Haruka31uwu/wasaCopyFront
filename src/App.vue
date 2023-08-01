<template>
  <div id="app">
    <main-chat class="main-chat"></main-chat>
  </div>
</template>

<script>
import MainChat from './components/MainChat.vue'
export default{
  components:{
    MainChat
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.main-chat{
  overflow: hidden;
}
</style>
