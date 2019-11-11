<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 跨境电商</div>
      </div>
    </div>
    <div class="mrsxBox">
      <img src="../../assets/css/static/images/he1.png" alt="" class="mrsx_head">
      <div class="p2">
        <div class="title_mrsx">精选大牌</div>
        <ul class="jxdpImgList flex_wrap">
          <li v-for="(item,index) in dayNewChoicenessData" :key="index">
            <a @click="$router.push('/user/productdetails')"><img
              :src="item.img"
              alt=""
            ></a>
            <h1>{{ item.discounts }}</h1>
            <p class="flex_center"><a @click="$router.push('/user/productdetails')">{{ item.store }}&gt;</a></p>
          </li>
        </ul>
        <ul class="jxdpImgList flex_wrap jxdpImgList1">
          <li v-for="(item,index) in dayNewChoicenessData" :key="index">
            <a @click="$router.push('/user/productdetails')"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>{{ item.discounts }}</h1>
            <p class="flex_center"><a @click="$router.push('/user/productdetails')">{{ item.store }}&gt;</a></p>
          </li>
        </ul>
        <div class="title_mrsx">精选商品</div>
        <!--        <div class="kxspImg">-->
        <!--          <img src="../../assets/css/static/images/v_03.png" alt="">-->
        <!--          <img src="../../assets/css/static/images/v_07.png" alt="">-->
        <!--          <img src="../../assets/css/static/images/v_10.png" alt="">-->
        <!--          <img src="../../assets/css/static/images/v_13.png" alt="">-->
        <!--          <img src="../../assets/css/static/images/v_16.jpg" alt="">-->
        <!--        </div>-->
        <div class="tuijianNav flex">
          <van-tabs v-model="active" background="#f2f2f2" class="box flex_wrap">
            <van-tab class="act" title="PLPO"></van-tab>
            <van-tab title="MSYY"></van-tab>
            <van-tab title="KOOPPS"></van-tab>
            <van-tab title="鞋包"></van-tab>
            <van-tab title="内衣配饰"></van-tab>
            <van-tab title="服装"></van-tab>
            <van-tab title="美妆个护"></van-tab>
            <van-tab title="鞋包"></van-tab>
            <van-tab title="内衣配饰"></van-tab>
          </van-tabs>
          <div class="more flex_center"><img src="../../assets/css/static/images/xia.png" alt=""></div>
        </div>
        <ul class="flex_wrap gwcLits">
          <li v-for="(item,index) in dayNewProductListData" :key="index">
            <a @click="$router.push('/user/productdetails')">
              <img class="ProductList" :src="item.img" alt="">
              <p class="p1">{{ item.title }}</p>
              <p class="p2">
                <span>特卖</span>
                <span>新品</span>
              </p>
              <div class="p3 flex_betweenc">
                <p>
                  ¥ {{ item.current }}
                  <span>
                    ¥ {{ item.pre }}
                  </span>
                </p>
                <img src="../../assets/css/static/images/gwc.png" alt="">
              </div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
        </ul>
        <!-- 1 -->
      </div>
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
                dayNewChoicenessData: [
                    {
                        'img': require('../../assets/css/static/images/a22.jpg'),
                        'discounts': '限量抢199减100',
                        'store': 'PLPO品牌团'
                    },
                    {
                        'img': require('../../assets/css/static/images/a22.jpg'),
                        'discounts': '11111',
                        'store': '222222'
                    },
                    {
                        'img': require('../../assets/css/static/images/a23.jpg'),
                        'discounts': '限量抢2减22',
                        'store': 'MOLO品牌团'
                    }
                ],
                dayNewProductListData: [
                    {
                        'img': require('../../assets/css/static/images/a24.jpg'),
                        'title': 'Touch Miss日系小浪漫与温暖羊毛针织',
                        'current': 123, // 现价
                        'pre': 134 // 原价
                    }
                ]

            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    // await this.getData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getData() {
                const res = await this.$http.get('/user/12345')
                console.log(res)
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
    width: 50%;
  }

  .gwcLits li .ProductList {
    height: 5rem;
  }

  .tuijianNav .box {
    height: auto;
  }

  .van-tabs__line {
    bottom: .5rem;
    transform: translateX(35px) translateX(-50%);
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
