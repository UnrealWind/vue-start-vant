<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> {{ $route.query.title }}</div>
      </div>
    </div>
    <div class="mrsxBox">
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
      <div class="p2">
        <div class="title_mrsx">精选大牌</div>
        <ul class="jxdpImgList flex_wrap">
          <li v-for="(item,index) in dayNewChoicenessData" :key="index">
            <a @click="$router.push({path:item.path,query:{id:item.id}})">
              <van-image :src="item.img">
                <template v-slot:error>图片加载失败</template>
              </van-image>
            </a>
            <h1>{{ item.discounts }}</h1>
            <p class="flex_center"><a @click="$router.push({path:item.path,query:{id:item.id}})">{{ item.store
            }}&gt;</a></p>
          </li>
        </ul>
        <div class="title_mrsx">精选商品</div>
        <div class="tuijianNav flex">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab v-for="(item,index) in dayNewTabData" :key="index" :title="item.label">
              <ul class="flex_wrap gwcLits ">
                <li v-for="(opt,liIndex) in dayNewProductListData" :key="liIndex">
                  <a @click="$router.push({path:opt.path,query:{id:opt.id}})">
                    <van-image :src="opt.img">
                      <template v-slot:error>图片加载失败</template>
                    </van-image>
                    <p class="p1">{{ opt.title }}</p>
                    <div class="p3 flex_betweenc">
                      <p>
                        ¥ {{ opt.current }}
                        <span class="separate">/</span>
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
        <div v-show="tabShow" class="nav_box10 dan_wrap">
          <div class="hint">当前类目下没有分类</div>
        </div>
        <!-- 1 -->
      </div>
    </div>
  </van-container>
</template>

<script>
    import { Icon, Image, Swipe, SwipeItem, Tab, Tabs } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs,
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem,
            'van-image': Image
        },
        data() {
            return {
                status: 'loading',
                active: 0,
                tabShow: false,
                // 轮播图
                bannerData: [],
                // 精选大牌
                dayNewChoicenessData: [],
                // tab栏
                dayNewTabData: [],
                // tab栏下商品
                dayNewProductListData: [],
                imageArray: []
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
                    await this.getBannerData()
                    // 精选大牌
                    await this.getBrandData()
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
            // tab栏
            async getDayNewTabData() {
                const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
                const arr = []
              if (res.data.dictMap) {
                for (const i in res.data.dictMap) {
                  arr.push({
                    label: res.data.dictMap[i],
                    key: i
                  })
                }
              }
                this.dayNewTabData = arr
            },
            async changeTab(idx, title) {
                this.tabShow = false
                await this.getDayNewProductListData(this.dayNewTabData[idx].key)
                if (this.dayNewProductListData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab栏下商品数据
            async getDayNewProductListData(category) {
                if (!category) category = this.dayNewTabData[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                const allImgArr = []
                const imgArr = []
              console.log(res.data)
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
                          path: '/user/productdetails'
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
                this.dayNewProductListData = arr.map(function(item, index) {
                    return { ...item, ...imgArr[index] }
                })
            }
        }
    }

</script>
<style lang='scss' scoped>
  .van-image {
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
  .van-swipe{
    height: 120px;
    overflow: hidden;
    .van-image{
      height: 100%;
    }
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

  .title_mrsx {
    height: 0.8rem;
    line-height: 0.7rem;
    font-size: .4rem;
    margin-top: 30px;
    margin-bottom: 15px;
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

  img {
    width: 100%;
  }

  .van-tabs {
    width: 100%;
  }

  .jxdpImgList li {
    padding: 0;
    height: 7rem;
    overflow: hidden;
  }

  > > > .jxdpImgList li img {
    height: 5.8rem;
    border-radius: 0;
  }

  > > > .jxdpImgList1 li {
    overflow: hidden;
    height: 5rem;
  }

  > > > .jxdpImgList1 li .van-image {
    overflow: hidden;
    height: 80%;
  }

  > > > .jxdpImgList1 li img {
    height: 3.8rem;
  }
  .separate{
    margin: 0 5px;
    text-decoration: none !important;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
