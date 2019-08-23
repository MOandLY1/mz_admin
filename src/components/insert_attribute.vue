<template>
    <div>
        <div style="width: 600px">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="新的颜色名称" style="float: left">
                    <el-input style="width: 218px" v-model="color" >
                    </el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <el-button type="primary" @click="insert_color()">添加</el-button>
                    <el-button type="primary" @click="aaa()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>

        <div style="width: 600px">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="新的储存容量" style="float: left">
                    <el-input style="width: 218px" v-model="memory" >
                    </el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <el-button type="primary" @click="insert_memory()">添加</el-button>
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
                color:'',
                memory:'',
            }
        },
        mounted: function () {

        },
        methods: {
            insert_color(){
                var parse = {
                    color : this.color,
                }
                this.$http.post('/insert_color',parse).then(res=>{
                    if(res.data.code==1){
                        alert(res.data.info)
                    }
                })
            },
            insert_memory(){
                var parse = {
                    memory : this.memory,
                }
                this.$http.post('/insert_memory',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            }
        }
    }
</script>
