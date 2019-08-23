<template>
    <div>
        <div style="width: 100%">
            <el-form ref="form"  label-width="100px">

                <el-form-item label="上级">
                    <el-input :disabled="true" style="width: 218px" v-model="superior" >
                    </el-input>
                </el-form-item>

                <el-form-item label="名称">
                    <el-input :disabled="true" style="width: 218px" v-model="name" >
                    </el-input>
                </el-form-item>

                <el-form-item label="颜色">
                    <el-select v-model="color" multiple placeholder="请选择">
                        <el-option
                                v-for="item in color_"
                                :key="item.value"
                                :label="item.label"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="储存容量">
                <el-select v-model="capacity" multiple placeholder="请选择">
                    <el-option
                            v-for="item in capacity_"
                            :key="item.value"
                            :label="item.label"
                            :value="item.name">
                    </el-option>
                </el-select>
                </el-form-item>

                <el-form-item label="上传主图">
                    <el-upload
                            action="http://127.0.0.1:10087/admin/increase_commodity_"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="upload_"

                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item >
                    <el-button type="primary" @click="upload()">添加</el-button>
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
    import Tinymce from '@/components/Tinymce'
    export default {

        components: { Tinymce },
        data() {
            return {
                superior:'',
                superior_id:'',
                name:'',
                color:'',
                color_:[],
                capacity:'',
                capacity_:[],
                stock:'',
                price:'',
                details:'',
                img:[],
                content:'',
                data_:'',

            }
        },
        mounted: function () {

            this.superior = this.$route.query.name
            this.name = this.$route.query.options_name
            this.superior_id = this.$route.query.selection_id
            this.$http.get('/search_color').then(res=>{
                if(res.data.code==1){
                    this.color_ = res.data.data
                }
            })
            this.$http.get('/search_memory').then(res=>{
                if(res.data.code==1){
                    this.capacity_ = res.data.data
                }
            })
        },
        methods: {
            aaa(){
                console.log(this.capacity)
            },
            upload_(fileList){
                this.img.push(fileList.data)
                console.log(this.img)
            },
            upload(){
                var parse = {
                    superior_id : this.superior_id,
                    name : this.name,
                    color : this.color,
                    capacity : this.capacity,
                    stock : this.stock,
                    price : this.price,
                    details :this.details,
                    img : this.img,
                }
                if(parse.color == ""){
                    alert('请至少选择一种颜色')
                }else{
                    if(parse.capacity == ""){
                        alert('请至少选择一种储存容量')
                    }else{
                        this.$http.post('/insert_commodity',parse).then(res=>{
                            if(res.data.code==1){
                                this.data_ = res.data.data
                                let id = this.data_
                                let superior = this.superior
                                this.$router.push({path: '/adding_commodity_attributes',query:{id:id,superior:superior}});
                                console.log(this.data_)
                            }
                        })
                    }
                }

            },
        }
    }
</script>
