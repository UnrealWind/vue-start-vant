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
      <!-- 1 -->
      <!--      <div class="searchInput flex">-->
      <!--        <img src="../../assets/css/static/images/ss.png" alt="">-->
      <!--        <input type="text" placeholder="搜索超市商品">-->
      <!--      </div>-->
      <!--      轮播图-->
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
      <!--      <div class="flex_center songzaocan">-->
      <!--        <a @click="$router.push('/supermarket')">-->
      <!--          &gt;&gt;&gt; 电商超市天天送早餐拉！&lt;&lt;&lt;-->
      <!--        </a>-->
      <!--      </div>-->
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
          <a @click="$router.push({path: item.path,query:{id:item.id}})">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>

      <!-- 必墩好货 -->
      <div v-for="(activity,actIndex) in activityData" :key="actIndex">
        <div class="everyday_shop flex">
          <h1>{{ activity.activityName }}</h1>
          <!--          <span>超值每日分享</span>-->
        </div>
        <ul class="flex_wrap gwcLits gwcLits_zxcs">
          <li v-for="(item,index) in activity.children" :key="index">
            <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
              <img :src="item.goodsStatics[3].url" alt="">
              <!--              <p class="p2"><span>特卖</span></p>-->
              <p class="p1">{{ item.goodsName }}</p>
              <div class="p3 flex_betweenc"><p>¥{{ item.showPrice }} <span>¥{{ item.linePrice }}</span></p></div>
            </a>
          </li>
        </ul>
      </div>

      <!--      超市必抢-->
      <!--      <div class="everyday_shop flex">-->
      <!--        <h1>超市必抢</h1> <span>超值每日分享</span>-->
      <!--      </div>-->
      <!-- 时间滑动 -->
      <!--      <div class="swiper_time swiper_time1">-->
      <!--        <div class="month flex_center">-->
      <!--          <div>-->
      <!--            <h1>13日</h1>-->
      <!--            <p>10月</p>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="swiper_minNav">-->
      <!--          <div class="swiper-container swiper-container-horizontal">-->
      <!--            <div class="swiper-wrapper">-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>09:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>10:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>11:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center act">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>12:00</h1>-->
      <!--                  <p>抢购中</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>24日</h1>-->
      <!--                  <p>10月</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>09:00</h1>-->
      <!--                  <p>即将开始</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>09:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>09:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="timeLists swiper-slide flex_center">-->
      <!--                <div class="box-time">-->
      <!--                  <h1>09:00</h1>-->
      <!--                  <p>已抢购</p>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <ul class="flex_wrap gwcLits gwcLits_zxcs">-->
      <!--        <li v-for="(item,index) in superMarketRobData" :key="index">-->
      <!--          <a @click="$router.push(item.path)">-->
      <!--            <img :src="item.img" alt="">-->
      <!--            <p class="p2"><span>特卖</span></p>-->
      <!--            <p class="p1">{{ item.title }}</p>-->
      <!--            <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>-->
      <!--          </a>-->
      <!--        </li>-->
      <!--      </ul>-->

      <!-- 超值好物 -->
      <!--      <div class="everyday_shop flex">-->
      <!--        <h1>超值好物</h1> <span>超值每日分享</span>-->
      <!--      </div>-->
      <!--      <div class="SuperValue publicBox">-->
      <!--        <div class="box">-->
      <!--          <div class="title_super flex">-->
      <!--            <a @click="$router.push('/supermarket')">-->
      <!--              <h1>拼团</h1>-->
      <!--              <p class="flex">2人团9.9包邮<span>></span></p>-->
      <!--            </a>-->
      <!--          </div>-->
      <!--          <ul class="flex_betweenc jiujiu" style="display: flex">-->
      <!--            <li v-for="(item,index) in goodThingsGroupBookingData" :key="index" style="width: 50%;">-->
      <!--              <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">-->
      <!--                <img :src="item.img" alt="">-->
      <!--                <p>¥{{ item.pre }}</p>-->
      <!--              </a>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </div>-->
      <!--        <div class="boximg flex">-->
      <!--          <div v-for="(item,index) in goodThingsOptionalData" :key="index" class="boxa">-->
      <!--            <div class="title_super flex">-->
      <!--              <h1>任选</h1>-->
      <!--              <p class="flex">低至99选10<span>></span></p>-->
      <!--            </div>-->
      <!--            <div class="imim flex_center" @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">-->
      <!--              <img :src="item.img" alt="">-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div v-for="(item,index) in goodThingsMassRetailData" :key="`${item.img}-${index}`" class="boxa">-->
      <!--            <div class="title_super flex">-->
      <!--              <h1>量贩</h1>-->
      <!--              <p class="flex">2人团9.9包邮<span>></span></p>-->
      <!--            </div>-->
      <!--            <div class="imim flex_center" @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">-->
      <!--              <img :src="item.img" alt="">-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!-- 品牌特惠 -->
      <!--      <div class="everyday_shop flex">-->
      <!--        <h1>品牌特惠</h1> <span>超值每日分享</span>-->
      <!--      </div>-->
      <!--      <div class="pinpaitehui">-->
      <!--        &lt;!&ndash;        <a @click="$router.push('/supermarket')">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <img src="../../assets/css/static/images/a19.jpg" alt="" class="head">&ndash;&gt;-->
      <!--        &lt;!&ndash;        </a>&ndash;&gt;-->
      <!--        <div class="swiper_time">-->
      <!--          <div class="swiper_minNav">-->
      <!--            <div class="swiper-container swiper-container2 swiper-container-horizontal">-->
      <!--              <div class="swiper-wrapper gwcLits">-->
      <!--                <li v-for="(item,index) in supermarketGoodStuffData" :key="index" class="swiper-slide">-->
      <!--                  <a @click="$router.push(item.path)">-->
      <!--                    <img :src="item.img" alt="">-->
      <!--                    <p class="p2"><span>特卖</span></p>-->
      <!--                    <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>-->
      <!--                  </a>-->
      <!--                </li>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
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
            <p class="p2"><span>特卖</span></p>
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
                // 必囤好货
                // supermarketGoodStuffData: [],
                // // 超市必抢
                // superMarketRobData: [],
                // // 超值好物--拼团
                // goodThingsGroupBookingData: [],
                // // 超值好物--任选
                // goodThingsOptionalData: [],
                // // 超值好物--量贩
                // goodThingsMassRetailData: [],

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
                    await this.getBannerData()
                    // await this.getRobData()
                    // await this.getGoodThingsData()
                    // await this.getGoodThingsOptionalData()
                    await this.getSuperMarketListData()
                    // await this.getGoodThingsMassRetailData()
                    // Tab栏

                    // 活动
                    this.getActivityData()
                    this.getGoodData()
                    await this.getMarketCategoryData()
                    // tab栏下商品
                    await this.getSuperMarketTabData()
                    // await this.getData()
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
                // const arr = []
                // if (res.data) {
                //     res.data.forEach((n, i) => {
                //         n.goods.forEach((good, i) => {
                //             arr.push({
                //                 img: good.goodsStatics[i].url,
                //                 title: good.goodsName,
                //                 current: good.linePrice,
                //                 pre: good.showPrice,
                //                 path: `/user/productdetails?id=${good.id}`
                //             })
                //         })
                //     })
                // }
                // this.supermarketGoodStuffData = arr
            },
            // 超市必抢
            // async getRobData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: 'fd8674e40627460e9ad311140ffe339b'
            //     })
            //     const arr = []
            //     res.data.forEach((n, i) => {
            //         n.goods.forEach((good, i) => {
            //             arr.push({
            //                 img: good.goodsStatics[i].url,
            //                 title: good.goodsName,
            //                 current: good.showPrice,
            //                 pre: good.linePrice,
            //                 path: `/user/productdetails?id=${good.id}`
            //             })
            //         })
            //     })
            //     this.superMarketRobData = arr
            // },
            // 超值好物---拼团
            // async getGoodThingsData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: 'a32dc5d72f5441889ac6df84133d9396'
            //     })
            //     const arr = []
            //     res.data[0].goods.forEach((n, i) => {
            //         arr.push({
            //             img: n.goodsStatics[i].url,
            //             pre: n.showPrice,
            //             id: n.id
            //         })
            //     })
            //     this.goodThingsGroupBookingData = arr
            // },
            // 超值好物---任选
            // async getGoodThingsOptionalData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: 'a32dc5d72f5441889ac6df84133d9396'
            //     })
            //     const arr = []
            //     console.log(res)
            //     res.data[1].goods.forEach((n, i) => {
            //         arr.push({
            //             img: n.goodsStatics[i].url,
            //             pre: n.showPrice,
            //             id: n.id
            //         })
            //     })
            //     this.goodThingsOptionalData = arr
            // },
            // 超值好物-- 量贩
            // async getGoodThingsMassRetailData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: 'a32dc5d72f5441889ac6df84133d9396'
            //     })
            //     const arr = []
            //     console.log(res)
            //     res.data[2].goods.forEach((n, i) => {
            //         arr.push({
            //             img: n.goodsStatics[i].url,
            //             pre: n.showPrice,
            //             id: n.id
            //         })
            //     })
            //     this.goodThingsMassRetailData = arr
            // },

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
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
