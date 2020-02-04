import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/company',
		name: 'company',
		component: () => import( /* webpackChunkName: "about" */ '../views/Company.vue')
	},
	{
		path: '/news',
		name: 'news',
		component: () => import( /* webpackChunkName: "about" */ '../views/News.vue')
	},
	{
		path: '/cooperation',
		name: 'cooperation',
		component: () => import( /* webpackChunkName: "about" */ '../views/CooperAtion.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
	}
})

export default router
