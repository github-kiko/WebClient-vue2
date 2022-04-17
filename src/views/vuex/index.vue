<template>
  <div>
    <h1 class="title">vuex</h1>
    
 <!-- state -->
<h1>①state</h1>
<div>{{this.$store.state.msg}}</div>
<div>{{$store.state.msg}}</div>
<div>{{msgfuntion}}</div>
<div>{{msgfun}}</div>

<h1>mapStates数组</h1>
<div>{{msg}}</div>
<div>{{count}}</div>

<h1>mapStates对象映射改名</h1>
<div>{{title}}</div>
<div>{{num}}</div>

<!-- getters -->
<h1>②getters</h1>
<div>{{reverseMsgfun}}</div>

<h1>mapGetters</h1>
<div>{{reverseMsg}}</div>
<div>{{reverse}}</div>


<!-- mutation -->
<h1>③mutation</h1>
<h2>在mutation中通过commit改变state的状态</h2>
<div>{{count}}</div>
<Button type="primary"  @click="$store.commit('add',4)">同步改变state的状态</Button>
<Button type="primary"  @click="add()">同步改变state的状态</Button>
<Button type="primary"  @click="adds(6)">mapMutations</Button>



<!-- action -->
<h1>④action</h1>
<h1>mapAction</h1>
<h2>在action中通过dispatch异步改变state的状态</h2>
<div>{{count}}</div>
<Button type="primary" @click="addAsync()">dispatch</Button>
<Button type="primary" @click="addAsyncs(200)">mapAction</Button>
<h2>初始化基础数据1</h2>
{{district}}
<h2>初始化基础数据2</h2>
{{products}}


<!-- module -->
<h1>⑤module</h1>
<div>{{this.$store.state.addfile.msg}}</div>
<div>{{$store.state.addfile.count}}</div>
<div>{{$store.state.addfile.list}}</div>

<div>{{list}}</div>
<Button type="primary"  @click="setlist([])">开启命名空间</Button>


<!-- 严格模式strick -->
<h1>⑥严格模式strick</h1>
<h2>{{"strict:true"}}</h2>
<h2>{{"strict:process.env.NODE_ENV !=='production'"}}</h2>
<div>{{msg}}</div>
<Button type="primary"  @click="$store.state.msg='未开启严格模式'">未开启严格模式</Button>
<Button type="primary"  @click="$store.state.msg='开启严格模式'">开启严格模式</Button>


<!-- 解决vuex刷新数据丢失问题 -->
<h1>⑦解决vuex刷新数据丢失问题</h1>
<div>{{count}}</div>
<Button type="primary"  @click="adds(6)">mapMutations</Button>
<Button type="primary" @click="addAsyncs(200)">mapAction</Button>
<h2>在app.vue的created中</h2>
<h3>在页面刷新时将vuex里的信息保存到sessionStorage里</h3>
<h3>在页面加载时读取sessionStorage里的状态信息</h3>


  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
  export default {
    computed: {
      // status
      msgfuntion(){
        return this.$store.state.msg
      },
      msgfun:status=>status.msg,
    ...mapState(['msg','count']),
    ...mapState({
      title:'msg',
      num:'count'
    }),


  //  getters
    reverseMsgfun(){
      return this.$store.getters.reverseMsg
    },
     ...mapGetters(['reverseMsg']),
     ...mapGetters({
      reverse:'reverseMsg'
    }),


  // moudules
    ...mapState('addfile',['list','district','products']),
    ...mapGetters('addfile',['reverseMsg'])

   

    },
  created () {
    // this.querydistrict()
    // this.getProducts()
    this.addss(100)
 
    },
    methods: { 
      // mutation
      add() {
        this.$store.commit('add',2)
      },
      ...mapMutations(['adds']),
      ...mapMutations({
        addss:'adds'

      }),

      //action
      addAsync(){
        this.$store.dispatch('addAsync',100)
      },
      ...mapActions(['addAsyncs']),
      ...mapActions({
        addAsyncss:"addAsyncs"

      }),



    //  moudules
    ...mapMutations('addfile',['setlist']),
    ...mapActions('addfile',['querydistrict','getProducts']),
  
     

    
    




    },
    
  }
</script>

<style lang="scss" scoped>
Button{
  margin-right: 20px;
}

</style>