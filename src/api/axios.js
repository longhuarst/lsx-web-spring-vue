import Vue from 'vue';
import axios from 'axios';
import store from '../store';
 
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:18880';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.put['Content-Type'] = 'application/json';
 
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // axios.defaults.headers.common['Authorization'] = "Bearer " + store.state.token.accessToken;

    console.log("interceptors")
    console.log(store.state.token.accessToken)
    if (store.state.logined == true)
        config.headers.Authorization = "Bearer " + store.state.token.accessToken;
    console.info(config);
    return config;
}, function(error) {
    return Promise.reject(error);
});
 

export default axios