<template>
    <div class="pop-up-box">
        <div class="pop-up-anchor">
            <div class="func-item" v-for="(func, index) in functionalBlock" :style="funcItemPosition(index)">
                <div v-if="func.path">
                    <router-link :to="func.path">{{func.str}}</router-link>
                </div>
                <div v-else-if="func.method">
                    <a @click="func.method()">{{func.str}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                functionalBlock: [
                    {
                        str: "Add",
                        path: "/add-vehicle"
                    },
                    {
                        str: "Copy",
                        method: function(){

                        }
                    }
                ]
            }
        },
        computed: {},
        methods: {
            funcItemPosition: function(index){
                var shaft = 100;//臂长
                var radius = 25;//pop up圆的半径

                var radian = 90/this.functionalBlock.length/2*(index*2+1)*Math.PI/180;
                return {
                    right: (Math.cos(radian)*shaft - radius) + "px",
                    bottom: (Math.sin(radian)*shaft - radius) + "px",
                    height: radius*2 + "px",
                    width: radius*2 + "px"

                }
            }
        }
    }
</script>