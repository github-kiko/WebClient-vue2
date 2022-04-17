<template>
    <div style="background:#ccc">
        <h1>我是子组件</h1>
        {{msg}}
        <div style="margin-top:20px">
            <Button type="primary" @click="send()">发送数据给父组件</Button>
            <div>{{msgindex}}</div>
            <div>{{smgaa}}</div>
            
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            msg:{

            }
        },

        data() {
            return {
                text: "我是子组件里面的数据"
            }
        },
        computed:{
            msgindex(){
                return  this.$parent.msg
            },
            smgaa(){
                return this.$parent.AA
            }
        

        },
        methods: {
        
            send() {
                console.log(this.$parent);
                // this.$emit("send")
                //   this.$emit("send",this.text)
            //    alert("我是子组件里面的事件，我被触发了!");
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>