<template>
    <div style="width:300px;height:200px;margin-top:20px;border:1px solid red">
        <h1>子组件</h1>
         <Select  v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
   
</template>


<script>
    export default {
        props:{
            value:{
                type:Number, 
            },

        },
        data() {
            return {
               cityList: [
                    {
                        value: 1,
                        label: '北京'
                    },
                    {
                        value: 2,
                        label: '上海'
                    },
                    {
                        value: 3,
                        label: '广州'
                    },
                    {
                        value: 4,
                        label: '深圳'
                    },
                    {
                        value: 5,
                        label: '厦门'
                    },
                    {
                        value: 6,
                        label: '贵阳'
                    }
                ],
                model1: ''
            }
        },
        watch:{
            // value:{
            //     handler(val){
            //         console.log("watch..value:........",val);
            //         if (val) {
            //             this.model1=val       
            //         }   
            //     },
            //     //  deep:true,
            //     // immediate:true,
            // },
        },
        beforeCreate () {
            console.log("子组件........beforeCreate");
            // console.log("子............",this.value);
        },
        created () {
           console.log("子组件........created");
           console.log("子............",this.value);
        //    直接在created处理父组件传过来的数数据
           if (this.value) {
               this.model1=this.value
               
           }
        },
        beforeMount () {
             console.log("子组件........beforeMount");
        },
        mounted () {
             console.log("子组件........mounted");
        },
  
        
    }
</script>

<style lang="scss" scoped>

</style>