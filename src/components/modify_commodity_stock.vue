<template>
    <div>
        <div style="width: 800px">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="修改库存" style="float: left">
                    <el-input style="width: 218px" v-model="stock" >
                    </el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <el-button type="primary" @click="insert_stock()">修改库存</el-button>
                    <el-button type="primary" @click="aaa()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>

        <div style="width: 800px">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="修改价格" style="float: left">
                    <el-input style="width: 218px" v-model="price" >
                    </el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <el-button type="primary" @click="insert_price()">修改价格</el-button>
                    <el-button type="primary" @click="aaa()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stock:'',
                price:'',
            }
        },
        mounted: function () {
            this.id = this.$route.query.id

        },
        methods: {
            insert_stock(){
                var parse = {
                    stock : this.stock,
                    id : this.id,
                }
                this.$http.post('/modify_stock',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            },
            insert_price(){
                var parse = {
                    price : this.price,
                    id : this.id,
                }
                this.$http.post('/modify_price',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            }
        }
    }
</script>
