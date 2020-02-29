import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/userCenter',
    name:"userCenter",
    meta:{
      roles:['user','admin']
    },
    component:() => import('../views/UserCenter.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})





//全局前置守卫
router.beforeEach((to, from, next) => {
  const login = localStorage.getItem("logined") == 'true' ? true : false;
  console.log(login)
  // if (login){
  //   next();//放行
  // }else{
  //   next({name:"login"}) //跳转到登陆界面
  // }

  if(to.name !== 'login'){
    if (to.name === 'userCenter'){
      if (login == false){
        next({name: 'login'})
        return;
      }
    }
  }


  next();//放行
})






export default router

