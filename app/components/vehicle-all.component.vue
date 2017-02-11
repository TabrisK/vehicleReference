<template>
    <div>
        <ul class="primary-list">
            <li v-for="vehicle in vehicleList">
                <router-link :to="{ name: 'detail', params: { id: vehicle.id }}"><b>{{vehicle.plate}}</b><span class="contact">{{vehicle.contact}}</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data (){
            return {
                loading: true,
                error: null,
                vehicleList: null
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.getVehicles()
        },
        methods: {
            getVehicles () {
                var vm = this;
                this.error = this.vehicleList = null;
                this.loading = true;

                window.setTimeout(function(){
                    vm.vehicleList = [
                        {
                            "id": 1,
                            "plate": "沪A7xxxx",
                            "brand": "VOLVO",
                            "contact": "HELEX",
                            "phone": "13262607231",
                            "img": "assets/img/S90.jpg"
                        },
                        {
                            "id": 2,
                            "plate": "沪A3xxxx",
                            "brand": "BMW",
                            "contact": "Nick",
                            "phone": "1xxxxxxxxxx"
                        },
                        {
                            "id": 5,
                            "plate": "沪C7Nxxxx",
                            "brand": "Cadillac",
                            "contact": "Obama",
                            "phone": "1xxxxxxxxxx"
                        },
                        {
                            "id": 4,
                            "plate": "沪ANxxxx",
                            "brand": "Lexus",
                            "contact": "Rosemond",
                            "phone": "1xxxxxxxxxx"
                        },
                        {
                            "id": 0,
                            "plate": "沪A2xxxx",
                            "brand": "Benz",
                            "contact": "Sherry",
                            "phone": "1xxxxxxxxxx"
                        },
                        {
                            "id": 6,
                            "plate": "浙Nxxxx",
                            "brand": "Chevrolet",
                            "contact": "Trump",
                            "phone": "1xxxxxxxxxx"
                        },
                        {
                            "id": 3,
                            "plate": "沪B1xxxx",
                            "brand": "Audi",
                            "contact": "Yijun",
                            "phone": "1xxxxxxxxxx"
                        }
                    ];
                },500);

            }
        }
    }
</script>