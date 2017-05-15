<template>
    <div class="primary-list">
        <ul>
            <li v-for="item in collection">
                <router-link :to="{ name: item.stateName, params: item.stateParams}">
                    <b>{{item.title}}</b>
                    <span class="contact">{{item.brief}}</span>
                </router-link>
            </li>
        </ul>
        <div class="under-info"><p><i :class="[underClass, 'fa']" aria-hidden="true"></i>
            {{underStr}}</p></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import _ from "lodash";
    import bus from "../bus";

    export default {
        props: {
            collection: {
                require: true
            },
            eventKey: {
                typs: String,
                require: true
            }
        },
        data (){
            return {
                http: 0,
                underClass: "",
                underStr: ""
            };
        },
        created () {
            let vm = this;
            bus.$on("http", function (obj) {
                if (typeof obj[vm.eventKey] == "number") {
                    vm.underInfo = obj[vm.eventKey];
                }
            });
        },
        mounted(){
            let vm = this;
            let bottom;
            let bottomCount = 0;
            this.$el.addEventListener("wheel", function (e) {
                let element = e.currentTarget;
                let rect = element.getBoundingClientRect();
                let newBottom = window.innerHeight - (rect.top + rect.height);
                newBottom == bottom ? bottomCount++ : bottomCount = 0;
                bottom = newBottom;

                if (bottom > -600 ) {
                    if(vm.underInfo == 0){//处于请求结束状态
                        vm.$emit("edge");
                    } else if(vm.underInfo < 0 && bottomCount > 50) {//已没有数据，用户强行下拉
                        bottom = 0;
                        vm.$emit("edge");
                    }
                }
            });
        },
        computed: {
            underInfo: {
                get: function () {
                    return this.http;
                },
                set: function (newVal) {
                    this.http = newVal;
                    this.underClass = newVal == 0 ? 'fa-angle-double-down' : (newVal == 1 ? 'fa-circle-o-notch fa-spin' : '');
                    this.underStr = newVal == 0 ? '下拉加载更多' : (newVal == 1 ? '加载中' : '暂无更多信息');
                }
            }
        },
        methods: {}
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "~scss/variables.scss";

    .primary-list {
        ul {
            padding: 0px;
            font-size: 14px;
            margin: 0px;
            li {
                list-style: none;
                padding: 5px 10px;
                font-family: "Microsoft YaHei UI";
                a {
                    text-decoration: none;
                    color: #000;
                    border-bottom: 1px solid $basic-border-color;
                    display: block;
                    padding: 4px 0px 10px 8px;
                    line-height: 30px;
                    .contact {
                        float: right;
                    }
                }
            }
            li:last-child {
                a {
                    border-bottom: none;
                }
            }
            border-bottom: 1px solid $basic-border-color;
        }
        .under-info {
            p {
                text-align: center;
                margin: 2px 0px;
                color: gray;
                font-size: 12px;
                i {
                    margin-right: 5px;
                }
            }
        }

    }
</style>