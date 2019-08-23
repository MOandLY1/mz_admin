<template>
    <div>
        <div style="width: 100%">
            <el-form ref="form"  label-width="120px">

                <el-form-item v-if="seen" label="上级" >
                    <el-input :disabled="true" style="width: 218px" v-model="superior" >
                    </el-input>
                </el-form-item>

                <el-form-item v-if="seen" label="名称">
                    <el-input :disabled="true" style="width: 218px" v-model="name" >
                    </el-input>
                </el-form-item>

                <el-form-item v-if="seen_" label="最上级目录" >
                    <el-select style="width: 218px;" @change="bbb()" v-model="superior" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item v-if="seen_" label="名称" >
                    <el-select style="width: 218px;" @change="ccc()" v-model="name" placeholder="请选择">
                        <el-option
                                v-for="item in options_"
                                :key="item.name"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="颜色">
                    <el-select v-model="color" placeholder="请选择">
                        <el-option
                                v-for="item in color_"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="储存容量">
                    <el-select v-model="capacity" placeholder="请选择">
                        <el-option
                                v-for="item in capacity_"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="库存">
                    <el-input style="width: 218px" v-model="stock" >
                    </el-input>
                </el-form-item>

                <el-form-item label="价格">
                    <el-input style="width: 218px" v-model="price" >
                    </el-input>
                </el-form-item>

                <el-form-item label="价格显示在主页">
                    <el-select style="width: 218px;" @change="ccc()" v-model="supervisor_display_" placeholder="请选择">
                        <el-option
                                v-for="item in supervisor_display"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="上传图片">
                    <el-upload
                            action="https://ly.anjing.live/admin/increase_commodity_"
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

                <el-form-item label="超文本编辑">
                <div class='tinymce' style="width: 60%">
                    <div>
                        <tinymce v-model="details" :height="300"  />
                    </div>
                </div>
                </el-form-item>



                <el-form-item >
                    <el-button type="primary" @click="upload()">添加</el-button>
                    <el-button type="primary" @click="aaa()">取消</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    import Tinymce from '@/components/Tinymce'
    export default {
        components: { Tinymce },
        data() {
            return {
                id:'',
                id_:'',
                name:'',
                name_:'',
                color:'',
                color_:[],
                capacity:'',
                capacity_:[],
                stock:'',
                price:'',
                supervisor_display:[{
                        value: '不显示',
                        label: '不显示'
                    }, {
                        value: '显示',
                        label: '显示'
                    }],
                supervisor_display_:'',
                value:'',
                img:[],
                details:'',
                superior_id:'',
                superior:'',
                superior_name:'',
                options:[],
                options_:[],
                seen: false,
                seen_: true,
            }
        },
        mounted: function () {
            this.superior = this.$route.query.superior
            this.id = this.$route.query.id
            if(this.id == undefined) {
                this.$http.get('/search_superior_id').then(res => {
                    if (res.data.code == 1) {
                        this.options = res.data.data
                        this.seen = 0
                        this.seen_ = 1
                    }
                })
            }else{
                this.$http.get('/insert_commodity_?id=' + this.id).then(res => {
                    if (res.data.code == 1) {
                        this.data = res.data.data
                        this.superior_id = this.data.id
                        this.name = this.data.name
                        this.color_ = this.data.color
                        this.capacity_ = this.data.capacity
                        this.seen = 1
                        this.seen_ = 0
                    }
                })
            }
        },
        methods: {
            upload_(fileList){
                this.img.push(fileList.data)
                console.log(this.img)
            },
            aaa(){
                var parse = {
                    name: this.name,
                }
                this.$http.post('/query_selection_', parse).then(res => {//根据上面滑块选择的内容来查询相应的id
                    if (res.data.code == 1) {
                        this.options_ = res.data.data
                        return console.log(this.options_);    //这是控制台打印的属性的方式
                    }
                })//根据上面滑块选择的内容来查询相应的id
            },
            bbb(){
                var parse = {
                    name: this.superior,
                }
                this.$http.post('/query_selection_', parse).then(res => {//根据上面滑块选择的内容来查询相应的id
                    if (res.data.code == 1) {
                        this.options_ = res.data.data
                        this.id_ = this.options_.id
                        this.capacity_ = this.data.capacity
                        return console.log(this.options_);    //这是控制台打印的属性的方式
                    }
                })//根据上面滑块选择的内容来查询相应的id

            },
            ccc(){
                var parse = {
                    name: this.name,
                }
                this.$http.post('/query_selection_color_capacity', parse).then(res => {//根据上面滑块选择的内容来查询相应的id
                    if (res.data.code == 1) {
                        this.color_ = res.data.data.color
                        this.superior_id = res.data.data.id
                        this.capacity_ = res.data.data.capacity
                        return console.log(this.options_);    //这是控制台打印的属性的方式
                    }
                })//根据上面滑块选择的内容来查询相应的id
            },
            upload(){
                if(this.supervisor_display=='不显示'){
                    this.supervisor_display = 0
                }else{
                    this.supervisor_display = 1
                }
                var parse = {
                    supervisor_display:this.supervisor_display,
                    superior_id:this.superior_id,
                    name:this.name,
                    img:this.img,
                    color:this.color,
                    capacity:this.capacity,
                    price:this.price,
                    stock:this.stock,
                    details:this.details,
                }
                if(parse.color == ""){
                    alert('请选择颜色')
                }else{
                    if(parse.capacity == ""){
                        alert('请选择内存')
                    }else{
                        if(parse.stock == ""){
                            alert('请输入库存')
                        }else{
                            if(parse.price == ""){
                                alert('请设置价格')
                            }else{
                                if(parse.img == ""){
                                    alert('请上传图片')
                                }else{
                                    if(parse.details == ""){
                                        alert('请添加详情文本')
                                    }else{
                                        this.$http.post('/query_appoint_commodity',parse).then(res=>{
                                            if(res.data.code==1){
                                                alert('写入成功')
                                            }
                                        })
                                    }
                                }
                            }
                        }
                    }
                }


            },
        }
    }
</script>

