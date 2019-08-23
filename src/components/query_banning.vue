<template>
    <div>
        <div style="width: 1200px">
            <el-table
                    :data="data"
                    style="width: 1000px">

                <el-table-column
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="封禁"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick_(scope.row)" type="text" size="small">解除封禁</el-button>
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
            this.$http.get('/query_banning').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                    // console.log(this.data)
                }
            })
        },
        methods: {
            handleClick_(row){
                var parse = {
                    id : row.id,
                }
                this.$http.post('/relieve_prohibition',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            }

        }
    }
</script>
