<template>
  <div>
    <a-layout id="layout">
      <a-layout-header id="header">
        <div class="logo" />

        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
        >
        
          <a-menu-item key="1" style="float: left;" ref="home"><router-link to="/">主页</router-link></a-menu-item>
          <a-menu-item key="2" style="float: left;" ref="userCenter"><router-link to="/userCenter">用户中心</router-link></a-menu-item>
          <a-menu-item key="3" style="float: left;" ref="about"><router-link to="/about">关于</router-link></a-menu-item>
          <!-- <a-menu-item key="4" style="float: right;" > -->


              
          <!-- </a-menu-item> -->
          
          {{this.$store.state.logined}}

          <a-row class="row" type="flex" justify="space-around" align="middle" style="height:60px" >
            <HeadUserLogin v-if="!this.$store.state.logined" class="HeadUserLogin" />
            <HeadUserCenter v-if="this.$store.state.logined"/>
          </a-row>
        </a-menu>
      </a-layout-header>
    </a-layout>
    
  </div>
</template>



<script>

import HeadUserLogin from '@/components/HeadUserLogin.vue'


import HeadUserCenter from '@/components/HeadUserCenter.vue'  

export default {
    components:{
        HeadUserLogin,
        HeadUserCenter,
    },
    watch:{
      
    },
    created:{
        // console.log(this.refs)
    }

};
</script>



<style scoped>


#layout .logo{
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}

.HeadUserLogin{
    float:right;
    /* height: 60px; */
}

 .row{
   height: 60px;
    float: right;
    /* margin:auto; */
    /* text-align: center; */
    /* background-color: aquamarine */
    
} 

#header{
  min-width: 1000px;  
}

</style>


