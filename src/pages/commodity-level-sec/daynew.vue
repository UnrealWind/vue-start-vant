<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="fixedHead flex_center box_sizing fixedHead3">
        <p class="flex_center img1" onClick="javascript:history.back(-1);">
          <img src="../../assets/css/static/images/zuo.png" alt="">
        </p>
        <p> 每日上新 </p>
        <p class="flex_center img2">
          <a style="position: relative;top:-10px;" href="../html/malltemplate/one/home/shopcart.html">
            <img src="../../assets/css/static/images/g.png" alt="">
          </a>
          <img src="../../assets/css/static/images/fx.png" alt="" class="fximg">
        </p>
      </div>
    </div>
    <div class="mrsxBox">
      <img src="../../assets/css/static/images/he1.png" alt="" class="mrsx_head">
      <div class="p2">
        <div class="title_mrsx">精选大牌</div>
        <ul class="jxdpImgList flex_wrap">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a22.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">PLPO品牌团></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a22.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">PLPO品牌团></a></p>
          </li>
        </ul>
        <ul class="jxdpImgList flex_wrap jxdpImgList1">
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html"><img
              src="../../assets/css/static/images/a23.jpg"
              alt=""
            ></a>
            <h1>限量抢199减100</h1>
            <p class="flex_center"><a href="../html/malltemplate/one/home/introduction.html">LOVE苏的品牌></a></p>
          </li>
        </ul>
        <div class="title_mrsx">精选商品</div>
        <!--        <div class="kxspImg">
          <img src="../../assets/css/static/images/v_03.png" alt="">
          <img src="../../assets/css/static/images/v_07.png" alt="">
          <img src="../../assets/css/static/images/v_10.png" alt="">
          <img src="../../assets/css/static/images/v_13.png" alt="">
          <img src="../../assets/css/static/images/v_16.jpg" alt="">
        </div>-->
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
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
              <span class="popt">即将卖空</span>
            </a>
          </li>
          <li>
            <a href="../html/malltemplate/one/home/introduction.html">
              <img src="../../assets/css/static/images/a24.jpg" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
                src="../../assets/css/static/images/gwc.png"
                alt=""
              ></div>
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
    import Vue from 'vue'
    import { Tab, Tabs } from 'vant'

    Vue.use(Tab).use(Tabs)
    export default {
        data() {
            return {
                status: 'loading',
                active: 0
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
