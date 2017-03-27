import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	getters,
	modules:{

	},
	state:{

	}
})

export default store