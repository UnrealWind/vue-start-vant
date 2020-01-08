<template>
  <van-container :tabber="true" :status="status" :header-color="`#${$route.query.color}`">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> {{ this.$route.query.title }}</div>
      </div>
    </div>
    <!--    <div class="topHead">-->
    <!--      <div class="box1 p2 box_sizing">-->
    <!--        <img src="../../assets/css/static/images/jx.jpg" alt="" class="jxhdImg">-->
    <!--      </div>-->
    <!--      <div class="box2"></div>-->
    <!--    </div>-->
    <!-- 内容 -->
    <!--      轮播图-->
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
    <!--<div class="p2 contBody_top">
      &lt;!&ndash; 1 &ndash;&gt;
      <div class="publicBox box_sizing" style="margin-bottom: 10px">
        <div class="title_xl flex">
          <p class="p1" style="width: 100px;">推荐好货</p>
        </div>
        &lt;!&ndash; 商品 &ndash;&gt;
        <ul class="commodityLits mt7 flex_wrap">
          <li v-for="(item,index) in mallShopsListData" :key="index">
            <a @click="$router.push(item.path)">
              <van-image :src="item.img">
                <template v-slot:error>图片加载失败</template>
              </van-image>
              <p class="title">{{ item.title }}</p>
              <p class="money"><span>¥{{ item.current }}</span> <samp>¥{{ item.pre }}</samp></p>
            </a>
          </li>
        </ul>
      </div>
      &lt;!&ndash; 2 &ndash;&gt;
      <div class="publicBox box_sizing">
        <div class="title_nav flex_betweenc">
          <p><img src="../../assets/css/static/images/dianzan.png" alt="">极致精选</p>
          <p><img src="../../assets/css/static/images/pp.png" alt="">品牌授权</p>
          <p><img src="../../assets/css/static/images/zp.png" alt="">正品保障</p>
          <p><img src="../../assets/css/static/images/sh.png" alt="">售后无忧</p>
        </div>
      </div>
    </div>

    &lt;!&ndash; 每日好店 &ndash;&gt;
    <div class="everyday_shop flex">
      <h1>每日好店</h1><span>天天上新，好店推荐</span>
    </div>
    &lt;!&ndash; 内容2 &ndash;&gt;
    <div v-for="(item,index) in mallShopsData" :key="index" class="p2 mt3 mb3">
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img :src="item.img" alt="">
            <span>{{ item.title }}</span>
          </div>
          <div class="box2 flex_center"><a
            @click="$router.push({path:'/store',query:{shopCode: item.shopCode}})"
          >进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(module,stepIndex) in mallShopsListData" :key="stepIndex">
            <a @click="$router.push(module.path)">
              <van-image :src="module.img">
                <template v-slot:error>图片加载失败</template>
              </van-image>
              <p class="title">{{ module.title }}</p>
              <p class="money"><span>¥{{ module.current }}</span> <samp>¥{{ module.pre }}</samp></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    &lt;!&ndash; 更多好店 &ndash;&gt;
    <div class="everyday_shop flex">
      <h1>更多好店</h1><span>天天上新，好店推荐</span>
    </div>
    <ul class="publicBox logo_ification flex_wrap">
      <li v-for="(items, indexs) in mallBrandData" :key="indexs">
        <a @click="$router.push({path:'/store',query:{shopCode: items.shopCode}})">
          <van-image :src="items.img">
            <template v-slot:error>图片加载失败</template>
          </van-image>
          <p class="p3">{{ items.title }}</p>
        </a>
      </li>
    </ul>-->
    <!--      为您推荐-->
    <div class="tuijian flex_center">
      <p class="flex"><img src="../../assets/css/static/images/dianzan.png" alt="">为您推荐</p>
    </div>
    <div class="tuijianNav flex">
      <van-tabs v-model="active" @click="changeTab">
        <van-tab v-for="(opt,tabIndex) in mallTabData" :key="tabIndex" class="act" :title="opt.label">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <ul class="flex_wrap gwcLits">
              <li v-for="(listItem, listIndex) in resData" :key="listIndex">
                <a @click="$router.push({path: listItem.path, query:{id:listItem.id}})">
                  <van-image :src="listItem.img">
                    <template v-slot:error>图片加载失败</template>
                  </van-image>
                  <p class="p1">{{ listItem.title }}</p>
                  <div class="p3 flex_betweenc">
                    <p>¥{{ listItem.current }}
                      <span>
                        ¥{{ listItem.pre }}
                      </span>
                    </p>
                    <img src="../../assets/css/static/images/gwc.png" alt=""></div>
                </a>
              </li>
            </ul>
          </van-list>
          <div v-show="tabShow" class="nav_box10 dan_wrap">
            <div class="hint">当前类目下没有分类</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Image, Tab, Tabs, Swipe, SwipeItem, List } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-tab': Tab,
      'van-tabs': Tabs,
      'van-image': Image,
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-list': List
    },
    data() {
      return {
        status: 'loading',
        active: 0,
        tabShow: false,
        // 轮播图
        bannerData: [],
        // 店铺信息
        mallShopsData: [],
        // 店铺下商品信息
        mallShopsListData: [],
        // nav
        mallNavData: [],
        // 品牌
        mallBrandData: [],
        // tab栏下商品
        mallProductListData: [],
        // tab栏
        mallTabData: [],
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
          if (this.mallProductListData.shift() !== undefined) {
            this.resData.push(this.mallProductListData.shift())
            this.pageIndex++
            this.loading = false
            if (this.resData.length >= this.listTotal) {
              this.finished = true
            }
          }
        }, 500)
      },
      async init() {
        try {
          // 轮播图
          await this.getBannerData()
          // 店铺信息
          this.getStoreListData()
          // tab栏
          await this.getMallTabData()
          // tab栏下商品
          await this.getMallProductListData()
          // 品牌
          this.getBrandListData()
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
      // 店铺查询
      async getStoreListData() {
        const res = await this.$http.post('user/shop/list?pageNum=1&pageSize=1', {
          'dataType': 'json',
          'method': 'post',
          'data': {}
        })
        const arr = []
        const list = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              title: n.shopName,
              img: n.logo,
              discounts: '',
              id: n.id,
              shopCode: n.shopCode
            })
            n.goods.forEach((good, i) => {
              list.push({
                title: good.goodsName,
                img: good.mainImg,
                current: good.showPrice,
                pre: good.linePrice,
                path: `/user/productdetails?id=${good.id}`
              })
            })
            this.mallShopsListData = list
          })
        }
        this.mallShopsData = arr
      },
      // tab栏
      async getMallTabData() {
        const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
        const arr = []
        for (const i in res.data.dictMap) {
          arr.push({
            label: res.data.dictMap[i],
            key: i
          })
        }
        this.mallTabData = arr
      },
      async changeTab(idx, title) {
        this.resData = []
        this.tabShow = false
        await this.getMallProductListData(this.mallTabData[idx].key)
        if (this.mallProductListData.length === 0) {
          this.tabShow = true
        }
        this.onLoad()
      },
      // tab栏下商品
      async getMallProductListData(category) {
        if (!category) category = this.mallTabData[0].key
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
              path: `/user/productdetails?id=${n.id}`,
              title: n.goodsName,
              id: n.id,
              current: n.showPrice,
              pre: n.linePrice
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
        this.mallProductListData = arr.map(function(item, index) {
          return { ...item, ...imgArr[index] }
        })
        this.listTotal = this.mallProductListData.length
      },
      // 品牌
      async getBrandListData() {
        const res = await this.$http.post('user/shop/list?pageNum=1&pageSize=10', {
          'dataType': 'json',
          'method': 'post',
          'data': {}
        })
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              title: n.shopName,
              img: n.logo,
              id: n.id,
              shopCode: n.shopCode
            })
          })
          this.mallBrandData = arr
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  .van-image {
    width: 100%;
    height: 75%;
    overflow: hidden;
  }

  .van-swipe {
    margin-top: 35px;
  }

  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    height: 150px;
  }

  .fix {
    background-color: #fff;
    height: 37.5px;
  }

  .header_l {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    color: #333;
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
      color: #000;
    }
  }

  .contBody_top {
    margin-top: 1.22rem;
  }

  .title_nav p {
    width: 70px;
    height: 15px;
    overflow: hidden;
  }

  .gwcLits li {
    width: 48%;
    height: 6.5rem;
    overflow: hidden;
  }

  > > > .gwcLits li .van-image {
    height: 75%;
    overflow: hidden;
  }

  > > > .gwcLits li .van-image__img {
    height: 5rem;
  }

  .gwcLits li .mallList {
    height: 5rem;
    overflow: hidden;
  }

  .tuijian {
    margin-top: 30px;
  }

  .tuijianNav {
    margin-bottom: 20px;
  }

  .van-tab__pane {
    padding: 0 10px;
  }

  .tuijianNav .box {
    height: auto;
    width: 100%;
  }

  .van-tabs__wrap.van-hairline--top-bottom {
    width: 100%;
  }

  .van-tabs {
    width: 100%;
  }

  .van-tabs--line .van-tabs__wrap {
    width: 100%;
  }

  .everyday_shop {
    margin-top: 50px;
  }

  .commodityLits li {
    width: 110px;
    height: 150px;
    overflow: hidden;
    margin: 0 auto;
  }

  .commodityLits img {
    height: 3rem;
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

  >>>.van-tabs__content{
    margin-top: 15px;
  }
  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
