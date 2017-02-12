<template>
    <div>
        <form @submit.prevent="addVehicle(vehicle)" v-form="addVForm">
            <div><input v-model="vehicle.plate" placeholder="车牌" maxlength="7"></div>
            <div><input v-model="vehicle.brand" placeholder="品牌"></div>
            <div><input v-model="vehicle.contact" placeholder="联系人"></div>
            <div><input v-model.number="vehicle.phone" type="number" placeholder="联系方式"></div>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    "use strict";
    export default {
        data (){
            return {
                vehicle: {},
                addVForm: {}
            }
        },
        created () {
        },
        methods: {
            addVehicle(v){
                this.$http.post("/api/vehicles", v).then(res=> {
                    if (res.status == 200)
                        this.$router.push({path: "/all-vehicles"});

                }, (err)=> {
                    console.log(err);
                });
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    form {
        div {
            width: 100%;
            input {
                border-left: 0px;
                border-right: 0px;
                width: 100%;
                line-height: 26px;
                font-size: 18px;
                padding: 0px 10px;
                margin: 10px 0px;
                display: table-cell;
            }
        }
    }
</style>