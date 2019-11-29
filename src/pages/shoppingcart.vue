<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 维蕾德护臀膏 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item> <img src="../assets/img/shopcartu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">

        <div class="navdan_box4">
          <div class="nav_ul">
            <div class="li" @click="$router.push('/user/productdetails')">
              <div class="wrap fix">
                <div class="nav_l l">
                  <a class="img"> <img src="../assets/img/prolisttu1.png" alt=""> </a>
                </div>
                <div class="nav_r r">
                  <a class="title"> Estee Lauder雅诗兰黛ANR小棕... </a>
                  <a class="titlemin"> 直降30元护肤必备小棕瓶</a>
                  <div class="botom fix">
                    <a class="price l"> ￥439 <span> ￥660 </span> </a>
                    <a class="car r"> <van-icon name="cart-o" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nav_botimg">
          <div class="img">  <img src="../assets/img/shopcartu2.png" alt=""> </div>
        </div>

        <div class="navdan_box4">
          <div class="nav_ul">
            <div class="li" @click="$router.push('/user/productdetails')">
              <div class="wrap fix">
                <div class="nav_l l">
                  <a class="img"> <img src="../assets/img/prolisttu1.png" alt=""> </a>
                </div>
                <div class="nav_r r">
                  <a class="title"> Estee Lauder雅诗兰黛ANR小棕... </a>
                  <a class="titlemin"> 直降30元护肤必备小棕瓶</a>
                  <div class="botom fix">
                    <a class="price l"> ￥439 <span> ￥660 </span> </a>
                    <a class="car r"> <van-icon name="cart-o" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant'
  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          value: ''
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
                // await this.getData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getData() {
            const res = await this.$http.get('/user/12345')
            console.log(res)
        }
    }
  }

</script>
<style lang='scss' scoped>
  h1 {
    background: red;
    width: 375px;
  }
  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .img{  display: block; }
  .img img{ display: block; width: 100%; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .dan_wrap{ background: #fff; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }
  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }
  .navdan_box4{

    .nav_ul{
      padding-top: 30px;
      .li{
        background: #fff;
        border-radius: 10px;
        padding: 0px 10px;
        box-sizing: border-box;
        margin-bottom: 20px;
      }
      .nav_l{
        width: 35%;
      }
      .nav_r{
        width: 60%;
        padding-top: 10px;
        a{
          display: block;
        }
        .title{
          font-size: 14px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          color: #333333;
          line-height: 20px;
        }
        .titlemin{
          font-size: 14px;
          color: #808080;
          line-height: 20px;
        }
        .botom{
          padding-top: 50px;
        }
        .price{
          color: #f00d3b;
          font-size: 18px;
          span{
            color: #808080;
            text-decoration: line-through;
            font-size: 12px;
            font-weight: normal;
          }
        }
        .car{
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          color: #fff;
          background: #f00d3b;
          font-size: 16px;
        }
      }
    }
  }

</style>
