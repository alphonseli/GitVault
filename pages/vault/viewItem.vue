<template>
	<view>

		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{fileName}}</block>
		</cu-custom>
		<view v-if="loading" class="cu-load bg-blue" :class="loading?'loading':'over'"></view>
		<view v-if="!loading">
			<view class="padding bg-gray flex">
				<text class="iconfont iconfont-folder text-orange"></text> 
				<text class="flex-sub" v-for="(item,index) in fileDir" :key="index">{{item}}</text>
			</view>
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="curTab==='text'?'text-orange cur':''" @tap="tabSelect('text')">
						文本视图
					</view>
					<view class="cu-item flex-sub" :class="curTab==='visual'?'text-orange cur':''" @tap="tabSelect('visual')">
						图形视图
					</view>
				</view>
			</scroll-view>
			<scroll-view>
				<view v-if="curTab==='text'" class="margin">
					{{fileContent.text}}
				</view>
				<view v-if="curTab==='visual'" class="margin">
					<rich-text :nodes="fileContent.visual"> </rich-text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<style>
</style>

<script>
	import crypto from '../../crypto.js'
	import githubApi from '../../api/github-api.js';
	import vaultSetting from '../../api/vaultSetting.js';
	
	let _this = null;
	export default {
		name: "vaultView",
		data() {
			return {
				loading: false,
				filePath: '',
				fileDir: [],
				fileName: '',
				fileExt: '',
				fileContent: {
					text: '',
					visual: {}
				},
				curTab: 'text',
			};
		},
		methods: {
			parseVault(str) {
				return '<button>shit</button>';
			},
			getContent() {
				_this.loading = true;
				githubApi.getContent(_this.filePath).then(res => {
					console.log(res);
					let str = crypto.decryptbyBASE64(res.content);
					_this.fileContent = {
						text: str,
						visual: str
					};
					switch (_this.fileExt) {
						case 'vault':
						default:
							_this.fileContent.visual = _this.parseVault(str);
							break;
					}

				}, err => {
					console.log(err)
				}).complete(() => {
					_this.loading = false;
				})
				return 'content';
			},
			tabSelect(id) {
				_this.curTab = id;
			}
		},
		mounted() {
			_this = this;
			let pageStack=getCurrentPages();
			let option=pageStack&& pageStack.length>0? pageStack[pageStack.length-1].options||pageStack[pageStack.length-1].$route.query:null;
						
			_this.filePath = option.path;
			console.log(_this.filePath);
			let dir='Root';
			if (_this.filePath.lastIndexOf('/') >= 0) {
				_this.fileName = _this.filePath.substr(_this.filePath.lastIndexOf('/') + 1);
				dir = 'Root'+_this.filePath.substr(0, _this.filePath.lastIndexOf('/'));
			} else {
				_this.fileName = _this.filePath;
			}
			_this.fileDir=dir.split('/');
			
			if (_this.fileName.lastIndexOf('.') >= 0) {
				_this.fileExt = _this.fileName.substr(_this.fileName.lastIndexOf('.') + 1);
			} else {
				_this.fileExt = '';
			}

			vaultSetting.loadSetting().then((setting) => {
				_this.getContent();
			}, () => {
				uni.navigateTo({
					url: '/pages/vault/setting',
				})
			})

		}
	}
</script>
