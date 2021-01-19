<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">设置</block>
			<block slot="right">
				<text class="cuIcon-check" style="margin-right:20px;font-size:20px" @tap="saveSetting"></text>
			</block>
		</cu-custom>
		<view v-if="loading" class="cu-load bg-blue" :class="loading?'loading':'over'"></view>
		<view v-if="!loading">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="curTab==='github'?'text-orange cur':''" @tap="tabSelect('github')">
						Github
					</view>
					<view class="cu-item flex-sub" :class="curTab==='codeChina'?'text-orange cur':''" @tap="tabSelect('codeChina')">
						CodeChina
					</view>
				</view>
			</scroll-view>
			<scroll-view>
				<view v-if="curTab==='github'" class="margin">
					<form>
						<view class="cu-form-group margin-top">
							<view class="title">用户</view>
							<input placeholder="用户名" name="input" v-model="vaultSetting.github.user"></input>
							<button class="cu-btn sm bg-blue" @tap="getUserInfo">
								<text v-if="vaultSetting.github.userInfo" class="iconfont iconfont-check text-white"></text> 检查</button>
						</view>

						<view v-if="vaultSetting.github.userInfo" class="cu-form-group margin-top">
							<view class="title">头像</view>
							<image :src="vaultSetting.github.userInfo.avatar_url" style="display:block;width: 50upx;height:50upx;border:1upx solid #0081FF ;border-radius: 25upx;"></image>
							<view class="flex-sub"></view>
						</view>
						<view v-if="vaultSetting.github.userInfo" class="cu-form-group margin-top">
							<view class="title">令牌</view>
							<input placeholder="个人令牌" name="input" v-model="vaultSetting.github.token"></input>
						</view>
						<view v-if="vaultSetting.github.userInfo && vaultSetting.github.token && vaultSetting.github.token.trim()!='' "
						 class="cu-form-group margin-top">
							<view class="title">仓库</view>
							<input placeholder="仓库名" name="input" v-model="vaultSetting.github.repo"></input>
							<button class="cu-btn sm bg-blue" @tap="getRepos()">
								<text class="iconfont iconfont-search text-white"></text>
								选择</button>
						</view>

						<view v-if="vaultSetting.github.userInfo && vaultSetting.github.token && vaultSetting.github.token.trim()!='' && vaultSetting.github.repo && vaultSetting.github.repo.trim()!='' "
						 class="cu-form-group margin-top">
							<view class="title">分支</view>
							<input placeholder="分支名" name="input" v-model="vaultSetting.github.branch"></input>
							<button class="cu-btn sm bg-blue" @tap="getBranches()">
								<text class="iconfont iconfont-search text-white"></text>
								选择</button>
						</view>

						<view v-if="vaultSetting.github.userInfo && vaultSetting.github.token && vaultSetting.github.token.trim()!='' && vaultSetting.github.repo "
						 class="cu-form-group margin-top">
							<view class="title">文件</view>
							<view class="flex-sub">
							<view v-for="(item,index) in vaultSetting.github.files" :key="'file-'+index" class="cu-capsule block margin-bottom-sm" >
								<view class="cu-tag line-red">
									{{item}}
								</view>
								<view class='cu-tag bg-red'>
									<text class='cuIcon-close' @tap="removeFile(item)"></text>
								</view>
							</view>
							</view>
							<button class="cu-btn sm bg-blue" @tap="getFiles()">
								<text class="iconfont iconfont-search text-white"></text>
								选择</button>
						</view>
                        
                        <view class="cu-form-group margin-top">
                        	<view class="title">加密密钥</view>
							<input placeholder="AES密钥" name="input" v-model="vaultSetting.aesKey"></input>
                        </view>
					</form>
				</view>
			</scroll-view>
			<view class="cu-bar foot padding-lr">
				<button class="cu-btn block flex-sub bg-red lg" @tap="cleanSetting()">
					<text class="iconfont iconfont-clean"></text>清空设置</button>
			</view>
		</view>
		<!-- ----------------------------- modal dialogs ------------------------------ -->
		<view class="cu-modal" :class="selectRepoDialogVisible?'show':''" @tap="selectRepoDialogVisible=false">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="selectRepo">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in repos" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<radio class="round" :class="vaultSetting.github.repo==item.full_name?'checked':''" :checked="vaultSetting.github.repo==item.full_name?true:false"
								 :value="item.full_name"></radio>
								<view class="flex-sub">{{item.full_name}}</view>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>

		<view class="cu-modal" :class="selectBranchDialogVisible?'show':''" @tap="selectBranchDialogVisible=false">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="selectBranch">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in branches" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<radio class="round" :class="vaultSetting.github.branch==item.name?'checked':''" :checked="vaultSetting.github.branch==item.name?true:false"
								 :value="item.name"></radio>
								<view class="flex-sub">{{item.name}}</view>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>

		<view class="cu-modal" :class="selectFileDialogVisible?'show':''" @tap="selectFileDialogVisible=false">
			<view class="cu-dialog" @tap.stop="">
				<ly-tree v-if="selectFileDialogVisible" :props="fileTreeProps" node-key="path" :showCheckbox="true" :expandOnClickNode="false"
				 :checkOnClickNode="false" :checkOnlyLeaf="true" @check="selectFile" :load="getFileTreeNode"
				  :defaultCheckedKeys="vaultSetting.github.files" :defaultExpandedKeys="treeDefaultExpandedKeys" lazy>
				</ly-tree>
			</view>
		</view>
	</view>
</template>

<style>
</style>

<script>
    // import crypto from '../../crypto.js'
    import Crypto from 'crypto-js';
	import githubApi from '../../api/github-api.js';
	import vaultSetting from '../../api/vaultSetting.js';
	import LyTree from '@/components/ly-tree/ly-tree.vue'

	let _this = null;
	export default {
		name: "basics",
		components: {
			LyTree
		},
		data() {
			return {
				loading: false,
				curTab: 'github',
				vaultSetting: {
					active: 'github',
					github: {
						user: '',
						token: '',
						repo: '',
						files: [],
						secret: '',
						userInfo: null,
					},
                    aesKey:{},
				},
				githubApi: { ...githubApi
				},
				repos: [],
				selectRepoDialogVisible: false,

				branches: [],
				selectBranchDialogVisible: false,


				fileTree: [],
				fileTreeProps: {
					label: 'name',
					// iconClass(data,node){
					// 	return node.data.type==='file'?''
					// },
					isLeaf: 'leaf'
				},
				selectFileDialogVisible: false,
				fileTreeReady: false,
				treeDefaultExpandedKeys:[],

			};
		},
		methods: {
			tabSelect(id) {
				_this.curTab = id;
			},
			cleanSetting() {
				vaultSetting.cleanSetting().complete(() => {
					uni.showToast({
						title: '3秒后重启',
						success() {
							setTimeout(uni.reLaunch({
								url: '../index/index',
								success: (res) => {
									console.log('relaunch!', res);
								}
							}), 3000);
						}
					})
				})
			},
			saveSetting() {
                console.log(_this.vaultSetting);
				vaultSetting.saveSetting(_this.vaultSetting)
					.complete(() => {
						uni.showToast({
							title: '3秒后重启',
							success() {
								setTimeout(uni.reLaunch({
									url: '../index/index',
									success: (res) => {
										console.log('relaunch!', res);
									}
								}), 3000);
							}
						})
					})
			},
			getUserInfo() {
				if (_this.vaultSetting.active === 'github') {
					if (!_this.vaultSetting.github.user || _this.vaultSetting.github.user.trim() == '') {
						uni.showToast({
							title: '无效用户名',
							icon: 'none',
							duration: 3000
						});
						return;
					}

					_this.githubApi.setting = { ..._this.vaultSetting.github
					};
					_this.githubApi.getUserInfo().then(
						res => {
							console.log(res);
							_this.$set(_this.vaultSetting.github, 'userInfo', res);
						}, err => {
							console.log(err);
							_this.vaultSetting.github.userInfo = null;
						})
				}
			},
			getRepos() {
				_this.githubApi.setting = _this.vaultSetting.github;
				_this.selectRepoDialogVisible = true;
				_this.githubApi.getRepos().then(res => {
					console.log(res);
					_this.repos = res;
				}, err => {
					console.log(err)
				})
			},
			selectRepo(e) {
				console.log(e);
				_this.vaultSetting.github.repo = e.detail.value;
				_this.selectRepoDialogVisible = false;
			},

			getBranches() {
				_this.githubApi.setting = _this.vaultSetting.github;
				_this.selectBranchDialogVisible = true;
				_this.githubApi.getBranches().then(res => {
					console.log(res);
					_this.branches = res;
				}, err => {
					console.log(err)
				})
			},
			selectBranch(e) {
				console.log(e);
				_this.vaultSetting.github.branch = e.detail.value;
				_this.selectBranchDialogVisible = false;
			},

			getFiles() {
				_this.selectFileDialogVisible = true;
			},

			getFileTreeNode(node, resolve) {
				if (node.level === 0) {
					_this.githubApi.setting = _this.vaultSetting.github;
					_this.githubApi.getContent().then(res => {
						console.log(res);
						res.map((item) => {
							item.leaf = item.type === 'file';
						});
						res.sort((a, b) => {
							return a.type === b.type ? (a.name.toLowerCase() === b.name.toLowerCase() ? 0 : (a.name.toLowerCase() > b.name
								.toLowerCase() ? 1 : -1)) : (a.type > b.type ? 1 : -1);
						})
						resolve(res);
					}, err => {
						console.log(err);
					})
				} else {
					if (node.data.leaf) {
						resolve([]);
					} else {
						_this.githubApi.setting = _this.vaultSetting.github;
						_this.githubApi.getRepoContents(node.data.path).then(res => {
							console.log(res);
							res.map((item) => {
								item.leaf = item.type === 'file';
							})
							res.sort((a, b) => {
								return a.type === b.type ? (a.name.toLowerCase() === b.name.toLowerCase() ? 0 : (a.name.toLowerCase() > b.name
									.toLowerCase() ? 1 : -1)) : (a.type > b.type ? 1 : -1);
							})
							resolve(res);
						}, err => {
							console.log(err);
						})
					}
				}
			},
			selectFile(node) {
				console.log('selectFile',node);
				if (node.checkedKeys) {
					_this.vaultSetting.github.files = node.checkedKeys;
				} else {
					_this.vaultSetting.github.files = [];
				}
			},
			removeFile(f){
				let idx=_this.vaultSetting.github.files.indexOf(f);
				if (idx>=0){
				_this.vaultSetting.github.files.splice(idx,1);
				}
			}
		},
		mounted() {
			_this = this;
			vaultSetting.loadSetting().then((setting) => {
				_this.vaultSetting = setting;
                
                let enc=Crypto.AES.encrypt("hello","susumitec").toString();
                console.log('aes enc:'+enc);
                let dec=Crypto.AES.decrypt(enc,"susumitec").toString(Crypto.enc.Utf8);
                console.log('aes dec:'+dec);
                
				if (setting.active==='github' && setting.github.files && setting.github.files.length>0){
					let exp=[];
					setting.github.files.map(item=>{
						if (item.indexOf('/')>=0){
							let fullpath='';
							item.substr(0,item.lastIndexOf('/')).split('/').map(path=>{
								if (path.trim()=='') return;
								fullpath=fullpath.length>0?fullpath+'/'+path:path;
								if (exp.indexOf(fullpath)<0){
									exp.push(fullpath);
								}
							});
							
						}
					})
					_this.treeDefaultExpandedKeys=exp;
					console.log('exp',exp)
				}
				_this.githubApi.setting = _this.vaultSetting.github;
			}, () => {
				_this.vaultSetting = { ...vaultSetting.defaultVaultSetting
				};
				_this.githubApi.setting = _this.vaultSetting.github;
				console.log('====>', _this.vaultSetting);
			});
		}
	}
</script>
