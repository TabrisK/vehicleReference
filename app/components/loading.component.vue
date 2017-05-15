<template>
    <div v-show="mask" class="loading">
        <p><i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i></p>
    </div>
</template>
<script type="text/ecmascript-6">
    import bus from "../bus";

    export default {
        props: {
            /*init: {
             type: Function,
             require: true
             }*/
        },
        data(){
            return {
                mask: false
            }
        },
        created (){
            let vm = this;
            bus.$on("mask", function(){
                vm.mask = true;
            });
            bus.$on("unMask", function(){
                vm.mask = false;
            });
        },
        mounted: function () {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "~scss/variables.scss";

    .loading {
        top: $header-height;
        bottom: $footer-height;
        z-index: $layout-S;
        position: absolute;
        width: 100%;
        p {
            text-align: center;
        }
    }
</style>