<template>
    <div>
        用户列表页面
        {{data.a}}
        <span>{{data.b}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:'',
                d:''
            }
        },
        mounted: function () {
            this.$http.get('/user').then(res=>{
                if(res.data.code==1){
                    this.data = res.data.data

                }
            })
        },
        methods: {

        }
    }
</script>

