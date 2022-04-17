<template>
  <div>
    <h1 class="title">node.js学习之旅</h1>
    <div class="serch">
      <div>
          <span style="margin-left:10px;">城市：</span>
        <Select v-model="model1" style="width: 200px">
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
        <Button type="primary" style="margin-left: 30px" @click="show(index)"
          >搜索</Button
        >
      </div>
      <div>
        <Button type="success" style="margin-right: 10px" @click="show(index)"
          >导出</Button
        >
        <Button type="info" style="margin-right: 10px" @click="show(index)">新增</Button>
      </div>
    </div>

    <Table border :columns="columns12" :data="data6" style="margin-top: 20px">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >查看</Button
        >
        <Button
          type="warning"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >编辑</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
   <div class="page-box">
         <Page class="page" :total="40" size="small" show-elevator show-sizer />

   </div>
   
  </div>
</template>

<script>
import { gaode_district,baidu_district ,add,users} from "@/api/node.js";
export default {
  data() {
    return {
      cityList: [
        {
          value: "1",
          label: "北京",
        },
        {
          value: "2",
          label: "上海",
        },
        {
          value: "3",
          label: "广州",
        },
        {
          value: "4",
          label: "深圳",
        },
        {
          value: "5",
          label: "贵阳",
        },
        {
          value: "6",
          label: "成都",
        },
      ],
      model1: "",

      columns12: [
        {
          title: "姓名",
          slot: "name",
        },
        {
          title: "年龄",
          key: "age",
        },
        {
          title: "城市",
          key: "city",
        },
        {
          title: "操作",
          slot: "action",
          width: 450,
          align: "center",
        },
      ],
      data6: [],
    };
  },

  created() {
    // this.getuserinfo();
    // this.getbaidu_district()
    // this.getbaidu_geocoding()
    this.get_users()
    this.get_add()
  },
  methods: {
       async get_users(){
         const { data } = await users({name:'东东吖-我是跨域时发起的get请求'});

    },
    

    async get_add(){
         const { data } = await add({
        name:"东东吖-我是跨域时发起的post请求",
        age:24,
        city:"深圳",

      });

    },
    // 高德地图
    async getuserinfo() {
      const { data } = await gaode_district({
        key:"2633a476edb726b7517ce7369404b724",
        keywords:"广州",
        subdistrict:3,

      });
      
      var  data1=data.districts[0].districts[20].districts
        console.log(data1,88);
      console.log(data1[0].districts,99);
      var arr=[]
      for(let item of data1[10].districts){
        // console.log(item.name,666);
        arr.push(item.name)
      }
      console.log(arr,990);
    
    },



    // 百度地图
  async  getbaidu_district(){
    const res = await baidu_district({
        ak:"HD2V67u1Yn6KO0EBNBsLpSbSZIWVzGZn",
        keyword:"广州",
        sub_admin:"3",
    })
    },

    async  getbaidu_geocoding(){
    const res = await reverse_geocoding({
        ak:"HD2V67u1Yn6KO0EBNBsLpSbSZIWVzGZn",
        coordtype:"bd09ll",
        // location:
    })
    },



    show(index) {
    },
    remove(index) {
    },
  },
};
</script>

<style lang="scss" scoped>

.serch{
     display: flex;
  justify-content: space-between;
  align-content: center;

}
</style>