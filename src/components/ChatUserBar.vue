<template>
    <div class="chat-header">
        <div class="chat-header-info">
            <div>

                <span>{{contact.contact_name}}</span>
            </div>
        </div>
        <div class="chat-header-options">
            <b-icon icon="camera-video"/>
            <b-icon icon="telephone"/>
            <b-icon icon="search"/>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        contact:{
            type: Object,
            required: true
        }
    },
    data(){
        return {
            
        }
    }
    
}
</script>
<style scoped>
.chat-header{
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 75px; 
    padding: 1.5em 1em;
    background-color: #FDFEFE;
    border-bottom: 1px solid #BDC3C7;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>