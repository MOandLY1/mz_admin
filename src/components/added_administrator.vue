<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="用户名">
                    <el-input style="width: 218px" v-model="name" >
                    </el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input style="width: 218px" v-model="password">
                    </el-input>
                </el-form-item>

                <el-form-item label="确认密码">
                    <el-input style="width: 218px" v-model="password_">
                    </el-input>
                </el-form-item>

                <el-form-item style="width: 300px">
                    <el-button type="primary" @click="onSubmit()">注册</el-button>
                    <el-button>取消</el-button>
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

                name:'',
                password:'',
                password_:'',
            }
        },
        mounted: function () {
        },
        methods: {
            onSubmit(){
                var parse = {
                    name:this.name,
                    password:this.password,
                    password_:this.password_
                }
                this.$http.post('/added_administrator',parse).then(res=>{
                    this.info = res.data.info
                    alert(this.info)
                })

            }
        }
    }
</script>
