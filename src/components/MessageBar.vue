<template>
  <div class="message-bar">
    <div class="message-bar-options">
      <b-icon icon="emoji-smile" class="menu-bar-option" />
      <b-icon
        icon="paperclip"
        class="menu-bar-option"
        @click="fileClicked = !fileClicked"
      />
      <div v-if="fileClicked" class="file-options-menu">
        <div
          class="d-flex flex-row file-options-item d-flex align-items-center"
          @click="openFileInput('fileInput')"
        >
          <b-icon icon="paperclip"  />
          <span>Fotos y Videos</span>
          <b-form-file
            v-model="selectedFile"
            ref="fileInput"
            class="d-none"
            plain
            @change="fileSelected"
            accept="image/*, video/*"
            ></b-form-file>
        </div>
        <div
          class="d-flex flex-row file-options-item d-flex align-items-center"
            @click="openFileInput('fileInput2')"
        >
          <b-icon icon="paperclip" />
          <span>Documento</span>
          <b-form-file
            v-model="selectedFile"
            ref="fileInput2"
            class="d-none"
            plain
            @change="fileSelected"
          >
            
          </b-form-file>
        </div>
        <div
          class="d-flex flex-row file-options-item d-flex align-items-center"
        >
          <b-icon icon="paperclip" />
          <span>Contacto</span>
        </div>
        <div
          class="d-flex flex-row file-options-item d-flex align-items-center"
        >
          <b-icon icon="paperclip" />
          <span>Encuesta</span>
        </div>
        <div
          class="d-flex flex-row file-options-item d-flex align-items-center"
        >
          <b-icon icon="paperclip" />
          <span>Dibujo</span>
        </div>
      </div>
    </div>
    <div class="message-bar-input">
      <b-form-input
        type="text"
        placeholder="Escribe un mensaje..."
        v-model="textInput"
      />
    </div>
    <div class="message-bar-send">
      <pre>{{ textInput.length }}</pre>
      <b-icon icon="mic" class="menu-bar-option" v-if="textInput.length <= 0" />
      <b-icon icon="arrow-right" class="menu-bar-option" v-else  @click="sendMessage"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textInput: "",
      fileClicked: false,
      selectedFile: null,
        file2: {
            name: "",
            data: "",
        },
    };
  },
  methods: {
    openFileInput(input) {
        // this.$refs.input.$el.click();
        this.$refs[input].$el.click();
    },
    fileSelected(event) {
      const files = event.srcElement.files[0];
      if (typeof files === 'undefined' || files === null) {
        this.selectedFile = null;
      } else {
        this.file2.name = files.name;
        const reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = () => (this.file2.data = reader.result);
        this.messageText = ' ';
      }
      
    },
    sendMessage() {
      if (this.textInput.length > 0) {
        this.$emit("message", this.textInput);
        this.textInput = "";
      }
    },
  },
};
</script>
<style scoped>
.message-bar {
  height: 75px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: flex-end;
  margin: 0;
  width: 100%;
}
.message-bar-options {
  display: flex;
  flex-direction: wrap;
  align-items: center;
  height: 50%;
  position: relative;
}
.message-bar-input {
  width: 100%;
  padding: 0 1em;
}
.message-bar-send {
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: center;
  height: 50%;
}
.menu-bar-option {
  margin: 0 0.1em;
  padding: 0.1em;
  font-size: 30px;
  cursor: pointer;
}
.menu-bar-option:hover {
  background-color: #d0d3d4;
  border-radius: 50%;
}
.hidden-dropdown .b-dropdown {
  display: none !important;
}
.file-options-menu {
  position: absolute;
  bottom: 3.1em;
  left: 1em;
  background: white;
  width: 120px;
  padding: .3em;
  -webkit-box-shadow: 0px 4px 5px 3px rgba(209, 209, 209, 1);
  -moz-box-shadow: 0px 4px 5px 3px rgba(209, 209, 209, 1);
  box-shadow: 0px 4px 5px 3px rgba(209, 209, 209, 1);
  border-radius: 5px;
}
.file-options-item {
  font-size: 0.8em;
  padding: 0.3em;
}.file-options-item:hover {
  background-color: #d0d3d4;
  border-radius: 5px;
}.file-input{
  display: none;
}
</style>