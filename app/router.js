/**
 * Created by Helex on 2017/2/1.
 */
"use strict";
import VueRouter from 'vue-router';

const Default = () => System.import('./components/vehicle-all.component.vue');
const Detail = ()=> System.import('./components/vehicle-detail.component.vue');
const Add = ()=> System.import('./components/vehicle-add.component.vue');

const routes = [
    //{ path: '*', component: NotFoundComponent },//没有匹配到页面  前端404
    {name: "all", path: "", component: Default},
    {name: "all", path: "/all-vehicles", component: Default},
    {name: "add", path: "/add-vehicle", component: Add},
    {name: "detail", path: "/detail/:id", component: Detail}
];

const vRouter = new VueRouter({
    routes,
    //mode: 'history'//无#模式（statepush模式）
});

export default vRouter;