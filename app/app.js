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

var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!!!"
    },
    router: vRouter
});
