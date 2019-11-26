<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p">每日精选</div>
      </div>
    </div>
    <div class="mrsxBox">
      <!--      轮播图-->
      <van-swipe

        :autoplay="3000"
        indicator-color="white"
        class="van-swipe"
      >
        <van-swipe-item v-for="(item,index) in bannerData" :key="index" @click="$router.push('/superMarketZone')">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="p2">
        <div class="title_mrsx">精选大牌</div>
        <ul class="jxdpImgList flex_wrap">
          <li v-for="(item,index) in dayNewChoicenessData" :key="index">
            <a @click="$router.push({path:item.path,query:{id:item.id}})"><img
              :src="item.img"
              alt=""
            ></a>
            <h1>{{ item.discounts }}</h1>
            <p class="flex_center"><a @click="$router.push({path:item.path,query:{id:item.id}})">{{ item.store }}&gt;</a></p>
          </li>
        </ul>
        <ul class="jxdpImgList flex_wrap jxdpImgList1">
          <li v-for="(item,index) in dayNewChoicenessDatas" :key="index">
            <a @click="$router.push({path:item.path,query:{id:item.id}})"><img
              :src="item.img"
              alt=""
            ></a>
            <h1>{{ item.discounts }}</h1>
            <p class="flex_center"><a @click="$router.push({path:item.path,query:{id:item.id}})">{{ item.store }}></a></p>
          </li>
        </ul>
        <div class="title_mrsx">精选商品</div>
        <div class="tuijianNav flex">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab v-for="(item,index) in dayNewTabData" :key="index" :title="item.label">
              <ul class="flex_wrap gwcLits ">
                <li v-for="(opt,liIndex) in dayNewProductListData" :key="liIndex">
                  <a @click="$router.push({path:opt.path,query:{id:opt.id}})">
                    <img class="ProductList" :src="opt.img" alt="">
                    <p class="p1">{{ opt.title }}</p>
                    <p class="p2">
                      <span>特卖</span>
                      <span>新品</span>
                    </p>
                    <div class="p3 flex_betweenc">
                      <p>
                        ¥ {{ opt.current }}
                        <span>
                          ¥ {{ opt.pre }}
                        </span>
                      </p>
                      <img src="../../assets/css/static/images/gwc.png" alt="">
                    </div>
                  </a>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
        </div>
        <!-- 1 -->
      </div>
    </div>
  </van-container>
</template>

<script>
    import { Icon, Tab, Tabs, Swipe, SwipeItem } from 'vant'

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
                status: 'loading',
                active: 0,
                // 轮播图
                bannerData: [],
                // 精选大牌
                dayNewChoicenessData: [],
                dayNewChoicenessDatas: [],
                // tab栏
                dayNewTabData: [],
                // tab栏下商品
                dayNewProductListData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    // 目录
                    await this.getDayNewData()
                    // 轮播图
                    await this.getBannerData()
                    // 精选大牌
                    await this.getBrandData()
                    await this.getBrandDatas()

                    // tab栏
                    await this.getDayNewTabData()
                    // tab栏下商品
                    await this.getDayNewProductListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 目录
            async getDayNewData() {
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
            // 精选大牌
            async getBrandData() {
                const res = await this.$http.post('product/goods/recommendGoodslist?pageNum=1&pageSize=2', {
                    type: 1
                })
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            store: n.goodsName,
                            discounts: n.goodsProfile,
                            img: n.mainImg,
                            path: '/user/productdetails',
                            id: n.id
                        })
                    })
                }
                this.dayNewChoicenessData = arr
            },
            async getBrandDatas() {
                const res = await this.$http.post('product/goods/recommendGoodslist', {
                    type: 1
                })
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            store: n.goodsName,
                            discounts: n.goodsProfile,
                            img: n.mainImg,
                            path: '/user/productdetails',
                            id: n.id
                        })
                    })
                }
                this.dayNewChoicenessDatas = arr
            },
            // tab栏
            async getDayNewTabData() {
                const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
                const arr = []
                for (const i in res.data.dictMap) {
                    arr.push({
                        label: res.data.dictMap[i],
                        key: i
                    })
                }
                this.dayNewTabData = arr
            },
            changeTab(idx, title) {
                this.getDayNewProductListData(this.dayNewTabData[idx].key)
            },
            // tab栏下商品数据
            async getDayNewProductListData(category) {
                if (!category) category = this.dayNewTabData[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            path: '/user/productdetails',
                            title: n.goodsName,
                            img: n.goodsStatics[i].url,
                            id: n.id,
                            current: n.showPrice,
                            pre: n.linePrice
                        })
                    })
                }
                this.dayNewProductListData = arr
            }
        }
    }

</script>
<style lang='scss' scoped>
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

  .title_mrsx {
    height: 0.8rem;
    line-height: 0.7rem;
    font-size: .4rem;
  }

  .gwcLits li {
    width: 48%;
  }

  .gwcLits li .ProductList {
    height: 5rem;
  }

  .tuijianNav .box {
    height: auto;
    width: 100%;
  }

  .van-tabs__line {
    bottom: .5rem;
    transform: translateX(35px) translateX(-50%);
  }
  img {
    width: 100%;
  }
  .van-tabs{
    width: 100%;
  }
  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
