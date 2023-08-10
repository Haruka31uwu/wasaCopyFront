(function(){"use strict";var e={7641:function(e,t,s){var a=s(7195),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view"),e._m(0)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"preloader-overlay align-items-center justify-content-center",attrs:{id:"loader"}},[t("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}})])}],r=s(3045);window.Pusher=s(8235);const o=new r.Z({broadcaster:"pusher",key:"d893bc04c49a94987fe6",wsHost:window.location.hostname,cluster:"mt1",wsPort:6001,forceTLS:!1,disableStats:!0});o.channel("text-messages").listen(".message",(e=>{console.log(e.message)}));var c={components:{},data(){return{}},created(){}},l=c,u=s(1001),d=(0,u.Z)(l,n,i,!1,null,null,null),p=d.exports,m=(s(7024),s(4359)),h=s(7244),f=s(7347),g=s.n(f),C=s(306);const _={methods:{showSuccessSwal(e,t){g().fire(e||"Success",t||"Completed Succesfully","success")},showWarningSwal(e,t){g().fire(e||"Warning",t||"Warning message","warning")},showInfoSwal(e,t){g().fire(e||"All it is fine",t||"Are you still here?","question")},showErrorSwal(e,t){g().fire({icon:"error",title:e||"Oops....",text:t||"Something went wrong",footer:'<a href="">Why do I have this issue?</a>'})},addPreloader(){const e=document.getElementById("loader");e&&e.classList.add("preloader-active")},removePreloader(){const e=document.getElementById("loader");e&&e.classList.remove("preloader-active")},async sendRequest(e,t,s){try{return(0,C.Z)({method:t,url:"http://127.0.0.1:8000/api/"+e,data:s})}catch(a){console.log(a)}}}};var v=_,S=s(2241),b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-100"},[t("div",{staticClass:"body d-flex flex-wrap w-100"},[t("div",{class:{"hide-component":e.hideLogin,"main-container":!e.hidingLogin,"reduce-container":e.expanded},staticStyle:{width:"50%"}},[e._v(" WasaCopy "),t("login-component",{staticClass:"first-column"})],1),t("register-component",{class:{"expand-component":e.expanded,"expand-finish-component":e.hidingLogin},staticStyle:{width:"50%"},on:{"expand-component":e.expandComponent}})],1)])},E=[],w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login"},[e._m(0),t("div",{staticClass:"login-form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"login-form-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-form-input",attrs:{type:"text",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),t("b-button",{staticClass:"login-form-button",on:{click:e.loginAccount}},[e._v("Sign In")])],1)])},x=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-header"},[t("span",{staticClass:"login-header-title"},[e._v("Login to Your Account")]),t("span",{staticClass:"login-header-subtitle"},[e._v("Login using Social Networks")]),t("div",{staticClass:"login-header-media-items"})])}],T=(s(7658),s(408)),y={name:"LoginComponent",data(){return{email:null,password:null}},created(){},methods:{...(0,T.nv)({A_SET_USER:"A_SET_USER",A_SET_USER_CONTACTS:"A_SET_USER_CONTACTS"}),async loginAccount(){if(""!=this.email.trim()&&""!=this.password.trim()&&this.password.trim().length>=6){const t={email:this.email,password:this.password};try{const e=await this.sendRequest("login-user","post",t);200===e.status?(this.showSuccessSwal(),localStorage.setItem("token","123456"),localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("contacts",JSON.stringify(e.data.contacts[0].user_contacts_json)),this.A_SET_USER(e.data.user),this.A_SET_USER_CONTACTS(JSON.stringify(e.data.contacts[0].user_contacts_json)),this.$router.push("/chat")):this.showErrorSwal(e.message)}catch(e){this.showErrorSwal(e.message)}}}}},A=y,D=(0,u.Z)(A,w,x,!1,null,"6da343ed",null),U=D.exports,k=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"background"},[t("img",{staticClass:"img-background",attrs:{src:e.imgUrl,alt:"background"}}),e.isComplete?t("div",{staticClass:"title-register title-register-complete"},[t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Name",type:"text"},model:{value:e.userData.name,callback:function(t){e.$set(e.userData,"name",t)},expression:"userData.name"}}),t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Last Name",type:"text"},model:{value:e.userData.lastName,callback:function(t){e.$set(e.userData,"lastName",t)},expression:"userData.lastName"}}),t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Username",type:"text"},model:{value:e.userData.username,callback:function(t){e.$set(e.userData,"username",t)},expression:"userData.username"}}),t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Phone Number",type:"text"},model:{value:e.userData.phoneNumber,callback:function(t){e.$set(e.userData,"phoneNumber",t)},expression:"userData.phoneNumber"}}),t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Email",type:"text"},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}}),t("b-form-input",{staticClass:"title-register-input",attrs:{placeholder:"Password",type:"text"},model:{value:e.userData.password,callback:function(t){e.$set(e.userData,"password",t)},expression:"userData.password"}}),t("b-button",{staticClass:"btn title-register-button",on:{click:function(t){e.isPressed?e.registerUser():e.expandComponent()}}},[e._v("Sign Up")])],1):t("div",{staticClass:"title-register"},[t("span",{staticClass:"title-register-main title"},[e._v("New Here?")]),t("span",{staticClass:"title-register-sub title"},[e._v("Sign up and discover great amount of new opportunities!")]),t("b-button",{staticClass:"btn title-register-button",on:{click:function(t){e.isPressed?e.registerUser():e.expandComponent()}}},[e._v("Sign Up")])],1)])])},N=[],O={name:"RegisterComponent",data(){return{imgUrl:s(5828),isPressed:!1,isComplete:!1,userData:{name:"",lastName:"",username:"",phoneNumber:"",email:"",password:""}}},methods:{expandComponent(){this.isPressed=!0,this.$emit("expand-component"),setTimeout((()=>{this.isComplete=!0}),2800)},async registerUser(){const e={name:this.userData.name,lastName:this.userData.lastName,username:this.userData.username,phoneNumber:this.userData.phoneNumber,email:this.userData.email,password:this.userData.password};try{this.addPreloader();const t=await this.sendRequest("register-user","post",e);200===t.status&&(this.removePreloader(),this.showSuccessSwal(),setTimeout((()=>{location.reload()}),2e3))}catch(t){this.removePreloader(),this.showErrorSwal(t.message)}}}},R=O,L=(0,u.Z)(R,k,N,!1,null,"57854be8",null),I=L.exports,P={components:{RegisterComponent:I,LoginComponent:U},computed:{},data(){return{expanded:!1,hidingLogin:!1,hideLogin:!1}},methods:{async expandComponent(){this.expanded=!0,setTimeout((()=>{this.hidingLogin=!0}),2e3),setTimeout((()=>{this.hideLogin=!0}),2100)}}},M=P,j=(0,u.Z)(M,b,E,!1,null,"23674f64",null),H=j.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex",staticStyle:{width:"100%",height:"100%","background-color":"#fbfcfc"}},[t("div",{staticClass:"side-bar"},[t("chat-user-side-bar",{on:{setChatMessages:(t,s)=>e.setChatMessages(t,s)}})],1),t("div",{staticClass:"main-content"},[e.G_CHAT_SELECTED?t("chat-user-bar",{attrs:{contact:e.contact}}):e._e(),t("chat-user",{attrs:{"chat-messages":e.chatMessages,user:e.user,id:"chatContainer"}}),t("message-bar",{on:{message:e.sendMessage}}),e._v("a ")],1)])},F=[],G=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chat-header"},[t("div",{staticClass:"chat-header-info"},[t("div",[t("span",[e._v(e._s(e.contact.contact_name))])])]),t("div",{staticClass:"chat-header-options"},[t("b-icon",{attrs:{icon:"camera-video"}}),t("b-icon",{attrs:{icon:"telephone"}}),t("b-icon",{attrs:{icon:"search"}})],1)])},$=[],B={props:{contact:{type:Object,required:!0}},data(){return{}}},q=B,J=(0,u.Z)(q,G,$,!1,null,"96a1e6ac",null),W=J.exports,X=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-chat"},[e.G_CHAT_SELECTED?t("div",{staticClass:"chat-container"},e._l(e.chatMessages,(function(s,a){return t("div",{key:a,class:s.created_by==e.user.id?"message-container-user message-container":"message-container-others message-container"},[t("div",{staticClass:"message-content"},[e._v(e._s(s.message))]),t("div",{staticClass:"message-footer"},[t("span",{staticClass:"message-time"},[e._v(e._s(s.time))]),t("b-icon",{attrs:{icon:"check2"}})],1),t("div",{staticClass:"text-light",staticStyle:{width:"20px",height:"20px"},attrs:{role:"status",id:"spinner-chat"+a}})])})),0):e._e()])},z=[],V={props:{chatMessages:{type:Array,required:!1,default:()=>[]},user:{type:Object,required:!0}},data(){return{}},computed:{...(0,T.Se)({G_CHAT_SELECTED:"G_CHAT_SELECTED"})}},Y=V,K=(0,u.Z)(Y,X,z,!1,null,"26de4f9a",null),Q=K.exports,ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"message-bar"},[t("div",{staticClass:"message-bar-options"},[t("b-icon",{staticClass:"menu-bar-option",attrs:{icon:"emoji-smile"}}),t("b-icon",{staticClass:"menu-bar-option",attrs:{icon:"paperclip"},on:{click:function(t){e.fileClicked=!e.fileClicked}}}),e.fileClicked?t("div",{staticClass:"file-options-menu"},[t("div",{staticClass:"d-flex flex-row file-options-item d-flex align-items-center",on:{click:function(t){return e.openFileInput("fileInput")}}},[t("b-icon",{attrs:{icon:"paperclip"}}),t("span",[e._v("Fotos y Videos")]),t("b-form-file",{ref:"fileInput",staticClass:"d-none",attrs:{plain:"",accept:"image/*, video/*"},on:{change:e.fileSelected},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}})],1),t("div",{staticClass:"d-flex flex-row file-options-item d-flex align-items-center",on:{click:function(t){return e.openFileInput("fileInput2")}}},[t("b-icon",{attrs:{icon:"paperclip"}}),t("span",[e._v("Documento")]),t("b-form-file",{ref:"fileInput2",staticClass:"d-none",attrs:{plain:""},on:{change:e.fileSelected},model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}})],1),t("div",{staticClass:"d-flex flex-row file-options-item d-flex align-items-center"},[t("b-icon",{attrs:{icon:"paperclip"}}),t("span",[e._v("Contacto")])],1),t("div",{staticClass:"d-flex flex-row file-options-item d-flex align-items-center"},[t("b-icon",{attrs:{icon:"paperclip"}}),t("span",[e._v("Encuesta")])],1),t("div",{staticClass:"d-flex flex-row file-options-item d-flex align-items-center"},[t("b-icon",{attrs:{icon:"paperclip"}}),t("span",[e._v("Dibujo")])],1)]):e._e()],1),t("div",{staticClass:"message-bar-input"},[t("b-form-input",{attrs:{type:"text",placeholder:"Escribe un mensaje..."},model:{value:e.textInput,callback:function(t){e.textInput=t},expression:"textInput"}})],1),t("div",{staticClass:"message-bar-send"},[e.textInput.length<=0?t("b-icon",{staticClass:"menu-bar-option",attrs:{icon:"mic"}}):t("b-icon",{staticClass:"menu-bar-option",attrs:{icon:"arrow-right"},on:{click:e.sendMessage}})],1)])},te=[],se={data(){return{textInput:"",fileClicked:!1,selectedFile:null,file2:{name:"",data:""}}},methods:{openFileInput(e){this.$refs[e].$el.click()},fileSelected(e){const t=e.srcElement.files[0];if("undefined"===typeof t||null===t)this.selectedFile=null;else{this.file2.name=t.name;const e=new FileReader;e.readAsDataURL(t),e.onload=()=>this.file2.data=e.result,this.messageText=" "}},sendMessage(){this.textInput.length>0&&(this.$emit("message",this.textInput),this.textInput="")}}},ae=se,ne=(0,u.Z)(ae,ee,te,!1,null,"5c5c69e1",null),ie=ne.exports,re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-side-bar",staticStyle:{width:"100%"}},[t("user-side-bar-bar"),t("div",{staticClass:"user-contacts"},e._l(JSON.parse(JSON.parse(e.contacts)),(function(s,a){return t("div",{key:a,staticClass:"user-contacts-item",style:e.chatSelected==a?"background-color: #e6e6e6;":"",on:{click:function(t){return e.selectChat(a,s)}}},[t("div",{staticClass:"user-contacts-item-img"},[t("b-icon",{attrs:{icon:"person-circle","font-scale":"3",variant:"primary"}})],1),t("div",{staticClass:"user-contacts-item-info"},[e._v(e._s(s.contact_name))]),t("div",{staticClass:"user-contacts-item-time"},[e._v("12:12")])])})),0)],1)},oe=[],ce=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bar"},[t("div",{staticClass:"user-info"},[t("b-icon",{attrs:{icon:"person-circle","font-scale":"3"}})],1),t("div",{staticClass:"user-options"},[t("b-icon",{attrs:{icon:"camera-video","font-scale":"1.5"}}),t("b-icon",{attrs:{icon:"telephone","font-scale":"1.5"}}),t("b-icon",{attrs:{icon:"search","font-scale":"1.5"}}),t("b-icon",{attrs:{icon:"three-dots-vertical","font-scale":"1.5"}})],1)])},le=[],ue={},de=ue,pe=(0,u.Z)(de,ce,le,!1,null,"0d4f10c7",null),me=pe.exports,he={components:{UserSideBarBar:me},computed:{...(0,T.Se)({user:"G_USER",contacts:"G_USER_CONTACTS"})},data(){return{chatSelected:null}},created(){},methods:{...(0,T.nv)({selectChats:"A_SET_CHAT_SELECTED"}),selectChat(e,t){this.chatSelected=e,this.selectChats(),this.getChatMessages(t)},async getChatMessages(e){const t={user_id:JSON.parse(this.user).id,for_user_id:e.contact_id};try{const s=await this.sendRequest("get-single-chat-messages","post",t),a=JSON.parse(s.data[0].user_messages);this.$emit("setChatMessages",a,e)}catch(s){console.log(s)}}}},fe=he,ge=(0,u.Z)(fe,re,oe,!1,null,"3bfa42f4",null),Ce=ge.exports,_e={components:{ChatUserBar:W,ChatUser:Q,MessageBar:ie,ChatUserSideBar:Ce},data(){return{user:null,contact:{},chatMessages:[]}},computed:{...(0,T.Se)({G_CHAT_SELECTED:"G_CHAT_SELECTED",G_USER:"G_USER"})},created(){this.setUser(JSON.parse(this.G_USER))},mounted(){},watch:{chatMessages(){const e=document.getElementById("chatContainer");if("undefined"!==typeof e&&null!==e&&"undefined"!==typeof this.chatMessages){const e=new ResizeObserver(this.scrollToBottom),t=document.getElementById("chatContainer");e.observe(t)}}},methods:{setUser(e){this.user=e},setChatMessages(e,t){this.chatMessages=e,this.contact=t},sendMessage(e){this.chatMessages.push({message:e,date:"12/12/12",time:"12:12:12",created_by:this.user.id})},scrollToBottom(){const e=document.getElementById("chatContainer");e.scrollTop=e.scrollHeight}}},ve=_e,Se=(0,u.Z)(ve,Z,F,!1,null,"63410a49",null),be=Se.exports;a["default"].use(S.ZP);const Ee=[{path:"/",component:H,meta:{requiresAuth:!1}},{path:"/chat",component:be,meta:{requiresAuth:!0}}],we=new S.ZP({routes:Ee});var xe=we;a["default"].use(T.ZP);const Te=new T.ZP.Store({state:{S_USER:null,S_USER_CONTACTS:null,S_CHAT_SELECTED:!1},mutations:{SET_USER(e,t){e.S_USER=t},SET_USER_CONTACTS(e,t){e.S_USER_CONTACTS=t},SET_CHAT_SELECTED(e){e.S_CHAT_SELECTED=!0}},actions:{A_SET_USER({commit:e},t){e("SET_USER",t)},A_SET_USER_CONTACTS({commit:e}){e("SET_USER_CONTACTS")},A_SET_CHAT_SELECTED({commit:e}){e("SET_CHAT_SELECTED")}},getters:{G_USER:e=>null==e.S_USER?localStorage.getItem("user"):e.S_USER,G_USER_CONTACTS:e=>null==e.S_USER_CONTACTS?localStorage.getItem("contacts"):e.S_USER_CONTACTS,G_CHAT_SELECTED:e=>e.S_CHAT_SELECTED}});var ye=Te;xe.beforeEach(((e,t,s)=>{const a=localStorage.getItem("token");e.meta.requiresAuth&&"123456"!==a?(console.log("No autenticado"),s("/")):s()})),a["default"].use(m.XG7),a["default"].use(h.A7),a["default"].use(h.X),a["default"].mixin(v),new a["default"]({router:xe,store:ye,render:e=>e(p)}).$mount("#app")},5828:function(e,t,s){e.exports=s.p+"img/register-background.0151cc50.jpg"}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,i){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],i=e[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(o=!1,i<r&&(r=i));if(o){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,n,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/wasaCopyFront/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var u=c(s)}for(t&&t(a);l<r.length;l++)i=r[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(u)},a=self["webpackChunkchat_uwu"]=self["webpackChunkchat_uwu"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7641)}));a=s.O(a)})();
//# sourceMappingURL=app.1f3702e3.js.map