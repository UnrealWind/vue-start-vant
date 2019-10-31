<!-- home -->
<template>
  <van-container :status="status" :tabbar="true">
    <div slot="header" class="fix">
      <div class="hesde_l l"><van-icon name="chat-o" /> </div>
      <div class="hesde_l2 l">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div class="p"> <van-icon name="scan" /> </div>
      </div>
      <div class="hesde_l3 r" @click="$router.push('/static-dir/sort')"> <van-icon name="apps-o" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../assets/img/lunbo1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap">
      <div class="nav_li fix wp">
        <div v-for="(opt, index) in navList" :key="index" class="li1"> <a href="" class="img" @click="$router.push(opt.path)"> <img :src="opt.img" alt=""> </a> <p><a href=""> {{ opt.title }} </a></p> </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap">
      <div class="wp">
        <a href="" class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/dingjinyushao.png" alt="">  </a>
      </div>
    </div>

    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a href="" class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/nav_box31.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a href="" class="img" @click="$router.push('/supermarketzone')"> <img src="../assets/img/nav_box32.png" alt="">  </a>
        </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a href="" class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/nav41.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a href="" class="img" @click="$router.push('/supermarketzone')"> <img src="../assets/img/nav412.png" alt="">  </a>
        </div>
        <div class="nav3_l l">
          <a href="" class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/nav413.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a href="" class="img" @click="$router.push('/supermarketzone')"> <img src="../assets/img/nav414.png" alt="">  </a>
        </div>
      </div>
    </div>

    <div class="nav_box5 dan_wrap">
      <div class="wp">
        <a href="" class="img" @click="$router.push('/upgradeVIP')"> <img src="../assets/img/shengji1.png" alt=""> </a>
      </div>
    </div>

    <div class="nav_box6 dan_wrap">
      <div class="wp">
        <div class="title"><a> <van-icon name="fire-o" /> 今日特卖 </a> </div>
      </div>
    </div>

    <div class="nav_box7 dan_wrap">
      <div class="nav7_ul fix">
        <div class="li">
          <div class="title2"> 14:00 </div>
          <p> 已抢光 </p>
        </div>
        <div class="li">
          <div class="title2"> 16:00 </div>
          <p> 抢购进行中 </p>
        </div>
        <div class="li">
          <div class="title2 active"> 热抢榜单 </div>
          <p class="active"> 抢购进行中 </p>
        </div>
        <div class="li">
          <div class="title2"> 18:00 </div>
          <p> 已抢光 </p>
        </div>
        <div class="li">
          <div class="title2"> 21:00 </div>
          <p> 抢购进行中 </p>
        </div>
        <div class="li">
          <div class="title2"> 22:00 </div>
          <p> 抢购进行中 </p>
        </div>
      </div>
    </div>

    <div class="nav_box8 dan_wrap">
      <div class="nav_li fix wp">
        <div v-for="(opt, index) in minNavList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p>  {{ opt.title }} </p> </div>
      </div>
    </div>

    <div class="nav_box9 dan_wrap">
      <div class="wp" @click="$router.push('/static/introduction')">
        <div
          v-for="(commodity,index) in indexData"
          :key="`${commodity.type}-${index}`"
          class="nav_li"
        >

          <commodity
            :type="commodity.type"
            :image="commodity.image"
            :discribe="commodity.discribe"
            :title="commodity.title"
            :index-price="commodity.indexPrice"
            :index-price-discribe="commodity.indexPriceDiscribe"
            :btn-go="commodity.btnGo"
          >
          </commodity>
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
import { Swipe, SwipeItem, Icon, Search } from 'vant'
  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon,
        'van-search': Search
    },
    data() {
      return {
          status: 'loading',
          value: '',
          indexData: [
              {
                  'type': 'list-index',
                  'discribe': '直降20元清心润肺',
                  'title': '凯司令秋梨膏2瓶',
                  'indexPriceDiscribe': {
                      'type': '已告罄'
                  },
                  'indexPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/indextu1.png')
              },
              {
                  'type': 'list-index',
                  'discribe': '第二件仅需24.9元#',
                  'title': '维达细韧抽纸20包',
                  'indexPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'indexPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/indextu12.png')
              }
          ],
          // isActive: true,
          navList: [
              {
                title: '时令水果',
                  img: require('../assets/img/nav_img1.png'),
                  path: '/static-dir/seasonalfruit'
              },
              {
                  title: '每日精选',
                  img: require('../assets/img/nav_img12.png'),
                  path: '/static-dir/daynew'
              },
              {
                  title: '在线超市',
                  img: require('../assets/img/nav_img13.png'),
                  path: '/static-dir/onlinesupermarket'
              },
              {
                  title: 'VIP',
                  img: require('../assets/img/nav_img14.png'),
                  path: '/vip'
              },
              {
                  title: '跨境电商',
                  img: require('../assets/img/nav_img15.png'),
                  path: '/static-dir/crassborder'
              },
              {
                  title: '热销榜',
                  img: require('../assets/img/nav_img16.png'),
                  path: '/hotcakes'
              },
              {
                  title: '商城',
                  img: require('../assets/img/nav_img17.png'),
                  path: '/static-dir/mall'
              },
              {
                  title: '分类',
                  img: require('../assets/img/nav_img18.png'),
                  path: '/static-dir/sort'
              }
          ],
          minNavList: [
              {
                title: '全部特卖',
                  isActive: true
              },
              {
                  title: '即将售罄'
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
  .dan_wrap{ background: #ffffff; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }
  .nav_box .nav_li{ display: block; padding-top: 10px;
    a{ display: block; }
    img{ display: block; width: 100%; margin: 0 auto  }
    .li1{
      width: 25%; float: left;
    }
    a.img{ max-width: 50px; margin: 0 auto; display: block;  }
    p{ text-align: center; font-size: 12px; line-height: 30px; padding: 0px; margin-top: 2px; a{ color: #aaa;  } }
  }
  .nav_box3{ padding-top: 5px; padding-bottom: 25px;
    .nav3_l{ width: 48%; }
  }
  .nav_box4{ padding-bottom:20px;
    .nav3_l{
      width: 48%;
      margin-bottom: 5px;
    }
  }
  .nav_box6{ padding-top: 30px; padding-bottom: 20px;
    .title {
      text-align: center; font-size: 20px; font-weight: bold;
      a{ color: #e6253b;  }
    }
  }
  .nav_box7 {
    width:100%;
    overflow:scroll;
  }

  .nav7_ul{
     width: 171%;
    .li{ float: left; margin: 0px 20px; text-align: center; }
    .title2{ font-size: 20px; font-weight: bold; margin-bottom: 5px; }
    .title2.active{  color: #e6253b; }
    p{ font-size: 12px; color: #a6a6a6; line-height: 20px; margin-top: 0px; padding: 2px 5px; }
    p.active{  background: #e6253b; color: #fff; border-radius: 50px; }
  }

  .nav_box8 .nav_li{ display: block;
    a{ display: block; }
    .li1{
      width: 25%; float: left;
    }
    p{ width:80%; margin:0 auto; margin-bottom:20px; text-align: center; background:#f8f8f8; font-size: 12px; line-height: 30px; padding: 0px; border-radius:50px;
    border:1px solid #f0f0f0; color:#848484; font-size:10px; }
    .li1.active p{  background: #fde4e7; color: #df2f3d; border-color:#eec0cc;   }
  }

  .hesde_l{ margin-right: 30px; line-height: 38px; padding-top: 10px;
    padding-left: 10px;
    .van-icon{ font-size: 26px; }
  }
  .hesde_l3{ padding-top: 10px;padding-right: 10px;
    .van-icon{ font-size: 26px; }
  }
  .van-search{ padding: 0px!important; }
  .hesde_l2{
    width: 70%;
    position: relative;
    border-radius: 50px;
    padding-top: 10px;
    .van-search{ border-radius: 50px; }
    .p{ position: absolute; right: 10px; top: 4px; }
  }
  .van-search__content{ border-radius: 50px;  }
  .van-search .van-cell{ padding: 1px 0px; }

  .nav_box9{ padding-bottom: 1px;
    .nav_li{
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      overflow: hidden;
    }
  }

</style>
