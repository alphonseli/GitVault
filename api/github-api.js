module.exports = {
	setting: {
		user: '',
		token: '',
		repo: '',
	},
	getUserInfo() {
		console.log(this.setting);
		return uni.$req.get({
			url: 'https://api.github.com/users/' + this.setting.user
		})
	},
	//--------------------------------repos--------------------------------------
	getRepos() {
		return uni.$req.get({
			url: 'https://api.github.com/user/repos',
			headers: {
				'Authorization': 'token ' + this.setting.token,
				'Accept': 'application/vnd.github.v3+json'
			},
		})
	},
	getBranches() {
		return uni.$req.get({
			url: 'https://api.github.com/repos/' + this.setting.repo + '/branches',
			headers: {
				'Authorization': 'token ' + this.setting.token,
				'Accept': 'application/vnd.github.v3+json'
			},
		})
	},
	// getRepoContents(path) {
 //        if (!path) path='';
 //        if (!path.startsWith('/')) path='/'+path;
	// 	return uni.$req.get({
	// 		url: 'https://api.github.com/repos/' + this.setting.repo +
	// 			'/contents' + path,
	// 		data: {
	// 			ref: this.setting.branch ? this.setting.branch : 'master'
	// 		},
	// 		headers: {
	// 			'Authorization': 'token ' + this.setting.token,
	// 			'Accept': 'application/vnd.github.v3+json'
	// 		},
	// 	})
	// },
	getContent(path) {
        if (!path) path='';
        if (!path.startsWith('/')) path='/'+path;
        let data={};
        if(this.setting.branch && this.setting.branch!=='main' && this.setting.branch!=='master'){
            data.ref=this.setting.branch;
        }
		return uni.$req.get({
			url: 'https://api.github.com/repos/' + this.setting.repo +
				'/contents' + path,
			data: data,
			headers: {
				'Authorization': 'token ' + this.setting.token,
				'Accept': 'application/vnd.github.v3+json'
			},
		})
	},
}
