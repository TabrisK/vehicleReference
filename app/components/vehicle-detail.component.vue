<template>
    <div>vehicle ID: {{$route.params.id}}
        <baidu-map :init="mapInit"></baidu-map>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                mapInit: function (map) {
                    map.centerAndZoom(new BMap.Point(121.48, 31.22), 13);
                }
            }
        },
        mounted: function () {
        },
        updated: function () {
        }
    }
</script>