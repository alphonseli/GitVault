import Vue from 'vue'
import App from './App'
import Global from './global.js'

Promise.prototype.complete = function(callback) {
	let p = this.constructor;
	return this.then(
		value => {
			return p.resolve(callback()).then(() => {
				return value;
			});
		},
		reason => {
			return p.resolve(callback()).then(() => {
				throw reason
			})
		}
	)
}
const $req = {
	send: function(config) {
		return new Promise((resolve, reject) => {
			uni.request({
				method: config.method.toUpperCase(),
				url: config.url,
				header: config.headers,
				data: config.data,
				dataType: config.dataType,
				responseType: config.responseType,
				sslVerify: config.sslVerify ? config.sslVerify : false,
				complete: function complete(response) {
					if (response.statusCode === 200) {
						resolve(response.data);
					} else if (response.statusCode === -1) {
						reject({
							code: -1,
							msg: '请检查网络连接是否正常'
						});
					} else {reject({
							code: response.statusCode,
							header: response.header,
							msg: response.errMsg,
							body: response.data
						});
					}
				}
			})
		})
	},
	get: function(config) {
		config.method = 'GET';
		return this.send(config);
	},
	post: function(config) {
		config.method = 'POST';
		if (config.dataType) config.dataType = 'json';
		if (config.responseType) config.responseType = 'json';
		return this.send(config);
	},
	put: function(config) {
		config.method = 'PUT';
		return this.send(config);
	},
	del: function(config) {
		config.method = 'DEL';
		return this.send(config);
	}
}
Vue.prototype.Global=Global;
Vue.prototype.$req = $req;
uni.$req = $req;

import vault from './pages/vault/home.vue'
Vue.component('vault', vault)

import basics from './pages/basics/home.vue'
Vue.component('basics', basics)

import components from './pages/component/home.vue'
Vue.component('components', components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin', plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
