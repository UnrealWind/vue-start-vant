<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2 l">
        <div class="p">  {{ this.$route.query.title }}</div>
      </div>
      <div class="header_r r">
        <van-icon name="cart-o" @click="$router.push('/cart/shopcar')" />
        <!--        <van-icon name="share" />-->
      </div>
    </div>
    <div class="topHead2 topHead3 ">
      <div class="box2"></div>
    </div>

    <!-- 内容 -->
    <div class="p2 FruitsBox contBody_top2 OnlineBox">
      <!--      搜索栏-->
      <div class="searchBox">
        <van-search
          v-model="value"
          placeholder="搜索超市商品"
          shape="round"
          @focus="focus"
        >
        </van-search>
      </div>
      <!--      轮播图-->
      <div class="imgBox  bannerBox">
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
      </div>
      <div class="propagandaAndNav">
        <!-- 4大宣传	 -->
        <div class="title_nav mt3 flex_betweenc">
          <p><img src="../../assets/css/static/images/qqjp.png" alt="">全球精品</p>
          <p><img src="../../assets/css/static/images/ttpj.png" alt="">天天平价</p>
          <p><img src="../../assets/css/static/images/yzgq.png" alt="">一站购齐</p>
          <p><img src="../../assets/css/static/images/wysh.png" alt="">无忧售后</p>
        </div>
        <!--      二级导航-->
        <div class="superMarketNav">
          <ul class="commodityLits flex_wrap commodityLits_nav">
            <li v-for="(item,index) in superMarketListData" :key="index">
              <a @click="$router.push({path: item.path,query:{id:item.id,title:item.title}})">
                <p class="flex_center"><img :src="item.img" alt=""></p>
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--        超市必抢-->
      <div class="superMarketBiQiang clearfix">
        <!--          活动标题-->
        <div class="title">
          <h2>超市必抢</h2>
          <span>拼手速抢惊喜</span>
        </div>
        <!--          时间tab栏-->
        <div class="timeTab">
          <ul class="clearfix">
            <li v-for="(item,index) in timeList" :key="index" @click="changeTime(item)">
              <div class="title2" :class="tabStyleActive===item.key? 'tabStyleActive':''">{{ item.time }}</div>
            </li>
          </ul>
        </div>
        <!--          时间下商品列表-->
        <div class="timeList">
          <ul>
            <li v-for="(item,index) in tabListData" :key="index" @click="$router.push(item.btnGo)">
              <div class="imgBox">
                <van-image :src="item.image">
                  <template v-slot:error>图片加载失败</template>
                </van-image>
              </div>
              <div class="title">
                {{ item.title }}
              </div>
              <div class="price">
                <span class="nowPrice">￥{{ item.current }}</span>
                <span class="gain">赚{{ item.gain }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!--    错误提示-->
        <div v-if="timeBoxShow" class="nav_box10 dan_wrap">
          <div class="hint">当前时段下暂无商品</div>
        </div>
      </div>
      <!--        超值好物-->
      <div v-for="(activity,actIndex) in activityData" :key="actIndex" class="chaozhihaowu clearfix superMarketBiQiang">
        <!--          活动标题-->
        <div class="title">
          <h2>{{ activity.activityName }}</h2>
          <span>超大牌超低价</span>
        </div>
        <div class="czhwMain">
          <div class="mainLeft">
            <div class="title">—今日超值好物—</div>
            <span class="first">爆款直降</span>
            <span class="second">大品牌值得买</span>
            <div class="imgBox">
              <van-image v-if="activity.children" :src="activity.children.goodsStatics[0].url">
                <template v-slot:error>图片加载失败</template>
              </van-image>
            </div>
            <span class="last">优质品牌，放心之选</span>
          </div>
          <div class="mainRight">
            <ul class="clearfix">
              <li v-for="(item,index) in activity.children" :key="index" @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
                <div class="imgBox">
                  <van-image :src="item.goodsStatics[0].url">
                    <template v-slot:error>图片加载失败</template>
                  </van-image>
                </div>
                <div class="title">
                  {{ item.goodsName }}
                </div>
                <div class="price">
                  <span class="nowPrice">¥{{ item.showPrice }}</span>
                  <span class="gain">赚{{ item.linePrice-item.showPrice }}</span>
                </div>
              </li>
            </ul>
            <div v-show="errBox" class="errorBox">
              该活动下暂无商品
            </div>
          </div>
        </div>
      </div>

      <!--        精品推荐标题-->
      <div class="jptjTitle">
        精品推荐
      </div>
      <!-- tab栏 -->
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
            <van-image :src="opt.img">
              <template v-slot:error>图片加载失败</template>
            </van-image>
            <p class="title">{{ opt.title }}</p>
            <div class="p3 flex_betweenc"><p>¥{{ opt.current }} <span class="separate">/</span> <span>¥{{ opt.pre }}</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
      </ul>
      <div class="nav_box10 dan_wrap">
        <div v-show="tabShow" class="hint">当前类目下没有分类</div>
      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Swipe, SwipeItem, Tab, Tabs, Search, Image } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-tab': Tab,
      'van-tabs': Tabs,
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-search': Search,
      'van-image': Image
    },
    data() {
      return {
        active: 0,
        status: 'loading',
        tabShow: false,
        timeBoxShow: true,
        errBox: false,
        value: '',
        tabStyleActive: '',
        // 轮播图
        bannerData: [],
        // 二级目录
        superMarketListData: [],
        // 超市必抢  时间列表
        timeList: [],
        tabListData: [],
        // Tab栏
        marketCategoryData: [],
        // tab栏下商品
        superMarketTabData: [],
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
          // 轮播图
          this.getBannerData()
          // 二级目录
          this.getSuperMarketListData()
          // 获取活动时间
          await this.getTime()
          // 时间下的商品列表
          await this.getTodaySaleList()
          // 活动
          await this.getActivityData()
          // 今日必抢
          await this.getRobData()
          // tab 栏
          await this.getMarketCategoryData()
          // tab栏下商品
          await this.getSuperMarketTabData()
          await this.setTime()
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
            img: n.url
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
        await this.getTodaySaleList(item.key)
        this.timeBoxShow = this.tabListData.length === 0
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
              discribe: n.goodsProfile,
              title: n.goodsName,
              image: n.mainImg,
              current: n.showPrice,
              gain: n.linePrice - n.showPrice,
              btnGo: `/user/productdetails?id=${n.id}`
            })
          })
        }
        this.tabListData = arr
      },
      // 活动
      async getActivityData() {
        const res = await this.$http.post('product/activity/contentActivityRel', {
          contentId: this.$route.query.id
        })
        this.errBox = false
        if (res.data) {
          res.data.forEach(async(n, i) => {
            if (n[i]) {
              const res = await this.getRobData(n.activityCode)
              this.$set(n, 'children', res.data[0].goods)
            } else {
              this.errBox = true
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
        this.superMarketTabData = arr.map(function(item, index) {
          return { ...item, ...imgArr[index] }
        })
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
     background: #ef2154;
   }
  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .van-icon {
    font-size: 24px;
  }

  .van-image {
    width: 100%;
    height: 100%;

    > > > .van-image__error {
      font-size: 12px;
    }
  }
  .van-swipe{
    height: 120px;
  }

  .tabStyleActive {
    color: #e6253b;
  }
  .separate{
    color: #000000 !important;
    text-decoration: none !important;
  }
  .errorBox {
    text-align: center;
    line-height: 120px;
  }

  .title_nav{
    padding: 30px 10px 0;
    p{
      margin:0 5px;
      img{
        margin-right: 5px;
      }
    }
  }
  .propagandaAndNav{
    border-radius: 10px;
    background-color: #fff;
  }

  .superMarketNav {
    overflow: scroll;
    border-radius: 20px;
    padding: 0 5px 10px 5px;
    ul {
      width: 120%;
      height: 125px;
      display: flex;
      flex-direction: column;
      align-content: flex-start;

      li {
        height: 50px;
        width: 17%;
      }
    }
  }

  .searchBox {
    margin-top: 20px;
  }

  .van-search {
    padding: 0;
    border-radius: 25px;
  }

  .everyday_shop {
    margin-top: 0;
  }

  .fix {
    display: flex;
    margin: 0 10px;
    height: 37.5px;

    .header_l {
      font-size: 20px;
      color: #fff;
      width: 15%;
    }

    .header_l2 {
      text-align: center;
      width: 70%;

      .p {
        height: 37.5px;
        line-height: 37.5px;
        font-size: 16px;
        color: #fff;
      }
    }

    .header_r {
      width: 15%;
      height: 39px;
      line-height: 50px;

      .van-icon :first-child {
        margin-right: 10px;
      }
    }
  }

  .topHead3 .box2 {
    height: 5rem;
    background-color: #ef2154;
  }

  .bannerBox{
    margin: 20px 0;
  }

  .mt3{
    p {
      color: #000000;
    }
  }

  .superMarketBiQiang {
    margin-top: 30px;

    .title {
      margin-bottom: 15px;

      h2 {
        display: inline-block;
        color: #000000;
      }

      span {
        display: inline-block;
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1px solid #999999;
      }
    }

    .timeTab {
      overflow: scroll;
      background-color: #fff;
      border-radius: 10px;

      ul {

        width: 155%;

        li {
          float: left;
          font-size: 24px;
          color: #dddddd;
          margin: 12px 15px 0 15px;
        }
      }
    }

    .timeList {
      overflow: scroll;
      margin-top: 10px;

      ul {
        width: 315%;

        li {
          float: left;
          padding: 10px;
          margin-right: 10px;
          background-color: #fff;
          border-radius: 10px;
          width: 150px;
          height: 200px;

          .imgBox {
            margin-bottom: 10px;
            width: 100%;
            height: 125px;
          }

          .title {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .price {
            .gain {
              margin-top: -3px;
              padding: 3px 4px 1px;
              float: right;
              display: inline-block;
              border: 1px solid #ef2154;
              border-radius: 5px;
              color: #ef2154;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .chaozhihaowu {
    width: 100%;
    padding: 0 5px;

    .czhwMain {
      display: flex;
      width: 100%;

      .mainLeft {
        float: left;
        width: 38%;
        background: url("../../assets/img/mainLeft.png") no-repeat;
        background-size: cover;
        color: #fff;
        text-align: center;

        .title {
          font-size: 14px;
          margin: 30px 0 30px 0;
        }

        .first {
          display: block;
          font-size: 22px;
          margin-bottom: 25px;
        }

        .second {
          font-size: 14px;
        }

        .imgBox {
          background-color: #fff;
          margin: 30px 15px 20px 15px;
          min-height:115px;
        }

        .last {
          display: block;
          font-size: 12px;
          margin-bottom: 10px;
        }
      }

      .mainRight {
        float: left;
        width: 62%;
        background-color: #fff;
        border-radius: 10px;

        ul {
          width: 100%;
          padding: 5px;

          li {
            float: left;
            width: 45%;
            margin-left: 10px;

            .imgBox {
              margin-bottom: 10px;
              width: 100%;
              height: 125px;
            }

            .title {
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .price {
              .gain {
                float: right;
                display: inline-block;
                border: 1px solid #ef2154;
                border-radius: 5px;
                color: #ef2154;
              }
            }
          }
        }
      }
    }
  }

  .jptjTitle {
    width: 98%;
    height: 50px;
    margin: 20px 5px;
    background: url("../../assets/img/jptj.png") no-repeat;
    background-size: cover;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
  }

  .gwcLits {
    justify-content: left;
    margin-top: -10px;
  }

  .gwcLits .title {
    margin-top: 15px;
    margin-bottom: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .gwcLits .p3 {
    padding: 0;
    margin-top: 5px;
  }

  .gwcLits .p3 span {
    margin-left: 15px;
  }

  .gwcLits_zxcs li {
    width: 30%;
    height: 4.5rem;
    margin-right: 10px;
  }

  > > > .gwcLits_zxcs li .van-image {
    width: 100%;
    height: 70%;
  }

  > > > .gwcLits_zxcs li .van-image .van-image__img {
    height: 3.5rem;
  }

  .gwcLits_zxcs li img {
    margin-bottom: 5px;
    height: 3rem;
  }

  .tuijianNav {
    margin-bottom: 20px;
  }

  .tuijianNav .box {
    height: auto;
    width: 100%;
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

  .gwcLits_SG {
    background: none;
    padding: 0;
    margin-left: 8px;
    margin-bottom: 50px;

    li {
      height: 266px;

      > > > .van-image {
        width: 100%;
        height: 75%;

        .van-image__img {
          height: 5rem;
        }

        .van-image__error {
          height: 100%;
        }
      }
    }
  }

  .nav_box10 {
    height: 100px;

    .hint {
      margin-top: 20px;
      font-size: 14px;
      text-align: center;
    }
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
