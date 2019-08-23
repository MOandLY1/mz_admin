<template>
    <div>
        <div style="width: 40%">
            <el-form ref="form"  label-width="60px">

                <el-form-item label="名称" style="width: 200px">
                    <el-input style="width: 200px" v-model="name" placeholder="请输入内容"></el-input>
                </el-form-item>

                <el-form-item label="状态" style="width: 200px">
                    <el-select style="width: 200px" v-model="state" placeholder="请选择">
                        <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
<!--                    <el-button type="primary" @click="bbb()">查询</el-button>-->
                    <el-button type="primary" @click="establish()">添加</el-button>
                    <el-button @click="aaa()">取消</el-button>
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
                name: '',
                options: [],
                options1: [{
                    value: '显示',
                    label: '显示'
                }, {
                    value: '隐藏',
                    label: '隐藏'
                }],
                state:'',

                }
        },

        mounted: function () {//查出所有等级为0的导航栏的id，赋值给上级ID

        },
        methods: {
            establish(){
                if(this.name==''){
                    alert('名称不能为空')
                }else {
                    if (this.state == '隐藏') {//设置，如果是隐藏则输入1.如果是显示则输入0
                        this.state = 1
                    } else {
                        this.state = 0
                    }//设置，如果是隐藏则输入1.如果是显示则输入0


                    var parse_ = {
                        name: this.name,
                        state: this.state,
                    }
                    // return console.log(parse_);    这是控制台打印的属性的方式
                    this.$http.post('/insert_nav', parse_).then(res => {
                        if (res.data.code == 1) {
                            alert('添加成功');
                        }
                    })
                }
            }
        }
    }
</script>
