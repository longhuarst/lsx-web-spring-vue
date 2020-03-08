<template>
   
   <div>
    <a-row>


        <template>
            <div>
                <!-- <span style="margin-right:24px"> -->
                <!-- <a-badge :count="99"><a-avatar shape="square" icon="user"/></a-badge> -->
                <a-badge :count="99"><a-avatar shape="square" src="http://localhost:18880/fastdfs/group1/M00/00/00/CtM3Cl5j5-SAJT9eAACJ3JtEyNk345.jpg">
                    <button></button>
                </a-avatar></a-badge>
                <!-- </span> -->
                <!-- <span>
                <a-badge dot><a-avatar shape="square" icon="user"/></a-badge>
                </span> -->
            </div>
        </template>


        <!-- <a-button type="dashed">{{$store.state.username}}</a-button>
        
        <a-button type="dashed" v-on:click="logout">退出登陆</a-button> -->

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