<template>
    <div>
        <div style="width: 1200px">
            <el-table
                    :data="data"
                    style="width: 100%">

                <el-table-column
                        prop="name"
                        label="商品名称"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="color"
                        label="颜色"
                        width="180">
                </el-table-column>

                <el-table-column
                        prop="capacity"
                        label="储存容量"
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
                        label="商品操作"
                        width="120">
                    <template slot-scope="scope">
                        <el-button @click="modify_commodity_stock(scope.row)" type="text" size="small">修改库存与价格</el-button>
                    </template>
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="下架"
                        width="100">
                    <template slot-scope="scope">
                        <!--                        <el-button  type="text" size="small">查看</el-button>-->
                        <el-button @click="lower_shelf_commodity(scope.row)" type="text" size="small">下架</el-button>
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
                value: true
            }
        },
        mounted: function () {
            this.$http.get('/query_commodity').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data
                    // console.log(this.data)
                }
            })

        },
        methods: {
            modify_commodity_stock(row){//修改库存
                alert(row.id)
                var id = row.id
                this.$router.push({path: '/modify_commodity_stock',query:{id:id}});
            },//修改库存

            lower_shelf_commodity(row){//下架
                var parse = {
                    id : row.id,
                }
                this.$http.post('/prohibition_commodity',parse).then(res=>{
                    if(res.data.code==1){
                        alert('成功')
                    }
                })
            },//下架
        }
    }
</script>
