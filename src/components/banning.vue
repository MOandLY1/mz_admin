<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="ID">
                    <el-input
                            placeholder="ID"
                            v-model="id"
                            :disabled="true">
                    </el-input>
                </el-form-item>

                <el-form-item label="姓名">
                    <el-input
                            placeholder="姓名"
                            v-model="name"
                            :disabled="true">
                    </el-input>
                </el-form-item>

                <el-form-item label="封禁状态">
                    <el-input
                            placeholder="封禁状态"
                            v-model="banning"
                            :disabled="true">
                    </el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">立即封禁</el-button>
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
                data:[],
                id:'',
                name: '',
                banning:'',
            }
        },
        mounted: function () {
            this.id = this.$route.query.id       //接收主页面传过来的ID参数
            this.$http.get('/banning?id='+this.id).then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                    this.name = this.data.name
                    this.banning = this.data.banning
                    if(this.banning==0){
                        this.banning = "未被封禁"
                    }else{
                        this.banning = "已被封禁"
                    }
                }
            })
        },
        methods: {
            onSubmit(){
                var parse = {
                    id:this.id,
                    banning:this.data.banning
                }
                this.$http.post('/banning_',parse).then(res=>{
                    if(res.data.code==1){
                        alert('修改成功');
                        this.banning = res.data.info
                    }
                })
            }
        }
    }
</script>
