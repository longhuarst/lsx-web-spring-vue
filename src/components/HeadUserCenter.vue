<template>
   
   <div>
    <a-row>



        <a-button type="dashed">{{$store.state.username}}</a-button>
        
        <a-button type="dashed" v-on:click="logout">退出登陆</a-button>

    </a-row>
    </div>
</template>



<script>




export default {


    methods:{
        logout : function(event){
            console.log("登出")
            const out = this.$message.loading("正在退出",1);

            // this.$common.logout();
            this.$store.commit("logout");

            this.$message.success("退出登录成功")

            this.$router.push('/')
            location.reload()
        }
    }
    
}
</script>



<style scoped>

</style>