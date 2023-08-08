<template>
  <div class="main-chat">
    <div class="chat-container" v-if="G_CHAT_SELECTED">
      <div
        v-for="(item, index) in chatMessages"
        
        :key="index"
        :class="
          (item.created_by == user.id
            ? 'message-container-user message-container'
            : 'message-container-others message-container')
        "
      >
        <div class="message-content">{{ item.message }}</div>
        <div class="message-footer">
            <span class="message-time">{{ item.time }}</span>
            <b-icon icon="check2" />
        </div>
        <div class="text-light" style="width:20px;height:20px" role="status" :id="'spinner-chat'+index"></div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    chatMessages: {
      type: Array,
      required: false,
      default: () => [],
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      G_CHAT_SELECTED: 'G_CHAT_SELECTED',
    })
  },
};
</script>
<style scoped>
.main-chat{
    width: 100%;
    height: 100%;
    background-color: #FBFCFC;
    position: relative; 
    padding: 75px 0;
}
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  margin: 0 auto;
  overflow-y: auto;
}
.message-container-user {
  align-self: flex-end; /* Ajusta el contenedor del mensaje a la derecha */
  background-color: #D5F5E3;
}
.message-container-others {
  align-self: flex-start; /* Ajusta el contenedor del mensaje a la derecha */
  background-color: #d1e8eb;
}
.message-container {
  width: auto;
  max-width: 300px;
  margin: .5em 1em;
  height: auto;
  padding: 1em;
  word-wrap: break-word;
  border-radius: 5px;
  position: relative;
}.message-footer{
    display: flex;
    justify-content:flex-end;
    align-items:flex-end;
    margin-top: .5em;
    width: 100%;

}.message-time{
    font-size: .7em;
    color:#A6ACAF;
    margin-right: .1em;
}
</style>

