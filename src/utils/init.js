import  store  from "@/store"
//  初始化基础数据

export  function initData() {
    store.dispatch('addfile/querydistrict')
    // store.dispatch('addfile/getProducts')
    
}