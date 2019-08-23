<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="最上级目录">
                    <el-select style="width: 218px;" @change="bbb()" v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="商品名称">
                    <el-input style="width: 218px" v-model="options_name" >
                    </el-input>
                </el-form-item>


                <div style="width: 330px">
                <el-form-item >
                    <span style="float: left"><el-button type="primary" @click="handleClick()">添加</el-button></span>
                    <span style="float: left;margin-left: 20px"><el-button type="primary" @click="aaa()">取消</el-button></span>
                </el-form-item>
                </div>
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
                stock: '',
                options_name: '',
                superior_id: '',
                superior_name:'',
                img: [],
                options: [],
                options_: '',
                value: '',
                value_:'',
            }
        },
        mounted: function () {
            this.$http.get('/search_superior_id').then(res=>{    //字符串拼接，this.id要放在引号外才能解析
                if(res.data.code==1){
                    this.options = res.data.data
                    console.log(res.data.data)
                    console.log(this.options);    //这是控制台打印的属性的方式
                }
            })
        },
        methods: {
            aaa(){
                alert(this.value)
            },
            bbb(){
                var parse = {
                    name: this.value,
                }
                this.$http.post('/query_selection', parse).then(res => {//根据上面滑块选择的内容来查询相应的id
                    if (res.data.code == 1) {
                        this.options_ = res.data.data
                        return console.log(this.options_);    //这是控制台打印的属性的方式
                    }
                })//根据上面滑块选择的内容来查询相应的id

            },
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
            handleClick(){//跳至添加商品具体属性页面
                var parse = {
                    name: this.options_name,
                }
                this.$http.post('/query_commodity_name', parse).then(res => {
                    if (res.data.code == 1) {
                        this.commodity_name = res.data.data
                        alert(this.commodity_name)
                    }else{
                        let name = this.value
                        let selection_id = this.options_
                        let options_name = this.options_name

                        if(name == ""){
                            alert('请选择该商品的上级')
                        }else{
                            if(options_name == ""){
                                alert('请输入新商品的名称')
                            }else{
                                this.$router.push({path: '/adding_commodity_attributes_',query:{ selection_id:selection_id,name:name,options_name:options_name}});
                            }
                        }
                    }
                })


            }//跳至添加商品具体属性页面


        }
    }
</script>
