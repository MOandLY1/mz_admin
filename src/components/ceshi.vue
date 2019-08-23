<template>
    <div>

        <el-upload
                action="http://127.0.0.1:10087/admin/increase_commodity_"
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


            <el-form ref="form" style="margin-top: 20px">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">上传</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>


    </div>
</template>

<script>
    export default {
        data() {
            return {

                img:[],
            }
        },
        mounted: function () {
            var demo =new Vue({
                el: "#demo",
                data: {
                    open: false,
                    selected:"1"
                },
                watch: {
                    selected: function(val) {
                        this.open = val == "2" ? true : false;
                    }
                }
            });

        },
        methods: {
            upload(fileList){
                this.img.push(fileList.data)
                console.log(this.img)
            },
            onSubmit(){
                var parse = {
                    img : this.img,
                }
                this.$http.post('/insert_photo',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            }
            },



    }
</script>
