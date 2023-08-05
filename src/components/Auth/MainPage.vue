<template >
    <div class="w-100 main-container">
        <div class="body d-flex flex-wrap w-100">
            <div class=" w-50">
                WasaCopy
                <login-component class="first-column"/>
            </div>
            <register-component class="w-50"/>
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
    }
}
</script>
<style scoped>
    .first-column{
        display: flex;
        justify-content: center;
    }.main-container{
        padding: 1.2em;
    }
</style>