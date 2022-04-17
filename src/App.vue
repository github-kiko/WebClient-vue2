<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import { initData } from "@/utils/init"
export default {
 async created () {
  //  初始化基础数据
  // await initData()


// 在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload",()=>{
sessionStorage.setItem("store",JSON.stringify(this.$store.state))
})


// 在页面加载时读取sessionStorage里的状态信息
if (sessionStorage.getItem("store") ) {
this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
}


}
}
</script>

<style lang="scss">
html,body,#app{
  height: 100%;
}
</style>
