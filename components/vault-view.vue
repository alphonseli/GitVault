<template>
    <view>
        <view v-if="ready" v-for="(item,idx) in treeData" :key="nodeConfig.keyField">
            <view v-if="item.type==='category'">
                <view class="padding-sm">
                    <text :class="'iconfont iconfont-'+(item[nodeConfig.expandFlagField]?'down':'right')" @tap="toggleNode(item,idx)"></text>
                    <text v-if="!editable" class="title" style="margin-left:20upx">{{item[nodeConfig.labelField]}}</text>
                    <view v-if="editable" class="title flex-sub" style="margin-left:20upx;display:inline-block">
                        <input class="vault-input" name="input" v-model="item[nodeConfig.labelField]"></input>
                    </view>
                </view>
                <vault-view class="bg-gray" style="margin-left:60upx;border-left:10upx solid #33c1fd" v-if="item[nodeConfig.expandFlagField]"
                    :tree-data="item[nodeConfig.childrenField]" :config="nodeConfig" :editable="editable"></vault-view>
            </view>
            <view v-else-if="item.type==='kv'">
                <view class="block flex">
                    <text v-if="!editable" class="bg-gray title padding-sm" style="width:150upx">{{item.key}}</text>
                    <text v-if="!editable" class="bg-white flex-sub padding-sm">{{item.value}}</text>
                    <view v-if="editable" class="bg-gray title flex-sub padding-xs">
                        <input class="vault-input" name="input" v-model="item.key"></input>
                    </view>
                    <view v-if="editable" class="bg-white flex-twice padding-xs">
                        <input class="vault-input" name="input" v-model="item.value"></input>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style lang="scss">
    .vault-input {
        border-bottom: 1px solid #999999;
        box-shadow: 0px 7px 5px -5px #AAAAAA;
        input{
            font-size:10upx;
            }
    }
</style>

<script>
    let _this = null;
    export default {
        name: 'VaultView',
        data() {
            return {
                ready: false,
                nodeConfig: {
                    keyField: 'key',
                    labelField: 'label',
                    childrenField: 'children',
                    expandFlagField: 'expanded',
                },
                defaultConfig: {
                    keyField: 'key',
                    labelField: 'label',
                    childrenField: 'children',
                    expandFlagField: 'expanded',
                }
            };
        },
        props: {
            // 展示数据
            treeData: Array,
            config: {
                type: Object,
                default: {
                    keyField: 'key',
                    labelField: 'label',
                    childrenField: 'children',
                    expandFlagField: 'expanded',
                }
            },
            editable: {
                type: Boolean,
                default: false
            },
            onAdd:{
                type: Function,
                default: function(v,parentNode){
                    console.log('add node',v);
                    }
            },
            onEdit:{
                type: Function,
                default: function(v,parentNode){
                    console.log('edit node',v);
                    }
            },
            onDel:{
                type: Function,
                default: function(v,parentNode){
                    console.log('delete node',v);
                    }
            }
        },
        watch: {

        },
        methods: {
            toggleNode(item, idx) {
                console.log('toggleNode', item, idx);
                if (item) {
                    if (item[_this.nodeConfig.expandFlagField]) {
                        console.log('collapseFlagField', _this.nodeConfig.expandFlagField, _this.treeData[idx]);
                        // item[_this.nodeConfig.expandFlagField]=false;
                        _this.$set(item, _this.nodeConfig.expandFlagField, false);
                    } else {
                        console.log('expandFlagField', _this.nodeConfig.expandFlagField, _this.treeData[idx]);
                        // item[_this.nodeConfig.expandFlagField]=true;
                        _this.$set(item, _this.nodeConfig.expandFlagField, true);
                    }
                }
            }
        },
        mounted() {
            _this = this;
            _this.nodeConfig = Object.assign({ ..._this.defaultConfig
            }, _this.config);
            console.log('tree data', _this.treeData);
            console.log('config', _this.config);
            _this.ready = true;
        }
    }
</script>
