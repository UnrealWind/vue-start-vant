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
        <div class="p">
          <van-icon name="scan" />
        </div>
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
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap">
      <div class="nav_li fix wp">
        <div v-for="(opt, index) in navList" :key="index" class="li1">
          <a class="img" @click="$router.push({path:opt.path,query:{id:opt.id}})">
            <img :src="opt.img" alt="">
            <p> {{ opt.title }} </p>
          </a>
        </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap">
      <div class="wp">
        <a class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/dingjinyushao.png" alt=""> </a>
      </div>
    </div>

    <div class="nav_box3 dan_wrap fix">
      <!--<div class="wp">
        <div class="nav3_l l">
          <a class="img" @click="$router.push('/supermarket')"> <img src="../assets/img/nav_box31.png" alt="">  </a>
        </div>
        <div class="nav3_l r">
          <a class="img" @click="$router.push('/superMarketZone')"> <img src="../assets/img/nav_box32.png" alt="">  </a>
        </div>
      </div>-->
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

    <div class="nav_box5 dan_wrap">
      <div class="wp">
        <a class="img" @click="$router.push('/upgradeVIP')"> <img src="../assets/img/shengji1.png" alt=""> </a>
      </div>
    </div>

    <div class="nav_box6 dan_wrap">
      <div class="wp">
        <div class="title"><a>
          <van-icon name="fire-o" />
          今日特卖 </a></div>
      </div>
    </div>

    <!--<div class="nav_box7 dan_wrap">
      <ul class="nav7_ul fix">
        <li>
          <div class="title2"> 14:00</div>
          <p> 已抢光 </p>
        </li>
        <li>
          <div class="title2"> 16:00</div>
          <p> 抢购进行中 </p>
        </li>
        <li>
          <div class="title2 active"> 热抢榜单</div>
          <p class="active"> 抢购进行中 </p>
        </li>
        <li>
          <div class="title2"> 18:00</div>
          <p> 已抢光 </p>
        </li>
        <li>
          <div class="title2"> 21:00</div>
          <p> 抢购进行中 </p>
        </li>
        <li>
          <div class="title2"> 22:00</div>
          <p> 抢购进行中 </p>
        </li>
      </ul>
    </div>-->

    <div class="nav_box8 dan_wrap">
      <div class="nav_li fix wp">
        <div
          v-for="(opt, index) in minNavList"
          :key="index"
          class="li1"
          :class="tabStyleActive==index? 'active' : ''"
          @click="changeTab(index)"
        >
          <p>
            {{ opt.label }}
          </p>
        </div>
      </div>
    </div>

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
    <div v-show="tabShow" class="nav_box10 dan_wrap">
      <div class="hint">当前类目下没有分类</div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Swipe, SwipeItem, Search } from 'vant'

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
                tabShow: false,
                tabListData: [],
                bannerData: [],
                tabStyleActive: '',
                navList: [],
                minNavList: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getData()
                    await this.getBannerData()
                    await this.getIndexData()
                    await this.getTabData()
                    await this.getTabListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getData() {
                const res = await this.$http.post('product/activity/contentActivityRel', {
                    contentId: 0
                })
                console.log(res)
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
            // tab栏
            async getTabData() {
                const res = await this.$http.post('product/content/list?level=0')
                const arr = []
                for (const i in res.rows[0].dictMap) {
                    arr.push({
                        label: res.rows[0].dictMap[i],
                        id: i
                    })
                }
                this.minNavList = arr
            },
            async changeTab(index) {
                this.tabShow = false
                await this.getTabListData(this.minNavList[index].id)
                if (this.tabListData.length === 0) {
                    this.tabShow = true
                }
                this.tabStyleActive = index
            },
            // tab栏商品
            async getTabListData(category) {
                if (!category) category = this.minNavList[0].id
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            type: 'list-index',
                            discribe: n.goodsProfile,
                            path: '/user/productdetails',
                            title: n.goodsName,
                            image: n.goodsStatics[i].url,
                            id: n.id,
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
            }
        }
    }

</script>
<style lang='scss' scoped>
  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
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
    img {
      display: block;
      width: 100%;
    }
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
      width: 25%;
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
      padding: 0px;
      margin-top: 2px;
      width: 1.5rem;

      a {
        color: #aaa;
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
    padding-bottom: 20px;

    .nav3_l {
      width: 48%;
      margin-bottom: 5px;
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
      margin: 0px 20px;
      text-align: center;
    }

    .title2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .title2.active {
      color: #e6253b;
    }

    p {
      font-size: 12px;
      color: #a6a6a6;
      line-height: 20px;
      margin-top: 0px;
      padding: 2px 5px;
    }

    p.active {
      background: #e6253b;
      color: #fff;
      border-radius: 50px;
    }
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
      padding: 0px;
      border-radius: 50px;
      border: 1px solid #f0f0f0;
      color: #848484;
      font-size: 10px;
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
    padding: 0px !important;
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
    padding: 1px 0px;
  }

  .nav_box9 {
    padding-bottom: 1px;

    .nav_li {
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      overflow: hidden;
    }
  }

</style>
