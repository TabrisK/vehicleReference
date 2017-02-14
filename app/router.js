/**
 * Created by Helex on 2017/2/1.
 */
"use strict";
import VueRouter from 'vue-router';

const Default = () => System.import('./components/vehicle-all.component.vue');
const Detail = ()=> System.import('./components/vehicle-detail.component.vue');
const Add = ()=> System.import('./components/vehicle-add.component.vue');
const Setting = ()=> System.import('./components/setting.component.vue');

const routes = [
    //{ path: '*', component: NotFoundComponent },//没有匹配到页面  前端404
    {path: "", redirect: "/vehicle"},
    {name: "all", path: "/vehicle", meta: {str: "列表", xIndex: 0, topLayout: true}, component: Default},
    {name: "add", path: "/vehicle/add", meta: {str: "新增", view: {footerNav: false}}, component: Add},
    {name: "detail", path: "/vehicle/:id", meta: {str: "详情", view: {footerNav: false}}, component: Detail},
    {name: "setting", path: "/setting", meta: {str: "设置", xIndex: 1, topLayout: true}, component: Setting}
];

const vRouter = new VueRouter({
    routes,
    //mode: 'history'//无#模式（statepush模式）
});

export default vRouter;