import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



Vue.config.productionTip = false

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

import axios from 'axios';
Vue.prototype.$axios = axios;

import common from './components/common.vue';
Vue.prototype.$common = common;






new Vue({
  router,
  store,
  render: h => h(App),
  data: function(){
    return{
      user:[{username:'', logined: false}],
      url:'http://'
    }
  },
  beforeCreate(){
    console.log("beforeCreate()")
    console.log(this.$store.state.username)
    
    this.$store.commit("onInit");
    // console.log($root.user.username)
    // console.log(this.$root.url)
    // console.log(this.$common.getLogined());

    // if (this.$common.getLogined() == true){
    //   //已经登陆了

    // }

    // this.$common.getUsername();//获取用户名
  },
  created(){

    console.log("Create()")

    // this.$store.commit('setUsername','ll');
    console.log(this.$store.state.username)

  }
}).$mount('#app')
