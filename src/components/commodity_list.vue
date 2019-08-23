<template>
    <div>
        <div style="width: 1200px">
            <el-table
                    :data="data"
                    style="width: 100%">

                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="age"
                        label="年龄"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="phone"
                        label="手机号码"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="created_at"
                        label="创建时间"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="updated_at"
                        label="修改时间"
                        width="180">
                </el-table-column>


                <el-table-column
                        fixed="right"
                        label="封禁"
                        width="100">
                    <template slot-scope="scope">
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
                d:''
            }
        },
        mounted: function () {
            this.$http.get('/commodity').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                    // console.log(this.data)
                }
            })
        },
        methods: {
            handleClick(row){    //跳转到modify页面且把ID传送过去
                   var id = row.id;
                this.$router.push({path: '/modify',query:{ id:id}});

            },
                handleClick_(row){    //跳转到banning页面且把ID传送过去
                    var id = row.id;
                this.$router.push({path:'/banning',query:{id:id}})
                }

        }
    }
</script>