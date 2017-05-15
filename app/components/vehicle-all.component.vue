<template>
    <div>
        <primary-list :collection="vehicleList" @edge="getVehicles(++page)" event-key="getVehicles"/>
    </div>
</template>

<script type="text/ecmascript-6">
    import bus from "../bus";
    
    export default {
        data (){
            return {
                vehicleList: [],
                page: 1
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.getVehicles(this.page);
        },
        methods: {
            getVehicles (page) {
                bus.$emit("http",{getVehicles: 1});
                this.$http.get("/api/vehicles/page{/page}/size{/size}", {
                    params: {
                        page: page,
                        size: 15
                    }
                }).then(res => {
                    if (res.body.length > 0) {
                        bus.$emit("http",{getVehicles: 0});
                        let list = res.body.map((val, key) => {
                            return {
                                stateName: "detail",
                                stateParams: {id: val.id},
                                title: val.plate,
                                brief: val.contact
                            }
                        });
                        this.vehicleList = this.vehicleList.concat(list);
                    } else {
                        bus.$emit("http",{getVehicles: -1});
                        this.page = this.page - 1 > 0 ? this.page - 1 : 1;
                    }
                }, (err) => {
                    bus.$emit("http",{getVehicles: -1});
                    console.log(err);
                });
            }
        }
    }
</script>