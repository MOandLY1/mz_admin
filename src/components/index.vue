<template>
    <el-container style="height: 800px; border: 1px solid #eee">
        <el-aside width="200px"  style="background-color: rgb(238, 241, 246);min-height: 800px;">
            <el-menu :default-openeds="openeds">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航栏</template>

                    <el-submenu index="1-1">
                        <template slot="title">用户管理</template>
                        <el-menu-item  index="1-1-1" @click="path_url('#/commodity_list','1-1-1')">用户列表</el-menu-item>
                        <el-menu-item index="1-1-2" @click="path_url('#/query_banning','1-1-2')">封禁列表</el-menu-item>
                    </el-submenu>

                    <el-submenu index="1-2">
                        <template slot="title">商品管理</template>
                        <el-menu-item index="1-2-1" @click="path_url('#/Commodity_management','1-2-1')">商品列表</el-menu-item>
                        <el-menu-item index="1-2-6" @click="path_url('#/prohibition_commodity','1-2-6')">下架商品列表</el-menu-item>

                        <el-menu-item index="1-2-2" @click="path_url('#/increase_commodity','1-2-2')">添加商品</el-menu-item>
                        <el-menu-item index="1-2-5" @click="path_url('#/adding_commodity_attributes','1-2-5')">添加最下级商品</el-menu-item>
                        <el-menu-item index="1-2-4" @click="path_url('#/insert_attribute','1-2-4')">添加商品属性</el-menu-item>
<!--                        <el-menu-item index="1-2-7" @click="path_url('#/insert_address','1-2-7')">添加地址</el-menu-item>-->
<!--                        <el-menu-item index="1-2-3" @click="path_url('#/upload_pictures','1-2-3')">上传图片</el-menu-item>-->
                    </el-submenu>

                    <el-submenu index="1-3">
                        <template slot="title">页面管理</template>
                        <el-menu-item index="1-3-1" @click="path_url('#/nav_column','1-3-1')">导航栏管理</el-menu-item>
                        <el-menu-item index="1-3-2" @click="path_url('#/nav_insert','1-3-2')">添加导航栏</el-menu-item>
<!--                        <el-menu-item index="1-3-3" @click="path_url('#/nav_','1-3-3')">备用块</el-menu-item>-->
<!--                        <el-menu-item index="1-3-4" @click="path_url('#/ceshi','1-3-4')">测试</el-menu-item>-->
                    </el-submenu>

                    <el-submenu index="1-4">
                        <template slot="title">系统设置</template>
                            <el-menu-item index="1-4-1" @click="path_url('#/jurisdiction','1-4-1')">权限</el-menu-item>
                            <el-menu-item v-if="seen" index="1-4-2" @click="path_url('#/added_administrator','1-4-2')">添加管理员</el-menu-item>
<!--                        //v-if="seen",-->
                    </el-submenu>


                </el-submenu>

            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item style="width: 70px"><p>管理员等级</p>{{this.level}}</el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>

                <span> 管理员||{{this.name}}</span>

            </el-header>


            <div style="width: 100%;height: 780px;">
                <iframe :src="url" width="100%" height="100%" frameborder="0"></iframe>
            </div>

        </el-container>
    </el-container>
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
                url:'',
                openeds:['1'],
                name:'',
                level:'',
                added_administrator:'',
                seen: false
            }
        },
        mounted: function () {
            this.name = this.$route.query.name
            var parse = {
                name:this.name,
            }
            this.$http.post('/query_land_administration',parse).then(res=>{
                this.data = res.data.data
                this.seen = this.data.level
                if(this.data.level==0){
                    this.seen = 1
                }else{
                    this.seen = 0
                }

                console.log(this.level)
            })


        },
        methods: {
            path_url(url,val){
                this.url = url
                this.openeds.push(val)
                console.log(this.openeds)
            }
        }

    };
</script>