<template>
    <div>
          <div class="test">全局样式测试</div>
        <h1>我是父组件</h1>
         {{text}}
        <Children ref="Children" style="margin-top:50px" :msg="msg"  @send="send"></Children>
        <Button style="margin-top:30px" type="primary" @click="update()">父组件调子组件里面的方法</Button>
        <AA :name="name" :age="age" :gender="gender" @aaClick="aaClick"></AA>
        <BB></BB>
    </div>
</template>
<script>
import Children from "./Children"
import AA from "./AA"
import BB from "./BB"
    export default {
        components: {
            Children,
            AA,
            BB
                
        },
        provide:{
            test:"我是父组件里面通过provide注入的数据"
        },

        data() {
            return {
                 name:"东东吖",
                 age:"24",
                 gender:"男",



                msg:"我是父组件里面的数据",
                text:'',
                message:"我是父组件里面通过provide注入的数据",

               
            }
        },
        methods: {
            aaClick(){
                console.log("$listener被触发了");

            },
              send(val) {
                // this.text=val 
                alert("我是父组件里面的方法，我被触发了!")
            },
            update(){
        //    console.log(this.$refs.Children);  //vue组件实列
        //    this.$refs.Children.send()
        console.log(this.$children[2].AA);
            },

          
        },
        
    }
</script>

<style lang="scss" scoped>

</style>