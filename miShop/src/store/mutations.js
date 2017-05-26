import { LOADINGING } from './types.js'
import getters from './getters.js'

const state = {
	loading: false
}

const mutations = {
	[LOADINGING] (state,flag) {
		state.loading = flag
	}
}

export default {
	state,
	mutations,
	getters
}

