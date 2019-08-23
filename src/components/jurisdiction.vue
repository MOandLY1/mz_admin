<template>
    <div>
        <div style="width: 1000px">
            <el-table
                    :data="data"
                    style="width: 100%">

                <el-table-column
                        style="width: 100px"
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>

                <el-table-column
                        style="width: 100px"
                        prop="name"
                        label="用户名"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="level"
                        label="管理员等级"
                        width="180">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="编辑"
                        width="100">
                    <template slot-scope="scope">
                        <!--                        <el-button  type="text" size="small">查看</el-button>-->
                        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="删除"
                        width="100">
                    <template slot-scope="scope">
                        <!--                        <el-button  type="text" size="small">查看</el-button>-->
                        <el-button @click="handleClick_(scope.row)" type="text" size="small">封禁</el-button>
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
            this.$http.get('/query_jurisdiction_superior').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data

                }
            })

        },
        methods: {}
    }
</script>
