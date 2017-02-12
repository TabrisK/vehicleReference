/**
 * Created by Helex on 2017/2/12.
 */

export default {
    install: function(Vue, options){
        Vue.directive("form",{
            bind: function(el, binding, vnode){
                console.log(binding.value);
            },
            inserted: function(el, binding, vnode){

            },
            update: function(el, binding, vnode, oldVnode){
            },
            componentUpdated: function(el, binding, vnode, oldVnode){
                console.log(vnode);
            }
        });
    }
}