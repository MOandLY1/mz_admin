<template>
    <div>
        <div style="width: 20%">
            <el-form ref="form"  label-width="80px">

                <el-form-item label="上传图片">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">上传</el-button>
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
                dialogVisible: false
            }
        },
        mounted: function () {


        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
