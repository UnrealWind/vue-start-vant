<!-- home -->
<template>
  <van-container :tabbar="true" :status="status" :header-color="`#${$route.query.color}`">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> {{ $route.query.title }}</div>
      </div>
    </div>
    <div class="topHead2">
      <div class="box2" :style="{background: '#'+$route.query.color}">
      </div>
    </div>
    <div class="p2 FruitsBox contBody_top2">
      <div class="hesde_l2 l">
        <van-search
          v-model="value"
          placeholder="搜索商品"
          shape="round"
          @focus="focus"
        >
        </van-search>
        <!--<div class="p">
          <van-icon name="scan" />
        </div>-->
      </div>
      <!-- 轮播图 -->
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
      <!-- 4大宣传	 -->
      <div class="title_nav mt3 flex_betweenc">
        <p><img src="../../assets/css/static/images/qqjp.png" alt="">产地直采</p>
        <p><img src="../../assets/css/static/images/ttpj.png" alt="">品质保证</p>
        <p><img src="../../assets/css/static/images/yzgq.png" alt="">应季时令</p>
        <p><img src="../../assets/css/static/images/wysh.png" alt="">售后无忧</p>
      </div>
      <!--      导航部分-->
      <!--      <ul class="commodityLits flex_wrap commodityLits_nav">-->
      <!--        <li v-for="(item,index) in seasonalNavData" :key="index">-->
      <!--          <a @click="$router.push({path:item.path,query:{id:item.id,title:item.title}})">-->
      <!--            <p class="flex_center"><img :src="item.img" alt=""></p>-->
      <!--            <span>{{ item.title }}</span>-->
      <!--          </a>-->
      <!--        </li>-->
      <!--        <li v-if="false" class="more">-->
      <!--          <a @click="$router.push('/commodityLevelSec/classification')">-->
      <!--            <p class="flex_center"><img src="../../assets/css/static/images/more.png" alt=""></p>-->
      <!--            <span>更多分类</span>-->
      <!--          </a>-->
      <!--        </li>-->
      <!--      </ul>-->
    </div>
    <!-- 活动 -->
    <!--    <div v-for="(activity,actIndex) in activityData" :key="actIndex" class="p2">-->
    <!--      <div class="tuijian2 flex_center">-->
    <!--        <p class="p1">{{ activity.activityName }}</p>-->
    <!--        <p class="p2">每天三波福利 新鲜来袭</p>-->
    <!--      </div>-->
    <!--      <ul v-if="false" class="Treasure_list Treasure_top clearfix">-->
    <!--        <li v-for="(item,index) in activity.children" :key="index" class="li1">-->
    <!--          <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">-->
    <!--            <img :src="item.goodsStatics[0].url" alt="">-->
    <!--            <div class="contBox box_sizing">-->
    <!--              <p class="s2">{{ item.goodsName }}</p>-->
    <!--              <p class="s3">{{ item.goodsProfile }}</p>-->
    <!--              <p class="s4"><span class="s42">{{ item.showPrice }}</span>元-->
    <!--              </p>-->
    <!--            </div>-->
    <!--          </a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <ul class="flex_wrap gwcLits gwcLits_SG">-->
    <!--        <li v-for="(item,index) in activity.children" :key="index">-->
    <!--          <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">-->
    <!--            <van-image :src="item.goodsStatics[0].url" style="height: 71%;">-->
    <!--              <template v-slot:error>图片加载失败</template>-->
    <!--            </van-image>-->
    <!--            <p class="p1">{{ item.goodsName }}</p>-->
    <!--            <p class="p1">{{ item.goodsProfile }}</p>-->
    <!--            <div class="p3 flex_betweenc"><p>¥ {{ item.showPrice }}</p></div>-->
    <!--          </a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->
    <!--    tab栏-->
    <!--    <div class="tuijianNav flex">-->
    <!--      <van-tabs v-model="active" @click="changeTab">-->
    <!--        <van-tab v-for="(item,index) in seasonalCategoryData" :key="index" :title="item.label">-->
    <!--        </van-tab>-->
    <!--      </van-tabs>-->
    <!--    </div>-->
    <div class="headLineBox">
      <h2>抢实惠</h2>
      <span>买到就是赚到</span>
    </div>
    <!--    tab栏下商品-->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul class="flex_wrap gwcLits gwcLits_SG">
        <li v-for="(opt,liIndex) in resData" :key="liIndex">
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
    </van-list>
    <!--    // 错误提示-->
    <div v-show="tabShow" class="nav_box10 dan_wrap">
      <div class="hint">当前类目下没有分类</div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Image, Search, Swipe, SwipeItem, List } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-search': Search,
      'van-image': Image,
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-list': List
    },
    data() {
      return {
        active: 0,
        status: 'loading',
        tabShow: false,
        value: '',
        seasonalNavData: [],
        seasonalHalfPriceData: [],
        seasonalTopOneData: [],
        seasonalHotStyleData: [],
        seasonalProductListData: [],
        seasonalCategoryData: [],
        activityData: [],
        bannerData: [],
        resData: [],
        pageIndex: 1,
        listTotal: 0,
        loading: false,
        finished: false
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.resData.push(this.seasonalProductListData.shift())
          this.pageIndex++
          this.loading = false
          if (this.resData.length >= this.listTotal) {
            this.finished = true
          }
        }, 500)
      },
      async init() {
        try {
          await this.getBannerData()
          await this.getSeasonalData()
          await this.getSeasonalNavData()
          await this.getSeasonalProductListData()
          // 活动
          // await this.getActivityData()
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
      // 轮播图
      async getBannerData() {
        const res = await this.$http.post('product/banner/list?showFlag=2')
        const arr = []
        res.rows.forEach((n, i) => {
          arr.push({
            img: n.url
          })
        })
        this.bannerData = arr
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
      // async changeTab(idx, title) {
      //   this.tabShow = false
      //   await this.getSeasonalProductListData(this.seasonalCategoryData[idx].key)
      //   if (this.seasonalProductListData.length === 0) {
      //     this.tabShow = true
      //   }
      // },
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
        this.listTotal = this.seasonalProductListData.length
      },
      focus() {
        this.$router.push('/searchPage')
      }
      // 活动
      // async getActivityData() {
      //   const res = await this.$http.post('product/activity/contentActivityRel', {
      //     contentId: this.$route.query.id
      //   })
      //   if (res.data) {
      //     console.log(res.data)
      //     res.data.forEach(async(n, i) => {
      //       const res = await this.getTopOneData(n.activityCode)
      //       this.$set(n, 'children', res.data[0].goods)
      //     })
      //   }
      //   this.activityData = res.data
      // },
      // 镇店之宝
      // async getTopOneData(activityCode) {
      //   return await this.$http.post('product/activity/activityGoodsList', {
      //     activityCode: activityCode
      //   })
      // }
    }
  }
</script>
<style lang='scss' scoped>
  * {
    font-size: 14px;
  }

  .hint {
    font-size: 14px;
    text-align: center;
    margin-bottom: 100px;
  }
  .topHead2{
    background: none;
  }
  .topHead2 .box2 {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 5rem;
  }
  .FruitsBox .title_nav{
    border-bottom: none;
    color: #000;
    p{
      img{
        margin-right: 5px;
      }
    }
  }

  .title_nav {
    font-size: 14px;
  }
  >>>.header {
    background: #04c16f;
  }

  .fix {
    height: 40px;
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
      font-size: 20px;
      color: #fff;
    }
  }

  .van-swipe{
    height: 120px;
    overflow: hidden;
    .van-image{
      height: 100%;
      .van-image__img{
        height: auto;
      }
    }
  }
  .hesde_l2 {
    width: 100%;
    position: relative;
    border-radius: 50px;
    padding-top: 10px;
    margin-bottom: 20px;

    .van-search {
      border-radius: 50px;
      background: none !important;
    }

    .p {
      position: absolute;
      right: 10px;
      top: 4px;
    }
  }

  .tuijian2{
    margin-bottom: 55px;
  }
  .Treasure_list2 li{
    overflow: hidden;
  }
  .Treasure_list2 li img {
    position: static;
    width: 100%;
    height: 100%;
  }

  .gwcLits li {
    width: 48%;
    height: 262.5px;
    overflow: hidden;
  }

  .van-image {
    width: 100%;
    height: 75%;
    overflow: hidden;
  }

  > > > .van-image .van-image__img {
    height: 100%;
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
  .imgBox{
    height: 135px;
    overflow: hidden;
  }
  .headLineBox{
    margin: 20px auto 0;
    background: url("../../assets/img/backGround.png") no-repeat;
    background-size: 100%;
    text-align: center;
    width: 95%;
    height: 60px;
    h2{
      color: #fff;
      display: inline-block;
      line-height: 50px;
      font-size: 22px;
    }
    span{
      color: #fff;
      display: inline-block;
      padding-left: 10px;
      margin-left: 10px;
      border-left: 1px solid #fff;
      height: 20px;
      line-height: 22px;
    }
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
