<template>
    <div class="gravity-bottom-left panel">
        <div v-if="type == 'normal'" class="normal">
            <span @click="select(item)" class="item" v-for="item in data.collection">{{item}}</span>
        </div>
        <div v-else></div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from "vue";
    import {mapState, mapMutations} from "vuex";
    import _ from "lodash";

    export default {
        props: {},
        mounted: function () {
        },
        methods: {
            select: function (item) {
                this.$emit("exit", item);
            }
        },
        computed: mapState({
            data: state => state.slideBottomBox.data,
            type: state=>state.slideBottomBox.type
        })
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
                    width: 10%;
                    text-align: center;
                }
            }
        }
    }
</style>