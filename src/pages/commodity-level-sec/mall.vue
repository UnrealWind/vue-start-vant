<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 商场</div>
      </div>
    </div>
    <div class="topHead">
      <div class="box1 p2 box_sizing">
        <!--        <div class="searchInput flex">-->
        <!--          <img src="../../assets/css/static/images/ss.png" alt="">-->
        <!--          <input type="text" placeholder="可人儿">-->
        <!--        </div>-->
        <img src="../../assets/css/static/images/jx.jpg" alt="" class="jxhdImg">
        <!--        <div class="flex_betweenc logoBox">-->
        <!--          <p class="flex_center"><img src="../../assets/css/static/images/logo.jpg" alt=""> 可人儿品牌旗航店</p>-->
        <!--          <a @click="$router.push({path:'/store',query:{shopCode: 1}})">进入店铺</a>-->
        <!--        </div>-->
      </div>
      <div class="box2"></div>
    </div>
    <!-- 内容 -->
    <div class="p2 contBody_top">
      <!-- 1 -->
      <div class="publicBox box_sizing" style="margin-bottom: 10px">
        <div class="title_xl flex">
          <p class="p1">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p> </p>
        </div>
        <!-- 商品 -->
        <ul class="commodityLits mt7 flex_wrap">
          <li v-for="(item,index) in mallShopsListData" :key="index">
            <a @click="$router.push(item.path)">
              <img :src="item.img" alt="">
              <p class="title">{{ item.title }}</p>
              <p class="money"><span>¥{{ item.current }}</span> <samp>¥{{ item.pre }}</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 2 -->
      <div class="publicBox box_sizing">
        <div class="title_nav flex_betweenc">
          <p><img src="../../assets/css/static/images/dianzan.png" alt="">极致精选</p>
          <p><img src="../../assets/css/static/images/pp.png" alt="">品牌授权</p>
          <p><img src="../../assets/css/static/images/zp.png" alt="">正品保障</p>
          <p><img src="../../assets/css/static/images/sh.png" alt="">售后无忧</p>
        </div>
        <ul class="commodityLits flex_wrap commodityLits_nav">

          <li v-for="(item,index) in mallNavData" :key="index">
            <a @click="$router.push(item.path)">
              <p class="flex_center"><img :src="item.img" alt=""></p>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 3 -->
      <!--      <div class="publicBox box_sizing mt3 flex SecuritiesBox">-->
      <!--        <div class="box">-->
      <!--          <a @click="$router.push('/supermarket')">-->
      <!--            <h1>每日必抢</h1>-->
      <!--          </a>-->
      <!--          <a class="p1" @click="$router.push('/supermarket')">爆款秒杀></a>-->
      <!--          <p class="flex_center"><a @click="$router.push('/supermarket')"> <img-->
      <!--            src="../../assets/css/static/images/a2.jpg"-->
      <!--            alt=""-->
      <!--          > </a>-->
      <!--          </p>-->

      <!--        </div>-->
      <!--        <div class="box">-->
      <!--          <a @click="$router.push('/supermarket')">-->
      <!--            <h1>领劵中心</h1>-->
      <!--          </a>-->
      <!--          <a class="p1" @click="$router.push('/supermarket')">大额优惠劵一站领齐></a>-->
      <!--          <p class="flex_center"><a @click="$router.push('/supermarket')"> <img-->
      <!--            src="../../assets/css/static/images/a3.jpg"-->
      <!--            alt=""-->
      <!--          > </a>-->
      <!--          </p>-->

      <!--        </div>-->
      <!--      </div>-->
    </div>

    <!-- 每日好店 -->
    <div class="everyday_shop flex">
      <h1>每日好店</h1><span>天天上新，好店推荐</span>
    </div>
    <!-- 内容2 -->
    <div v-for="(item,index) in mallShopsData" :key="index" class="p2 mt3 mb3">
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img :src="item.img" alt="">
            <p><span>{{ item.title }}</span><span class="bj">{{ item.discounts }}</span></p>
          </div>
          <div class="box2 flex_center"><a
            @click="$router.push({path:'/store',query:{shopCode: item.shopCode}})"
          >进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(module,stepIndex) in mallShopsListData" :key="stepIndex">
            <a @click="$router.push(module.path)">
              <img :src="module.img" alt="">
              <p class="title">{{ module.title }}</p>
              <p class="money"><span>¥{{ module.current }}</span> <samp>¥{{ module.pre }}</samp></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 更多好店 -->
    <div class="everyday_shop flex">
      <h1>更多好店</h1><span>天天上新，好店推荐</span>
    </div>
    <ul class="publicBox logo_ification flex_wrap">
      <li v-for="(items, indexs) in mallBrandData" :key="indexs">
        <a @click="$router.push({path:'/store',query:{shopCode: items.shopCode}})">
          <p class="p1 flex_center"><img :src="items.img" alt=""></p>
          <p class="p2"></p>
          <p class="p3">{{ items.title }}</p>
        </a>
      </li>
      <!--      <li class="more flex_center">-->
      <!--        <a @click="$router.push('/store')">-->
      <!--          查看全部>-->
      <!--        </a>-->
      <!--      </li>-->
    </ul>
    <!--      为您推荐-->
    <div class="tuijian flex_center">
      <p class="flex"><img src="../../assets/css/static/images/dianzan.png" alt="">为您推荐</p>
    </div>
    <div class="tuijianNav flex">
      <van-tabs v-model="active" @click="changeTab">
        <van-tab v-for="(opt,tabIndex) in mallTabData" :key="tabIndex" class="act" :title="opt.label">
          <ul class="flex_wrap gwcLits">
            <li v-for="(listItem, listIndex) in mallProductListData" :key="listIndex">
              <a @click="$router.push({path: listItem.path, query:{id:listItem.id}})">
                <img :src="listItem.img" alt="" class="mallList">
                <p class="p1">{{ listItem.title }}</p>
                <p class="p2"><span>特卖</span> <span>新品</span></p>
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
          <div v-show="tabShow" class="nav_box10 dan_wrap">
            <div class="hint">当前类目下没有分类</div>
          </div>
        </van-tab>
      </van-tabs>
      <!--        <div class="more flex_center"><img src="../../assets/css/static/images/xia.png" alt=""></div>-->
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
                status: 'loading',
                active: 0,
                tabShow: false,
                // mallTopListData: [],
                mallShopsData: [],
                mallShopsListData: [],
                mallNavData: [],
                mallBrandData: [],
                // tab栏下商品
                mallProductListData: [],
                // tab栏
                mallTabData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getStoreListData()
                    await this.getMallNavData()
                    // tab栏
                    await this.getMallTabData()
                    // tab栏下商品
                    await this.getMallProductListData()
                    // 品牌
                    await this.getBrandListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 商城nav数据
            async getMallNavData() {
                const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`, {})
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            img: n.logo,
                            name: n.name,
                            path: n.url
                        })
                    })
                }
                this.mallNavData = arr
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
                        console.log(list)
                        this.mallShopsListData = list
                    })
                }
                console.log(arr)
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
                this.tabShow = false
                await this.getMallProductListData(this.mallTabData[idx].key)
                if (this.mallProductListData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab栏下商品
            async getMallProductListData(category) {
                if (!category) category = this.mallTabData[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            path: `/user/productdetails?id=${n.id}`,
                            title: n.goodsName,
                            img: n.goodsStatics[i].url,
                            id: n.id,
                            current: n.showPrice,
                            pre: n.linePrice
                        })
                    })
                }
                this.mallProductListData = arr
            },
            // 品牌
            async getBrandListData() {
                const res = await this.$http.post('user/shop/list?pageNum=1&pageSize=10', {
                    'dataType': 'json',
                    'method': 'post',
                    'data': {}
                })
                console.log(res)
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
  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
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

  .gwcLits li {
    width: 48%;
  }

  .gwcLits li .mallList {
    height: 5rem;
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

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
