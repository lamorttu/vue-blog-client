import Vue from 'vue'
import App from './App.vue' //主app.vue
import axios from 'axios' //ajax
import NProgress from 'vue-progress' //进度条
import { sync } from 'vuex-router-sync' // vuex
import iView from 'iview'
import 'iview/dist/styles/iview.css' //iview
import moment from 'moment' //moment支持
import router from './router' //路由
import store from './store' //store存储stage
import Icon from 'vue-svg-icon/Icon.vue' //svg的icon图标
 
Vue.use(require('vue-moment')) //vue-moment
Vue.component('icon', Icon) //vue的svg图标支持
Vue.use(NProgress) //进度条
const nprogress = new NProgress({ parent: '.nprogress-container' })
Vue.use(iView)
Vue.prototype.$http = axios
Vue.axios = axios

Vue.config.devtools = true //devtools

sync(store,router)

const { state } = store

const app = new Vue({
	router,
	store,
	nprogress,
	...App
})

export { app , router , store }