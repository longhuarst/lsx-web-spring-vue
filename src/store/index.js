import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    username: '',
  },
  mutations: {
    setUsername(state, username){
      state.username = username;
      localStorage.setItem("username",username);
    },
    setLogined(state, flag){
        state.logined = flag;
        if(flag){
          localStorage.setItem("logined", "true");
        }else{
          localStorage.setItem("logined", "false");
        }
    },
    logout(state){
      state.username = '';
      state.logined = false;
      localStorage.removeItem("logined");
      localStorage.removeItem("username");
    },
    onInit(state){
      state.username = localStorage.getItem("username");
      state.logined = localStorage.getItem("logined")=="true" ? true : false;
    }
  },
  actions: {
  },
  modules: {
  }
})


