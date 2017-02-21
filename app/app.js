/**
 * Created by Helex on 2017/1/31.
 */
"use strict";

require('file-loader!./index.html');

require('vue-resource');
import '!style-loader!css-loader!sass-loader!./assets/scss/style.scss';

import Plugins from './directives/plugins';//本地编写的vue插件
//progressive plugins
import Vue from 'vue';
import _ from 'lodash';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
//自定义组件or模块
import vRouter from './router';
import topNav from './components/footer-nav.component.vue';
import headerBar from './components/header-bar.component.vue';
import popUpBox from './components/pop-up-box.vue';
import slideBottomBox from './components/slide-bottom-box.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Plugins);
Vue.use(Vuex);

Vue.component(
    'baidu-map',
    () => System.import('./components/baidu-map.component.vue')
);

vRouter.beforeEach((to, from, next) => {
    next();
});

vRouter.afterEach((to, from) => {
    (function (to) {
        window.setTimeout(()=> {
            var z = 0;
            to.path.split("").map((val, key)=> {
                if (val == "/")z++
            });
            let newContent = _.last(document.getElementsByClassName("content"));
            newContent.style.zIndex = z;//根据path中/的数量决定z-index;
        }, 10);
    })(to);
});

const store = new Vuex.Store({
    state: {
        slideBottomBox: {
            type: "",
            data: {},
            show: false
        }
    },
    mutations: {
        toggleSlideBottomBox: function (state, scope) {
            if (!scope) {
                !state.slideBottomBox.show && console.warn("Scope has never been defined.");
                state.slideBottomBox.show = false;//没有scope默认关闭
            }
            state.slideBottomBox.show = !state.slideBottomBox.show;
            if (state.slideBottomBox.show) {//展示则赋值
                state.slideBottomBox.type = scope.type;
                state.slideBottomBox.data = scope.data;
            }
        }
    },
    actions: {
        toggleSlideBottomBox({commit, state}, scope){
            commit("toggleSlideBottomBox", scope);
            return new Promise(function (resolve, reject) {
                app.$on("exit", function (item) {
                    console.log(item);
                    commit("toggleSlideBottomBox");
                    if (item)
                        resolve(item);
                    else
                        reject();
                });
            });
        }
    }
});

var app = new Vue({
    el: "#app",
    watch: {
        '$route' (to, from) {
            if (from.path == "/") {
                this.stateTransition = "";
            } else if (to.path.match(from.path)) {//前往子页
                this.stateTransition = 'slide-left';
            } else if (from.path.match(to.path)) {//返回父级页
                this.stateTransition = 'slide-right';
            } else {//两页没有任何关系
                if (to.meta.xIndex == undefined || from.meta.xIndex == undefined)//如果没定义了左右滑动关系
                    this.stateTransition = "";
                else//定义了左右滑动关系
                    this.stateTransition = to.meta.xIndex < from.meta.xIndex ? 'slide-right-concat' : 'slide-left-concat';
            }
        }
    },
    data: {
        stateTransition: '',
        popup: false,//pop-up-box默认关闭
        slideUp: false,//slide-up-box默认关闭
        slideUpTemp: {}
    },
    methods: {},
    computed: {
        cover: function () {
            return store.state.slideBottomBox.show;
        }
    },
    router: vRouter,
    store,
    components: {
        "footer-nav": topNav,
        "header-bar": headerBar,
        "pop-up-box": popUpBox,
        "slide-bottom-box": slideBottomBox
    },
    created: function () {
    },
    beforeMount: function () {
    }
});