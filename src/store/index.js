import Vue from 'vue'
import Vuex from 'vuex'
import addfile from './modules/addfile'


Vue.use(Vuex)

export default new Vuex.Store({
  // strict:true,     //开启严格模式
  strict:process.env.NODE_ENV !=='production',  //在生产环境不开启严格模式
  state: {
    msg:'学浪计划',
    count:0,
    
  },
  getters:{
    reverseMsg(state){
      return state.msg.split('').reverse().join('')
    }


  },
  mutations: {
    add(state,num){
      return state.count +=num
    },
    adds(state,num){
      return state.count +=num
    }
  },
  actions: {
    addAsync(context,num){
      console.log("context:",context);
    setTimeout(() => {
      context.commit('add',num)
    }, 3000);
    },

    addAsyncs({commit},num){
      setTimeout(() => {
        commit('add',num)
        console.log("{commit}..............");
      }, 3000);
      },
    // queryuserinfo(context){

    // }
    
  },
  
  modules: {
    addfile,
    
  }
})
