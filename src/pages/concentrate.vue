<!-- home -->
<template>
  <van-container :active="1" :status="status" :tabbar="true">
    <div slot="header" class="fix">
      <div class="hesde_l2">
        <div class="p"> 精选 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/advertising1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/advertising1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a href="" class="img" @click="$router.push('/bookinginformation')"> <img src="../assets/img/jiangtu1.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a href="" class="img" @click="$router.push('/trialcenter')"> <img src="../assets/img/jiangtu12.png" alt="">  </a>
        </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap fix">
      <div class="wp">
        <a href="" class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/jiangtu13.png" alt="">  </a>
      </div>
    </div>

    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="title"> 超人气新品 <span> 必买新品限时优惠 </span> </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix" @click="$router.push('/static/introduction')">
      <div class="wp">
        <div v-for="(commodity,index) in concentrateData" :key="`${commodity.type}-${index}`" class="nav_li">
          <commodity
            :type="commodity.type"
            :image="commodity.image"
            :discribe="commodity.discribe"
            :title="commodity.title"
            :concentrate-price="commodity.concentratePrice"
            :concentrate-price-discribe="commodity.concentratePriceDiscribe"
            :btn-go="commodity.btnGo"
          >
          </commodity>
        </div>
      </div>
    </div>

    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="title"> 大牌上新 <span> 你爱的大牌上新了 </span> </div>
      </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a href="" class="img" @click="$router.push('/perfume')"> <img src="../assets/img/jiangtu15.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a href="" class="img" @click="$router.push('/perfume')"> <img src="../assets/img/jiangtu16.png" alt="">  </a>
        </div>
      </div>
    </div>

    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="title"> 每日新选 <span> 多为生活用点新 </span> </div>
      </div>
    </div>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div v-for="(opt, index) in navList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p> {{ opt.title }} </p> </div>
        </div>
        <div class="icon"> <van-icon name="arrow-down" /> </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">

        <ul class="flex_wrap gwcLits ">
          <li>
            <a @click="$router.push('/static/introduction')">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/static/introduction')">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/static/introduction')">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a @click="$router.push('/static/introduction')">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
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
          concentrateData: [
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/testtu1.png')
              },
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/testtu12.png')
              }
          ],
          navList: [
              {
                  title: '精选',
                  isActive: true
              },
              {
                  title: '美妆个护'
              },
              {
                  title: '食品生鲜'
              },
              {
                  title: '服饰鞋包'
              },
              {
                  title: '家居家纺'
              },
              {
                  title: '数码家电'
              },
              {
                  title: '母婴玩具'
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
  @import "../../public/static/750商城/css/app.css";
  @import "../../public/static/750商城/css/style.css";

  .gwcLits{
    padding-bottom: 10px;
    p{
      font-size: 14px;
      line-height: 20px;
    }
    .p2 span{
      font-size: 12px;
    }
  }

  .header {
    background: #fff;
    color: red;
    font-size: 0.42667rem;
    font-weight: 500;
    line-height: 1.2rem;
    height: 1.33333rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 0.08rem 0.05333rem;
    background: rgba(255,255,255,0.2) none repeat scroll !important;
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
  .dan_wrap{ background: #f7f7f7; .wp{ width: 95%; margin: 0 auto;  } }
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
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }
  .nav_box{ padding-top: 10px;
    .nav3_l{ width: 49%; }
  }
  .nav_box{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .nav_box3{ padding-top: 20px; padding-bottom: 10px;
     .title{ color: #242424; font-size: 16px; font-weight: bold; padding-left: 30px; line-height: 26px;
       background: url("../assets/img/jiangtu14.png") no-repeat left 0px; box-sizing: border-box;  }
    span{ color: #868686; font-size: 14px; font-weight: normal; line-height: 20px; margin-left: 5px; display: inline-block; padding-left: 5px; border-left: 1px solid #868686;   }
  }

  .nav_box5{  position: relative;  margin: 0 auto;
    .wp{ width:95%;overflow-x: scroll; margin: 0 auto; }
    .nav_ul{ width: 155%}
    .icon{
      position: absolute;
      width: 10%;
      right: 0px;
      top: 3px;
      font-size: 20px;
      background: #f7f7f7;
      z-index: 9;}
    .li1{ display: inline-block; }
    .li1.active p { background: #ef0d3b; color: #fff; }
    p{ display: inline-block; color: #777; padding:8px 15px; border-radius: 50px; font-size: 12px;  }
  }

  .nav_box4{
    .nav_li{
      margin-bottom: 10px;
    }
  }

</style>
