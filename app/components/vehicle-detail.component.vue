<template>
    <div>vehicle ID: {{$route.params.id}}
        <baidu-map ref="mapComponent"></baidu-map>
    </div>
</template>
<script>
    export default {
        mounted: function () {
        },
        updated: function () {
            if (this.$refs.mapComponent)
                this.$refs.mapComponent.$data.map.centerAndZoom(new BMap.Point(121.48, 31.22), 13);
        }
    }
</script>