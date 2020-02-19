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
		path: '/classRoom',
		name: 'classRoom',
		component: () => import( /* webpackChunkName: "about" */ '../views/ClassRoom.vue')
	},
	{
		path: '/product',
		name: 'product',
		component: () => import( /* webpackChunkName: "about" */ '../views/Product.vue')
	},
	{
		path: '/aboutWe',
		name: 'aboutWe',
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutWe.vue')
	},
	{
		path: '/article',
		name: 'article',
		component: () => import( /* webpackChunkName: "about" */ '../views/Article.vue')
	},
	{
		path: '/search',
		name: 'search',
		component: () => import( /* webpackChunkName: "about" */ '../views/Search.vue')
	},
	{
		path: '/evaluation',
		name: 'evaluation',
		component: () => import( /* webpackChunkName: "about" */ '../views/Evaluation.vue')
	},
	{
		path: '/productDetail',
		name: 'productDetail',
		component: () => import( /* webpackChunkName: "about" */ '../views/ProductDetail.vue')
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
