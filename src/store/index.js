// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    S_USER:null,
    S_USER_CONTACTS:null,
    S_CHAT_SELECTED:false
    },
  mutations: {
    SET_USER(state, user) {
        state.S_USER = user;
    },
    SET_USER_CONTACTS(state, userContacts) {
        state.S_USER_CONTACTS = userContacts;
    },
    SET_CHAT_SELECTED(state ) {
        state.S_CHAT_SELECTED = true;
    }
    
  },
  actions: {
    A_SET_USER({ commit }, user) {
        commit('SET_USER', user);
    },
    A_SET_USER_CONTACTS({ commit }) {
        commit('SET_USER_CONTACTS');
    },
    A_SET_CHAT_SELECTED({ commit }) {
        commit('SET_CHAT_SELECTED');
    }
  },
  getters: {
    // Getters to access state values go here
    G_USER: state => {
        if(state.S_USER == null){
            return localStorage.getItem('user');
        }
        return state.S_USER;
    },
    G_USER_CONTACTS: state => {
        if(state.S_USER_CONTACTS == null){
            return localStorage.getItem('contacts');
        }
        return state.S_USER_CONTACTS;
    },
    G_CHAT_SELECTED: state => {
        return state.S_CHAT_SELECTED;
    }
  },
});

export default store;
