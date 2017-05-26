/**
	异步触发方法,发送事件
**/
import * as types from './types.js'	

export default {
	showLoading: ({commit,state},flag) => {
		console.log(flag)
		commit(types.LOADINGING)
	}
}
