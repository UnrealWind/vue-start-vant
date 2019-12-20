<template>
  <van-container :tabber="true" :status="status" :header-color="''">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p">  {{ this.$route.query.title }}</div>
      </div>
    </div>
    <div class="topHead topHead1">
      <div class="box1 p2 box_sizing">
        <div class="swiper_minNav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(item,index) in crossBorderNavData" :key="index" class="swiper-slide act">
                <a @click="$router.push({path:'/commonalityPage',query:{id:item.id,title: item.categoryName}})">
                  <van-icon name="gem-o" />
                  <p>{{ item.categoryName }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 内容 -->
    <div class="p2 contBody_top1 mb3">
      <!-- 焦点图 -->
      <div class="swiper_tabBox">
        <van-swipe
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item v-for="(item,index) in bannerData" :key="index">
            <van-image :src="item.img">
              <template v-slot:error>图片加载失败</template>
            </van-image>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 4大宣传 -->
      <div class="title_nav flex_betweenc mt3 p2 title_nav1">
        <p>电商国际</p>
        <p><img src="../../assets/css/static/images/pp.png" alt="">自营直采</p>
        <p><img src="../../assets/css/static/images/zp.png" alt="">正品保障</p>
        <p><img src="../../assets/css/static/images/sh.png" alt="">售后无忧</p>
      </div>
      <!-- 今日必抢 -->
      <div v-for="(activity,actIndex) in activityData" :key="actIndex" class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <p class="p1">{{ activity.activityName }}</p>
          </div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(item,index) in activity.children" :key="index">
            <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
              <div>
                <img :src="item.goodsStatics[0].url" alt="">
              </div>
              <p class="title">{{ item.goodsName }}</p>
              <p class="money flex_betweenc"><span>¥{{ item.showPrice }}</span></p>
            </a>
          </li>
        </ul>
        <div v-show="todayErrBox" class="errorBox">
          该活动下暂无商品
        </div>
      </div>
      <!-- 热门榜单 -->
      <div class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <p class="p1">热门榜单</p>
            <p>甄选热卖好物</p>
          </div>
        </div>
        <ul class="bangdanBox flex_betweenc mt3">
          <li v-for="(item,index) in crossBorderHotListData" :key="index" class="li1">
            <p class="imgBox flex_center">
              <a @click="$router.push({path:item.path,query:{id:item.id,title: item.title}})">
                <van-image :src="item.image">
                  <template v-slot:error>加载失败</template>
                </van-image>
              </a>
            </p>
            <p class="text"><a @click="$router.push({path:item.path,query:{id:item.id,title: item.title}})">{{
              item.title }}</a></p>
          </li>
        </ul>
        <div v-show="hotErrBox" class="errorBox">
          该活动下暂无商品
        </div>

        <ul v-if="false" class="bangdan2 flex_betweenc">
          <li v-for="(item,index) in crossBorderHotListData" :key="index" class="flex_betweenc li1">
            <p class="flex_center"><img :src="item.image" alt=""></p>
            <a @click="$router.push({path:item.path,query:{id:item.id,title: item.title}})">{{ item.title }}></a>
          </li>
        </ul>
      </div>
      <!-- 品牌 -->
      <ul class="publicBox logo_ification flex_wrap">
        <li v-for="(items, indexs) in crossBorderBrandData" :key="indexs">
          <a @click="$router.push({path:'/store',query:{shopCode: items.shopCode}})">
            <van-image :src="items.image">
              <template v-slot:error>图片加载失败</template>
            </van-image>
            <p class="p3">{{ items.title }}</p>
          </a>
        </li>
      </ul>
      <!-- 今日推荐 -->
      <div class="mt3"><h1>今日推荐</h1></div>
      <ul class="flex_wrap gwcLits">
        <li v-for="(item,index) in crossBorderProductListData" :key="index">
          <a @click="$router.push({path:item.path,query:{id:item.id}})">
            <img :src="item.image" alt="" class="commodityList">
            <p class="p1">{{ item.title }}</p>
            <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
      </ul>
      <div v-show="jrtjErrBox" class="jrtjerrorBox">
        该活动下暂无商品
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Swipe, SwipeItem, Image } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-image': Image
    },
    data() {
      return {
        status: 'loading',
        todayErrBox: false,
        hotErrBox: false,
        jrtjErrBox: false,
        // 轮播图
        bannerData: [],
        // nav
        crossBorderNavData: [],
        // 活动
        activityData: [],
        // 今日必抢
        crossBorderRobData: [],
        // 热门榜单
        crossBorderHotListData: [],
        // 今日推荐
        crossBorderProductListData: [],
        crossBorderBrandData: [],
        // 种草推荐
        crossBorderRecommendData: [],
        sonData: []
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          // 轮播图
          this.getBannerData()
          // nav
          await this.getCrossBorderNavData()
          // 活动
          await this.getActivityData()
          // 今日必抢
          await this.getRobData()
          // 热门榜单
          await this.getHotListData()
          // 品牌列表
          await this.getBrandListData()
          // 今日推荐
          await this.getTodayRecommendData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      // 轮播图
      async getBannerData() {
        const res = await this.$http.post(`product/banner/list?showFlag=2`)
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
      // 导航nav
      async getCrossBorderNavData() {
        const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`)
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              img: n.logo,
              categoryName: n.name,
              path: n.url,
              id: n.id
            })
          })
        }
        this.crossBorderNavData = arr
      },
      // 活动
      async getActivityData() {
        const res = await this.$http.post('product/activity/contentActivityRel', {
          contentId: this.$route.query.id
        })
        this.todayErrBox = false
        if (res.data) {
          res.data.forEach(async(n, i) => {
            if (n) {
              const res = await this.getRobData(n.activityCode)
              this.$set(n, 'children', res.data[0].goods)
            } else {
              this.todayErrBox = true
            }
          })
        }
        this.activityData = res.data
      },
      // 今日必抢
      async getRobData(activityCode) {
        return await this.$http.post(`product/activity/activityGoodsList`, {
          activityCode: activityCode
        })
      },
      // 热门榜单
      async getHotListData() {
        const res = await this.$http.post('product/activity/activityGoodsList', {
          activityCode: 'e211c6bf6edf4b1aaaa4d80b568c4fdb'
        })
        this.hotErrBox = false
        const arr = []
        if (res.data) {
          res.data.forEach((n, i) => {
            arr.push({
              title: n.actDetailName,
              image: n.logo,
              path: `/productlistmin`,
              id: n.id
            })
          })
        } else {
          this.hotErrBox = true
        }
        this.crossBorderHotListData = arr
      },
      // 品牌列表
      async getBrandListData() {
        const res = await this.$http.post('user/shop/list?pageNum=1&pageSize=6', {
          'dataType': 'json',
          'method': 'post',
          'data': {}
        })
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              image: n.logo,
              title: n.shopName,
              id: n.id,
              shopCode: n.shopCode
            })
          })
        }
        this.crossBorderBrandData = arr
      },
      // 今日推荐
      async getTodayRecommendData() {
        const res = await this.$http.post('product/activity/activityGoodsList', {
          activityCode: '5670925cb2b84399961c9a15a3bb4cd4'
        })
        this.jrtjErrBox = false
        const arr = []
        if (res.data) {
          res.data.forEach((n, i) => {
            n.goods.forEach((good, i) => {
              arr.push({
                image: good.goodsStatics[0].url,
                title: good.goodsName,
                current: good.showPrice, // 现价
                pre: good.linePrice, // 原价
                path: '/user/productdetails',
                id: good.id
              })
            })
          })
        } else {
          this.jrtjErrBox = true
        }
        this.crossBorderProductListData = arr
      }
    }
  }

</script>
<style lang='scss' scoped>
  .van-swipe {
    height: 100%;
  }
  >>>.header {
    background: #ac45f8;
  }
  .mt3 h1 {
    font-size: 0.3rem;
  }

  .Storefront {
    margin-bottom: 30px;
  }

  .fix {
    background-color: #ac45f8;
    height: 37.5px;
  }

  .p1 {
    color: #000 !important;
    font-size: 14px;
    font-weight: 700;
    margin: 10px;
  }

  .swiper_tabBox {
    height: auto;
  }

  .swiper-slide a {
    margin-top: 10px;
    display: inline-block;
  }

  .header_l {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    color: #fff;
  }

  .header_l2 {
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;

    .p {
      height: 37.5px;
      line-height: 37.5px;
      font-size: 16px;
      color: #fff;
    }
  }

  .van-icon {
    color: #fff;
    font-size: 18px;
  }

  .gwcLits li {
    width: 50%;
    overflow: hidden;
  }

  .gwcLits li .commodityList {
    overflow: hidden;
    height: 5rem;
  }

  .commodityLits img {
    height: 150px;
  }

  .imgBox{
    overflow: hidden;
  }
  .imgBox img {
    margin-left: 20px;
  }

  .bangdan2 {
    display: flex;
  }

  .bangdan2 li {
    width: 33%;
  }

  .errorBox {
    text-align: center;
  }
  .jrtjerrorBox{
    margin: 10px 0 50px;
    height: 100px;
    text-align: center;
  }

  .logo_ification {
    text-align: center;
    justify-content: normal;
    margin: 0 10px;

    li {
      height: 101px;
      background: none;
      overflow: hidden;

      .van-image {
        width: 80%;
        height: 80%;
      }
    }

  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
