<template>
  <div style="width: 256px">
   
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      
      :inlineCollapsed="collapsed"
    >

        <a-menu-item key="1" @click="menuClick">
            <a-icon type="user" /><span>用户信息</span>
        </a-menu-item>


       
        <a-sub-menu key="2">
            <span slot="title"><a-icon type="api" /><span>设备管理</span></span>
             <a-menu-item key="2.1" @click="menuClick">
                <a-icon type="align-left" /><span>设备列表</span>
            </a-menu-item>

            <a-menu-item key="2.2" @click="menuClick">
                <a-icon type="plus-circle" /><span>新增设备</span>
            </a-menu-item>

        </a-sub-menu>


        <a-menu-item @click="menuClick"> 
            <a-icon type="dashboard" /><span>监控面板</span>
        </a-menu-item>


      <template>
          <a-menu-item @click="toggleCollapsed">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
              <span>显示切换</span>
          </a-menu-item>
      </template>
    </a-menu>


<!-- 
     <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px; ">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    
  </div>


</template>


<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
// import SubMenu from "./SubMenu";

function test(){
        console.log("test")
    }

export default {
  components: {
    // "sub-menu": SubMenu
  },
  data() {
    return {
      collapsed: false,
      list: [
        {
          key: "1",
          title: "用户信息"
        },
        {
          key: "2",
          title: "设备信息",
          children: [
            {
              key: "2.1",
              title: "添加设备",
              children: [{ key: "2.1.1", title: "UUID智能添加" }]
            },{
                key:'2.2',
                title: "查看设备",
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    titleClick(key, domEvent){
        console.log(key);
        console.log(domEvent);

    },
    test(){
        console.log("test")
    },
    menuClick(key, event){
        console.log('key = '+ key);
        console.log(key)
        console.log('event = '+ event)
        console.log(event)

        switch(key.key){
            case "1":
                break;
            case "2.1":
                console.log("设备列表被点击了")
                getDeviceList();
                break;
            case "2.2":
                break;
            case "3":
                break;
        }
    },
    getDeviceList(){
        this.$axios.post("http://localhost:18887/device/findDeviceByUsername", data_, config)
                .then(res => {
                  console.log(res)
                  console.log(res.data)
                  if (res.data.flag == true){
                    if (res.data.message == "登陆成功"){
                      console.log(res.data.data.accessToken);
                      console.log(res.data.data.refreshToken);
                      console.log(res.data.data.jti);
                      this.$message.success(res.data.message)


                      localStorage.setItem("token",res.data);

                      console.log(this.$store.state.username);
                      // this.$common.setUsername(values.userName);
                      // this.$common.setLogined(true);

                      this.$store.commit("setUsername", values.userName);
                      this.$store.commit("setLogined", true);
                      // this.$common.username = values.userName;
                      // this.$common.logined = true;
                      console.log(this.$store.state.username);

                      this.$router.push('/')
                      location.reload()
                      
                    }
                  }

                })
                .catch(err => {
                  console.log(err)
                  this.$message.error(err)
                })

    }
  },

  beforeCreate() {
    console.log("x");
  }
};
</script>




<style scoped>
</style>


