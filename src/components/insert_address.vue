<template>
    <div>
        <div style="width: 600px">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="省"  >
                    <el-select clearable style="width: 218px;" @change="aaa()" v-model="province_" placeholder="请选择">
                        <el-option
                                v-for="item in province"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="市" >
                    <el-select clearable style="width: 218px;" @change="bbb()" v-model="city_" placeholder="请选择">
                        <el-option
                                v-for="item in city"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="区" >
                    <el-select clearable style="width: 218px;" v-model="area_" placeholder="请选择">
                        <el-option
                                v-for="item in area"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item  label="地区名">
                    <el-input clearable style="width: 218px" v-model="name" >
                    </el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <el-button type="primary" @click="insert_address()">添加</el-button>
                    <el-button type="primary" @click="aaa()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>

    </div>
</template>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            return {
                input:'',
                province:[],
                province_:'',
                id:'',
                city:[],
                city_:'',
                area:[],
                area_:'',
                name:'',
            }
        },
        mounted: function () {
            this.$http.get('/query_region').then(res => {
                if (res.data.code == 1) {
                    this.province = res.data.data
                    console.log(this.province)
                }
            })
        },
        methods: {
            aaa(){
                var parse = {
                    name : this.province_,
                }
                this.$http.post('/query_region_',parse).then(res=>{
                    if(res.data.code==1){
                       this.city = res.data.data
                    }
                })
            },
            bbb(){

            },
            insert_address(){
                this.superior_name = this.area_
                if(this.area_ == undefined){
                    this.superior_name = this.city_
                }else{
                    if(this.city_ == undefined){
                        this.superior_name = this.province_
                    }else{
                        this.superior_name = 0
                    }
                }
                alert(this.superior)
                var parse = {
                    superior_name : this.superior_name,
                    name :this.name,
                }
                this.$http.post('/insert_region',parse).then(res=>{
                    if(res.data.code==1){
                        alert('写入成功')
                    }
                })

            //     <view class="container">
            //         <view class="userinfo">
            //
            //         {{list.author}}
            // </view>
            //     <view class="usermotto">
            //         <text class="user-motto">{{list.author}}</text>
            //     </view>
            //
            //     <button bindTap = 'bindViewTap'/>
            //         </view>
            },
        }
    }
</script>
