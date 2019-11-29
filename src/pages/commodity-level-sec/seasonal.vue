<!-- home -->
<template>
  <van-container :tabbar="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 时令水果</div>
      </div>
    </div>
    <div class="topHead2">
      <div class="box2"></div>
    </div>
    <div class="p2 FruitsBox contBody_top2">
      <!-- 1 -->
      <div class="imgBox">
        <img src="../../assets/css/static/images/a12.jpg" alt="">
      </div>
      <!-- 4大宣传	 -->
      <div class="title_nav mt3 flex_betweenc">
        <p><img src="../../assets/css/static/images/z.png" alt="">产地直采</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">品质保证</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">应季时令</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">售后无忧</p>
      </div>
      <!--      导航部分-->
      <ul class="commodityLits flex_wrap commodityLits_nav">
        <li v-for="(item,index) in seasonalNavData" :key="index">
          <a @click="$router.push({path:item.path,query:{id:item.id}})">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <span>{{ item.title }}</span>
          </a>
        </li>
        <li class="more">
          <a @click="$router.push('/commodityLevelSec/classification')">
            <p class="flex_center"><img src="../../assets/css/static/images/more.png" alt=""></p>
            <span>更多分类</span>
          </a>
        </li>
      </ul>
      <!--      <div class="tongzhi flex">-->
      <!--        <img src="../../assets/css/static/images/tz.png" alt="">水果时令小贴士:吃什么，怎么吃，看这里..-->
      <!--      </div>-->
      <!-- 半价试吃 -->
      <!--      <div class="tuijian2 flex_center">-->
      <!--        <p class="p1">半价试吃</p>-->
      <!--        <p class="p2">每天三波福利 新鲜来袭</p>-->
      <!--      </div>-->
    </div>
    <!-- 时间滑动 -->
    <!--    <div class="swiper_time">-->
    <!--      <div class="month flex_center">-->
    <!--        <div>-->
    <!--          <h1>13日</h1>-->
    <!--          <p>10月</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="swiper_minNav">-->
    <!--        <div class="swiper-container swiper-container-horizontal">-->
    <!--          <div class="swiper-wrapper">-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>09:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>10:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>11:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center act">-->
    <!--              <div class="box-time">-->
    <!--                <h1>12:00</h1>-->
    <!--                <p>抢购中</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>24日</h1>-->
    <!--                <p>10月</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>09:00</h1>-->
    <!--                <p>即将开始</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>09:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>09:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="swiper-slide flex_center">-->
    <!--              <div class="box-time">-->
    <!--                <h1>09:00</h1>-->
    <!--                <p>已抢购</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- 半价试吃 -->
    <!--    <div v-for="(item,index) in seasonalHalfPriceData" :key="index" class="TryToEat">-->
    <!--      <div class="imgBox">-->
    <!--        <img :src="item.img" alt="" class="img1">-->
    <!--        <p class="pop box_sizing">半价试吃</p>-->
    <!--        &lt;!&ndash;        <p class="qiang flex_center">抢光了</p>&ndash;&gt;-->
    <!--      </div>-->
    <!--      <div class="textBox">-->
    <!--        <h1>{{ item.title }}装</h1>-->
    <!--        <p class="p1">{{ item.intro }}</p>-->
    <!--        <div class="flex_betweenc">-->
    <!--          &lt;!&ndash;          <p class="p22"><span>特卖</span> <span>新品</span></p>&ndash;&gt;-->
    <!--          &lt;!&ndash;            <p class="p3">抢光了</p>&ndash;&gt;-->
    <!--          <p class="p3" @click="$router.push(item.path)">抢购</p>-->
    <!--        </div>-->
    <!--        <div class="flex_betweenc jaiqian">-->
    <!--          <p class="p4">¥ {{ item.current }} <span>¥ {{ item.originalPrice }}</span></p>-->
    <!--          &lt;!&ndash;            <p class="p5 flex_betweenc"><span>已售 {{ item.sell }}</span><span>库存 {{ item.inventory }} </span></p>&ndash;&gt;-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- 镇店之宝 -->
    <div v-for="(activity,actIndex) in activityData" :key="actIndex" class="p2">
      <div class="tuijian2 flex_center">
        <p class="p1">{{ activity.activityName }}</p>
        <p class="p2">每天三波福利 新鲜来袭</p>
      </div>
      <ul class="Treasure_list Treasure_top">
        <li v-for="(item,index) in activity.children" :key="index" class="li1">
          <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
            <div class="contBox box_sizing">
              <p class="s1">{{ item.goodsName }}</p>
              <p class="s0">___</p>
              <p class="s2">{{ item.goodsName }}</p>
              <p class="s3">{{ item.goodsProfile }}</p>
              <!--              <span class="s41">惊爆价</span>-->
              <p class="s4"><span class="s42">{{ item.showPrice }}</span>元
              </p>
            </div>
            <img :src="item.goodsStatics[3].url" alt="">
          </a>
        </li>
      </ul>
    </div>
    <!-- 爆款直降 -->
    <!--    <div class="p2">-->
    <!--      <div class="tuijian2 flex_center">-->
    <!--        <p class="p1">{{ activityData[1].activityName }}</p>-->
    <!--        <p class="p2">每天三波福利 新鲜来袭</p>-->
    <!--      </div>-->
    <!--      <ul class="Treasure_list Treasure_top Treasure_list2">-->
    <!--        <li v-for="(item,index) in seasonalHotStyleData" :key="index" class="li4">-->
    <!--          <a @click="$router.push(item.path)">-->
    <!--            <div class="contBox box_sizing">-->
    <!--              <p class="s1">{{ item.address }}</p>-->
    <!--              <p class="s0">___</p>-->
    <!--              <p class="s2">{{ item.title }}</p>-->
    <!--              <p class="s3">{{ item.intro }}</p>-->
    <!--              &lt;!&ndash;              <span class="s41">惊爆价</span>&ndash;&gt;-->
    <!--              <p class="s4"><span class="s42">{{ item.current }}</span>/元 {{ item.weight }}装-->
    <!--              </p>-->
    <!--            </div>-->
    <!--            <img :src="item.img" alt="">-->
    <!--          </a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <!-- 精选 -->
    <!--    <div class="p2">-->
    <!--      <div class="jingxuanBox flex">-->
    <!--        <p class="flex"><img src="../../assets/css/static/images/jx2.jpg" alt="">精选</p>-->
    <!--        <a href="javascript:;">逛一逛更多商品</a>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="tuijianNav flex p2">
      <van-tabs v-model="active" @click="changeTab">
        <van-tab v-for="(item,index) in seasonalCategoryData" :key="index" :title="item.label">
        </van-tab>
      </van-tabs>
    </div>
    <ul class="flex_wrap gwcLits gwcLits_SG">
      <li v-for="(opt,liIndex) in seasonalProductListData" :key="liIndex">
        <a @click="$router.push({path:opt.path,query:{id:opt.id}})">
          <img class="commodityLits" :src="opt.img" alt="">
          <p class="p1">{{ opt.title }}</p>
          <!--          <p class="p2"><span>特卖</span> <span>新品</span></p>-->
          <div class="p3 flex_betweenc"><p>¥ {{ opt.current }}<span style="margin-left: 10px;">¥{{ opt.pre }}</span></p>
            <img
              src="../../assets/css/static/images/gwc2.png"
              alt=""
            ></div>
        </a>
      </li>
    </ul>
    <div v-show="tabShow" class="nav_box10 dan_wrap">
      <div class="hint">当前类目下没有分类</div>
    </div>
  </van-container>
</template>

<script>
    import { Icon, Tab, Tabs } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs
        },
        data() {
            return {
                active: 0,
                status: 'loading',
                tabShow: false,
                seasonalNavData: [],
                seasonalHalfPriceData: [],
                seasonalTopOneData: [],
                seasonalHotStyleData: [],
                seasonalProductListData: [],
                seasonalCategoryData: [],
                activityData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getSeasonalData()
                    await this.getSeasonalNavData()
                    await this.getSeasonalProductListData()
                    // 活动
                    await this.getActivityData()
                    // 半价试吃
                    // await this.getHalfPriceData()
                    // 镇店之宝
                    // 爆款直降
                    // await this.getHotStyleData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 导航数据
            async getSeasonalNavData() {
                const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`)
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            img: n.logo,
                            title: n.name,
                            path: n.url,
                            id: n.id
                        })
                    })
                }
                this.seasonalNavData = arr
            },
            // tab栏数据
            async getSeasonalData() {
                const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
                const arr = []
                for (const i in res.data.dictMap) {
                    arr.push({
                        label: res.data.dictMap[i],
                        key: i
                    })
                }
                this.seasonalCategoryData = arr
            },
            async changeTab(idx, title) {
                this.tabShow = false
                await this.getSeasonalProductListData(this.seasonalCategoryData[idx].key)
                if (this.seasonalProductListData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab栏下商品数据
            async getSeasonalProductListData(category) {
                if (!category) category = this.seasonalCategoryData[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            title: n.goodsName,
                            img: n.goodsStatics[3].url,
                            id: n.id,
                            current: n.showPrice,
                            pre: n.linePrice,
                            path: `/user/productdetails?id=${n.id}`
                        })
                    })
                }
                this.seasonalProductListData = arr
            },
            // 活动
            async getActivityData() {
                const res = await this.$http.post('product/activity/contentActivityRel', {
                    contentId: this.$route.query.id
                })
                res.data.forEach(async(n, i) => {
                    const res = await this.getTopOneData(n.activityCode)
                    this.$set(n, 'children', res.data[0].goods)
                })
                this.activityData = res.data
            },
            // 半价试吃
            // async getHalfPriceData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: '1d2d80a442154b23a00962dd7747d381'
            //     })
            //     const arr = []
            //     if (res.data) {
            //         res.data.forEach((n, i) => {
            //             n.goods.forEach((good, i) => {
            //                 arr.push({
            //                     title: good.goodsName,
            //                     intro: good.goodsProfile,
            //                     current: good.showPrice,
            //                     originalPrice: good.linePrice,
            //                     img: good.goodsStatics[3].url,
            //                     // sell: 200,
            //                     // inventory: 0,
            //                     path: `/user/productdetails?id=${good.id}`
            //                 })
            //             })
            //         })
            //     }
            //     this.seasonalHalfPriceData = arr
            // },

            // 镇店之宝
            async getTopOneData(activityCode) {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: activityCode
                })
                return res
                // const arr = []
                // if (res.data) {
                //     res.data.forEach((n, i) => {
                //         n.goods.forEach((good, i) => {
                //             arr.push({
                //                 title: good.goodsName,
                //                 intro: good.goodsProfile,
                //                 current: good.showPrice,
                //                 img: good.goodsStatics[3].url,
                //                 address: good.shopName,
                //                 path: `/user/productdetails?id=${good.id}`,
                //                 weight: '4.5~5斤'
                //             })
                //         })
                //     })
                // }
            }
            // 爆款直降
            // async getHotStyleData() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: this.activityData[1].activityCode
            //     })
            //     const arr = []
            //     if (res.data) {
            //         res.data.forEach((n, i) => {
            //             n.goods.forEach((good, i) => {
            //                 arr.push({
            //                     title: good.goodsName,
            //                     intro: good.goodsProfile,
            //                     current: good.showPrice,
            //                     img: good.goodsStatics[i].url,
            //                     address: good.shopName,
            //                     weight: '4.5~5斤',
            //                     path: `/user/productdetails?id=${good.id}`,
            //                     id: good.id
            //                 })
            //             })
            //         })
            //     }
            //     this.seasonalHotStyleData = arr
            // }
        }
    }
</script>
<style lang='scss' scoped>
  .hint {
    font-size: 14px;
    text-align: center;
  }

  .fix {
    background-color: #04c16f;
    height: 37.5px;
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

  .swiper-wrapper .swiper-slide {
    width: 25%;
  }

  .Treasure_list li {
    background: #fff;
  }

  .Treasure_list2 li img {
    position: static;
    width: 100%;
    height: 100%;
  }

  .gwcLits li {
    width: 48%;
  }

  .gwcLits li .commodityLits {
    height: 5rem;
  }

  .van-tabs {
    width: 100%;
  }

  .van-tabs__line {
    width: 60%;
  }

  .van-tabs__wrap {
    border-radius: 0.15rem;
  }

  .gwcLits_SG {
    background: none;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  .van-tabs--line .van-tabs__wrap {
    width: 100%;
  }

  .TryToEat {
    margin-top: 40px;
  }

  .p2 {
    margin-bottom: 20px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
