<template>
    <div>
        <div style="width: 1000px">
            <el-table
                    :data="data"
                    style="width: 100%">

                <el-table-column
                        prop="name"
                        label="商品名称"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="stock"
                        label="库存"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="price"
                        label="价格"
                        width="180">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="下架"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="lower_shelf_commodity(scope.row)" type="text" size="small">重新上架</el-button>
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
               data:[]
            }
        },
        mounted: function () {
            this.$http.get('/prohibition_commodity_').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data

                }
            })
        },
        methods: {
            lower_shelf_commodity(row){
                var parse = {
                    id : row.id,
                }
                this.$http.post('/upper_shelf_commodity',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            }
        }
    }
</script>
