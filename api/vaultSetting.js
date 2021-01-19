import githubApi from './github-api.js';
 let vaultSetting={
	defaultVaultSetting: {
		active: 'github',
		github: {
			user: '',
			userInfo:null,
			token: '',
			repo: ' ',
			files:[],
			secret:'',
		},
	},
	currentSetting:null,
	loadSetting() {
		return new Promise((resolve, reject) => {
			uni.getStorage({
				key: 'VaultSetting',
				complete(res) {
					console.log('getStorage VaultSetting', res)
					if (res && res.data && res.data !== '') {
						vaultSetting.currentSetting = res.data;
						if (vaultSetting.currentSetting.active === 'github') {
							githubApi.setting = vaultSetting.currentSetting.github;
						}
						resolve(res.data);
					} else {
						reject(res && res.errMsg ? res.errMsg : 'Unknow error in getStorage');
					}
				}
			});
		});
	},
	saveSetting(setting) {
		return new Promise((resolve, reject) => {
			vaultSetting.currentSetting = setting; 
			return uni.setStorage({
				key: 'VaultSetting',
				data: vaultSetting.currentSetting,
				complete(res) {
					console.log('setStorage VaultSetting', res);
					if (res && res.errMsg && res.errMsg.indexOf('ok') > 0) {
						resolve(res.data);
					} else {
						reject(res && res.errMsg ? res.errMsg : 'Unknow error in setStorage');
					}
				}
			});
		});
	},
	cleanSetting() {

		return new Promise((resolve, reject) => {
			uni.removeStorage({
				key: 'VaultSetting',
				complete(res) {
					console.log('removeStorage VaultSetting', res);
					if (res && res.errMsg && res.errMsg.indexOf('ok') > 0) {
						resolve(res.data);
					} else {
						reject(res && res.errMsg ? res.errMsg : 'Unknow error in removeStorage');
					}
				}
			});
		});
	},

}
module.exports =vaultSetting;