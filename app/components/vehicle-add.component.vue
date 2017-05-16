<template>
    <div class="vehicle-add">
        <form @submit.prevent="addVehicle(vehicle)" v-form="addVForm">
            <div style="font-size: 0px;">
                <span class="plate" @click="bus.$emit('collection', 'province')">{{vehicle.plate.province}}<i
                        class="fa fa-chevron-down"></i></span>
                <input name="plate" v-model="vehicle.plate.tailNumber" placeholder="车牌"
                       pattern="^[A-Z0-9]*$" maxlength="7" required
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
            <!--<select name="device" required
                    :class="{'error': addVForm.device?addVForm.device.$dirty && addVForm.device.$invalid:false}">
                <option disabled>选择设备类型</option>
                <option value="1">内部设备</option>
                <option value="2">外部设备</option>
            </select>-->
            <div class="select" @click="bus.$emit('select', 'types')">{{types[vehicle.type].display}}</div>
            <div class="btn-group">
                <button class="btn-success" :disabled="addVForm.$invalid" type="submit"
                        :class="{'disabled': addVForm.$invalid}">提交
                </button>
            </div>
        </form>
        <collection :collection="provinces" v-model="vehicle.plate.province" event-key="province"/>
        <h-select :options="types" v-model="vehicle.type" event-key="types"></h-select>
    </div>
</template>

<script type="text/ecmascript-6">
    "use strict";
    import bus from "../bus";

    export default {
        data (){
            return {
                vehicle: {
                    plate: {
                        province: "沪",//[\u4e00-\u9fa5]{1}   匹配中文的正则表达式
                        tailNumber: ""
                    },
                    brand: "",
                    contact: "",
                    phone: "",
                    type: 0
                },
                addVForm: {},
                provinces: ["京", "津", "沪", "渝", "蒙", "新", "藏", "宁", "桂", "港", "澳", "黑",
                    "吉", "辽", "晋", "冀", "青", "鲁", "豫", "苏", "皖", "浙", "闽", "赣",
                    "湘", "鄂", "粤", "琼", "甘", "陕", "黔", "滇", "川"],
                types: [
                    {
                        val: 0,
                        display: "AOO级车"
                    },
                    {
                        val: 1,
                        display: "AO级车"
                    },
                    {
                        val: 2,
                        display: "A级车"
                    },
                    {
                        val: 3,
                        display: "B级车"
                    },
                    {
                        val: 4,
                        display: "C级车"
                    }
                ]
            }
        },
        created () {
            this.bus = bus;
        },
        methods: Object.assign({
            addVehicle(v){
                v.plate = v.plate.province + v.plate.tailNumber;
                this.$http.post("/api/vehicles", v).then(res => {
                    if (res.status == 200)
                        this.$router.push({path: "/vehicle"});

                }, (err) => {
                    console.log(err);
                });
            },
            setDevice(d){
                if(!d)return;
                this.vehicle.device = d;
            }
        }),
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
        .select {
            border: 0px;
            width: 100%;
            line-height: 30px;
            font-size: 18px;
            padding: 0px 10px;
            margin: 10px 0px;
            box-sizing: border-box;
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