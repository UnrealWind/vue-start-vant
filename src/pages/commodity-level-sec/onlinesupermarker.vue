<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 在线超市</div>
      </div>
    </div>
    <div class="topHead2 topHead3 ">
      <div class="box2"></div>
    </div>

    <!-- 内容 -->
    <div class="p2 FruitsBox contBody_top2 OnlineBox">
      <!-- 1 -->
      <div class="searchInput flex">
        <img src="../../assets/css/static/images/ss.png" alt="">
        <input type="text" placeholder="搜索超市商品">
      </div>
      <!-- 4大宣传	 -->
      <div class="title_nav mt3 flex_betweenc ">
        <p><img src="../../assets/css/static/images/z1.png" alt="">产地直采</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">品质保证</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">应季时令</p>
        <p><img src="../../assets/css/static/images/z1.png" alt="">售后无忧</p>
      </div>
      <div class="imgBox">
        <img src="../../assets/css/static/images/a14.jpg" alt="">
      </div>
      <div class="flex_center songzaocan">
        <a @click="$ruter.push('/supermarket')">
          &gt;&gt;&gt; 电商超市天天送早餐拉！&lt;&lt;&lt;
        </a>
      </div>
      <ul class="commodityLits flex_wrap commodityLits_nav">
        <li v-for="(item,index) in supermarketlistData" :key="index">
          <a @click="$ruter.push('/supermarketlist')">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>
      <!-- 必墩好货 -->
      <div class="everyday_shop flex">
        <h1>必囤好货</h1> <span>超值每日分享</span>
      </div>
      <div class="pinpaitehui pinpaitehui1">
        <div class="swiper_time">
          <div class="swiper_minNav">
            <div class="swiper-container swiper-container2 swiper-container-horizontal">
              <div class="swiper-wrapper gwcLits">
                <li v-for="(item,index) in supermarketGoodStuffData" :key="index" class="swiper-slide">
                  <a @click="$router.push('/user/productdetails')">
                    <p class="imgbj"><span>直降<br>¥9</span></p>
                    <img :src="item.img" alt="">
                    <p class="p2"><span>电商11.11</span></p>
                    <p class="p1">{{ item.title }}</p>
                    <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="everyday_shop flex">
        <h1>超市必抢</h1> <span>超值每日分享</span>
      </div>
      <!-- 时间滑动 -->
      <div class="swiper_time swiper_time1">
        <div class="month flex_center">
          <div>
            <h1>13日</h1>
            <p>10月</p>
          </div>
        </div>
        <div class="swiper_minNav">
          <div class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>09:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>10:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>11:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center act">
                <div class="box-time">
                  <h1>12:00</h1>
                  <p>抢购中</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>24日</h1>
                  <p>10月</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>09:00</h1>
                  <p>即将开始</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>09:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>09:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
              <div class="timeLists swiper-slide flex_center">
                <div class="box-time">
                  <h1>09:00</h1>
                  <p>已抢购</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="flex_wrap gwcLits gwcLits_zxcs">
        <li v-for="(item,index) in supermarketGoodStuffData" :key="index">
          <a @click="$router.push('/user/productdetails')">
            <img :src="item.img" alt="">
            <p class="p2"><span>特卖</span></p>
            <p class="p1">{{ item.title }}</p>
            <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>
          </a>
        </li>
      </ul>

      <!-- 超值好物 -->
      <div class="everyday_shop flex">
        <h1>超值好物</h1> <span>超值每日分享</span>
      </div>
      <div class="SuperValue publicBox">
        <div class="box">
          <div class="title_super flex">
            <a @click="$router.push('/supermarket')">
              <h1>拼团</h1>
              <p class="flex">2人团9.9包邮<span>></span></p>
            </a>
          </div>
          <ul class="flex_betweenc jiujiu">
            <li><a @click="$router.push('/supermarket')"> <img src="../../assets/css/static/images/a17.jpg" alt="">
              <p>¥9.9</p></a></li>
            <li><a @click="$router.push('/supermarket')"> <img src="../../assets/css/static/images/a17.jpg" alt="">
              <p>¥9.9</p></a></li>
            <li><a @click="$router.push('/supermarket')"> <img src="../../assets/css/static/images/a17.jpg" alt="">
              <p>¥9.9</p></a></li>
          </ul>
        </div>
        <div class="boximg flex">
          <div class="boxa">
            <div class="title_super flex">
              <a @click="$router.push('/supermarketzone')">
                <h1>任选</h1>
                <p class="flex">低至99选10<span>></span></p>
              </a>
            </div>
            <div class="imim flex_center">
              <a @click="$router.push('/supermarketzone')">
                <img src="../../assets/css/static/images/a18.jpg" alt="">
              </a>
            </div>
          </div>
          <div class="boxa">
            <div class="title_super flex">
              <a @click="$router.push('/supermarket')">
                <h1>量贩</h1>
                <p class="flex">2人团9.9包邮<span>></span></p>
              </a>
            </div>
            <div class="imim flex_center">
              <a @click="$router.push('/supermarket')">
                <img src="../../assets/css/static/images/a18.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌特惠 -->
      <div class="everyday_shop flex">
        <h1>品牌特惠</h1> <span>超值每日分享</span>
      </div>
      <div class="pinpaitehui">
        <a @click="$router.push('/supermarket')">
          <img src="../../assets/css/static/images/a19.jpg" alt="" class="head">
        </a>
        <div class="swiper_time">
          <div class="swiper_minNav">
            <div class="swiper-container swiper-container2 swiper-container-horizontal">
              <div class="swiper-wrapper gwcLits">
                <li v-for="(item,index) in supermarketGoodStuffData" :key="index" class="swiper-slide">
                  <a @click="$router.push('/user/productdetails')">
                    <img :src="item.img" alt="">
                    <p class="p2"><span>特卖</span></p>
                    <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p></div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav_zaixan flex">
        <p class="act"><a href="javascript:;">精选推荐</a><span></span></p>
        <p><a href="javascript:;">食品生鲜</a><span></span></p>
        <p><a href="javascript:;">个人护理</a><span></span></p>
        <p><a href="javascript:;">家具家居</a><span></span></p>
        <p><a href="javascript:;">母婴</a><span></span></p>
      </div>
      <div class="nav_zaixan_title">
        <p>精选推荐</p>
      </div>
      <ul class="flex_wrap gwcLits gwcLits_nav">
        <li v-for="(item,index) in supermarketGoodStuffData" :key="index">
          <a @click="$router.push('/user/productdetails')">
            <img :src="item.img" alt="">
            <p class="p2"><span>特卖</span></p>
            <p class="p1">{{ item.title }}</p>
            <div class="p3 flex_betweenc"><p>¥{{ item.current }} <span>¥{{ item.pre }}</span></p><img
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
    import { Icon } from 'vant'
    export default {
        components: {
            'van-icon': Icon
        },
        data() {
            return {
                status: 'loading',
                supermarketlistData: [
                    {
                        'img': require('../../assets/css/static/images/a15.jpg'),
                        'title': '奶品饮料'
                    },
                    {
                        'img': require('../../assets/css/static/images/a15.jpg'),
                        'title': '生鲜肉类'
                    },
                    {
                        'img': require('../../assets/css/static/images/a15.jpg'),
                        'title': '新鲜果蔬'
                    },
                    {
                        'img': require('../../assets/css/static/images/a15.jpg'),
                        'title': '休闲零食'
                    }
                ],
                supermarketGoodStuffData: [
                    {
                        'img': require('../../assets/css/static/images/a20.jpg'),
                        'title': '口红口红口红',
                        'current': 85, // 现价
                        'pre': 134 // 原价
                    },
                    {
                        'img': require('../../assets/css/static/images/a20.jpg'),
                        'title': '口红口红口红',
                        'current': 85, // 现价
                        'pre': 134 // 原价
                    },
                    {
                        'img': require('../../assets/css/static/images/a20.jpg'),
                        'title': '口红口红口红',
                        'current': 85, // 现价
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
    background-color: #0a6b5a;
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

  .timeLists {
    width: 25%;
  }

  .swiper-slide {
    width: 32%;
    margin-right: 10px;
  }

  .gwcLits_zxcs li img {
    margin-bottom: 5px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";
</style>
