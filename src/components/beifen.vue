<template>
    <div>
        用户列表页面
        {{data.a}}
        <span>{{data.b}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:'',
                d:''
            }
        },
        mounted: function () {
            this.$http.get('/user?user=aaa&password=000').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                    var d = res.data.data
                    this.d = d;
                }
            })
        },
        methods: {
            get_user(){
                this.$http.post('/user',{user:'aaa',password:'000'}).then(res=>{

                })
            }
        }
    }
</script>














//banning页面的备份，于7.23  3:39，备份前内容为可修改的输入框内展示ID.name，以及封禁状态，要改为不可修改的输入框

<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="ID">
                    <el-input v-model="id" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item label="姓名">
                    <el-input v-model="name" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="封禁状态">
                    <el-input
                            placeholder="封禁状态"
                            v-model="banning"
                            :disabled="true">
                    </el-input>
                </el-form-item>

                <el-form-item label="封禁状态">
                    <el-input v-model="banning" placeholder="请输入内容"></el-input>
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
            // onSubmit(){
            //     var parse = {
            //         id:this.id,
            //         name:this.name,
            //         banning:this.banning,
            //     }
            // }
        }
    }
</script>















<template>
    <div>

        <div style="width: 70%">
            <el-table
                    :data="data"
                    style="width: 100%">

                <el-table-column
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>

            </el-table>
        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:[]
            }
        },
        mounted: function () {
            this.$http.get('/query_banning').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data

                }
            })

        },
        methods: {}
    }
</script>






















<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="上级ID">
                    <el-input v-model="Superior_id">
                    </el-input>
                </el-form-item>

                <el-form-item label="商品名称">
                    <el-input v-model="name" >
                    </el-input>
                </el-form-item>

                <el-form-item label="数量">
                    <el-input v-model="stock">
                    </el-input>
                </el-form-item>

                <el-form-item label="上传图片">
                    <el-upload
                            action="http://127.0.0.1:10087/admin/increase_commodity"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="upload"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">上架</el-button>
                    <el-button type="info">暂存</el-button>
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
                dialogImageUrl: '',
                dialogVisible: false,
                stock:'',
                name:'',
                Superior_id:'',
                img:[]
            }
        },
        mounted: function () {

        },
        methods: {
            handleRemove(file) {
                // console.log(file,fileList);
                console.log(file.response.data)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.response.data;
                this.dialogVisible = true;
                console.log(555)
                console.log(this.dialogImageUrl)
            },
            upload(fileList){
                this.img.push(fileList.data)
                console.log(this.img)
            },

            onSubmit(){
                var parse = {
                    Superior_id:this.Superior_id,
                    name:this.name,
                    stock:this.stock,
                    img:this.img    //这是个数组，传到后端后要转成json格式才能写入数据库，取出来则要转成数组格式以赋值
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
