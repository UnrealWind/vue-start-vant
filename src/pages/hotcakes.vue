<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> 热销榜单</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="share" />
      </div>
      <div class="hesde_l4" @click="$router.push('/cart/shopcar')">
        <van-icon name="cart-o" />
      </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item><img src="../assets/img/hottu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab v-for="(item,index) in navList" :key="index" :title="item.label">
              <div class="nav_box4 dan_wrap fix">
                <div class="wp">
                  <div v-for="(hot,navIndex) in hotData" :key="`${hot.type}-${navIndex}`" class="navdan_box4">
                    <commodity
                      :type="hot.type"
                      :image="hot.image"
                      :discribe="hot.discribe"
                      :title="hot.title"
                      :concentrate-price="hot.concentratePrice"
                      :concentrate-price-discribe="hot.concentratePriceDiscribe"
                      :btn-go="hot.btnGo"
                    >
                    </commodity>
                  </div>
                  <div v-show="tabShow" class="nav_box10 dan_wrap">
                    <div class="hint">当前类目下没有分类</div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Swipe, SwipeItem, Tab, Tabs } from 'vant'

    export default {
        components: {
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem,
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs
        },
        data() {
            return {
                active: 0,
                status: 'loading',
                value: '',
                tabShow: false,
                hotData: [],
                navList: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getHotData()
                    await this.getHotTabData()
                    await this.getHotTabListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getHotData() {
                const res = await this.$http.post(`product/content/list?level=2&parentId=${this.$route.query.id}`, {})
                const arr = []
                res.rows.forEach((n, i) => {
                    arr.push({
                        img: n.logo,
                        name: n.name,
                        path: `/user/productdetails?id=${n.id}`
                    })
                })
                this.mallNavData = arr
            },
            // tab栏数据
            async getHotTabData() {
                const res = await this.$http.post(`product/content/selectById?level=2&id=${this.$route.query.id}`)
                const arr = []
                for (const i in res.data.dictMap) {
                    arr.push({
                        label: res.data.dictMap[i],
                        key: i
                    })
                }
                this.navList = arr
            },
            async changeTab(idx, title) {
                this.tabShow = false
                await this.getHotTabListData(this.navList[idx].key)
                if (this.hotData.length === 0) {
                    this.tabShow = true
                }
            },
            // tab栏下商品数据
            async getHotTabListData(category) {
                if (!category) category = this.navList[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
              console.log(res.data)
              if (res.data) {
                res.data.forEach((n, i) => {
                  arr.push({
                    type: 'list-concentrate',
                    image: n.goodsStatics[0].url,
                    discribe: n.goodsProfile,
                    title: n.goodsName,
                    concentratePrice: n.linePrice + '',
                    concentratePriceDiscribe: '￥',
                    btnGo: `/user/productdetails?id=${n.id}`
                  })
                })
              }
                this.hotData = arr
            }
        }
    }

</script>
<style lang='scss' scoped>
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
    left: 0px;
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
    right: 15px;
    top: 33px;
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

  .nav_box5 {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    margin: 0 auto;

    .wp {
      position: relative;
      overflow: hidden;
    }

    .nav_ul {
      width: 100%
    }

    .icon {
      height: 100%;
      padding-top: 12px;
      padding-left: 1px;
      position: absolute;
      right: 0;
      top: 0;
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

  .navdan_box4 {
    background: #fff;
    margin-bottom: 10px;
  }

  .van-tabs {
    width: 100%;
  }

  .van-tabs--line .van-tabs__wrap {
    width: 100%;
  }

  .hint {
    font-size: 14px;
    text-align: center;
  }
  >>>.van-tabs__content {
    margin-top: 20px;
  }
</style>
