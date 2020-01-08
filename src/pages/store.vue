<!-- home -->
<template>
  <van-container :status="status" :header-color="''">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        {{ shopData.shopName }}
      </div>
      <!--<div class="header_l3 r" @click="$router.push('/storelist')">
        <van-icon name="bars" />
      </div>-->
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="storetubj img">
        <img :src="shopData.logo" alt="">
      </div>
      <div class="wp">

        <div class="nav_header fix">
          <div class="nav_l l">
            <a class="img"> <img :src="shopData.logo" alt=""> </a>
          </div>
          <div class="nav_c l">
            <a class="title"> {{ shopData.shopName }} </a>
            <!--            <a class="titlemin"> 在线商品<span>350 </span> 粉丝数量<span>3333 </span> </a>-->
          </div>
          <!--<div class="nav_r r">
            <a>
              <van-icon name="like-o" />
              关注 </a>
          </div>-->
        </div>

        <div class="nav_coupons">
          <div class="nav_ul fix">
            <div v-for="(item,index) in couponList" :key="index" class="li">
              <div class="fix">
                <div class="nav_l l">
                  <a class="title"> <!--<em>￥</em><i>40</i> --><span> 全店通用 </span> </a>
                  <a class="titlemin"> {{ item.ticketName }} </a>
                </div>
                <div v-if="item.isChoose === 0" class="nav_r r">
                  <a @click="receiveCoupon(item)"> 立即领取 </a>
                </div>
                <div v-else class="nav_r r gray">
                  <a> 已领取 </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--<div class="nav_cou_img">
          <div class="img" @click="$router.push('/user/productdetails')"><img src="../assets/img/storetu12.png" alt="">
          </div>
        </div>-->

        <!--<div class="navc_title">
          <a class="title"> <img src="../assets/img/storetu14.png" alt=""> 必抢爆款 </a>
        </div>-->
        <div
          v-for="(vip,index) in vipData"
          :key="`${vip.type}-${index}`"
          class="navdan_box4"
        >
          <commodity
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="vip.vipPriceDiscribe"
            :btn-go="vip.btnGo"
          >
          </commodity>
        </div>

        <div class="nav_box8 dan_wrap sortBox">
          <ul class="clearfix">
            <li :class="iconActive === ''?'redIcon': ''" @click="change">综合</li>
            <li>
              <span @click="changeIcon">价格</span>
              <span class="arrow-box">
                <van-icon :size="12" :class="iconActive === true?'redIcon': ''" name="arrow-up" />
                <van-icon :size="12" :class="iconActive === false?'redIcon': ''" name="arrow-down" />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="wp">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ul class="flex_wrap gwcLits ">
            <li v-for="(item,index) in resData" :key="index">
              <a @click="$router.push('/user/productdetails?id='+item.id)">
                <van-image :src="item.img">
                  <template v-slot:error>图片加载失败</template>
                </van-image>

                <p class="p1">{{ item.title }}</p>
                <div class="p3 flex_betweenc">
                  <p>
                    ¥{{ item.current }}
                    <span class="separate">/</span>
                    <span>¥{{ item.pre }}</span>
                  </p>
                  <img
                    src="../assets/css/static/images/gwc2.png"
                    alt=""
                  >
                </div>
              </a>
            </li>
          </ul>
        </van-list>
      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Image, list } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-image': Image,
      'van-list': list
    },
    data() {
      return {
        status: 'loading',
        iconActive: '',
        value: '',
        active: '',
        vipData: [],
        storeListData: [],
        shopData: {},
        couponList: [],
        resData: [],
        pageIndex: 1,
        listTotal: 0,
        loading: false,
        finished: false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          if (this.storeListData.shift() !== undefined) {
            this.resData.push(this.storeListData.shift())
            this.pageIndex = this.pageIndex + 5
            this.loading = false
            if (this.resData.length >= this.listTotal) {
              this.finished = true
            }
          }
        }, 500)
      },
      async init() {
        try {
          await this.getShopData()
          await this.getFaddishData()
          await this.getShopListData()
          await this.getCouponList()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      async receiveCoupon(item) {
        const res = await this.$http.post('manager/userTicket/add', {
          ticketCode: item.ticketCode
        })
        // eslint-disable-next-line no-undef
        res.code === 0 ? Toast.success('领取成功') : Toast.fail('领取失败')
      },
      async getCouponList() {
        const res = await this.$http.post('product/activityTicket/queryList', {
          shopCode: this.$route.query.shopCode
        })
        this.couponList = res.data || []
        this.couponList.forEach((n, i) => {
          n.ticketContent = JSON.parse(n.ticketContent)
        })
      },
      // 店铺信息
      async getShopData() {
        const res = await this.$http.post('user/shop/queryByCode', {
          shopCode: this.$route.query.shopCode
        })
        this.shopData = res.data
      },
      // 必抢爆款
      async getFaddishData() {
        const res = await this.$http.post('product/activity/activityGoodsList', {
          activityCode: '89f3986c4e76419cbb3265633ae0d153'
        })
        const arr = []
        if (res.data) {
          res.data.forEach((n, i) => {
            n.goods.forEach((good, i) => {
              arr.push({
                type: 'list-vip',
                discribe: good.goodsProfile,
                title: good.goodsName,
                vipPriceDiscribe: {},
                vipPrice: {
                  current: good.showPrice,
                  pre: good.linePrice
                },
                btnGo: `/user/productdetails?id=${good.id}`,
                image: good.goodsStatics[0].url
              })
            })
          })
        }
        this.vipData = arr
      },
      change() {
        this.active = ''
        this.getShopListData()
      },
      changeIcon() {
        function sortNumber(a, b) {
          return a.current - b.current
        }
        function sortNum(a, b) {
          return b.current - a.current
        }
        if (this.iconActive === '') {
          this.storeListData.sort(sortNum)
          this.iconActive = false
          return false
        } else if (this.iconActive === true) {
          this.storeListData.sort(sortNum)
          this.iconActive = false
          return false
        } else if (this.iconActive === false) {
          this.storeListData.sort(sortNumber)
          this.iconActive = true
          return false
        }
      },
      // 商品
      async getShopListData(opt) {
        const data = {
          pageNum: 1,
          pageSize: 4,
          shopCode: this.$route.query.shopCode
        }
        if (opt) {
          this.tabList.forEach((n, i) => {
            n['active'] = false
          })
          opt['active'] = true

          if (opt.value) data['orderByColumn'] = opt.value
        }
        const res = await this.$http.post('product/goods/list', data)
        const arr = []
        if (res.rows) {
          res.rows.forEach((n, i) => {
            arr.push({
              title: n.goodsName,
              current: n.showPrice,
              pre: n.linePrice,
              img: n.mainImg,
              id: n.id
            })
          })
        }
        this.storeListData = arr
        this.listTotal = this.storeListData.length
      }
    }
  }

</script>
<style lang='scss' scoped>
  @import "../assets/css/static/css/app.css";
  @import "../assets/css/static/css/style.css";
  .arrow-box {
    margin-left: 5px;
  }
  .redIcon{
    color: red;
  }

  .gwcLits li {
    margin-right: 1px;
    width: 48%;
    height: 7rem;
    overflow: hidden;

    > > > .van-image__img {
      height: 100%;
    }
  }

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

  .gwcLits li .van-image {
    width: 100%;
    overflow: hidden;
  }

  .gwcLits li .van-image__img {
    height: 5rem;
  }

  .van-image__error {
    width: 100%;
    height: 100%;
  }

  h1 {
    background: red;
    width: 375px;
  }

  .header .fix {
    position: relative;
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
    position: absolute;
    left: 72px;
    top: -5px;
    width: 62%;
    margin: 0 auto;
    text-align: center;
    color: #000;
  }

  .header_l3 {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 20px;
    color: #000;
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
    background: #f2f2f2;

    .wp {
      width: 95%;
      margin: 0 auto;
    }
  }

  .van-swipe {
    img {
      display: block;
      width: 100%;
    }
  }

  .header {
    .fix {
      padding-bottom: 10px;
    }
  }

  .hesde_l {
    margin-right: 20px;
    line-height: 38px;
    padding-top: 12px;

    .van-icon {
      font-size: 20px;
      line-height: 20px;
    }
  }

  .hesde_l3 {
    padding-top: 5px;
    padding-right: 10px;

    .van-icon {
      font-size: 20px;
    }
  }

  .van-search {
    padding: 0 !important;
  }

  .hesde_l2 {
    position: relative;
    border-radius: 50px;
    padding-top: 10px;
    width: 75%;

    .van-search {
      border-radius: 50px;
    }

    .p {
      position: absolute;
      right: 10px;
      top: 4px;
    }
  }

  .van-search__content {
    border-radius: 50px;
  }

  .van-search .van-cell {
    padding: 1px 0;
  }

  .nav_box {
    position: relative;

    .wp {
      position: relative;
      z-index: 4;
    }
  }

  .storetubj {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: 100%;
  }

  .nav_box {
    padding-bottom: 10px;
    padding-top: 70px;
    background: #f2f2f2;
    background-size: contain;
    position: relative;
    z-index: 3;

    .nav_header {
      .nav_l {
        width: 15%;

        img {
          border-radius: 10px;
        }
      }

      .nav_c {
        padding-left: 20px;

        a {
          display: block;
          color: #fff;
        }

        .title {
          font-size: 20px;
          line-height: 30px;
        }

        .titlemin {
          font-size: 14px;
          line-height: 20px;
        }
      }

      .nav_r {
        a {
          color: #fff;
          background: #fd5e5b;
          padding: 5px 15px;
          line-height: 20px;
          border-radius: 50px;
          position: relative;
        }

        i {
          position: relative;
          top: 3px;
        }
      }
    }
  }

  .nav_coupons {
    margin-top: 10px;
    width: 100%;
    overflow-x: scroll;

    .nav_ul {
      width: 1000%;

      .li {
        display: inline-block;
        background: #fff;
        border-radius: 10px;
        padding-left: 10px;
        height: 62px;
        overflow: hidden;
        margin-right: 10px;
      }

      a {
        display: block
      }

      .titlemin {
        border-top: 2px solid #f0f0f0;
      }
    }

    .nav_l {
      padding-right: 20px;

      .title {
        line-height: 20px;
        color: #e61340;
        padding-top: 10px;
      }

      em, i {
        font-style: normal;
      }

      i {
        font-size: 20px;
        font-weight: bold;
      }

      em {
        position: relative;
        top: -5px;
      }

      .titlemin {
        color: #808080;
        line-height: 20px;
      }
    }

    .nav_r {
      color: #fff;
      height: 70px;
      background: #f11038;

      a {
        background: #f11038;
        padding: 10px 10px;
        writing-mode: vertical-lr;
        text-align: center;
        box-sizing: border-box;
      }

    }

    .gray {
      background: #ccc;

      a {
        background: #ccc;
      }
    }

    .nav_r.on {
      background: #ff5a5e;

      a {
        background: #ff5a5e;
      }
    }
  }

  .nav_cou_img {
    padding-bottom: 20px;
    padding-top: 40px;

    .img {
      img {
        border-radius: 10px;
      }
    }
  }

  .navc_title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 120px;
    color:#fff;
    a {
      display: inline-block;
      box-sizing: border-box;

      img {
        display: inline-block;
        width: 20px;
        position: relative;
        top: 2px;
      }
    }
  }

  .navdan_box4 {
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    overflow: hidden;

    h4 {
      color: #fff;
    }
  }

  .nav_box8 .nav_li {
    display: block;

    .li {
      width: 25%;
      float: left;
      margin: 0 auto 10px;
      text-align: center;
      line-height: 30px;
      padding: 0;
      color: #202020;
      font-size: 14px;
    }

    .li.active {
      color: #c41b3a;
    }

    .fon-icon {
      font-size: 20px;
      position: relative;
      top: 4px;
    }

    span {
      display: inline-block;
      position: relative;

      .fon-icon12 {
        display: block;
        position: absolute;
        top: -15px;
        left: 0;
      }

      .fon-icon13 {
        display: block;
        position: absolute;
        top: -7px;
        left: 0;
      }
    }
  }

  .sortBox {
    width: 100%;
    height: 50px;
    line-height: 50px;

    ul {
      margin: 20px auto;
      color: #000;
      li {
        float: left;
        margin-left: 30px;
        font-size: 18px;
        min-width: 60px;
      }

      li:last-child {
        span {
          position: relative;

          .van-icon-arrow-up {
            position: absolute;
            top: -3px;
          }

          .van-icon-arrow-down {
            position: absolute;
            bottom: -3px;
          }
        }
      }
    }
  }

  .separate {
    margin: 0 5px;
    text-decoration: none !important;
  }

</style>
