<template>
    <view>
        <view class="bg-gradual-green">
            <view class="status_bar ">
                <!-- 这里是状态栏 -->
            </view>
            <view class="cu-bar search">
                <view class="cu-avatar round default-avatar" :style="avatarUrl?('background-image:url('+avatarUrl+');'):''"></view>
                <view class="content">
                    保险箱
                </view>
                <view class="action">
                    <text class="cuIcon-settingsfill" @click="menuHandler"></text>
                </view>
            </view>
        </view>
        <view v-if="loading" class="cu-load bg-blue" :class="loading?'loading':'over'"></view>
        <scroll-view v-if="!loading" scroll-y class="page">
            <view v-for="(section,idx) in vaultDatas">
                <!-- ======================== vault 文件 ========================= -->
                <view v-if="section.type && section.type==='vault' " class="vault-section">
                    <view class="cu-bar bg-white solid-bottom" style="min-height:80upx;border-bottom:1px solid #EEE;border-top-left-radius:20upx;border-top-right-radius: 20upx;">
                        <view class="action">
                            <text class="cuIcon-title text-orange"></text> {{section.name?section.name:'unknown section'}}
                        </view>
                        <view class="action">
                            <button class="cu-btn bg-green shadow" data-target="menuModal" @tap="toggleEditable(section)">编辑</button>
                        </view>
                    </view>
                    <view class="bg-white padding-left padding-top-sm">
                        <text class="iconfont iconfont-folder text-orange path-text"></text>
                        <text class="text-orange path-text">/{{section.source.path.substr(0,section.source.path.lastIndexOf('/')+1)}}</text>
                        <text class="text-green filename-text">{{section.source.path.substr(section.source.path.lastIndexOf('/')+1)}}</text>
                    </view>
                    <scroll-view scroll-x class="bg-white nav">
                        <view class="flex text-center">
                            <view class="cu-item flex-sub" :class="section.activeTab!=='private'?'text-orange cur':''"
                                @tap="sectionTabSelect(section,'public')">
                                公共信息
                            </view>
                            <view class="cu-item flex-sub" :class="section.activeTab==='private'?'text-orange cur':''"
                                @tap="sectionTabSelect(section,'private')">
                                安全信息
                            </view>
                        </view>
                    </scroll-view>
                    <scroll-view scroll-x class="bg-white nav">
                        <vault-view v-if="section.activeTab!=='private'" :tree-data="section.publicData" :config="vaultViewConfig" :editable="section.editable">
                            
                        </vault-view>
                        <!-- <ly-tree v-if="section.activeTab!=='private'" :tree-data="section.publicData" :props="vaultDataTreeProps"
                            node-key="id" :expandOnClickNode="false">
                        </ly-tree>
                        <ly-tree v-else :props="vaultDataTreeProps" node-key="path" :showCheckbox="true"
                            :expandOnClickNode="false" :checkOnClickNode="false" :checkOnlyLeaf="true" @check="selectFile"
                            :load="getFileTreeNode" :defaultCheckedKeys="vaultSetting.github.files"
                            :defaultExpandedKeys="treeDefaultExpandedKeys" lazy>
                        </ly-tree> -->
                    </scroll-view>
                </view>
                <!-- ===========================其他文件=============================== -->
                <view v-else class="vault-section margin-sm">
                    <view class="cu-bar bg-white solid-bottom margin-top">
                        <view class="action">
                            <text class="cuIcon-title text-orange"></text> {{section.name}} [unknow type]
                        </view>
                        <view class="action">
                            <button class="cu-btn bg-green shadow" data-target="menuModal">编辑</button>
                        </view>
                    </view>
                    <view>{{section.source.path}}</view>
                </view>
            </view>
            <!-- <view class="cu-list menu sm-border">
				<view class="cu-item arrow" v-for="(item,index) in repos" :key="index" @tap="view(item.path)">
					<view class="content">
						<text class="text-green iconfont" :class="item.type=='file'?'iconfont-file':'iconfont-folder'"></text>
						<text class="text-grey">{{item.name}}</text>
					</view>
				</view>

			</view> -->
            <view v-if="!vaultSetting.currentSetting" class="cu-bar text-center flex">
                <text class="text-grey flex-sub">请先在设置页配置仓库</text>
            </view>
            <!-- <view v-else-if="!repos||repos.length===0" class="cu-bar text-center flex">
				<text class="text-grey flex-sub">没有数据</text>
			</view> -->
            <!-- <view class="nav-list">
				<navigator :url="'/pages/vault/view?path=' + item.path" class="nav-li " navigateTo
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in repos" :key="index">
					<text :class="item.type=='file'?'iconfont iconfont-file':'iconfont iconfont-folder'" style="display: inline;"></text>
					<text class="nav-title" style="display: inline;">{{item.name}}</text>
				</navigator>
			</view> -->
            <view class="cu-tabbar-height"></view>
        </scroll-view>

    </view>
</template>

<style lang="scss">
    .status_bar {
        height: var(--status-bar-height);

        width: 100%;
        display: block;
    }

    .page {
        height: 100vh;
    }

    .default-avatar {
        background-image: url(../../static/logo.png);
    }

    .path-text {
        text-overflow: ellipsis;
        max-width: 60%;
        overflow: hidden;
        display: inline-block;
        line-height: 30upx;
        margin-right: 10upx;
    }

    .filename-text {
        text-overflow: ellipsis;
        max-width: 30%;
        overflow: hidden;
        display: inline-block;
        line-height: 30upx;
    }
</style>

<script>
    import Crypto from 'crypto-js';
    import githubApi from '../../api/github-api.js';
    import vaultSetting from '../../api/vaultSetting.js';
    import LyTree from '@/components/ly-tree/ly-tree.vue'
    import VaultView from '@/components/vault-view.vue';

    let _this = null;
    export default {
        name: "vault",
        components: {
            LyTree,
            VaultView,
        },
        data() {
            return {
                loading: false,
                avatarUrl: null,
                vaultDatas: [],
                vaultSetting: vaultSetting,
                vaultDataTreeProps: {
                    label: 'name',
                    // iconClass(data,node){
                    // 	return node.data.type==='file'?''
                    // },
                    isLeaf: 'leaf'
                },
                vaultViewConfig:{
                    keyField:'id',
                    labelField:'name',
                }
            };
        },
        methods: {
            menuHandler() {
                console.log('nava')
                uni.navigateTo({
                    url: '/pages/vault/setting',

                })
            },
            getVaultData() {
                let setting = vaultSetting.currentSetting;
                console.log(setting);

                if (setting.active === 'github') {
                    githubApi.setting = setting.github;
                    _this.avatarUrl = setting.github && setting.github.userInfo &&
                        setting.github.userInfo.avatar_url ? setting.github.userInfo.avatar_url :
                        null;
                    _this.loading = true;
                    let sections = [];
                    setting.github.files.map(f => {
                        sections.push(githubApi.getContent(f));
                    })
                    Promise.all(sections).then(results => {
                        _this.vaultDatas = [];
                        results.map(section => {
                            try {
                                let gitcontent = section.content.replace(/(\n|\r|\0)/g, ''); //git的base64内容存在换行符、文件结束符等
                                // console.log('git base64 content',gitcontent);
                                let data = JSON.parse(Crypto.enc.Base64.parse(gitcontent).toString(
                                    Crypto.enc.Utf8));
                                data.source = section;
                                if (!data.type) data.type = 'vault';
                                if (data.type === "vault") {
                                    try {
                                        if (data.privateData) {
                                            data.privateData = JSON.parse(Crypto.AES.decrypt(data.privateData,
                                                setting.aesKey).toString(Crypto.enc.Uft8));
                                        }
                                    } catch (e) {
                                        console.log("AES Decrypt failed", e);
                                        data.privateData = [];
                                    }
                                }
                                _this.vaultDatas.push(data);
                            } catch (e) {
                                console.log('===>read section data error:', e)
                                _this.vaultDatas.push({
                                    type: 'vault',
                                    version: _this.Global.GIT_VAULT_VERSION,
                                    source: section,
                                    name: '文件已损坏',
                                    publicData: [],
                                    privateData: []
                                });
                            }
                        });
                        console.log('====>vault datas', _this.vaultDatas);
                    }).complete(() => {
                        _this.loading = false;
                    })

                } else {

                }
            },
            sectionTabSelect(section, tab) {
                _this.$set(section, 'activeTab', tab);
            },
            toggleEditable(section){
                if (section.editable){
                    _this.$set(section,'editable',false);
                    }else{
                    _this.$set(section,'editable',true);
                        }
                },
            getVaultDataItem(file) {},
            view(path) {
                uni.navigateTo({
                    url: '/pages/vault/viewItem?path=/' + path
                })
            }
        },
        mounted() {
            _this = this;
            console.log('load');

            vaultSetting.loadSetting().then((setting) => {
                console.log('loadsetting===>', setting)
                _this.getVaultData();
            }, () => {
                console.log('no setting', vaultSetting);
                // uni.navigateTo({
                // 	url: '/pages/vault/setting',
                // })
            });

        }
    }
</script>
