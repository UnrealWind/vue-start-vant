<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p">{{ this.$route.query.title }}</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="certificate" />
      </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item><img src="../assets/img/supermarketlist.png" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab v-for="(item,index) in navList" :key="index" :title="item.label">
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <ul class="flex_wrap gwcLits ">
          <li v-for="(item,index) in listData" :key="index">
            <a @click="$router.push(item.path)">
              <div class="p2">
                <img :src="item.img" alt="">
              </div>
              <p class="p1"> {{ item.title }}</p>
              <p class="p4"> {{ item.intro }}</p>
              <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>
            </a>
          </li>
        </ul>
        <div v-show="tabShow" class="nav_box10 dan_wrap">
          <div class="hint">当前类目下没有分类</div>
        </div>
      </div>
      <div v-show="errorShow" class="nav_box10 dan_wrap">
        <div class="hint">未获取到数据，请刷新重试</div>
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
                errorShow: false,
                navList: [],
                listData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getMarketTabData()
                    await this.getSuperMarketListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getMarketTabData() {
                const res = await this.$http.post(`product/content/selectById?level=3&id=${this.$route.query.id}`)
                const arr = []
              console.log(res)
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
                await this.getSuperMarketListData(this.navList[idx].key)
                if (this.listData.length === 0) {
                    this.tabShow = true
                }
            },
            async getSuperMarketListData(category) {
                if (!category) category = this.navList[0].key
                const res = await this.$http.post(`product/goods/listByCategory?category=${category}`)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            path: `/user/productdetails?id=${n.id}`,
                            img: n.goodsStatics[0].url,
                            title: n.goodsName,
                            intro: n.goodsgoodsProfile,
                            current: n.showPrice,
                            pre: n.linePrice
                        })
                    })
                } else {
                    this.errorShow = true
                }
                this.listData = arr
            }
        }
    }

</script>
<style lang='scss' scoped>

  @import "../assets/css/static/css/app.css";
  @import "../assets/css/static/css/style.css";

  .gwcLits {
    font-size: 14px;
    justify-content: normal;

    li {
      width: 31%;
      margin-right: 7px;
    }

    p {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 24px;
    }

    .p2 {
      position: relative;

      span {
        position: absolute;
        left: 2px;
        bottom: 0px;
        font-size: 12px;
      }

      h4 {
        position: absolute;
        left: 5px;
        bottom: 0px;
        font-size: 12px;
        color: #e01447;
        border: 0.02667rem solid #d88aa2;
        border-radius: 0.1rem;
        padding: 0 0.1rem;
        line-height: 18px;
        font-weight: normal;
      }
    }

    p.p4 {
      color: #828282;
      font-size: 12px;
    }

    .p3 {
      padding-top: 0px;
    }

    .p3 span {
      font-size: 12px;
    }
  }
  >>>.main{
    background: #86c8e8;
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
    background: #86c8e8;

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
    right: 50px;
    top: 5px;
    font-size: 20px;
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
      background: #ffffff;
      color: #86c8e8;
    }

    p {
      display: inline-block;
      color: #777;
      padding: 8px 15px;
      border-radius: 50px;
      font-size: 12px;
      color: #fff;
      margin-top: 10px;
    }
  }

  .nav_box {
    padding-bottom: 10px;

    .title {
      font-size: 16px;
      line-height: 30px;
      padding-top: 20px;
      padding-bottom: 2px;
    }
  }
  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
  }
</style>
