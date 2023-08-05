<template >
  <div>
    <div class="background">
      <img :src="imgUrl" alt="background" class="img-background" />
      <div
        v-if="!isComplete"
        class="title-register"
        
      >
        <span class="title-register-main title">New Here?</span>
        <span class="title-register-sub title"
          >Sign up and discover great amount of new opportunities!</span
        >
        <b-button
          class="btn title-register-button"
          @click="!isPressed ? expandComponent() : registerUser()"
          >Sign Up</b-button
        >
      </div>
      <div
        v-else
        class="title-register title-register-complete"
      >
        <!-- <span class="title-register-main title">Create Your Account</span> -->
        <b-form-input
        v-model="userData.name"
          class="title-register-input"
          placeholder="Name"
          type="text"/>
        <b-form-input
            v-model="userData.lastName"
            class="title-register-input"
            placeholder="Last Name"
            type="text"/>
        <b-form-input
            v-model="userData.username"
            class="title-register-input"
            placeholder="Username"
            type="text"/>
        <b-form-input
            v-model="userData.phoneNumber"
            class="title-register-input"
            placeholder="Phone Number"
            type="text"/>
        <b-form-input
            v-model="userData.email"
            class="title-register-input"
            placeholder="Email"
            type="text"/>
        <b-form-input
            v-model="userData.password"
            class="title-register-input"
            placeholder="Password"
            type="text"/>
        
        <b-button
          class="btn title-register-button"
          @click="!isPressed ? expandComponent() : registerUser()"
          >Sign Up</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "RegisterComponent",
  data() {
    return {
      imgUrl: require("@/assets/register-background.jpg"),
      isPressed: false,
      isComplete:false,
      userData: {
        name: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    expandComponent() {
      this.isPressed = true;
      this.$emit("expand-component");
      setTimeout(() => {
        this.isComplete = true;
      }, 2800);
    },
    async registerUser() {
      const params={
        name: this.userData.name,
        lastName: this.userData.lastName,
        username: this.userData.username,
        phoneNumber: this.userData.phoneNumber,
        email: this.userData.email,
        password: this.userData.password,
      }
      try{
        this.addPreloader();
        const data=await this.sendRequest('register-user','post',params);
        if(data.status===200){
            this.removePreloader();
            this.showSuccessSwal();
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
      }catch(error){
        this.removePreloader();
        this.showErrorSwal(error.message);
    }
    },
  },
};
</script>
<style scoped>
.img-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
}
.background {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  z-index: 1;
}
.title-register {
  z-index: 2;
  position: absolute;
  top: 50%; /* Ajusta la posición vertical del título */
  left:50%;
  transform: translate(-50%,-50%); /* Ajusta la posición horizontal del título */
  display: flex;
  flex-direction: column;
}
.title {
  color: white;
  text-align: center;
}
.title-register-main {
  font-size: 3.6em;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.title-register-sub {
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 1em;
}
.title-register-button {
  height: 3em;
  width: 13em;
  margin: 0 auto;
  background-color: white;
  border-radius: 2em;
  color: black;
  border: 0;
}.title-register-complete{

    animation: pulse 1s 5;

}@keyframes pulse {
    0% {
      transform: translate(-50%,-50%);
      
    }
    50% {
      transform: scale(1.1) translate(-50%,-50%) 
    }
    100% {
      transform: translate(-50%,-50%);

      
    }
  }.title-register-input{
    margin: 0.5em 0;
  }
</style>