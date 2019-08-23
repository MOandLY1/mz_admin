<template>
    <div>
        <div style="width: 40%">
            <el-form ref="form"  label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="name" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item label="年龄">
                    <el-input v-model="age" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item label="手机号码">
                    <el-input v-model="phone" placeholder="请输入内容"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">立即创建</el-button>
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
            return{
                data:[],
                name: '',
                age:'',
                phone:'',
                id:''
            }
        },
        mounted: function (){
            this.id = this.$route.query.id    //接收传过来的参数
            this.input = this.id;             //将接收到的ID传给上面的input，上面的input将数据渲染到页面中

            this.$http.get('/modify?id='+this.id).then(res=>{    //字符串拼接，this.id要放在引号外才能解析
                if(res.data.code==1){
                    this.data = res.data.data
                    this.age = this.data.age
                    this.phone = this.data.phone
                    this.name = this.data.name
                    // console.log(this.data)
                }
            })

        },
        methods: {
            onSubmit(){

                var parse = {
                    age:this.age,
                    phone:this.phone,
                    name:this.name,
                    id:this.id
                }
                this.$http.post('/modify_',parse).then(res=>{
                    if(res.data.code==1){
                        alert('修改成功');
                    }
                })

            }
             }

    }
</script>
