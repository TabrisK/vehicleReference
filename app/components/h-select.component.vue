<template>
    <transition name="fade">
        <div class="h-select" v-show="show">
            <div class="cover slide-bottom-box">
                <transition name="slide-down">
                    <div class="gravity-bottom-left panel">
                        <div class="option-bg">
                            <div class="option" v-for="item in options" :class="{'active': item.val == localVal}">
                                <a>{{item.display}}</a>
                            </div>
                        </div>
                        <div class="operation"><span class="no" @click.stop="select()">取消</span>
                            <span class="yes" @click.stop="select(localVal)">确定</span></div>
                        <div class="specified"></div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    "use strict";

    import bus from "../bus";
    import _ from "lodash";
    let specifiedTop = 85;
    let offsetExtreme = specifiedTop - 30;
    let showDebounce;

    export default {
        props: {
            options: {
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
                show: false,
                localVal: null
            }
        },
        created(){
        },
        mounted(){
            let startClientY;//touch开始时保存第一个clientY
            let startBgY;//记录BgY的top
            let bgElement = this.$el.getElementsByClassName("option-bg")[0];
            let optionsElements = bgElement.getElementsByClassName("option");
            let upperBoundary = specifiedTop - this.options.length * 30;//上限
            let lowerBoundary = specifiedTop + 30;//下限
            let vm = this;

            bus.$on("select", function (param) {
                if (param == vm.eventKey) {
                    vm.show = !vm.show;
                    let index = 0;

                    if (vm.value != null && vm.value != undefined) {
                        for (let i in vm.options) {
                            if (vm.options[i].val == vm.value)
                                index = Number(i);
                        }
                        specifyItem(index);
                    }
                }
            });

            this.$el.addEventListener("touchstart", handleStart, false);
            this.$el.addEventListener("touchend", handleEnd, false);
            this.$el.addEventListener("touchmove", handleMove, false);

            function handleStart(e) {
                startClientY = e.touches[0].clientY;
                startBgY = bgElement.offsetTop;
                //e.preventDefault();
                vm.$el.addEventListener("touchend", handleEnd, false);
                vm.$el.addEventListener("touchmove", handleMove, false);
            }

            function handleMove(e) {
                let currentClientY = e.touches[0].clientY;//最新的clientY
                let offsetY = currentClientY - startClientY;
                let cTop = startBgY + offsetY;
                //超出上边界or下边界？计算速度
                if (cTop < upperBoundary) {
                    let excess = cTop - upperBoundary;
                    cTop = upperBoundary + getOffset(excess);
                } else if (cTop > lowerBoundary) {
                    let excess = cTop - lowerBoundary;
                    cTop = lowerBoundary + getOffset(excess);
                }
                //设置高度
                bgElement.style.top = cTop + "px";
                //e.stopPropagation();
                //e.preventDefault();
            }

            function handleEnd(e) {
                let cTop = bgElement.offsetTop;
                startBgY = cTop;
                //超出上边界？设置成最后一个
                if (cTop < upperBoundary)
                    specifyItem(vm.options.length - 1);
                //超出下边界？设置成第一个
                else if (cTop > lowerBoundary)
                    specifyItem(0);
                //未超出边界，计算与谁最近
                else specifyItem();

                //e.stopPropagation();
                //e.preventDefault();

                vm.$el.removeEventListener("touchend", handleEnd, false);
                vm.$el.removeEventListener("touchmove", handleMove, false);
            }

            function specifyItem(index) {
                let cTop = bgElement.offsetTop;
                if (typeof index == "number" && index >= 0) {//如果外界指定了
                    vm.localVal = vm.options[index].val;

                    let tTop = specifiedTop - index * 30;
                    let offset = tTop - cTop;
                    let transTime = 200;

                    let time = Date.now();

                    let tick = function () {
                        let timeOffset = Date.now() - time;
                        if (timeOffset > transTime) return bgElement.style.top = offset + cTop + "px";
                        let top = Number((timeOffset / transTime).toFixed(2)) * offset + cTop;
                        bgElement.style.top = top + "px";

                        requestAnimationFrame(tick);
                    };

                    tick();
                } else {//外界没指定，自己寻找定位谁
                    let minIndex = 0;
                    let minOffset = Math.abs(Math.abs(cTop) - specifiedTop);
                    for (let i in vm.options) {
                        let oTop = cTop + Number(i) * 30;
                        let offset = Math.abs(Math.abs(oTop) - specifiedTop);
                        if (offset < minOffset) {
                            minOffset = offset;
                            minIndex = Number(i);
                        }
                    }
                    return specifyItem(minIndex);
                }
            }
        },
        methods: {
            select(val){
                if (showDebounce && Date.now() - showDebounce <= 500) {
                    return;
                }

                showDebounce = Date.now();
                this.show = !this.show;
                if (val != undefined && val != null)
                    this.$emit('input', val);
            }
        }
    }

    function getOffset(excess) {
        if (Math.abs(excess) > offsetExtreme)//超出最大界限，直接设置成上限值
            return offsetExtreme * (excess / Math.abs(excess));
        let rate = excess / offsetExtreme;
        let finalOffset = offsetExtreme * Math.sin(rate * (Math.PI / 2));
        return Number(finalOffset.toFixed(2));
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

    .h-select {
        .panel {
            overflow: hidden;
            height: 226px;
            .option-bg {
                position: absolute;
                width: 100%;
                top: 85px;
                .option {
                    text-align: center;
                    line-height: 30px;
                    font-size: 20px;
                    color: lightgray;
                    &.active {
                        color: black;
                    }
                }
            }
            .specified {
                height: 30px;
                width: 100%;
                position: absolute;
                top: 84px;
                border-top: 1px solid lightgray;
                border-bottom: 1px solid lightgray;
            }
            .operation {
                height: 26px;
                width:100%;
                span {
                    height: 20px;
                    padding: 3px;
                    &.no {
                        color: lightgray;
                        position: absolute;
                        left: 0px;
                    }
                    &.yes {
                        color: royalblue;
                        position: absolute;
                        right: 0px;
                    }
                }
            }
        }

    }
</style>