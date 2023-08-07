<template >
    <div style="width: 100%;">
        <user-side-bar-bar />
        <div class="user-contacts" >
            <div class="user-contacts-item" 
                v-for="(item,index) in JSON.parse(JSON.parse(contacts))" 
                :key="index"
                @click="selectChat(index,item.contact_id)"
                :style="chatSelected==index?'background-color: #e6e6e6;':''">
                <div class="user-contacts-item-img">
                    <b-icon icon="person-circle" font-scale="3"  variant="primary" ></b-icon>
                </div>
                <div class="user-contacts-item-info">{{item}}</div>
                <div class="user-contacts-item-time">12:12</div>
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

    },
    methods:{
        ...mapActions({
            selectChats: 'A_SET_CHAT_SELECTED'
        }),
        selectChat(index,contact_id){
            this.chatSelected = index;
            this.selectChats();
            this.getChatMessages(contact_id)
        },
        async getChatMessages(contact_id){
            const params={
                user_id: JSON.parse(this.user).id,
                for_user_id: contact_id
            }
            try{
                const data=await this.sendRequest('get-single-chat-messages','post',params);
                const dataParsed=JSON.parse(data.data[0].user_messages)
                this.$emit('setChatMessages',dataParsed)
            }catch(e){
                console.log(e);
            }

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
    }
</style>