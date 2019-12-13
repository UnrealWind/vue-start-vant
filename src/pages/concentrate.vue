<!-- home -->
<template>
  <van-container :active="'concentrate'" :status="status" :tabbar="true">
    <div slot="header" class="fix">
      <div class="hesde_l2">
        <div class="p"> 精选</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="share" />
      </div>
    </div>

    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      class="van-swipe"
    >
      <van-swipe-item v-for="(item,index) in bannerData" :key="index">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav3_l l">
          <a class="img" @click="$router.push('/trialcenter')"> <img src="../assets/img/jiangtu12.png" alt=""> </a>
        </div>
      </div>
    </div>
    <!--超人气新品-->
    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="title"> 超人气新品 <span> 必买新品限时优惠 </span></div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div v-for="(commodity,index) in concentrateData" :key="`${commodity.type}-${index}`" class="nav_li">
          <commodity
            :type="commodity.type"
            :image="commodity.image"
            :discribe="commodity.discribe"
            :title="commodity.title"
            :concentrate-price="commodity.concentratePrice"
            :concentrate-price-discribe="commodity.concentratePriceDiscribe"
            :btn-go="commodity.btnGo"
          >
          </commodity>
        </div>
      </div>
    </div>
    <!--每日新选-->
    <div class="nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="title"> 每日新选 <span> 多为生活用点新 </span></div>
      </div>
    </div>
    <!--tab栏-->
    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <van-tabs v-model="active" @click="changeTab">
          <van-tab v-for="(item,index) in navList" :key="index" :title="item.label">
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!--tab栏下商品-->
    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <ul class="flex_wrap gwcLits ">
          <li v-for="(item,index) in choicenessData" :key="index">
            <a @click="$router.push(item.path)">
              <van-image :src="item.img">
                <template v-slot:error>加载失败</template>
              </van-image>
              <p class="p1">{{ item.title }}</p>
              <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p><img
                src="../assets/css/static/images/gwc2.png"
                alt=""
              ></div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="nav_box10 dan_wrap">
      <div v-show="tabShow" class="hint">当前类目下没有分类</div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Swipe, SwipeItem, Tab, Tabs, Image } from 'vant'

    export default {
        components: {
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem,
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs,
            'van-image': Image
        },
        data() {
            return {
                active: 0,
                status: 'loading',
                value: '',
                tabShow: false,
                concentrateData: [],
                navList: [],
                choicenessData: [],
                bannerData: []
            }
        },
        computed: {},
        watch: {
            tabShow: function() {
                this.$nextTick(function() {
                    document.getElementById('scroll').scrollTop = document.getElementById('scroll').scrollHeight
                })
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    // 轮播图
                    await this.getBannerData()
                    // 超人气新品
                    await this.getNewProduct()
                    // tab 栏
                    await this.getConcentrateTabData()
                    // tab 栏下商品
                    await this.getConcentProductListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 轮播图
            async getBannerData() {
                const res = await this.$http.post('product/banner/list?showFlag=1')
                const arr = []
              if (res.rows) {
                res.rows.forEach((n, i) => {
                  arr.push({
                    img: n.url
                  })
                })
              }
                this.bannerData = arr
            },
            // 超人气新品
            async getNewProduct() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: 'cf48dbb9013a418e87b8e47086cddc3b'
                })
                const arr = []
              if (res.data) {
                res.data.forEach((n, i) => {
                  n.goods.forEach((good, i) => {
                    arr.push({
                      type: 'list-concentrate',
                      image: require('assets/img/testtu1.png'),
                      describe: '日1本1进1口',
                      title: good.goodsProfile,
                      concentratePrice: '121010',
                      concentratePriceDiscribe: '新1品1福1￥',
                      id: good.id,
                      btnGo: `/user/productdetails?id=${good.id}`
                    })
                  })
                })
              }
                this.concentrateData = arr
            },
            // tab栏
            async getConcentrateTabData() {
                const res = await this.$http.post('product/content/list?level=0')
                const arr = []
                for (const i in res.rows[0].dictMap) {
                    arr.push({
                        label: res.rows[0].dictMap[i],
                        id: i
                    })
                }
                this.navList = arr
            },
            async changeTab(index) {
                this.tabShow = false
                await this.getConcentProductListData(this.navList[index].id)
                if (this.choicenessData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab下商品
            async getConcentProductListData(category) {
                if (!category) category = this.navList[0].id
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
                this.choicenessData = arr.map(function(item, index) {
                    return { ...item, ...imgArr[index] }
                })
            }

        }
    }

</script>
<style lang='scss' scoped>
  @import "../assets/css/static/css/app.css";
  @import "../assets/css/static/css/style.css";

  .gwcLits {
    padding-bottom: 10px;

    p {
      font-size: 14px;
      line-height: 20px;
    }

    .p2 span {
      font-size: 12px;
    }
  }

  .header {
    background: #fff;
    color: red;
    font-size: 0.42667rem;
    font-weight: 500;
    line-height: 1.2rem;
    height: 1.33333rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 0.08rem 0.05333rem;
    background: rgba(255, 255, 255, 0.2) none repeat scroll !important;
  }

  h1 {
    background: red;
    width: 375px;
  }

  .fix {
    *zoom: 1;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .img {
    display: block;
  }

  .img img {
    display: block;
    width: 100%;
  }

  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .dan_wrap {
    background: #f7f7f7;

    .wp {
      width: 95%;
      margin: 0 auto;
    }
  }

  .van-swipe {
    margin-top: 45px;

    img {
      display: block;
      width: 100%;
    }
  }

  .header {
    .fix {
      background: #fff;
    }
  }

  .hesde_l {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l3 {
    display: none;
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l4 {
    position: absolute;
    right: 50px;
    top: 5px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l2 {
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;

    .p {
      font-size: 16px;
      color: #333;
    }
  }

  .nav_box {
    padding-top: 10px;

    .nav3_l {
      width: 49%;
    }
  }

  .nav_box {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav_box3 {
    padding-top: 20px;
    padding-bottom: 10px;
    margin-top: 15px;

    .title {
      color: #242424;
      font-size: 16px;
      font-weight: bold;
      padding-left: 30px;
      line-height: 26px;
      background: url("../assets/img/jiangtu14.png") no-repeat left 0;
      box-sizing: border-box;
    }

    span {
      color: #868686;
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      margin-left: 5px;
      display: inline-block;
      padding-left: 5px;
      border-left: 1px solid #868686;
    }
  }

  .nav_box5 {
    position: relative;
    margin: 0 auto;

    .wp {
      width: 100%;
      overflow-x: scroll;
      margin: 0 auto;
    }

    .nav_ul {
      width: 155%
    }

    .icon {
      position: absolute;
      width: 10%;
      right: 0;
      top: 3px;
      font-size: 20px;
      background: #f7f7f7;
      z-index: 9;
    }

    .li1 {
      display: inline-block;
    }

    .li1.active p {
      background: #ef0d3b;
      color: #fff;
    }

    p {
      display: inline-block;
      color: #777;
      padding: 8px 15px;
      border-radius: 50px;
      font-size: 12px;
    }
  }

  .scroll .nav_box4 {
    margin-top: 10px;

    .nav_li {
      margin-bottom: 10px;
    }
  }

  .van-image {
    width: 100%;
    height: 85%;
  }

  .gwcLits li {
    width: 48%;
    height: 6.5rem;
  }

  > > > .gwcLits li .van-image {
    height: 75%;
  }

  > > > .gwcLits li .van-image__img {
    height: 5rem;
  }

  .nav_box10{
    margin-top: 0;
    height: 130px;
    .hint {
      font-size: 14px;
      text-align: center;
    }
  }

  .dan_wrap {
    background: none;
    padding: 0;
    margin-top: 25px;
  }

  .gwcLits .p3{
    padding: 0;
    img {
      margin-right: 10px;
    }
  }
</style>
