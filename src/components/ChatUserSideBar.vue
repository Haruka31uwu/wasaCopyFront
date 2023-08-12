<template >
    <div class="main-side-bar">
        <user-side-bar-bar />
        <div class="user-contacts" >
            <div class="user-contacts-item" 
                v-for="(item,index) in JSON.parse(JSON.parse(contacts))" 
                :key="index"
                @click="selectChat(index,item)"
                :style="chatSelected==index?'background-color: #e6e6e6;':''">
                <div class="user-contacts-item-img">
                    <b-icon icon="person-circle" font-scale="3"  variant="primary" ></b-icon>
                </div>
                <div class="user-contacts-item-info">
                    <div class="user-contacts-item-info-name">
                        {{ item.contact_name }}
                    </div>
                    <div class="user-contacts-item-info-last-message" 
                    :id="item.pending_messages?`user-contacts-item-info-last-message-${item.pending_messages[0].message_id}`:''">
                        {{ item.pending_messages?formatMessage(item.pending_messages[0].message_content):'' }}
                    </div>
                </div>
                <div class="user-contacts-item-last-message">
                    <span class="message-time">{{ item.pending_messages?getFormatDate(item.pending_messages[0].created_at):'' }}</span>
                    <span :class="item.pending_messages?'message-count':''">{{ item.pending_messages?item.pending_messages.length:'' }}</span>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserSideBarBar from './UserSideBarBar.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
    components:{
        UserSideBarBar
    },
    computed:{
        ...mapGetters({
            user: 'G_USER',
            contacts: 'G_USER_CONTACTS'
        })
    },
    data(){
        return {    
            chatSelected: null,
        }
    },
    created(){
        console.log(JSON.parse(JSON.parse(this.contacts))[0].pending_messages[0]);
    },
    methods:{
        ...mapActions({
            selectChats: 'A_SET_CHAT_SELECTED'
        }),
        selectChat(index,item){
            this.chatSelected = index;
            this.selectChats();
            this.getChatMessages(item)
        },
        async getChatMessages(item){
            const params={
                user_id: JSON.parse(this.user).id,
                for_user_id: item.contact_id
            }
            try{
                const data=await this.sendRequest('get-single-chat-messages','post',params);
                const dataParsed=JSON.parse(data.data[0].user_messages)
                this.$emit('setChatMessages',dataParsed,item)
            }catch(e){
                console.log(e);
            }

        },
        getFormatDate(datestr){
            const date = new Date(datestr);
            // const day = date.getDate();
            // const month = date.getMonth()+1;
            // const year = date.getFullYear();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            if(hour>12){
                return `${hour-12}:${minutes}:${seconds} PM`
            }else{
                return `${hour}:${minutes}:${seconds} AM`
            }
            // return `${hour}:${minutes}:${seconds}`
        },
        formatMessage(message) {
      const maxMessageWidth = 24;
      console.log(message.length) // Tamaño máximo del mensaje antes de recortar
      if (message.length > maxMessageWidth) {
        return message.slice(0, maxMessageWidth) + '...';
      }
      return message;
    },
}
}
</script>
<style scoped>
    .user-contacts{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: #fbfcfc;
        border:1px solid #e6e6e6;
        overflow-y: scroll;
        padding: 0 .3em;

    }
    .user-contacts-item{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;

    }.user-contacts-item:hover{
        background-color: #e6e6e6;
    }.user-contacts-item-img{
        width: 20%;
    }.user-contacts-item-info{
        width: 60%;
        font-size: 1.2em;
    }.user-contacts-item-time{
        width: 20%;
        font-size: 0.8em;
    }.main-side-bar{
        position: fixed;
        top: 0;
        width: 25em;
        min-width: 400px;
    }.user-contacts-item-last-message{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin: 0 auto;
    }.user-contacts-item-last-message span{
        text-align: center;
        font-size: 0.8em;
    }.message-time{
        color: #bdc3c7;
    }.message-count{
        background-color: green;
        color: white;
        border-radius: 50%;
        padding:  2px 8px;
    }.user-contacts-item-info-last-message{
        font-size: 0.9em;
        color: #bdc3c7;
        width: 100%;
    }
</style>