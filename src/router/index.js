import Vue from 'vue' //vue
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	linkActiveClass: 'is-active',
	scrollBehavior: () => ({y:0}),
	routes:[
		{
			lable: '首页',
			name: 'Home',
			path: '/',
			component: Home,
			meta: {
				nav: '首页'
			}
		},
		{
			lable: '登录',
			name: 'Login',
			path: '/login',
			component: Login,
			meta: {
				nav: '登录'
			}
		},
		{
			path: '*',
			redirect: { path: '/' }
		}
	]
})