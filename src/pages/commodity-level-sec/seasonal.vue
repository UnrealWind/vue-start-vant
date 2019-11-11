<!-- home -->
<template>
  <van-container :tabbar="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 时令水果</div>
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
        <li v-for="(item,index) in seasonalNavData" :key="index">
          <a @click="$router.push('/fruitlist')">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <span>{{ item.title }}</span>
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
      <div v-for="(item,index) in seasonalHalfPriceData" :key="index" class="textBox">
        <a @click="$router.push('/user/productdetails')">
          <h1>{{ item.title }}装</h1>
          <p class="p1">{{ item.intro }}</p>
          <div class="flex_betweenc">
            <p class="p22"><span>特卖</span> <span>新品</span></p>
            <p class="p3">抢光了</p>
          </div>
          <div class="flex_betweenc jaiqian">
            <p class="p4">¥ {{ item.current }} <span>¥ {{ item.originalPrice }}</span></p>
            <p class="p5 flex_betweenc"><span>已售 {{ item.sell }}</span><span>库存 {{ item.inventory }} </span></p>
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
        <li v-for="(item,index) in seasonalTopOneData" :key="index" class="li1">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">{{ item.address }}</p>
              <p class="s0">___</p>
              <p class="s2">{{ item.title }}</p>
              <p class="s3">{{ item.intro }}</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">{{ item.pre }}</span>/元{{ item.weight }}装</p>
            </div>
            <img :src="item.img" alt="">
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
        <li v-for="(item,index) in seasonalHotStyleData" :key="index" class="li4">
          <a @click="$router.push('/user/productdetails')">
            <div class="contBox box_sizing">
              <p class="s1">{{ item.address }}</p>
              <p class="s0">___</p>
              <p class="s2">{{ item.title }}</p>
              <p class="s3">{{ item.intro }}</p>
              <p class="s4"><span class="s41">惊爆价</span><span class="s42">{{ item.pre }}</span>/元 {{ item.weight }}斤装
              </p>
            </div>
            <img :src="item.img" alt="">
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
      <li v-for="(item,index) in seasonalProductListData" :key="index">
        <a @click="$router.push('/user/productdetails')">
          <img class="commodityLits" :src="item.img" alt="">
          <p class="p1">{{ item.title }}</p>
          <p class="p2"><span>特卖</span> <span>新品</span></p>
          <div class="p3 flex_betweenc"><p>¥ {{ item.current }}<span>¥{{ item.pre }}</span></p><img
            src="../../assets/css/static/images/gwc2.png"
            alt=""
          ></div>
        </a>
      </li>
    </ul>
  </van-container>
</template>

<script>
  import { Icon } from 'vant'
    export default {
        components: {
            'van-icon': Icon
        },
        data() {
            return {
                status: 'loading',
                seasonalNavData: [
                    {
                        'title': '苹果',
                        'img': require('../../assets/css/static/images/a13.jpg')
                    },
                    {
                        'title': '梨',
                        'img': require('../../assets/css/static/images/a13.jpg')
                    },
                    {
                        'title': '葡萄',
                        'img': require('../../assets/css/static/images/a13.jpg')
                    },
                    {
                        'title': '香蕉',
                        'img': require('../../assets/css/static/images/a13.jpg')
                    }
                ],
                seasonalHalfPriceData: [
                    {
                        'title': '果君王 越南小青芒5斤装',
                        'intro': '青青君子金灿心',
                        'current': '50',
                        'originalPrice': '100',
                        'sell': '20', // 出售
                        'inventory': '0' // 库存
                    }
                ],
                seasonalTopOneData: [
                    {
                        'img': require('../../assets/css/static/images/timg2.jpg'),
                        'address': '宝鸡扶风',
                        'title': '青姑娘 扶风花牛苹果',
                        'intro': '可香可脆 高颜值的苹果',
                        'pre': 22.9,
                        'weight': '4.5~5斤'
                    },
                    {
                        'img': require('../../assets/css/static/images/timg2.jpg'),
                        'address': '国际庄',
                        'title': '花姑娘 扶风花牛苹果',
                        'intro': 'sssss',
                        'pre': 212.9,
                        'weight': '1斤'
                    }
                ],
                seasonalHotStyleData: [
                    {
                        'img': require('../../assets/css/static/images/timg2.jpg'),
                        'address': '国际庄',
                        'title': '这里是标题',
                        'intro': '这里是简介',
                        'pre': 10,
                        'weight': '1斤'
                    }
                ],
                seasonalProductListData: [
                    {
                        img: require('../../assets/css/static/images/timg3.png'),
                        title: '水果水果水果水果水果水果',
                        current: 123, // 现价
                        pre: 134 // 原价
                    },
                    {
                        img: require('../../assets/css/static/images/timg3.png'),
                        title: '水果水果水果水果水果水果',
                        current: 123, // 现价
                        pre: 134 // 原价
                    },
                    {
                        img: require('../../assets/css/static/images/timg3.png'),
                        title: '水果水果水果水果水果水果',
                        current: 123, // 现价
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
  .header_l {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    color: #fff;
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
      color: #fff;
    }
  }

  .swiper-wrapper .swiper-slide {
    width: 25%;
  }

  .Treasure_list2 li img {
    position: static;
    width: 100%;
    height: 100%;
  }
  .gwcLits li {
    width: 50%;
  }
  .gwcLits li .commodityLits {
    height: 5rem;
  }
  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
