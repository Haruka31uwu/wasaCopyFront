<template>
  <div style="width: 100%; height: 100%; background-color: #fbfcfc" class="d-flex">
    <div class="side-bar">
      <chat-user-side-bar @setChatMessages="(evt,contact)=>setChatMessages(evt,contact)" />
    </div>
    <div class="main-content">
      <chat-user-bar :contact="contact" v-if="G_CHAT_SELECTED"  />
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
import {mapActions, mapGetters} from 'vuex'
import dayjs from 'dayjs'
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
      contact: {},
      chatMessages: [],
      currentDay: dayjs().format('DD/MM/YYYY')
    };
  },
  computed: {
    ...mapGetters({
      G_CHAT_SELECTED: 'G_CHAT_SELECTED',
      G_USER: 'G_USER',
      G_CONTACT_SELECTED: 'G_CONTACT_SELECTED',
      G_NEW_MESSAGE: 'G_NEW_MESSAGE',
    })
  },
  created() {
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
    },
    G_NEW_MESSAGE(val) {
     if(val){
      console.log('new message',val)
      console.log('contact',this.G_CONTACT_SELECTED)
       this.G_CONTACT_SELECTED===val.created_by?this.updateMessageChat(val):this.updatePendingMessages()
     }
    },
  },

  methods: {
    setUser(user) {
      this.user = user;
    },
    setChatMessages(chatMessages,contact) {
      this.chatMessages = chatMessages;
      this.contact = contact;
      this.A_SET_CONTACT_SELECTED(contact.contact_id);
      console.log(this.contact)
    },
    sendMessage(message) {
      const params={
        message:message,
        contact_id:this.contact.id,
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        created_by: this.user.id,
        for:this.contact.contact_id,
        type:'text',
        was_replied:0,
        seen_at: null,
        updated_at:null,
      }
      this.chatMessages.push(params);
      const data=this.sendRequest('send-message-text','post',params);
      console.log(data)
    },
    updateMessageChat(messageData){
      this.chatMessages.push(messageData);
    },
    updatePendingMessages(){
      // const data=this.sendRequest('get-pending-messages','post',{contact_id:this.G_CONTACT_SELECTED});
      // console.log(data)
    },
    scrollToBottom() {
      const scrollableContainer = document.getElementById('chatContainer');
      scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
    },
    ...mapActions({
      A_SET_CONTACT_SELECTED: 'A_SET_CONTACT_SELECTED',
    })
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
  width: 100%;
  height: 100%;
  z-index: 0;
}.side-bar{

}

</style>