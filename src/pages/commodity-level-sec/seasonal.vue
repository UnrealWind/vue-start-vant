<!-- home -->
<template>
  <van-container :tabbar="true" :status="status">
    <div slot="header" class="fix">
      <div class="fixedHead flex_center box_sizing fixedHead1">
        <p class="flex_center img1" onClick="javascript:history.back(-1);"><img
          src="../../assets/css/static/images/zuo1.png"
          alt=""
        ></p>
        <p>时令水果</p>
        <p class="flex_center img2"><img src="../../assets/css/static/images/fx1.png" alt="" class="fximg"></p>
      </div>
    </div>
    <div class="topHead2">
      <div class="box2"></div>
    </div>
    <div class="p2 FruitsBox contBody_top2">
      <!-- 1 -->
      <div class="imgBox">
        <img src="../../assets/css/static/images/a12.jpg" alt="">
      </div>
      <!-- 4大宣传	 -->
      <div class="title_nav mt3 flex_betweenc">
        <p><img src="../../assets/css/static/images/z.png" alt="">产地直采</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">品质保证</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">应季时令</p>
        <p><img src="../../assets/css/static/images/z.png" alt="">售后无忧</p>
      </div>
      <ul class="commodityLits flex_wrap commodityLits_nav">
        <li>
          <a href="#/fruitlist">
            <p class="flex_center"><img src="../../assets/css/static/images/a13.jpg" alt=""></p>
            <span>苹果</span>
          </a>
        </li>
        <li>
          <a @click="$router.push('/fruitlist')">
            <p class="flex_center"><img src="../../assets/css/static/images/a13.jpg" alt=""></p>
            <span>苹果</span>
          </a>
        </li>
        <li>
          <a @click="$router.push('/fruitlist')">
            <p class="flex_center"><img src="../../assets/css/static/images/a13.jpg" alt=""></p>
            <span>苹果</span>
          </a>
        </li>
        <li>
          <a @click="$router.push('/fruitlist')">
            <p class="flex_center"><img src="../../assets/css/static/images/a13.jpg" alt=""></p>
            <span>苹果</span>
          </a>
        </li>
        <li class="more">
          <a @click="$router.push('/fruitlist')">
            <p class="flex_center"><img src="../../assets/css/static/images/more.png" alt=""></p>
            <span>更多分类</span>
          </a>
        </li>
      </ul>
      <div class="tongzhi flex">
        <img src="../../assets/css/static/images/tz.png" alt="">水果时令小贴士:吃什么，怎么吃，看这里..
      </div>
      <!-- 半价试吃 -->
      <div class="tuijian2 flex_center">
        <p class="p1">半价试吃</p>
        <p class="p2">每天三波福利 新鲜来袭</p>
      </div>
    </div>
    <!-- 时间滑动 -->
    <div class="swiper_time">
      <div class="month flex_center">
        <div>
          <h1>13日</h1>
          <p>10月</p>
        </div>
      </div>
      <div class="swiper_minNav">
        <div class="swiper-container swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>09:00</h1>
                <p>已抢购</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>10:00</h1>
                <p>已抢购</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>11:00</h1>
                <p>已抢购</p>
              </div>
            </div>
            <div class="swiper-slide flex_center act">
              <div class="box-time">
                <h1>12:00</h1>
                <p>抢购中</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>24日</h1>
                <p>10月</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>09:00</h1>
                <p>即将开始</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>09:00</h1>
                <p>已抢购</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>09:00</h1>
                <p>已抢购</p>
              </div>
            </div>
            <div class="swiper-slide flex_center">
              <div class="box-time">
                <h1>09:00</h1>
                <p>已抢购</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 半价试吃 -->
    <div class="TryToEat">
      <div class="imgBox">
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg.jpg" alt="" class="img1">
          <p class="pop box_sizing">半价试吃</p>
          <p class="qiang flex_center">抢光了</p>
        </a>
      </div>
      <div class="textBox">
        <a @click="$router.push('/user/productdetails')">
          <h1>果君王 越南小青芒5斤装</h1>
          <p class="p1">青青君子金灿心</p>
          <div class="flex_betweenc">
            <p class="p22"><span>特卖</span> <span>新品</span></p>
            <p class="p3">抢光了</p>
          </div>
          <div class="flex_betweenc jaiqian">
            <p class="p4">¥155 <span>¥199</span></p>
            <p class="p5 flex_betweenc"><span>已售100%</span><span>库存0</span></p>
          </div>
        </a>
      </div>
    </div>
    <!-- 镇店之宝 -->
    <div class="p2">
      <div class="tuijian2 flex_center">
        <p class="p1">镇店之宝</p>
        <p class="p2">每天三波福利 新鲜来袭</p>
      </div>
      <ul class="Treasure_list Treasure_top">
        <li class="li1">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自宝鸡扶风</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 高颜值的苹果</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg2.jpg" alt="">
          </a>
        </li>
        <li class="li2">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自宝鸡扶风</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 高颜值的苹果</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg2.jpg" alt="">
          </a>
        </li>
        <li class="li3">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自宝鸡扶风</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 高颜值的苹果</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg2.jpg" alt="">
          </a>
        </li>
      </ul>
    </div>
    <!-- 爆款直降 -->
    <div class="p2">
      <div class="tuijian2 flex_center">
        <p class="p1">爆款直降</p>
        <p class="p2">每天三波福利 新鲜来袭</p>
      </div>
      <ul class="Treasure_list Treasure_top Treasure_list2">
        <li class="li4">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自云南丽江</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 鲜艳多人</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg3.png" alt="">
          </a>
        </li>
        <li class="li5">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自云南丽江</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 鲜艳多人</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg3.png" alt="">
          </a>
        </li>
        <li class="li6">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">源自云南丽江</p>
              <p class="s0">___</p>
              <p class="s2">青姑娘 扶风花牛苹果</p>
              <p class="s3">可香可脆 鲜艳多人</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">22.9</span>/元4.5-5斤装</p>
            </div>
            <img src="../../assets/css/static/images/timg3.png" alt="">
          </a>
        </li>
      </ul>
    </div>
    <!-- 精选 -->
    <div class="p2">
      <div class="jingxuanBox flex">
        <p class="flex"><img src="../../assets/css/static/images/jx2.jpg" alt="">精选</p>
        <a href="javascript:;">逛一逛更多商品</a>
      </div>
    </div>
    <div class="tuijianNav flex p2">
      <div class="box flex_wrap">
        <p class="act">苹果梨</p>
        <p>甘油橙子</p>
        <p>迷糊桃</p>
        <p>鞋包</p>
        <p>内衣配饰</p>
        <p>服装</p>
        <p>美妆个护</p>
        <p>鞋包</p>
        <p>内衣配饰</p>
      </div>
      <div class="more flex_center"><img src="../../assets/css/static/images/xia.png" alt=""></div>
    </div>
    <ul class="flex_wrap gwcLits gwcLits_SG">
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
      <li>
        <a @click="$router.push('/user/productdetails')">
          <img src="../../assets/css/static/images/timg3.png" alt="">
          <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
    </ul>
  </van-container>
</template>

<script>
    export default {
        data() {
            return {
                status: 'loading'
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    // await this.login()
                    // await this.getFruitData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async login() {
                // fydebug 这里必须进行登录之后才能够查询到数据，先放在这里,也不知道一个post请求为啥参数不放在requestbody里
                const res = await this.$http.post(`login?username=17342062325&password=123456&rememberMe=true`, {
                    username: '17342062325',
                    password: '123456',
                    rememberMe: true
                })
                console.log(res)
            },
            async getFruitData() {
                const res = await this.$http.post('product/content/list')
                console.log(res)
            }
        }
    }

</script>
<style lang='scss' scoped>
  .fix {
    background-color: #04c16f;
    height: 37.5px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
