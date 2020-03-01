<template>
  <!-- <div style="width: 256px"> -->
   <a-layout>
   <a-layout-sider width="200" style="background: #fff">
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      ref="menu"
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


        <a-menu-item key="3" @click="menuClick"> 
            <a-icon type="dashboard" /><span>监控面板</span>
        </a-menu-item>


      <template>
          <a-menu-item @click="toggleCollapsed">
              <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
              <span>显示切换</span>
          </a-menu-item>
      </template>
    </a-menu>

</a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item> -->
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <!-- 这是要显示的东西 -->
        
            <div v-if="views == 1">用户信息</div>
                <!-- {{views}} -->

            <div v-if="views == 2.1">设备列表
                

                <template>
                    <a-table :columns="columns" :dataSource="tableData" >
          
                        <!-- <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a> -->
                        <!-- <span slot="customTitle"><a-icon type="smile-o" /> Name</span> -->
                        <!-- <span slot="tags" slot-scope="tags">
                        <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
                        </span> -->
                        <span slot="action" slot-scope="record">
                        <a href="javascript:;" @click="showDrawer(record)">详细信息</a>
                        <a-drawer
                            title="设备详细信息"
                            placement="right"
                            :closable="false"
                            @close="onClose"
                            :visible="visible"
                            :width="720"
                            >
                            <p>唯一识别码: {{curRecord.uuid}}</p>

                            <template>
                            <div id="myChart" ref='myChart' :style="{width: '600px', height: '300px'}"></div>
                            </template>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                              <template>
                                <a-popconfirm title="你确定要删除这个设备吗?" @confirm="confirm(curRecord)" @cancel="cancel" okText="是" cancelText="否">
                                  <a href="#">删除设备</a>
                                </a-popconfirm>
                              </template>
                            </a-drawer>
                        <!-- <a-divider type="vertical" />
                        <a href="javascript:;">删除</a> -->
                        <!-- <a-divider type="vertical" />
                        <a href="javascript:;" class="ant-dropdown-link">
                            More actions <a-icon type="down" />
                        </a> -->
                        </span>
                    </a-table>
                    </template>
            </div>

             <div v-if="views == 2.2">新增设备</div>
             <div v-if="views == 3">监控面板</div>


        </a-layout-content>
      </a-layout>


   </a-layout>
<!-- 
     <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px; ">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    
  <!-- </div> -->


</template>


<script>



const columns = [{
  dataIndex: 'key',
  key: 'key',
  title: '序号',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'key' },
}, {
  title: '名字',
  dataIndex: 'name',
  key: 'name',
},{
  title: '描述信息',
  dataIndex: 'info',
  key: 'info',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '标签',
  key: 'tags',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
}, {
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];


// tableData = null;


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
      ],
      views:'1',
      columns ,
      tableData:'',
      visible: false,
      curRecord: {uuid: '00'},
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

        this.views = key.key
        switch(key.key){
            case "1":
                break;
            case "2.1":
                console.log("设备列表被点击了")
                this.getDeviceList();
                break;
            case "2.2":
                break;
            case "3":
                break;
        }
    },
    drawEcharts(){
      console.log(this.$refs.myChart)
      console.log('drawEcharts')


            //先显示 然后装载数据
      // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart)


let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];

        let data = [Math.random() * 300];

        for (let i = 1; i < 20000; i++) {
            let now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        console.log(myChart)
        // 绘制图表
        myChart.setOption({
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '大数据量面积图',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data
        }
    ]
});
    },
    showDrawer(key) {
        console.log(key)
        this.curRecord = key
        console.log()

      this.visible = true

      console.log(this.$refs)
       console.log(this.$refs.myChart)
       console.log(this.$refs.menu)


      //  setTimeout(this.drawEcharts(), 10000);//一秒后绘制echat

      let drawEcharts_ = this.drawEcharts;

      setTimeout(function(){
        drawEcharts_()
      }, 1000)





    },
    onClose() {
      this.visible = false
    },
    beforeCreate(){
      console.log('beforeCreate()')
    },
    cancel(){
      console.log('cancel');
    },
    confirm(key){
      //删除设备
      let uuid = key.uuid;  //唯一绑定 所以直接按照uuid 删除

      //发起http请求
          let data_ = new FormData()

          data_.append('uuid', uuid);
    
          let config = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }

        this.$axios.post("http://localhost:18887/device/deleteDeviceByUuid", data_, config)
                .then(res => {
                  console.log(res)
                  console.log(res.data)

                  this.$message.success('删除成功')

                  this.tableData.splice(key.key,1);//删除这个数据
                  this.visible= false;


                  for (let i=0;i< this.tableData.length; ++i){
                    this.tableData[i].key = i;
                  }

                


                })
                .catch(err => {
                  console.log(err)
                  this.$message.error(err)
                })

    
    },
    getDeviceList(){

        //发起http请求
          let data_ = new FormData()

          data_.append('username', this.$store.state.username);
    
          let config = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }

        this.$axios.post("http://localhost:18887/device/findDeviceByUsername", data_, config)
                .then(res => {
                  console.log(res)
                  console.log(res.data)



                this.tableData = [];

                console.log((res.data.data.length))
                  for (let j= 0,len = res.data.data.length; j<len; ++j){
                      this.tableData.push({
                          key: j,
                          uuid: res.data.data[j].uuid,
                          name: res.data.data[j].name,
                          info: res.data.data[j].info,
                          type: res.data.data[j].type,
                          tags: '',

                      })
                  }

                  
                  
                  console.log(this.tableData)

                  this.curRecord = this.tableData[0];


                  console.log(this.curRecord)



                })
                .catch(err => {
                  console.log(err)
                  this.$message.error(err)
                })

    }
  },

  beforeCreate() {
    console.log("x");

    this.curRecord = {uuid: '0'};
    
    console.log(this.curRecord)
    console.log(this.curRecord.uuid)
  }
};
</script>




<style scoped>
</style>


