<template>
    <div class="header-bar">
        <span class="left">
            <a @click="$router.go(-1);" v-show="$route.name != 'all'"><i class="fa fa-chevron-left fa-2x"></i></a>
        </span>
        <span class="topic">{{$route.meta.str}}</span>
        <span class="right"></span>
    </div>
</template>
<script>
    export default{

    }
</script>