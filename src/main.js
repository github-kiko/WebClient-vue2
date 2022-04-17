import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/index.scss"

// 注册iview 插件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

//中央事件总线
Vue.prototype.$bus = new Vue();


Vue.config.productionTip = false
// console.log(store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
