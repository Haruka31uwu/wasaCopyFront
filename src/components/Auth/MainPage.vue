<template >
    <div class="w-100 ">
        <div class="body d-flex flex-wrap w-100 ">
            <div :class="{
                'hide-component': hideLogin,
                'main-container': !hidingLogin,
                'reduce-container': expanded,
                
              }"
              style="width: 50%;">
                WasaCopy
                <login-component class="first-column"/>
            </div>
            <register-component :class="{
                'expand-component': expanded,
                'expand-finish-component': hidingLogin,
                
            }"
            style="width: 50%;"
            @expand-component="expandComponent"
            />
        </div>

    </div>
</template>
<script>
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'
export default {
    components:{
        RegisterComponent,
        LoginComponent
    },
    computed:{
        
    },
    data(){
        return{
            expanded:false,
            hidingLogin:false,
            hideLogin:false

        }
    },
    methods:{
        async expandComponent(){
            this.expanded=true;
             setTimeout(() => {
                this.hidingLogin = true;
            }, 2000);
            setTimeout(() => {
                this.hideLogin = true;
            }, 2100);
        }   
    }
}
</script>
<style scoped>
    .first-column{
        display: flex;
        justify-content: center;
        height: 100%;
    }.main-container{
        padding: 1.2em;
    }.reduce-container{
        animation: reduce 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-fill-mode: forwards; /* Maintain the state after animation */

    }.hide-component {
        display: none;
    }
    @keyframes reduce {
        0% {
          width: 50%;
        }
        100% {
          width: 30%; /* Change this value to the desired width */
        }
    }
    .expand-component{
        animation: expand 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-fill-mode: forwards; /* Maintain the state after animation */
    } @keyframes expand {
        0% {
          width: 50%; /* Change this value to the desired width */
        }
        100% {
          width: 70%;
        } 
    }.expand-finish-component{
        animation: expand-finish 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-fill-mode: forwards; /* Maintain the state after animation */
    } @keyframes expand-finish {
        0% {
          width: 70%; /* Change this value to the desired width */
        }
        100% {
          width: 100%;
        }
    }
</style>