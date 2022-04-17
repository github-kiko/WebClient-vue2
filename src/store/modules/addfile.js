import { district } from '@/api/common'
import axios from 'axios'

const state = {
  msg: '学浪计划',
  count: 0,
  list:[
    {
    name:'iphone6',
    type:'红色',
    price:'5000'
  },
  {
    name:'iphone7',
    type:'白色',
    price:'6000'
  },
  {
    name:'iphone8',
    type:'黑色',
    price:'7000'
  },

],
 district:[],
 products: []


}
const getters = {
  reverseMsg(state) {
    return state.msg.split('').reverse().join('')
  }, 



}
const mutations = {
  add(state, num) {
    return state.count += num
  },
  adds(state, num) {
    return state.count += num
  },
  setlist(state,num){
    return state.list=num
  },
  setdistrict(state,district){
    return state.district= district

  },
  setProducts (state, payload){
    state.products = payload
  }

}
  const actions = {
  addAsync(context, num) {
   
    setTimeout(() => {
      context.commit('add', num)
    }, 3000);
  },

  // addAsyncs(context, num) {
  //   setTimeout(() => {
  //     context.commit('add', num)
  //   }, 4000);
  // },
  // async querydistrict({commit}){
  //    const { data } = await district({
  //     key: "0ba0dba776052fa121b21a8c6c299879",
  //     subdistrict: "4",
  //  })
  // //  console.log('data:',data.districts[0].districts[0].districts[0].districts[0].districts);
  // //  commit('setdistrict', ['喔唷，崩溃了'])
  //  commit('setdistrict',data.districts[0].districts[0].districts[0].districts[0].districts)
  // },
  async  getProducts ({ commit }){
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    commit('setProducts', data)
  }



 


}

export default {
  namespaced: true, //开启命名空间
  state,
  getters,
  mutations,
  actions,

}



