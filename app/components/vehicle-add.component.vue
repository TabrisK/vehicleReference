<template>
    <div>
        <form @submit.prevent="addVehicle(vehicle)">
            <div><input v-model="vehicle.plate" placeholder="车牌" maxlength="7"></div>
            <div><input v-model="vehicle.brand" placeholder="品牌"></div>
            <div><input v-model="vehicle.contact" placeholder="联系人"></div>
            <div><input v-model="vehicle.phone" placeholder="联系方式"></div>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
    "use strict"
    export default {
        data (){
            return {
                vehicle: {}
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