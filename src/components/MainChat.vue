<template>
  <div style="width: 100%; height: 100%; background-color: #fbfcfc">
    <chat-user-bar :user="user" />
    <chat-user :chat-messages="chatMessages" :user="user" id="chatContainer" />
    <message-bar @message="sendMessage" />
  </div>
</template>
<script>
import ChatUserBar from "./ChatUserBar.vue";
import ChatUser from "./ChatUser.vue";
import MessageBar from "./MessageBar.vue";
export default {
  components: {
    ChatUserBar,
    ChatUser,
    MessageBar,
  },
  data() {
    return {
      user: null,
      chatMessages: [],
    };
  },
  created() {
    this.setUser({
      id: 1,
      name: "Johanna Florez Diaz",
      chatName: "LaNiñademisOjos <3",
      imageUrl: "url",
      cellphone: "1234567890",
    }),
      this.setChatMessages([
        {
          id: 1,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 2,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 3,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 4,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 5,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 6,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 7,
          message:
            "Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 8,
          message: "Hola",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 1,
            name: "Johanna Florez Diaz",
            chatName: "LaNiñademisOjos <3",
            imageUrl: "url",
            cellphone: "1234567890",
          },
        },
        {
          id: 8,
          message: "Hola mi amr hermosa uwu",
          date: "12/12/12",
          time: "12:12:12",
          user: {
            idUser: 2,
            name: "Francis Torres Cuya",
            chatName: "",
            imageUrl: "url",
            cellphone: "1234567891",
          },
        },
      ]);
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

<style>


</style>