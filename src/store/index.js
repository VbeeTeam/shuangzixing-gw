import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pageType: 0
	},
	mutations: {
		mutationsChange(n) {
			this.state.count = n
		},
	},
	actions: {

	},
	modules: {

	}
})
