<!-- home -->
<template>
  <van-container :status="status" :tabbar="true" :active="'mine'">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_r l">
          <van-icon name="chat-o" />
          <div class="p"> 消息 </div>
        </div>
        <!--<div class="header_r l">
          <van-icon name="service-o" />
          <div class="p"> 客服 </div>
        </div>-->
        <div class="header_r r" @click="$router.push('/set')">
          <van-icon name="setting-o" />
          <div class="p"> 设置 </div>
        </div>
      </div>
    </div>

    <div class="header_top  dan_wrap fix">
      <div class="wp">

        <div class="logo"><img :src="userInfo.userHeadimg" alt=""> </div>
        <div v-if="userInfo.nickName === '请登录'" class="title" @click="$router.push('/user/logon')"> {{ userInfo.nickName }} </div>
        <div v-if="userInfo.nickName !== '请登录'" class="title"> {{ userInfo.nickName }} </div>
        <div class="header_ul fix">
          <div class="li l">
            <div class="mony"> 云币 </div>
            <span> {{ userInfo.money |judNull }} </span>
          </div>
          <div class="li r" @click="$router.push('/cart/coupon')">
            <div class="mony"> 优惠券(张) </div>
            <span> {{ coupon.length }} </span>
          </div>
        </div>

        <div class="vip" @click="$router.push('/upgradeVIP')">
          <img src="../../assets/img/user/vip.png" alt="">
        </div>
      </div>
    </div>

    <div class="oreder">
      <div class="wp">

        <div class="title fix ">
          <div class="l"> 订单中心 </div>
          <div class="r" @click="$router.push('/cart/order_list')">
            查看所有订单 <van-icon name="arrow" />
          </div>
        </div>

        <div class="oreder_ul fix">
          <div class="li" @click="$router.push({path:'/cart/order_list',query:{node_code:0}})">
            <van-icon name="balance-list-o" />
            <p> 待付款 </p>
          </div>
          <div class="li" @click="$router.push({path:'/cart/order_list',query:{node_code:1}})">
            <van-icon name="todo-list-o" />
            <p> 待发货 </p>
          </div>
          <div class="li" @click="$router.push({path:'/cart/order_list',query:{node_code:2}})">
            <van-icon name="logistics" />
            <p> 待收货 </p>
          </div>
          <div class="li" @click="$router.push({path:'/cart/order_list',query:{node_code:3}})">
            <van-icon name="comment-o" />
            <p> 待评价 </p>
          </div>
          <div class="li" @click="$router.push({path:'/cart/order_list',query:{node_code:4}})">
            <van-icon name="star-o" />
            <p> 已完成 </p>
          </div>
        </div>

      </div>
    </div>

    <div class="tools">
      <div class="wp">
        <div class="title fix ">
          <div class="l"> 常用工具 </div>
          <!--<div class="r">
            <van-icon name="edit" />
          </div>-->
        </div>
        <div class="tools_ul fix">
          <div class="li" @click="$router.push('/user/sideMenu')">
            <van-icon name="cluster-o" />
            <p> 关系 <span>  </span> </p>
          </div>
        </div>
      </div>
    </div>

    <!--<div class="tools">
      <div class="wp">
        <div class="title fix ">
          <div class="l"> 常用工具 </div>
          <div class="r">
            <van-icon name="edit" />
          </div>
        </div>
        <div class="tools_ul fix">
          <div class="li">
            <van-icon name="replay" />
            <p> 足迹 <span> 100 </span> </p>
          </div>
          <div class="li">
            <van-icon name="fire-o" />
            <p> 集享生活 </p>
          </div>
          <div class="li">
            <van-icon name="gold-coin-o" />
            <p> 零花钱 </p>
          </div><div class="li">
            <van-icon name="like-o" />
            <p> 收藏 </p>
          </div>
        </div>
      </div>
    </div>-->

    <!--<div class="tools">
      <div class="wp">
        <div class="title fix ">
          <div class="l"> 更多服务 </div>
        </div>
        <div class="tools_ul2 fix">
          <div class="li">
            <van-icon name="cash-back-record" />
            <p> 云好贷 </p>
          </div>
        </div>
      </div>
    </div>-->

    <!--<div class="choose">
      <div class="title"> 为你精选 </div>

      <div class="nav_zaixan fix">
        <p class="act">精选推荐<span></span></p>
        <p> 冬季穿搭 <span></span></p>
        <p> 无惧年龄 <span></span></p>
        <p> 休闲一族 <span></span></p>
      </div>

      <ul class="flex_wrap gwcLits wp">
        <li>
          <a @click="$router.push('/user/productdetails')">
            <img src="../../assets/css/static/images/timg3.png" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p></div>
          </a>
        </li>
        <li>
          <a @click="$router.push('/user/productdetails')">
            <img src="../../assets/css/static/images/timg3.png" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p></div>
          </a>
        </li>
        <li>
          <a @click="$router.push('/user/productdetails')">
            <img src="../../assets/css/static/images/timg3.png" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p></div>
          </a>
        </li>
        <li>
          <a @click="$router.push('/user/productdetails')">
            <img src="../../assets/css/static/images/timg3.png" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p></div>
          </a>
        </li>
      </ul>

    </div>-->

  </van-container>
</template>

<script>
  import { Icon } from 'vant'

  export default {
    components: {
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          userInfo: {},
          coupon: []
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            try {
                await this.getUser()
                await this.getCoupon()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getCoupon() {
            let res = await this.$http.post('/manager/userTicket/list')
            if (!res.data) {
                res = {
                    data: []
                }
            }
            this.coupon = res.data
        },
        async getUser() {
            let res = await this.$http.post('/manager/user/queryUser')
            if (!res.data) {
                res = {
                    data: {
                        nickName: '请登录',
                        money: '0',
                        userHeadimg: ''
                    }
                }
            }
            this.userInfo = res.data
        }
    }
  }

</script>
<style lang='scss' scoped>
  .gwcLits{
    padding-bottom: 10px;
    p{
      font-size: 14px;
      line-height: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .p2 span{
      font-size: 12px;
    }
  }
  .flex_wrap{ display:-webkit-flex;display: flex; flex-direction:wrap ; flex-wrap:wrap ;}
  .gwcLits{ justify-content: space-between;}
  .gwcLits li{ width: 49%; background: #fff; border-radius: 0.15rem; overflow: hidden; margin-top: 0.2rem;}
  .gwcLits li img{ width: 100%; height: 4rem }
  .gwcLits li a{ color: #333 }
  .gwcLits p{ padding:0 0.2rem }
  .gwcLits .p1{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;  padding: 0 0.2rem;}
  .gwcLits .p2 { margin-top: 0.1rem; }
  .gwcLits .p2 span{ color: #e01447;border:1px solid #d88aa2;border-radius: 0.1rem; padding: 0 0.1rem }
  .gwcLits .p3 { padding: 0.2rem 0 ; color: #e01447; padding-right: 0.2rem}
  .gwcLits .p3 span{text-decoration: line-through;color: #666}
  .gwcLits .p3 img{ width:0.5rem; height: 0.5rem }

  h1 {
    background: red;
    width: 375px;
  }
  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 55px;
    background: #f2f2f2;
  }

  >>>.header{
    background: #fc4a26;
    .fix{
      background: #fc4a26;
      color: #fff;
      padding-bottom: 10px;
    }
    .header_r.l{
      margin-right: 10px;
    }
    .header_r{
      position: relative;
      padding-top: 30px;
      .van-icon{
        position: absolute;
        left: 5px;
        top: 10px;
        font-size: 18px;
      }
      .p {
        font-size: 14px;
        color: #fff;
        line-height: 16px;
      }
    }
  }

  .header_top{
    padding-top: 80px;
    background: url("../../assets/img/user/header_top.png") repeat-x left top;
    .wp{
      background: #fff;
      border-radius: 10px;
    }
    .logo{
      display: block;
      margin: 0 auto;
      position: relative;
      top: -20px;
      img{
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        width: 50px;
      }
    }

    .title{
      color: #323232;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    .header_ul{
      width: 95%;
      margin: 0 auto;
      padding-bottom: 10px;
      padding-top: 10px;
      .li{
        width: 50%;
        text-align: center;
        padding: 0px 10px;
        box-sizing: border-box;
        &:first-child{
          border-right: 1px solid #dfdfdf;
        }
      }
      .mony{
        color: #a2a2a2;
        line-height: 30px;
        font-size: 14px;
      }
      span{
        color: #f02430;
        font-weight: bold;
        font-size: 16px;
      }
    }

    .vip{
      display: block;
      border-radius:0px 0px 10px 10px;
      overflow: hidden;
      img{
        display: block;
        width: 100%;
      }
    }
  }

  .oreder{
    margin-top: 20px;
    .wp{
      padding-top: 10px;
      background: #fff;
      border-radius: 10px;
    }
    .title{
      padding: 10px 10px;
      .l{
        font-weight: bold;
        font-size: 14px;
      }
      .r{
        color: #858585;
      }
    }

    .oreder_ul{
      background: #fff;
      padding-top: 10px;
      p {
        margin:0;
        padding: 10px 0;
      }
      .li{
        float: left;
        width: 20%;
        text-align: center;
      }
      .van-icon{
        font-size: 22px;
      }
    }
  }

  .tools {
    margin-top: 20px;
    margin-bottom: 20px;
    .wp {
      padding-top: 10px;
      background: #fff;
      border-radius: 10px;
    }

    .title {
      padding: 10px 10px;
      .l {
        font-weight: bold;
        font-size: 14px;
      }
      .r {
        font-size: 20px;
      }
    }

    .tools_ul{
      border-top: 1px solid #ececec;
      .li{
        float: left;
        width: 33.33%;
        text-align: center;
        border-bottom: 1px solid #ececec;
        border-right: 1px solid #ececec;
        padding-top: 20px;
        height: 100px;
      }
      p{
        color: #7f7f7f;
        font-size: 14px;
        margin-top: 5px;
        line-height: 20px;
      }
      span{
        display: block;
        color: #333;
        font-weight: bold;
      }
      .van-icon{
        font-size: 24px;
      }
    }
    .tools_ul2{
      border-top: 1px solid #ececec;
      .li{
        float: left;
        width: 33.33%;
        text-align: center;
        padding-top: 20px;
        height: 100px;
      }
      p{
        color: #7f7f7f;
        font-size: 14px;
        margin-top: 5px;
        line-height: 20px;
      }
      span{
        display: block;
        color: #333;
        font-weight: bold;
      }
      .van-icon{
        font-size: 24px;
      }
    }
  }

  .choose{
    padding-top: 30px;
    padding-bottom: 20px;
    .title{
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #ff2677;
    }
  }

  /*导航*/
  .nav_zaixan{
    p{
      float: left;
      width: 25%;
      text-align: center;
      font-size: 16px;
      color: #2d2d2d }
    p span{
      border-bottom: 4px solid transparent;
      width: 30px;
      margin:0 auto;
      display: block;
      padding-top: 5px;
    }
    p.act span{
      border-bottom: 4px solid #f10c44;
    }
    p.act {
      color: #323232;
      font-weight: bold;
    }
  }

</style>
