<!-- home -->
<template>
  <van-container :status="status" :active="'index'" :tabbar="true">
    <!--    顶部-->
    <div slot="header" class="fix">
      <div class="hesde_l l" @click="$router.push('/user/infoList')">
        <van-icon name="chat-o" />
      </div>
      <div class="hesde_l2 l">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
          @focus="focus"
        >
        </van-search>
        <!--<div class="p">
          <van-icon name="scan" />
        </div>-->
      </div>
      <div class="hesde_l3 r" @click="$router.push('/commodityLevelSec/classification')">
        <van-icon name="apps-o" />
      </div>
    </div>
    <!--轮播图-->
    <van-swipe

      :autoplay="3000"
      indicator-color="white"
      class="van-swipe"
    >
      <van-swipe-item v-for="(item,index) in bannerData" :key="index">
        <van-image :src="item.img">
          <template v-slot:error>图片加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap">
      <div class="nav_li fix wp">
        <div v-for="(opt, index) in navList" :key="index" class="li1">
          <a class="img" @click="$router.push({path:opt.path,query:{id:opt.id}})">
            <van-image :src="opt.img">
              <template v-slot:error>图片加载失败</template>
            </van-image>
            <p> {{ opt.title }} </p>
          </a>
        </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap">
      <div class="wp">
        <a class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/index_ads.gif" alt=""> </a>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a class="img" @click="$router.push({path:'/commodityLevelSec/seasonal',query:{id:2}})"> <img
            src="../assets/img/nav413.png"
            alt=""
          > </a>
        </div>
        <div class="nav3_l r">
          <a class="img" @click="$router.push({path:'/commodityLevelSec/daynew',query:{id:14}})"> <img
            src="../assets/img/nav412.png"
            alt=""
          > </a>
        </div>
      </div>
    </div>
    <!--    //会员跳转-->
    <div class="nav_box5 dan_wrap">
      <div class="wp vipImgBox" @click="$router.push('/upgradeVIP')">
        <img src="../assets/img/index_VIP.gif" alt="">
      </div>
    </div>
    <!--    //今日特卖标题-->
    <div class="nav_box6 dan_wrap">
      <div class="wp">
        <div class="title"><a>
          <van-icon name="fire-o" />
          今日特卖 </a></div>
      </div>
    </div>
    <!--    // tab栏-->
    <div class="nav_box7 dan_wrap">
      <ul class="nav7_ul fix">
        <li v-for="(item,index) in timeList" :key="index" @click="changeTime(item)">
          <div class="title2" :class="tabStyleActive===item.key? 'tabStyleActive':''">{{ item.time }}</div>
          <p v-show="tabStyleActive===item.key"> 抢购进行中 </p>
          <p v-show="tabStyleActive > item.key"> 已抢光 </p>
          <p v-show="tabStyleActive < item.key"> 即将开抢 </p>
        </li>
      </ul>
    </div>
    <!--    tab下商品-->
    <div class="nav_box9 dan_wrap">
      <div class="wp">
        <div
          v-for="(commodity,index) in tabListData"
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
    <!--    错误提示-->
    <div class="nav_box10 dan_wrap">
      <div v-show="tabShow" class="hint">当前类目下没有分类</div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Swipe, SwipeItem, Search, Image } from 'vant'

  export default {
    components: {
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-icon': Icon,
      'van-search': Search,
      'van-image': Image
    },
    data() {
      return {
        active: 0,
        status: 'loading',
        value: '',
        tabShow: false,
        tabListData: [],
        bannerData: [],
        tabStyleActive: '',
        navList: [],
        minNavList: [],
        timeList: []
      }
    },
    computed: {},
    watch: {
      tabShow: function() {
        if (this.tabShow) {
          this.$nextTick(function() {
            document.getElementById('scroll').scrollTop = document.getElementById('scroll').scrollHeight
          })
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          this.getIndexData()
          await this.getBannerData()
          await this.getTime()
          await this.getTodaySaleList()
          await this.setTime()
          // await this.getTabData()
          // await this.getTabListData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      // 首页nav数据
      async getIndexData() {
        const res = await this.$http.post('product/content/list?level=1&showFlag=0')
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              img: n.logo,
              path: n.url,
              title: n.name,
              id: n.id
            })
          })
        }
        this.navList = arr
      },
      // 轮播图数据
      async getBannerData() {
        const res = await this.$http.post('product/banner/list?showFlag=0')
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              img: n.url
            })
          })
        }
        this.bannerData = arr
      },
      // 获取活动时间
      async getTime() {
        const res = await this.$http.post('/product/todaySale/list')
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              time: n.dictLabel.slice(0, 5),
              key: n.dictValue
            })
          })
        }
        this.timeList = arr
      },
      async changeTime(item) {
        this.tabShow = false
        await this.getTodaySaleList(item.key)
        if (this.tabListData.length === 0) {
          this.tabShow = true
        }
        this.tabStyleActive = item.key
      },
      // 今日特卖商品
      async getTodaySaleList(timeType) {
        const res = await this.$http.post(`/product/todaySale/todaySalelist`, {
          timeType: timeType
        })
        const arr = []
        if (res.data) {
          res.data.forEach((n, i) => {
            arr.push({
              type: 'list-index',
              discribe: n.goodsProfile,
              title: n.goodsName,
              id: n.id,
              image: n.mainImg,
              indexPriceDiscribe: {},
              indexPrice: {
                current: n.showPrice,
                pre: n.linePrice
              },
              btnGo: `/user/productdetails?id=${n.id}`
            })
          })
        }
        this.tabListData = arr
      },
      // 搜索功能
      focus() {
        this.$router.push('/searchPage')
      },
      async setTime() {
        const myDate = new Date().getHours()
        await this.timeList.forEach((n, i) => {
          const time = n.time.slice(0, 2) / 1
          if (time <= myDate && (time + 2) > myDate) {
            this.timeList.forEach((o, i) => {
              if (o.time.slice(0, 2) / 1 === time) {
                this.tabStyleActive = o.key
                this.getTodaySaleList(o.key)
              }
            })
          }
        })
      }
    }
  }

</script>
<style lang='scss' scoped>
  >>>.header {
    background: rgba(0,0,0,0);
  }
  >>>.scroll {
    padding-top: 0;
  }

  img {
    overflow: hidden;
  }

  .hint {
    font-size: 14px;
    text-align: center;
  }

  .van-image {
    width: 100%;
    height: 100%;

    > > > .van-image__error {
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

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .img {
    display: block;
  }

  .img img {
    display: block;
    width: 100%;
  }

  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .dan_wrap {
    background: #ffffff;

    .wp {
      width: 95%;
      margin: 0 auto;
    }
  }

  .van-swipe {
    height: 207px;

    img {
      display: block;
      width: 100%;
    }
  }

  .nav_box {
    padding: 20px 0;
  }

  .nav_box .nav_li {
    display: block;
    padding-top: 10px;

    a {
      display: block;
    }

    img {
      display: block;
      width: 100%;
      margin: 0 auto
    }

    .li1 {
      width: 20%;
      float: left;
    }

    a.img {
      max-width: 50px;
      margin: 0 auto;
      display: block;
    }

    p {
      text-align: center;
      font-size: 12px;
      line-height: 30px;
      padding: 0;
      margin-top: 2px;
      width: 1.5rem;

      a {
        color: #aaa;
      }
    }
  }

  .nav_box2 {
    margin-bottom: 20px;

    ul {
      display: flex;
      width: 100%;
      padding: 10px 5px;
      background-color: #EE2E55;

      li {
        float: left;
        background-color: #fff;
        width: 30%;
        height: 100px;
        margin: 0 auto;
      }
    }
  }

  .nav_box3 {
    padding-top: 5px;
    padding-bottom: 25px;

    .nav3_l {
      width: 48%;
    }
  }

  .nav_box4 {
    margin-bottom: 20px;

    .nav3_l {
      width: 48%;
      margin-bottom: 5px;
    }
  }

  .nav_box5 {

    .vipImgBox {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .nav_box6 {
    padding-top: 30px;
    padding-bottom: 20px;

    .title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;

      a {
        color: #e6253b;
      }
    }
  }

  .nav_box7 {
    width: 100%;
    overflow: scroll;
  }

  .nav7_ul {
    width: 180%;

    li {
      float: left;
      margin: 0 20px;
      text-align: center;
    }

    .title2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .tabStyleActive {
      color: #e6253b;
    }

    p {
      font-size: 12px;
      color: #a6a6a6;
      line-height: 20px;
      margin-top: 0;
      padding: 2px 5px;
    }

    p.active {
      background: #e6253b;
      color: #fff;
      border-radius: 50px;
    }
  }

  .nav_box8 {
    height: 60px;
  }

  .nav_box8 .nav_li {
    display: block;

    a {
      display: block;
    }

    .li1 {
      width: 25%;
      float: left;
    }

    p {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 20px;
      text-align: center;
      background: #f8f8f8;
      font-size: 12px;
      line-height: 30px;
      padding: 0;
      border-radius: 50px;
      border: 1px solid #f0f0f0;
      color: #848484;
    }

    .li1.active p {
      background: #fde4e7;
      color: #df2f3d;
      border-color: #eec0cc;
    }
  }

  .hesde_l {
    margin-right: 30px;
    line-height: 38px;
    padding-top: 10px;
    padding-left: 10px;

    .van-icon {
      font-size: 26px;
    }
  }

  .hesde_l3 {
    padding-top: 10px;
    padding-right: 10px;

    .van-icon {
      font-size: 26px;
    }
  }

  .van-search {
    padding: 0 !important;
  }

  .hesde_l2 {
    width: 70%;
    position: relative;
    border-radius: 50px;
    padding-top: 10px;

    .van-search {
      border-radius: 50px;
    }

    .p {
      position: absolute;
      right: 10px;
      top: 4px;
    }
  }

  .van-search__content {
    border-radius: 50px;
  }

  .van-search .van-cell {
    padding: 1px 0;
  }

  .nav_box9 {
    padding-bottom: 1px;
    padding-top: 25px;

    .nav_li {
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      overflow: hidden;
    }
  }

  .nav_box10 {
    height: 150px;
  }

  > > > .main .scroll {
    background: #fff;
  }

</style>
