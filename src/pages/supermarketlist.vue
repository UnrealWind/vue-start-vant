<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 电商超市-奶制品 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="certificate" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/user/productdetails')"> <img src="../assets/img/supermarketlist.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div v-for="(opt, index) in navList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p> {{ opt.title }} </p> </div>
        </div>
        <div class="icon"> <van-icon name="arrow-down" /> </div>
      </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">

        <div class="title"> 精选推荐 </div>

        <ul class="flex_wrap gwcLits ">
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/user/productdetails')">
              <div class="p2">
                <img src="../../public/static/waibao/images/timg3.png" alt="">
                <h4> 特卖</h4>
              </div>
              <p class="p1"> 与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p4"> 暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p> </div>
            </a>
          </li>
        </ul>

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
          value: '',
          navList: [
              {
                  title: '精选推荐',
                  isActive: true
              },
              {
                  title: '乳品'
              },
              {
                  title: '果汁饮料'
              },
              {
                  title: '酒'
              },
              {
                  title: '冲调早餐'
              }
          ]
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

  @import "../../public/static/waibao/css/app.css";
  @import "../../public/static/waibao/css/style.css";

  .gwcLits{
    font-size: 14px;
    li{
      width: 31%;
    }
    p{
      display: block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      line-height: 24px;
    }
    .p2{
     position: relative;
      span{
        position: absolute;
        left: 2px;
        bottom: 0px;
        font-size: 12px;
      }
      h4{
        position: absolute;
        left: 5px;
        bottom: 0px;
        font-size: 12px;
        color: #e01447;
        border: 0.02667rem solid #d88aa2;
        border-radius: 0.1rem;
        padding: 0 0.1rem;
        line-height: 18px;
        font-weight: normal;
      }
    }
    p.p4{
      color: #828282;
      font-size: 12px;
    }
    .p3{
      padding-top: 0px;
    }
    .p3 span{
      font-size: 12px;
    }
  }
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
  .dan_wrap{ background: #86c8e8; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    margin-top: 45px;
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
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333;  }
  }

  .nav_box5{
    position: relative;
    width:100%;
    overflow-x: scroll;
    margin: 0 auto;
    .wp{ position: relative; overflow: hidden; }
    .nav_ul{ width: 1000%}
    .icon{
      padding-left: 10px;
      position: absolute;
      right: 0px;
      top: 15px;
      font-size: 20px;
      color: #346e84;
      background: #86c8e8;
      z-index: 9;}
    .li1{ display: inline-block; }
    .li1.active p { background: #ffffff; color: #86c8e8; }
    p{ display: inline-block; color: #777; padding:8px 15px; border-radius: 50px; font-size: 12px; color: #fff; margin-top: 10px; }
  }

  .nav_box{
    padding-bottom: 10px;
    .title{
      font-size: 16px;
      line-height: 30px;
      padding-top: 20px;
      padding-bottom: 2px;
    }
  }

</style>
