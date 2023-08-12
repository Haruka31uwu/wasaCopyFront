// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    S_USER:null,
    S_USER_CONTACTS:null,
    S_CHAT_SELECTED:false,
    S_CONTACT_SELECTED:null,
    S_NEW_MESSAGE:null,
    },
  mutations: {
    SET_USER(state, user) {
        state.S_USER = user;
    },
    SET_USER_CONTACTS(state, userContacts) {
        state.S_USER_CONTACTS = userContacts;
    },
    SET_CHAT_SELECTED(state) {
        state.S_CHAT_SELECTED = true;
    },
    SET_CONTACT_SELECTED(state, contactId) {
        state.S_CONTACT_SELECTED = contactId;
    },
    SET_NEW_MESSAGE(state, message) {
        state.S_NEW_MESSAGE = message;
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
    },
    A_SET_CONTACT_SELECTED({ commit }, contactId) {
        commit('SET_CONTACT_SELECTED', contactId);
    },
    A_SET_NEW_MESSAGE({ commit }, message) {
        commit('SET_NEW_MESSAGE', message);
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
    },
    G_CONTACT_SELECTED: state => {
        return state.S_CONTACT_SELECTED;
    },
    G_NEW_MESSAGE: state => {
        return state.S_NEW_MESSAGE;
    }
  },
});

export default store;
