import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    username: '',
    token: '',
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
    setToken(state, token){
      state.token = JSON.parse(token);
      console.log(token)
      // console.log(token.getItem("jti"))
      localStorage.setItem("token", token);
    },
    onInit(state){
      state.username = localStorage.getItem("username");
      state.logined = localStorage.getItem("logined")=="true" ? true : false;
      state.token = JSON.parse(localStorage.getItem("token"));
      console.log(state.token)
      console.log(state.token.jti)
      console.log(JSON.stringify(state.token))
    }
  },
  actions: {
  },
  modules: {
  }
})


