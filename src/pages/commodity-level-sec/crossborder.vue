<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 跨境电商</div>
      </div>
    </div>
    <div class="topHead topHead1">
      <div class="box1 p2 box_sizing">
        <div class="searchInput flex">
          <img src="../../assets/css/static/images/ss1.png" alt="">
          <input type="text" placeholder="可人儿">
        </div>
        <div class="swiper_minNav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(item,index) in crossBorderNavData" :key="index" class="swiper-slide act">
                <a @click="$router.push(item.path)">
                  <van-icon name="gem-o" />
                  <p>{{ item.title }}</p>
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
          class="van-swipe"
        >
          <van-swipe-item v-for="(item,index) in bannerData" :key="index" @click="$router.push('/superMarketZone')">
            <img :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 4大宣传 -->
      <div class="title_nav flex_betweenc mt3 p2 title_nav1">
        <p class="p1">电商国际</p>
        <p><img src="../../assets/css/static/images/pp.png" alt="">自营直采</p>
        <p><img src="../../assets/css/static/images/zp.png" alt="">正品保障</p>
        <p><img src="../../assets/css/static/images/sh.png" alt="">售后无忧</p>
      </div>
      <!-- 今日必抢 -->
      <div class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <a @click="$router.push('/productlistmin')">
              <img src="../../assets/css/static/images/t1.png" alt="">
              <p>每天09点更新</p>
            </a>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlistmin')"> 查看更多</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(item,index) in crossBorderRobData" :key="index">
            <a @click="$router.push({path:item.path,query:{id:item.id}})">
              <img :src="item.image" alt="">
              <p class="title">{{ item.title }}</p>
              <p class="money flex_betweenc"><span>¥{{ item.current }}</span> <samp>赚{{ item.gain }}</samp></p>
              <span class="pop1">直降20元</span><span class="pop2">爆款</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 热门榜单 -->
      <div class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/t2.png" alt="">
            <p>甄选热卖好物</p>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlistmin')">其他榜单</a></div>
        </div>
        <ul class="bangdanBox flex_betweenc mt3">
          <li v-for="(item,index) in crossBorderHotListData" :key="index" class="li1">
            <p class="imgBox flex_center"><a @click="$router.push('/productlistmin')"> <img
              :src="item.img"
              alt=""
            > </a></p>
            <p class="text"><a @click="$router.push('/productlistmin')">{{ item.title }}</a></p>
          </li>
        </ul>
        <ul class="bangdan2 flex_betweenc">
          <li v-for="(item,index) in crossBorderHotListData" :key="index" class="flex_betweenc li1">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <a @click="$router.push({path:item.path,query:{id:item.id}})">{{ item.title }}></a>
          </li>
        </ul>
      </div>
      <!-- 种草推荐 -->
      <div v-for="(item,index) in crossBorderRecommendData" :key="index" class="tuijianBox publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <h1>种草推荐</h1>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/shoppingcart')">更多></a></div>
        </div>
        <a @click="$router.push('/shoppingcart')"> <img :src="item.image" alt="" class="img1">
        </a>
        <div class="title flex">
          <a @click="$router.push('/shoppingcart')"><p>#护肤</p><span>{{ item.title }}</span> </a>
        </div>
        <div class="cont box_sizing">
          <a @click="$router.push('/shoppingcart')"><p class="textOver2">
            {{ item.intro }}</p></a>
        </div>
        <div class="name_box flex_betweenc mt3">
          <div class="flex">
            <img src="../../assets/css/static/images/a9.jpg" alt=""><img
              src="../../assets/css/static/images/a10.jpg"
              alt=""
            ><img
              src="../../assets/css/static/images/a9.jpg"
              alt=""
            >
            <p>{{ item.people }}+人在参加</p>
          </div>
          <a> 查看详情</a>
        </div>
      </div>
      <!-- 逛全球 -->
      <div class="publicBox mt3 StrollGlobal">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <h1>逛全球</h1>
            <p>带你发现全球好物</p>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlist')">更多></a></div>
        </div>
        <ul class="commodityLits flex_wrap commodityLits_nav">
          <li v-for="(item,index) in crossBorderStateData" :key="index">
            <a @click="$router.push('/productlist')">
              <p class="flex_center"><img :src="item.img" alt=""></p>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 品牌 -->
      <ul class="publicBox logo_ification flex_wrap mt3">
        <li v-for="(item,index) in crossBorderBrandData" :key="index">
          <a @click="$router.push('/store')">
            <p class="p1 flex_center"><img :src="item.img" alt=""></p>
            <p class="p2"></p>
            <p class="p3">{{ item.title }}</p>
          </a>
        </li>
      </ul>
      <!-- 今日推荐 -->
      <div class="mt3"><h1 style="font-size: 0.3rem">今日推荐</h1></div>
      <ul class="flex_wrap gwcLits">
        <li v-for="(item,index) in crossBorderProductListData" :key="index">
          <a @click="$router.push({path:item.path,query:{id:item.id}})">
            <img :src="item.image" alt="" class="commodityList">
            <p class="p1">{{ item.title }}</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
      </ul>
    </div>
  </van-container>
</template>

<script>
    import { Icon, Swipe, SwipeItem } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem
        },
        data() {
            return {
                status: 'loading',
                // 轮播图
                bannerData: [],
                // nav
                crossBorderNavData: [],
                // 今日必抢
                crossBorderRobData: [],
                crossBorderHotListData: [
                    {
                        img: require('../../assets/css/static/images/kj1 (5).png'),
                        title: '人气面膜榜',
                        path: '/productlistmin'
                    }
                ],
                // 今日推荐
                crossBorderProductListData: [],
                crossBorderBrandData: [],
                crossBorderStateData: [
                    {
                        'img': require('../../assets/css/static/images/guoqi.jpg'),
                        'name': '中国'
                    }
                ],
                // 种草推荐
                crossBorderRecommendData: []
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
                    await this.getBannerData()
                    // 今日必抢
                    await this.getRobData()
                    // nav
                    await this.getCrossBorderNavData()
                    // 种草推荐
                    await this.getRecommendData()
                    // 今日推荐
                    await this.getTodayRecommendData()
                    // 热门榜单
                    await this.getHotListData()
                    // 品牌列表
                    await this.getBrandListData()
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
                res.rows.forEach((n, i) => {
                    arr.push({
                        img: n.url
                    })
                })
                this.bannerData = arr
            },
            // 导航nav
            async getCrossBorderNavData() {
                const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`)
                const arr = []
                res.rows.forEach((n, i) => {
                    arr.push({
                        img: n.logo,
                        title: n.name,
                        path: n.url
                    })
                })
                this.crossBorderNavData = arr
            },
            // 今日必抢
            async getRobData() {
                const res = await this.$http.post(`product/activity/activityGoodsList`, {
                    activityCode: '1047f6936fb144e49c356e730a9b9cbd'
                })
                const arr = []
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            title: good.categoryName,
                            image: require('../../assets/css/static/images/kj1 (1).png'),
                            current: good.linePrice,
                            gain: 10,
                            path: '/user/productdetails',
                            id: good.id
                        })
                    })
                })
                this.crossBorderRobData = arr
            },
            // 种草推荐
            async getRecommendData() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: '7e774262cd3b4bcaacd1cf9db4487fd4'
                })
                const arr = []
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            image: require('../../assets/css/static/images/a8.jpg'),
                            title: good.categoryName,
                            intro: '兰蔻1935年诞生于法国,凭借着凭借着凭借着凭借着对香水的天才敏感嗅觉、执着不懈的冒险精神',
                            path: '/shoppingcart',
                            people: '1512'
                        })
                    })
                })
                console.log(arr)
                this.crossBorderRecommendData = arr
            },
            // 今日推荐
            async getTodayRecommendData() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: '5670925cb2b84399961c9a15a3bb4cd4'
                })
                const arr = []
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            image: require('../../assets/css/static/images/a6.jpg'),
                            title: good.categoryName,
                            current: good.linePrice, // 现价
                            pre: 134, // 原价
                            path: '/user/productdetails',
                            id: good.id
                        })
                    })
                })
                this.crossBorderProductListData = arr
            },
            // 热门榜单
            async getHotListData() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: 'e211c6bf6edf4b1aaaa4d80b568c4fdb'
                })
                const arr = []
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            image: require('../../assets/css/static/images/kj1 (5).png'),
                            title: good.categoryName
                        })
                    })
                })
                this.crossBorderHotListData = arr
            },
            // 品牌列表
            async getBrandListData() {
               const res = await this.$http.post('product/goodsBrand/list', {
                   pageNum: 0,
                   pageSize: 10
               })
                const arr = []
                res.rows.forEach((n, i) => {
                        arr.push({
                            image: n.logo,
                            title: n.content
                        })
                })
                this.crossBorderBrandData = arr
            }
        }
    }

</script>
<style lang='scss' scoped>

  .fix {
    background-color: #ac45f8;
    height: 37.5px;
  }

  .swiper_tabBox {
    height: 4rem;
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
  }

  .gwcLits li .commodityList {
    height: 5rem;
  }

  .imgBox img {
    margin-left: 20px;
  }

  .bangdan2 {
    display: flex;
  }
  .bangdan2 li {
    width: 50%;
  }
  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
