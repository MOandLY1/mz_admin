<template>
    <div>
        <div style="width: 1000px">
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
                        label="名称"
                        width="180">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="修改"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    </template>
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="删除"
                        width="100">
                    <template slot-scope="scope">
                        <!--                        <el-button  type="text" size="small">查看</el-button>-->
                        <el-button @click="handleClick_(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:[],
            }
        },
        mounted: function () {
            this.$http.get('/nav_column').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                }
            })

        },
        methods: {
            handleClick(row){   //跳至修改页面
                var id = row.id;
                this.$router.push({path: '/modify_nav',query:{ id:id}});
    },//跳至修改页面
            handleClick_(row){//跳至删除页面
                var id = row.id;
                this.$router.push({path: '/dalete_nav',query:{ id:id}});
            }//跳至删除页面
        }
    }
</script>
