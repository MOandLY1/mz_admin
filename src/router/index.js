import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../components/index.vue'
import a from '../components/a.vue'
import b from '../components/b.vue'
import c from '../components/c.vue'
import user_list from  '../components/user_list.vue'
import commodity_list from  '../components/commodity_list.vue'
import modify from '../components/modify.vue'
import banning from '../components/banning.vue'
import query_banning from '../components/query_banning.vue'
import Commodity_management from '../components/Commodity_management.vue'
import increase_commodity from '../components/increase_commodity.vue'
import upload_pictures from '../components/upload_pictures.vue'
import nav_column from '../components/nav_column.vue'
import modify_nav from '../components/modify_nav.vue'
import dalete_nav from '../components/dalete_nav.vue'
import nav_ from '../components/nav_.vue'
import nav_insert from '../components/nav_insert.vue'
import land from '../components/land.vue'
import jurisdiction from '../components/jurisdiction.vue'
import added_administrator from '../components/added_administrator.vue'
import adding_commodity_attributes from '../components/adding_commodity_attributes.vue'
import ceshi from '../components/ceshi.vue'
import adding_commodity_attributes_ from '../components/adding_commodity_attributes_.vue'
import insert_attribute from '../components/insert_attribute.vue'
import modify_commodity_stock from '../components/modify_commodity_stock.vue'
import prohibition_commodity from '../components/prohibition_commodity.vue'
import insert_address from '../components/insert_address.vue'







export  default new Router({
    routes:[
        {
            path:'/',
            name:'首页',
            component:index
        },{
            path:'/a',
            name:'11',
            component:a
        },{
            path:'/insert_address',
            name:'添加地址',
            component:insert_address
        },{
            path:'/b',
            name:'222',
            component:b
        },{
            path:'/c',
            name:'333',
            component:c
        },{
            path:'/user_list',
            name:'用户列表',
            component:user_list
        },{
            path:'/commodity_list',
            name:'商品列表',
            component:commodity_list
        },{
            path:'/modify',
            name:'修改页面',
            component:modify
        },{
            path:'/banning',
            name:'封禁页面',
            component:banning
        },{
            path:'/query_banning',
            name:'被封禁的用户们',
            component:query_banning
        },{
            path:'/Commodity_management',
            name:'商品列表',
            component:Commodity_management
        },{
            path:'/modify_commodity_stock',
            name:'修改商品库存',
            component:modify_commodity_stock
        },{
            path:'/prohibition_commodity',
            name:'下架的商品列表',
            component:prohibition_commodity
        },{
            path:'/increase_commodity',
            name:'添加商品',
            component:increase_commodity
        },{
            path:'/upload_pictures',
            name:'上传图片',
            component:upload_pictures
        },{
            path:'/nav_column',
            name:'管理导航栏',
            component:nav_column
        },{
            path:'/modify_nav',
            name:'修改导航栏',
            component:modify_nav
        },{
            path:'/dalete_nav',
            name:'修改导航栏',
            component:dalete_nav
        },{
            path:'/nav_',
            name:'导航栏备用块',
            component:nav_
        },{
            path:'/nav_insert',
            name:'导航栏备用块',
            component:nav_insert
        },{
            path:'/land',
            name:'登录',
            component:land
        },{
            path:'/jurisdiction',
            name:'权限',
            component:jurisdiction
        },{
            path:'/added_administrator',
            name:'添加管理员',
            component:added_administrator
        },{
            path:'/adding_commodity_attributes',
            name:'添加商品属性',
            component:adding_commodity_attributes
        },{
            path:'/ceshi',
            name:'测试',
            component:ceshi
        },{
            path:'/adding_commodity_attributes_',
            name:'添加商品_',
            component:adding_commodity_attributes_
        },{
            path:'/insert_attribute',
            name:'添加商品属性',
            component:insert_attribute
        },

    ]
})