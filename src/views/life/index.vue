<template>
    <div>
        <h1>父组件</h1>
        <Children v-if="value" :value="value" ></Children>

    </div>
</template>

<script>
import Children from "./Children.vue"
    export default {

        components: {
            Children,
        },
        data() {
            return {
                value:0,
                
            }
        },
        beforeCreate () {
            console.log("父组件........beforeCreate");
            console.log("父............",this.value);
        },
        created () {
           console.log("父组件........created");
        //    直接赋值
        //    this.value=5
         
        //    用setTimeout模拟异步请求
        setTimeout(() => {
            this.value=6
            
          }, 1000);


          console.log("父............",this.value);
         
           
        },
        beforeMount () {
             console.log("父组件........beforeMount");
        },
        mounted () {
             console.log("父组件........mounted");
        },
        beforeUpdate () {
            ;
        },
      
        updated () {
            ;
        },
        beforeDestroy () {
            ;
        },
        destroyed () {
            ;
        },

   
        
        
    }
</script>

<style lang="scss" scoped>

</style>