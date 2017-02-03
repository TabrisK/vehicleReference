<template>
    <div class="mapBg"><div id="container"></div></div>
</template>
<script>
    export default {
        data(){
            return {
                map: null
            }
        },
        mounted: function(){
            this.map = new BMap.Map("container");    // 创建地图实例
        }
    }
</script>