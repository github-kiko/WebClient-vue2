import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [

  // vuex
  {
    path: '/',
    name: 'vuex',
    component: Layout,
    leftMenu: {
      name: "/",
      type: "ios-settings",
      text: "vuex",
    },

    children: [
      {
        path: '',
        component: () => import('../views/vuex')
      }
    ]
  },



  // express
   {
    path: '/express',
    name: 'Express',
    component: Layout,
    leftMenu:{
      name: "express",
      type: "ios-settings",
      text: "nodejs",
  },
     children:[
     {
      path:'',
      component: () => import( '../views/nodejs')
     }
    ]
  },


   // 组件通信
   {
    path: '/componentization',
    name: 'Componentization',
    component: Layout,
    leftMenu:{
      name: "Componentization",
      type: "ios-settings",
      text: "组件通信",
  },
     children:[
     {
      path:'',
      component: () => import( '../views/componentization')
     }
    ]
  },
      // 本地存储
      {
        path: '/storage',
        name: 'Storage',
        component: Layout,
        leftMenu:{
          name: "Storage",
          type: "ios-settings",
          text: "本地存储",
      },
         children:[
         {
          path:'',
          component: () => import( '../views/storage')
         }
        ]
      },

        // 父子组件生命周期
        {
          path: '/liftcycle',
          name: 'Liftcycle',
          component: Layout,
          leftMenu:{
            name: "Liftcycle",
            type: "ios-settings",
            text: "生命周期",
        },
           children:[
           {
            path:'',
            component: () => import( '../views/life')
           }
          ]
        },


  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
