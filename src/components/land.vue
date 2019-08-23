<template>
    <div>

        <el-container>
            <el-header></el-header>
            <el-main style="min-height: 800px">
                <div style="margin-top: 200px;width: 30%;margin-left:35%;">
                <el-form status-icon label-width="100px" class="demo-ruleForm">

                    <el-form-item label="账号" prop="pass">
                        <el-input type="text"  v-model="name" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                    </el-form-item>
                </el-form>
                </div>
            </el-main>
            <el-footer></el-footer>
        </el-container>

    </div>
</template>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>

<script>
    export default {
        data() {
            return {
                name:'',
                password:'',
            }
        },
        mounted: function () {

        },
        methods: {
            submitForm(){
                var a = {
                    name:this.name,
                    password:this.password
                }

                this.$http.post('/admin_land',a).then(res=>{
                    if(res.data.code==1){
                        alert('登录成功');

                        //缓存在浏览器本地的数据
                        localStorage.token = res.data.data.token;
                        localStorage.id = res.data.data.user.id;
                        this.$router.push({path: '/',query:{ name:a.name}});
                    }
                    if(res.data.code==0){
                        alert('用户名或密码错误');
                    }
                })

            }
        }
    }
</script>
