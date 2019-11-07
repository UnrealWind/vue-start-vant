<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="fixedHead flex_center box_sizing fixedHead3">
        <p class="flex_center img1" onClick="javascript:history.back(-1);">
          <img src="../../assets/css/static/images/zuo.png" alt="">
        </p>
        <p>电商商城</p>
        <p class="flex_center img2">
          <a style="position: relative;top:-10px;" href="../html/malltemplate/one/home/shopcart.html">
            <img src="../../assets/css/static/images/g.png" alt="">
          </a>
          <img src="../../assets/css/static/images/fx.png" alt="" class="fximg">
        </p>
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
          <a href="/store">进入店铺</a>
        </div>
      </div>
      <div class="box2"></div>
    </div>
    <!-- 内容 -->
    <div class="p2 contBody_top">
      <!-- 1 -->
      <div class="publicBox box_sizing">
        <div class="title_xl flex">
          <p class="p1">限量199减100</p>
          <p>满99减20&nbsp;159减30&nbsp;259减50</p>
        </div>
        <!-- 商品 -->
        <ul class="commodityLits mt7 flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
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

          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
          <li>
            <a href="/productlistmin">
              <p class="flex_center"><img src="../../assets/css/static/images/q1.png" alt=""></p>
              <span>男装</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 3 -->
      <div class="publicBox box_sizing mt3 flex SecuritiesBox">
        <div class="box">
          <a href="/supermarket">
            <h1>每日必抢</h1>
          </a>
          <a href="/supermarket" class="p1">爆款秒杀></a>
          <p class="flex_center"><a href="/supermarket"> <img src="../../assets/css/static/images/a2.jpg" alt=""> </a>
          </p>

        </div>
        <div class="box">
          <a href="/supermarket">
            <h1>领劵中心</h1>
          </a>
          <a href="/supermarket" class="p1">大额优惠劵一站领齐></a>
          <p class="flex_center"><a href="/supermarket"> <img src="../../assets/css/static/images/a3.jpg" alt=""> </a>
          </p>

        </div>
      </div>
    </div>

    <!-- 每日好店 -->
    <div class="everyday_shop flex">
      <h1>每日好店</h1><span>天天上新，好店推荐</span>
    </div>

    <div class="Storefront">
      <div class="flex_betweenc  Storefront_cont">
        <div class="box1 flex">
          <img src="../../assets/css/static/images/a4.jpg" alt="">
          <p><span>梵西品牌团</span><span class="bj">限量领199减100劵</span></p>
        </div>
        <div class="box2 flex_center"><a href="/store">进店</a></div>
      </div>
      <ul class="commodityLits flex_wrap">
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/b.jpg" alt="">
            <p class="title">GU极优女装珊瑚绒起居套装</p>
            <p class="money"><span>¥155</span> <samp>¥188</samp></p>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/b.jpg" alt="">
            <p class="title">GU极优女装珊瑚绒起居套装</p>
            <p class="money"><span>¥155</span> <samp>¥188</samp></p>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/b.jpg" alt="">
            <p class="title">GU极优女装珊瑚绒起居套装</p>
            <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
          </a>
        </li>
      </ul>
    </div>

    <!-- 内容2 -->
    <div class="p2 mt3 mb3">
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/a4.jpg" alt="">
            <p><span>梵西品牌团</span><span class="bj">限量领199减100劵</span></p>
          </div>
          <div class="box2 flex_center"><a href="/store">进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/a4.jpg" alt="">
            <p><span>梵西品牌团</span><span class="bj">限量领199减100劵</span></p>
          </div>
          <div class="box2 flex_center"><a href="/store">进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/a4.jpg" alt="">
            <p><span>梵西品牌团</span><span class="bj">限量领199减100劵</span></p>
          </div>
          <div class="box2 flex_center"><a href="/store">进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <div class="Storefront publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/a4.jpg" alt="">
            <p><span>梵西品牌团</span><span class="bj">限量领199减100劵</span></p>
          </div>
          <div class="box2 flex_center"><a href="/store">进店</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/b.jpg" alt="">
              <p class="title">GU极优女装珊瑚绒起居套装</p>
              <p class="money flex"><span>¥155</span> <samp>¥188</samp></p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 更多好店 -->
      <div class="everyday_shop flex">
        <h1>更多好店</h1><span>天天上新，好店推荐</span>
      </div>
      <ul class="publicBox logo_ification flex_wrap">
        <li>
          <a href="/store">
            <p class="p1 flex_center"><img src="../../assets/css/static/images/a5.jpg" alt=""></p>
            <p class="p2"></p>
            <p class="p3">美特斯邦威</p>
          </a>
        </li>
        <li>
          <a href="/store">
            <p class="p1 flex_center"><img src="../../assets/css/static/images/a5.jpg" alt=""></p>
            <p class="p2"></p>
            <p class="p3">美特斯邦威</p>
          </a>
        </li>
        <li>
          <a href="/store">
            <p class="p1 flex_center"><img src="../../assets/css/static/images/a5.jpg" alt=""></p>
            <p class="p2"></p>
            <p class="p3">美特斯邦威</p>
          </a>
        </li>
        <li>
          <a href="/store">
            <p class="p1 flex_center"><img src="../../assets/css/static/images/a5.jpg" alt=""></p>
            <p class="p2"></p>
            <p class="p3">美特斯邦威</p>
          </a>
        </li>
        <li>
          <a href="/store">
            <p class="p1 flex_center"><img src="../../assets/css/static/images/a5.jpg" alt=""></p>
            <p class="p2"></p>
            <p class="p3">美特斯邦威</p>
          </a>
        </li>
        <li class="more flex_center">
          <a href="/store">
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
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
        <li>
          <a href="../html/malltemplate/one/home/introduction.html">
            <img src="../../assets/css/static/images/a6.jpg" alt="">
            <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
            <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
              src="../../assets/css/static/images/gwc.png"
              alt=""
            ></div>
          </a>
        </li>
      </ul>
    </div>
  </van-container>
</template>

<script>
    import Vue from 'vue'
    import { Tab, Tabs } from 'vant'

    Vue.use(Tab).use(Tabs)
    export default {
        data() {
            return {
                status: 'loading',
                activeName: 0
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
  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
