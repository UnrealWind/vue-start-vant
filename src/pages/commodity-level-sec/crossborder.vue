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
    <div class="topHead topHead1">
      <div class="box1 p2 box_sizing">
        <div class="searchInput flex">
          <img src="../../assets/css/static/images/ss1.png" alt="">
          <input type="text" placeholder="可人儿">
        </div>
        <div class="swiper_minNav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="(item,index) in corssBorderNavData" :key="index" class="swiper-slide act">
                <van-icon name="gem-o" />
                <p>{{ item["nav-name"] }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 内容 -->
    <div class="p2 contBody_top1 mb3">
      <!-- 焦点图 -->
      <div class="swiper_tabBox">
        <div class="swiper-container1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a @click="$router.push('/user/productdetails')">
                <img src="../../assets/css/static/images/s1.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a @click="$router.push('/user/productdetails')">
                <img src="../../assets/css/static/images/s1.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a @click="$router.push('/user/productdetails')">
                <img src="../../assets/css/static/images/s1.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a @click="$router.push('/user/productdetails')">
                <img src="../../assets/css/static/images/s1.jpg" alt="">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 4大宣传 -->
      <div class="title_nav flex_betweenc mt3 p2 title_nav1">
        <p class="p1">电商国际</p>
        <p><img src="../../assets/css/static/images/pp.png" alt="">自营直采</p>
        <p><img src="../../assets/css/static/images/zp.png" alt="">正品保障</p>
        <p><img src="../../assets/css/static/images/sh.png" alt="">售后无忧</p>
      </div>
      <!-- 今日必抢 -->
      <div class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <a @click="$router.push('/productlistmin')">
              <img src="../../assets/css/static/images/t1.png" alt="">
              <p>每天09点更新</p>
            </a>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlistmin')"> 查看更多</a></div>
        </div>
        <ul class="commodityLits flex_wrap">
          <li v-for="(item,index) in corssBorderRobData" :key="index">
            <a @click="$router.push('/user/productdetails')">
              <img :src="item.img" alt="">
              <p class="title">{{ item.title }}</p>
              <p class="money flex_betweenc"><span>¥{{ item.current }}</span> <samp>赚{{ item.gain }}</samp></p>
              <span class="pop1">直降20元</span><span class="pop2">爆款</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 热门榜单 -->
      <div class="Storefront publicBox mt3 Storefront1">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <img src="../../assets/css/static/images/t2.png" alt="">
            <p>甄选热卖好物</p>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlistmin')">其他榜单</a></div>
        </div>
        <ul class="bangdanBox flex_betweenc mt3">
          <li v-for="(item,index) in corssBorderHotListData" :key="index" class="li1">
            <p class="imgBox flex_center"><a @click="$router.push('/productlistmin')"> <img
              :src="item.img"
              alt=""
            > </a></p>
            <p class="text"><a @click="$router.push('/productlistmin')">{{ item.title }}</a></p>
          </li>
        </ul>
        <ul v-for="(item,index) in corssBorderHotListData" :key="index" class="bangdan2 flex_betweenc">
          <li class="flex_betweenc li1">
            <p class="flex_center"><img :src="item.img" alt=""></p>
            <a @click="$router.push('/user/productdetails')">{{ item.title }}></a>
          </li>
        </ul>
      </div>
      <!-- 种草推荐 -->
      <div class="tuijianBox publicBox mt3">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <h1>种草推荐</h1>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/shoppingcart')">更多></a></div>
        </div>
        <a @click="$router.push('/shoppingcart')"> <img :src="corssBorderRecommendData.img" alt="" class="img1">
        </a>
        <div class="title flex">
          <a @click="$router.push('/shoppingcart')"><p>#护肤</p><span>{{ corssBorderRecommendData.title }}</span> </a>
        </div>
        <div class="cont box_sizing">
          <a @click="$router.push('/shoppingcart')"><p class="textOver2">
            {{ corssBorderRecommendData.intro }}。</p></a>
        </div>
        <div class="name_box flex_betweenc mt3">
          <div class="flex">
            <img src="../../assets/css/static/images/a9.jpg" alt=""><img
              src="../../assets/css/static/images/a10.jpg"
              alt=""
            ><img
              src="../../assets/css/static/images/a9.jpg"
              alt=""
            >
            <p>{{ corssBorderRecommendData.people }}+人在参加</p>
          </div>
          <a @click="corssBorderRecommendData.path"> 查看详情</a>
        </div>
      </div>
      <!-- 逛全球 -->
      <div class="publicBox mt3 StrollGlobal">
        <div class="flex_betweenc  Storefront_cont">
          <div class="box1 flex">
            <h1>逛全球</h1>
            <p>带你发现全球好物</p>
          </div>
          <div class="box2 flex_center"><a @click="$router.push('/productlist')">更多></a></div>
        </div>
        <ul class="commodityLits flex_wrap commodityLits_nav">
          <li v-for="(item,index) in corssBorderStateData" :key="index">
            <a @click="$router.push('/productlist')">
              <p class="flex_center"><img :src="item.img" alt=""></p>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 品牌 -->
      <ul class="publicBox logo_ification flex_wrap mt3">
        <li v-for="(item,index) in corssBorderBrandData" :key="index">
          <a @click="$router.push('/store')">
            <p class="p1 flex_center"><img :src="item.img" alt=""></p>
            <p class="p2"></p>
            <p class="p3">{{ item.name }}</p>
          </a>
        </li>
      </ul>
      <!-- 今日推荐 -->
      <div class="mt3"><h1 style="font-size: 0.3rem">今日推荐</h1></div>
      <ul class="flex_wrap gwcLits">
        <li v-for="(item,index) in corssBorderProductListData" :key="index">
          <a @click="$router.push('/user/productdetails')">
            <img :src="item.img" alt="" class="commodityList">
            <p class="p1">{{ item.title }}</p>
            <p class="p2"><span>特卖</span> <span>新品</span></p>
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
                corssBorderNavData: [
                    {
                        'img': '/',
                        'nav-name': '精选'
                    },
                    {
                        'img': '/',
                        'nav-name': '护肤产品'
                    }
                ],
                corssBorderRobData: [
                    {
                        img: require('../../assets/css/static/images/kj1 (1).png'),
                        title: 'GU极优女装珊瑚',
                        current: '155',
                        gain: 10 // 赚  利润
                    }
                ],
                corssBorderHotListData: [
                    {
                        img: require('../../assets/css/static/images/kj1 (5).png'),
                        title: '人气面膜榜',
                        path: '/productlistmin'
                    }
                ],
                corssBorderProductListData: [
                    {
                        'img': require('../../assets/css/static/images/a24.jpg'),
                        'title': 'Touch Miss日系小浪漫与温暖羊毛针织',
                        'current': 123, // 现价
                        'pre': 134 // 原价
                    }
                ],
                corssBorderBrandData: [
                    {
                        'img': require('../../assets/css/static/images/a11.jpg'),
                        'name': '兰蔻'
                    }
                ],
                corssBorderStateData: [
                    {
                        'img': require('../../assets/css/static/images/guoqi.jpg'),
                        'name': '中国'
                    }
                ],
                corssBorderRecommendData: {
                    'img': require('../../assets/css/static/images/a8.jpg'),
                    'title': 'welade金板凳花儿婴儿护肤品',
                    'intro': '兰蔻1935年诞生于法国,凭借着凭借着凭借着凭借着对香水的天才敏感嗅觉、执着不懈的冒险精神',
                    'path': '/shoppingcart',
                    'people': '165222'
                }
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
    background-color: #ac45f8;
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
  .van-icon {
    color: #fff;
    font-size: 18px;
  }

  .gwcLits li {
    width: 50%;
  }

  .gwcLits li .commodityList {
    height: 5rem;
  }

  .imgBox img {
    margin-left: 20px;
  }

  @import "../../assets/css/static/css/app.css";
  @import "../../assets/css/static/css/style.css";
  @import "../../assets/css/static/css/swiper.min.css";

</style>
