<template>
    <div>
        <h1>我是C组件</h1>
       <div> inject-cc{{test}} </div>
       <div> age:{{age}}</div>
       <div>$attrs{{$attrs}}</div>

    </div>
</template>

<script>
    export default {
        inject:["test"],
        // inheritAttrs:false,
        props:{
            age:{

            }
        },
        created () {
          console.log("$listeners-C组件:",this.$listeners);
        },
        data() {
            return {
                cc: "我是c组件的数据"
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>