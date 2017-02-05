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
    beforeCreate(){
    },
    data: {
        message: "Hello Vue!!!",
        back: function () {
            vRouter.go(-1);
        },
        forward: function () {
            vRouter.go(1);
        }
    },
    methods: {
        isOriginal: function () {
            return vRouter.currentRoute.name != "all";
        }
    },
    computed: {},
    router: vRouter
});
