<template>
    <div class="vehicle-add">
        <form @submit.prevent="addVehicle(vehicle)" v-form="addVForm">
            <div style="font-size: 0px;">
                <span class="plate" @click="togglePlatesSelector()">{{vehicle.plate.province}}<i
                        class="fa fa-chevron-down"></i></span>
                <input name="plate" v-model="vehicle.plate.tailNumber" placeholder="车牌"
                       pattern="^[\u4e00-\u9fa5]{1}[A-Z0-9]*$" maxlength="7" required
                       :class="{'error': addVForm.plate?addVForm.plate.$dirty && addVForm.plate.$invalid:false}">
            </div>
            <div class="divider-line"></div>
            <input name="brand" v-model="vehicle.brand" placeholder="品牌"
                   :class="{'error': addVForm.brand?addVForm.brand.$dirty && addVForm.brand.$invalid:false}">
            <div class="divider-line"></div>
            <input name="contact" v-model="vehicle.contact" placeholder="联系人" required
                   :class="{'error': addVForm.contact?addVForm.contact.$dirty && addVForm.contact.$invalid:false}">
            <div class="divider-line"></div>
            <input name="phone" v-model.number="vehicle.phone" type="number" placeholder="联系方式" required
                   :class="{'error': addVForm.phone?addVForm.phone.$dirty && addVForm.phone.$invalid:false}">
            <div class="divider-line"></div>
            <select name="device" required
                    :class="{'error': addVForm.device?addVForm.device.$dirty && addVForm.device.$invalid:false}">
                <option disabled>选择设备类型</option>
                <option value="1">内部设备</option>
                <option value="2">外部设备</option>
            </select>
            <button :disabled="addVForm.$invalid" type="submit"
                    :class="{'disabled': addVForm.$invalid}">提交
            </button>

            <!--<transition name="slide-down">
                <div class="bottom-anchor" v-show="showPlateSelector">
                    <span v-for="p in provinces" @click="select(p)">{{p}}</span>
                </div>
            </transition>-->
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    "use strict";
    export default {
        data (){
            return {
                vehicle: {
                    plate: {
                        province: "沪",
                        tailNumber: ""
                    }
                },
                addVForm: {},
                provinces: ["京", "津", "沪", "渝", "蒙", "新", "藏", "宁", "桂", "港", "澳", "黑",
                    "吉", "辽", "晋", "冀", "青", "鲁", "豫", "苏", "皖", "浙", "闽", "赣",
                    "湘", "鄂", "粤", "琼", "甘", "陕", "黔", "滇", "川"]
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
            },
            select(p){
                this.vehicle.plate.province = p;
                this.togglePlatesSelector();
            },
            togglePlatesSelector: function () {
                //this.showPlateSelector = !this.showPlateSelector;
                /*this.$emit('slide-up', {
                    temp: '<div><span v-for="p in provinces" @click="select(p)">{{p}}</span></div>'
                })*/
            }
        },
        computed: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~scss/variables.scss";
    .vehicle-add {
        bottom: 0px;
    }

    form {
        .plate {
            line-height: 30px;
            padding: 0px 5px;
            width: 20%;
            display: inline-block;
            text-align: center;
            font-size: 16px;
            box-sizing: border-box;
            i {
                margin-left: 4px;
            }
        }
        input {
            border: 0px;
            width: 100%;
            line-height: 30px;
            font-size: 18px;
            padding: 0px 10px;
            margin: 10px 0px;
            box-sizing: border-box;

            &[name = plate] {
                padding: 0px 5px;
                width: 80%;
            }
        }
    }

    .error {
        border: 2px solid red;
    }

    .disabled {
        color: gray;
    }

    .plates {

    }
</style>