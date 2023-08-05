<template >
  <div class="login">
    <div class="login-header">
      <span class="login-header-title">Login to Your Account</span>
      <span class="login-header-subtitle">Login using Social Networks</span>
      <div class="login-header-media-items">
      </div>
    </div>
    <div class="login-form">
      <input v-model="email" type="text" class="login-form-input" placeholder="Email" />
      <input v-model="password" type="text" class="login-form-input" placeholder="Password" />
      <b-button @click="loginAccount" class="login-form-button">Sign In</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginComponent",
  data(){
    return{
        email:null,
        password:null
    }
  },
  created(){
  },
  methods:{
    loginAccount(){
        if(this.email.trim()!=''&&this.password.trim()!=''&& this.password.trim().length>6){
            this.showSuccessSwal();
        }
    }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  align-content: center;
  flex-direction: column;
 
}
.login-header {
  display: flex;
  align-content: center;
  flex-direction: column;
}
.login-header-title {
  text-align: center;
  font-size: 2.8em;
  font-weight: bold;
}
.login-header-subtitle {
  text-align: center;
  font-weight: 300;
}
.login-form {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}
.login-form-input {
  width: 60%;
  height: 3em;
  margin: 0.7em auto;
  border-radius: 1em;
  background: #ebf5fb;
  border: 0;
  padding: 0 0 0 1em;
  box-shadow: 10px 10px 5px 0px rgba(128, 128, 128, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(128, 128, 128, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(128, 128, 128, 0.75);
}
.login-form-input:hover {
  background: #d6eaf8;
}.login-form-button{
    margin: 1em auto;
    width:30%;
    height: 2.7em;
    background:#73C6B6;
    border:0;
    border-radius: 1em;
}.login-form-button:hover{
    background: #45B39D;
    cursor: pointer;
    transform: scale(1.1);
}
</style>