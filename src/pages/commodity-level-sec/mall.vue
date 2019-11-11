<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="header_l2">
        <div class="p"> 商场 </div>
      </div>
    </div>
    <div class="topHead">
      <div class="box1 p2 box_sizing">
        <div class="searchInput flex">
          <img src="../../assets/css/static/images/ss.png" alt="">
          <input type="text" placeholder="可人儿">
        </div>
        <img src="../../assets/css/static/images/jx.jpg" alt="" class="jxhdImg">
        <div class="flex_betweenc logoBox">
          <p class="flex_center"><img src="../../assets/css/static/images/logo.jpg" alt=""> 可人儿品牌旗航店</p>
          <a @click="$router.push('/stroe')">进入店铺</a>
        </div>
      </div>
      <div class="box2"></div>
    </div>
    <!-- 内容 -->
    <div class="p2 contBody_top">
      <!-- 1 -->
      <div class="publicBox box_sizing" style="margin-bottom: 10px">
        <div class="title_xl flex">
          <p class="p1">限量199减100</p>
          <p>满99减20&nbsp;159减30&nbsp;259减50</p>
        </div>
        <!-- 商品 -->
        <ul class="commodityLits mt7 flex_wrap">
          <li v-for="(item,index) in mallTopListData" :key="index">
            <a @click="$router.push('/user/productdetails')">
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
            <a @click="$router.push('/productlistmin')">
              <p class="flex_center"><img :src="item.img" alt=""></p>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 3 -->
      <div class="publicBox box_sizing mt3 flex SecuritiesBox">
        <div class="box">
          <a @click="$router.push('/supermarket')">
            <h1>每日必抢</h1>
          </a>
          <a class="p1" @click="$router.push('/supermarket')">爆款秒杀></a>
          <p class="flex_center"><a @click="$router.push('/supermarket')"> <img src="../../assets/css/static/images/a2.jpg" alt=""> </a>
          </p>

        </div>
        <div class="box">
          <a @click="$router.push('/supermarket')">
            <h1>领劵中心</h1>
          </a>
          <a class="p1" @click="$router.push('/supermarket')">大额优惠劵一站领齐></a>
          <p class="flex_center"><a @click="$router.push('/supermarket')"> <img src="../../assets/css/static/images/a3.jpg" alt=""> </a>
          </p>

        </div>
      </div>
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
          <div class="box2 flex_center"><a @click="$router.push('/store')">进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(module,stepIndex) in item.goods" :key="stepIndex">
            <a @click="$router.push('/user/productdetails')">
              <img :src="module.img" alt="">
              <p class="title">{{ module.title }}</p>
              <p class="money"><span>¥{{ module.current }}</span> <samp>¥{{ module.pre }}</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 更多好店 -->
      <div class="everyday_shop flex">
        <h1>更多好店</h1><span>天天上新，好店推荐</span>
      </div>
      <ul class="publicBox logo_ification flex_wrap">
        <li v-for="(items, indexs) in mallBrandData" :key="indexs">
          <a @click="$router.push('/store')">
            <p class="p1 flex_center"><img :src="items.img" alt=""></p>
            <p class="p2"></p>
            <p class="p3">{{ items.brand }}</p>
          </a>
        </li>
        <li class="more flex_center">
          <a @click="$router.push('/store')">
            查看全部>
          </a>
        </li>
      </ul>
      <div class="tuijian flex_center">
        <p class="flex"><img src="../../assets/css/static/images/dianzan.png" alt="">为您推荐</p>
      </div>
      <div class="tuijianNav flex">
        <van-tabs v-model="active" background="#f2f2f2" class="box flex_wrap">
          <van-tab class="act" title="精选"></van-tab>
          <van-tab title="服装"></van-tab>
          <van-tab title="美妆个护"></van-tab>
          <van-tab title="鞋包"></van-tab>
          <van-tab title="内衣配饰"></van-tab>
          <van-tab title="服装"></van-tab>
          <van-tab title="美妆个护"></van-tab>
          <van-tab title="鞋包"></van-tab>
          <van-tab title="内衣配饰"></van-tab>
        </van-tabs>
        <div class="more flex_center"><img src="../../assets/css/static/images/xia.png" alt=""></div>
      </div>
      <!-- 购物车商品list -->
      <ul class="flex_wrap gwcLits">
        <li v-for="(listItem, listIndex) in mallProductListData" :key="listIndex">
          <a @click="$router.push('/user/productdetails')">
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
    </div>
  </van-container>
</template>

<script>
    import { Tab, Tabs, Icon } from 'vant'
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
                mallTopListData: [
                    {
                        'img': require('../../assets/css/static/images/b.jpg'),
                        'title': 'GU极优女装珊瑚绒起居套装起居套装起居套装',
                        'current': 155, // 现价
                        'pre': 188 // 原价
                    }
                ],
                mallShopsData: [
                    {
                        'img': require('../../assets/css/static/images/a4.jpg'),
                        'title': '梵西品牌团',
                        'discounts': '限量领199减100', // 优惠、
                        'goods': [
                            {
                                'img': require('../../assets/css/static/images/b.jpg'),
                                'title': '级优女装珊瑚',
                                'current': 155, // 现价
                                'pre': 188 // 原价
                            },
                            {
                                'img': require('../../assets/css/static/images/b.jpg'),
                                'title': '级优女装珊瑚',
                                'current': 155, // 现价
                                'pre': 188 // 原价
                            },
                            {
                                'img': require('../../assets/css/static/images/b.jpg'),
                                'title': '级优女装珊瑚',
                                'current': 155, // 现价
                                'pre': 188 // 原价
                            }
                        ]
                    }
                ],
                mallNavData: [
                    {
                        'img': require('../../assets/css/static/images/q1.png'),
                        'name': '男装'
                    }
                ],
                mallBrandData: [
                    {
                        'img': require('../../assets/css/static/images/a5.jpg'),
                        'brand': '美特斯邦威'
                    }
                ],
                mallProductListData: [
                    {
                        img: require('../../assets/css/static/images/a6.jpg'),
                        title: '日系小浪漫与温暖羊毛针织拼接网纱百褶裙',
                        current: 85, // 现价
                        pre: 134 // 原价
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
  .gwcLits li {
    width: 50%;
  }

  .gwcLits li .mallList {
    height: 5rem;
  }

  .tuijianNav .box {
    height: auto;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
