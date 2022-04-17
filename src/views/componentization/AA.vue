<template>
    <div  style="margin-top:30px">   
        <h1 >我是A组件</h1>
        <div>inject-AA{{test}}</div>
        <div>props:{{name}}</div>
         <div>$attrs:{{$attrs}}</div>

          <CC v-bind="$attrs" v-on="$listeners"></CC>

        <div>
            <Button type="primary" @click="sendToB">发送数据给B组件</Button>
        </div>

    </div>
</template>

<script>
import Children from "./Children.vue"
import CC  from "./CC.vue"
    export default {
          created () {
            console.log("$listeners-A组件:",this.$listeners);
        },
        components: {
            Children,
            CC
        }, 
        inheritAttrs:false,
        props:{
            name:{}
        },
        inject:["test"],
        data() {
            return {
                AA: "我是A组件里面的内容"
            }
        },
      
        methods: {
            
            sendToB() {
                this.$bus.$emit("sendToB",this.AA)
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>