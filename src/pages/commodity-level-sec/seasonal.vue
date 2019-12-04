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
          <a @click="$router.push({path:item.path,query:{id:item.id,title:item.title}})">
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
    </div>
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
    <!--    tab栏-->
    <div class="tuijianNav flex">
      <van-tabs v-model="active" @click="changeTab">
        <van-tab v-for="(item,index) in seasonalCategoryData" :key="index" :title="item.label">
        </van-tab>
      </van-tabs>
    </div>
    <!--    tab栏下商品-->
    <ul class="flex_wrap gwcLits gwcLits_SG">
      <li v-for="(opt,liIndex) in seasonalProductListData" :key="liIndex">
        <a @click="$router.push({path:opt.path,query:{id:opt.id}})">
          <van-image :src="opt.img">
            <template v-slot:error>图片加载失败</template>
          </van-image>
          <p class="p1">{{ opt.title }}</p>
          <div class="p3 flex_betweenc"><p>¥ {{ opt.current }}<span style="margin-left: 10px;">¥{{ opt.pre }}</span></p>
            <img
              src="../../assets/css/static/images/gwc2.png"
              alt=""
            ></div>
        </a>
      </li>
    </ul>
    <!--    // 错误提示-->
    <div v-show="tabShow" class="nav_box10 dan_wrap">
      <div class="hint">当前类目下没有分类</div>
    </div>
  </van-container>
</template>

<script>
    import { Icon, Tab, Tabs, Image } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs,
            'van-image': Image
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
                const allImgArr = []
                const imgArr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        n.goodsStatics.forEach((img, i) => {
                            allImgArr.push({
                                img: img.url,
                                key: img.spuStaticType
                            })
                        })
                        arr.push({
                            title: n.goodsName,
                            id: n.id,
                            current: n.showPrice,
                            pre: n.linePrice,
                            path: `/user/productdetails?id=${n.id}`
                        })
                    })
                    allImgArr.forEach((n, i) => {
                        if (n.key === 0) {
                            imgArr.push({
                                img: n.img
                            })
                        }
                    })
                }
                this.seasonalProductListData = arr.map(function(item, index) {
                    return { ...item, ...imgArr[index] }
                })
            },
            // 活动
            async getActivityData() {
                const res = await this.$http.post('product/activity/contentActivityRel', {
                    contentId: this.$route.query.id
                })
                if (res.data) {
                    res.data.forEach(async(n, i) => {
                        const res = await this.getTopOneData(n.activityCode)
                        this.$set(n, 'children', res.data[0].goods)
                    })
                }
                this.activityData = res.data
            },

            // 镇店之宝
            async getTopOneData(activityCode) {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: activityCode
                })
                return res
            }
        }
    }
</script>
<style lang='scss' scoped>
  *{
    font-size: 14px;
  }
  .hint {
    font-size: 14px;
    text-align: center;
    margin-bottom: 100px;
  }

  .title_nav{
    font-size: 14px;
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

  .van-image {
    width: 100%;
    height: 75%;
  }
  >>> .van-image .van-image__img {
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
    margin-top: 20px;
  }

  .van-tabs--line .van-tabs__wrap {
    width: 100%;
  }

  .TryToEat {
    margin-top: 40px;
  }

  .p2 {
    margin-bottom: 30px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
