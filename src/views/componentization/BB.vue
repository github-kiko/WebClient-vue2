<template>
    <div style="margin-top:50px;background:#ccc;">
<h1>我是B组件</h1>
{{AA}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                AA: ''
            }
        },
    created () {
     this.$bus.$on("sendToB",(res)=>{
         this.AA=res

     })

    
    },
        
    }
</script>

<style lang="scss" scoped>

</style>