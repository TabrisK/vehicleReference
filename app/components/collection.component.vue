<template>
    <transition name="fade">
        <div @click="select()" class="cover slide-bottom-box" v-show="show">
            <transition name="slide-down">
                <div class="gravity-bottom-left panel">
                    <div class="normal">
                    <span @click.stop="select(item)" class="item" :style="{width: itemWidth}"
                          v-for="item in collection">{{item}}</span>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    "use strict";
    import bus from "../bus";

    export default {
        props: {
            collection: {
                type: Array,
                require: true
            },
            eventKey: {
                type: String,
                require: true
            },
            value: {}
        },
        data(){
            return {
                itemWidth: "0px",
                show: false
            }
        },
        created(){
            let vm = this;
            bus.$on("collection", function (param) {
                if (param == vm.eventKey) {
                    vm.show = !vm.show;
                }
            });
        },
        mounted(){
            this.itemWidth = (window.innerWidth / 8).toFixed(2) - 8 + "px";
        },
        methods: {
            select (item) {
                this.show = !this.show;
                item && this.$emit('input', item);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .slide-bottom-box {
        .panel {
            width: 100%;
            min-height: 20px;
            background-color: white;
            padding-top: 2px;

            .normal {
                .item {
                    padding: 2px 3px;
                    margin: 1px;
                    background-color: #ddd;
                    border-radius: 5px;
                    display: inline-block;
                    text-align: center;
                }
            }
        }
    }
</style>