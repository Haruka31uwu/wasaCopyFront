<template>
  <div style="width: 100%; height: 100%; background-color: #fbfcfc" class="d-flex">
    <div class="side-bar">
      <chat-user-side-bar @setChatMessages="(evt)=>setChatMessages(evt)" />
    </div>
    <div class="main-content">
      <chat-user-bar :user="user" v-if="G_CHAT_SELECTED"  />
    <chat-user :chat-messages="chatMessages" :user="user" id="chatContainer" />
    <message-bar @message="sendMessage" />
    </div>
  </div>
</template>
<script>
import ChatUserBar from "./ChatUserBar.vue";
import ChatUser from "./ChatUser.vue";
import MessageBar from "./MessageBar.vue";
import ChatUserSideBar from "./ChatUserSideBar.vue";
import {mapGetters} from 'vuex'
export default {
  components: {
    ChatUserBar,
    ChatUser,
    MessageBar,
    ChatUserSideBar,
  },
  data() {
    return {
      user: null,
      chatMessages: [],
    };
  },
  computed: {
    ...mapGetters({
      G_CHAT_SELECTED: 'G_CHAT_SELECTED',
      G_USER: 'G_USER',
    })
  },
  created() {
    console.log(JSON.parse(this.G_USER))
    this.setUser(JSON.parse(this.G_USER));
  },
  mounted() {},
  watch: {
    chatMessages(){
        const scrollable = document.getElementById('chatContainer');
      if (typeof scrollable !== 'undefined' && scrollable !== null && typeof this.chatMessages !== 'undefined') {
        const resizeObserver = new ResizeObserver(this.scrollToBottom);
        // Obtener el contenedor desplazable
        const scrollableContainer = document.getElementById('chatContainer');
        // Escuchar cambios en el tamaño del contenedor
        resizeObserver.observe(scrollableContainer);
      }
    }
  },

  methods: {
    setUser(user) {
      this.user = user;
    },
    setChatMessages(chatMessages) {
      console.log(chatMessages);
      this.chatMessages = chatMessages;
    },
    sendMessage(message) {
      this.chatMessages.push({
        message: message,
        date: "12/12/12",
        time: "12:12:12",
        user: {
          idUser: 1,
          name: "Johanna Florez Diaz",
          chatName: "LaNiñademisOjos <3",
          imageUrl: "url",
          cellphone: "1234567890",
        },
      });
    },
    scrollToBottom() {
      const scrollableContainer = document.getElementById('chatContainer');
      scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
    },
  },
};
</script>

<style scoped>
.side-bar {
  width: 25%;
  min-width: 400px;
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e6e6e6;
  

}
.main-content {
  width: 75%;
  height: 100%;
  z-index: 0;
}

</style>