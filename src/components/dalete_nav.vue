<template>
    <div>
        <div style="width: 40%">
            <el-form ref="form"  label-width="40px">

                <el-form-item label="ID" style="width: 40%">
                    <el-input v-model="id" :disabled="true" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item label="名称" style="width: 40%">
                    <el-input v-model="name" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="establish()">立即删除</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!--        <el-input style="width:100px;" v-model="input" placeholder="请输入内容"></el-input>-->
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
                name:'',
                id:'',
            }
        },
        mounted: function () {
            this.id = this.$route.query.id    //接收传过来的参数
            this.input = this.id;             //将接收到的ID传给上面的input，上面的input将数据渲染到页面中

            this.$http.get('/delete_nav?id='+this.id).then(res=> {    //字符串拼接，this.id要放在引号外才能解析
                if (res.data.code == 1) {
                    this.data = res.data.data
                    this.name = this.data.name
                }
            })

        },
        methods: {
            establish(){
                var parse = {
                    id:this.id,
                    name:this.name
                }
                this.$http.post('/delete_nav_',parse).then(res=>{
                    if(res.data.code==1){
                        alert('删除成功');
                        this.name = res.data.name
                    }
                })
            }
        }
    }
</script>
