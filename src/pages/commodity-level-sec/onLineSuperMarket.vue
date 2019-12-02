<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 在线超市</div>
      </div>
    </div>
    <div class="topHead2 topHead3 ">
      <div class="box2"></div>
    </div>

    <!-- 内容 -->
    <div class="p2 FruitsBox contBody_top2 OnlineBox">
      <div class="imgBox">
        <van-swipe
          :autoplay="3000"
          indicator-color="white"
          class="van-swipe"
        >
          <van-swipe-item v-for="(item,index) in bannerData" :key="index">
            <img :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 4大宣传	 -->
      <div class="title_nav mt3 flex_betweenc ">
        <p><img src="../../assets/css/static/images/z1.png" alt="">产地直采</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">品质保证</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">应季时令</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">售后无忧</p>
      </div>
      <!--      二级导航-->
      <ul class="commodityLits flex_wrap commodityLits_nav">
        <li v-for="(item,index) in superMarketListData" :key="index">
          <a @click="$router.push({path: item.path,query:{id:item.id,title:item.title}})">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>

      <!-- 必墩好货 -->
      <div v-for="(activity,actIndex) in activityData" :key="actIndex" class="activity">
        <div class="everyday_shop flex">
          <h1>{{ activity.activityName }}</h1>
        </div>
        <ul class="flex_wrap gwcLits gwcLits_zxcs">
          <li v-for="(item,index) in activity.children" :key="index">
            <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
              <img :src="item.goodsStatics[3].url" alt="">
              <p class="p1">{{ item.goodsName }}</p>
              <div class="p3 flex_betweenc"><p>¥{{ item.showPrice }} <span>¥{{ item.linePrice }}</span></p></div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 导航 -->
      <div class="tuijianNav flex">
        <van-tabs v-model="active" @click="changeTab">
          <van-tab v-for="(item,index) in marketCategoryData" :key="index" :title="item.label">
            <div style="margin-top: 10px">
              <div class="nav_zaixan_title">
                <p>{{ item.label }}</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <ul class="flex_wrap gwcLits gwcLits_nav gwcLits_SG">
        <li v-for="(opt,liIndex) in superMarketTabData" :key="liIndex">
          <a @click="$router.push(opt.path)">
            <img :src="opt.img" alt="" class="img">
            <p class="p1">{{ opt.title }}</p>
            <div class="p3 flex_betweenc"><p>¥{{ opt.current }} <span>¥{{ opt.pre }}</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
      </ul>
      <div v-show="tabShow" class="nav_box10 dan_wrap">
        <div class="hint">当前类目下没有分类</div>
      </div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Swipe, SwipeItem, Tab, Tabs } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs,
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem
        },
        data() {
            return {
                active: 0,
                status: 'loading',
                tabShow: false,
                bannerData: [],
                superMarketListData: [],
                // 活动
                activityData: [],
                // Tab栏
                marketCategoryData: [],
                // tab栏下商品
                superMarketTabData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
            this.getSuperMarketListData()
        },
        methods: {
            async init() {
                try {
                    // 轮播图
                    this.getBannerData()
                    // 二级目录
                    this.getSuperMarketListData()
                    // 活动
                    await this.getActivityData()
                    // 必囤好货
                    await this.getGoodData()
                    // tab 栏
                    await this.getMarketCategoryData()
                    // tab栏下商品
                    await this.getSuperMarketTabData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 轮播图
            async getBannerData() {
                const res = await this.$http.post('product/banner/list')
                const arr = []
                res.rows.forEach((n, i) => {
                    arr.push({
                        img: require('../../assets/css/static/images/a14.jpg')
                    })
                })
                this.bannerData = arr
            },
            // 二级目录
            async getSuperMarketListData() {
                const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`, {})
                const arr = []
                res.rows.forEach((n, i) => {
                    arr.push({
                        img: n.logo,
                        title: n.name,
                        path: n.url,
                        id: n.id
                    })
                })
                this.superMarketListData = arr
            },
            // 活动
            async getActivityData() {
                const res = await this.$http.post('product/activity/contentActivityRel', {
                    contentId: this.$route.query.id
                })
                res.data.forEach(async(n, i) => {
                    const res = await this.getGoodData(n.activityCode)
                    this.$set(n, 'children', res.data[0].goods)
                })
                this.activityData = res.data
            },
            // 必囤好货
            async getGoodData(activityCode) {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: activityCode
                })
                return res
            },
            // Tab栏
            async getMarketCategoryData() {
                const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
                const arr = []
                for (const i in res.data.dictMap) {
                    arr.push({
                        label: res.data.dictMap[i],
                        key: i
                    })
                }
                this.marketCategoryData = arr
            },
            async changeTab(idx, title) {
                this.tabShow = false
               await this.getSuperMarketTabData(this.marketCategoryData[idx].key)
                if (this.superMarketTabData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab栏下商品
            async getSuperMarketTabData(category) {
                if (!category) category = this.marketCategoryData[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                res.data.forEach((n, i) => {
                    arr.push({
                        title: n.goodsName,
                        img: n.goodsStatics[2].url,
                        id: n.id,
                        current: n.showPrice,
                        pre: n.linePrice,
                        path: `/user/productdetails?id=${n.id}`
                    })
                })
                this.superMarketTabData = arr
            }
        }
    }

</script>

<style lang='scss' scoped>
  .activity{
    margin-bottom: 50px;
  }
  .everyday_shop {
    margin-top: 0;
  }
  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
  }
  .fix {
    background-color: #0a6b5a;
    height: 37.5px;
  }
  .topHead3 .box2 {
    height: 6rem;
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

  .searchInput img {
    width: 0.5rem;
    margin-left: 8px;
  }

  .timeLists {
    width: 25%;
  }

  .swiper-slide {
    width: 32%;
    margin-right: 10px;
  }
  .gwcLits {
    justify-content: left;
    margin-top: -10px;
  }
  .gwcLits_zxcs li {
    width: 30%;
    margin-right: 10px;
  }
  .gwcLits_zxcs li img {
    margin-bottom: 5px;
  }

  .tuijianNav {
    margin-bottom: 20px;
  }

  .tuijianNav .box {
    height: auto;
    width: 100%;
  }

  .van-tabs__line {
    bottom: .5rem;
    transform: translateX(35px) translateX(-50%);
  }

  .gwcLits_nav li {
    width: 48%;
    margin-right: 7px;
  }

  .gwcLits_nav li .img {
    height: 5rem;
  }

  .van-tabs {
    width: 100%;
  }

  .jiujiu li img {
    width: 100%;
  }

  .SuperValue .boxa .imim img {
    width: 100%;
  }
  .gwcLits_SG{
    background: none;
    padding: 0;
    margin-left: 8px;
    margin-bottom: 50px;
  }
  .OnlineBox .commodityLits {
    margin-bottom: 40px;
  }
  .nav_box10 {
    margin-bottom: 100px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
