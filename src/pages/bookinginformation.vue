<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 预售资讯 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item> <img src="../assets/img/hottu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav_ul">

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
            </div>
          </div>

          <div class="li fix">
            <div class="nav_l l" @click="$router.push('/user/productdetails')">
              <a href="" class="title"> 君乐宝开啡尔原味常温酸奶两种规格可选 </a>
              <div class="time"> 2019/10/23 08:00 开卖 </div>
            </div>
            <div class="nav_r r" @click="$router.push('/user/productdetails')">
              <a href="" class="img"> <img src="../assets/img/inftu1.png" alt=""> </a>
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
  .dan_wrap{ background: #f7f7f7; .wp{ width: 95%; margin: 0 auto;  } }
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
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333;  }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;  color: #333;  }
  }

  .nav_box{
    position: relative;
    z-index: 10;
    .nav_ul{
      margin-top: -20px;
      border-radius: 10px;
      .li{
        background: #fff;
        padding: 10px 10px;
        margin-bottom: 10px;
      }
      .nav_l{
        width: 55%;
        .title{
          font-size: 16px;
          line-height: 24px;
        }
        .time{
          background: #f6f6f6;
          color: #818181;
          display: inline-block;
          line-height: 28px;
          padding: 0px 10px;
          margin-top: 10px;
        }
      }
      .nav_r{
        width: 40%;
      }
    }
  }

</style>
