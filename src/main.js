import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import globalMixin from './mixins/global'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.mixin(globalMixin)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
