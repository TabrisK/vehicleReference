/**
 * Created by Helex on 2017/1/31.
 */
"use strict";

require('vue-resource');
import '!style-loader!css-loader!sass-loader!./assets/sass/style.scss';
import Vue from 'vue';
import _ from 'lodash';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import vRouter from './router';
import topNav from './components/footer-nav.component.vue';
import headerBar from './components/header-bar.component.vue';
import popUpBox from './components/pop-up-box.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component(
    'baidu-map',
    () => System.import('./components/baidu-map.component.vue')
);

vRouter.beforeEach((to, from, next) => {
    next();
});

vRouter.afterEach((to, from) => {
});

var app = new Vue({
    el: "#app",
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            this.stateTransition = toDepth < fromDepth ? 'slide-right' : 'slide-right'
        }
    },
    data: {
        stateTransition: 'slide-left',
        popup: false//popup-box默认关闭
    },
    methods: {
    },
    computed: {},
    router: vRouter,
    components: {
        "footer-nav": topNav,
        "header-bar": headerBar,
        "pop-up-box": popUpBox
    }
});