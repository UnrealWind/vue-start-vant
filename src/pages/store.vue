<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l l" @click="$router.back()"> <van-icon name="arrow-left" />  </div>
      <div class="hesde_l2 l">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="hesde_l3 r"> <van-icon name="share" />  </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="storetubj img"><img src="../assets/img/storetubj.png" alt=""> </div>
      <div class="wp">

        <div class="nav_header fix">
          <div class="nav_l l">
            <a href="" class="img"> <img src="../assets/img/storetu1.png" alt=""> </a>
          </div>
          <div class="nav_c l">
            <a href="" class="title"> 裂帛旗舰店 </a>
            <a href="" class="titlemin"> 在线商品<span>350 </span> 粉丝数量<span>3333 </span> </a>
          </div>
          <div class="nav_r r">
            <a href=""> <van-icon name="like-o" /> 关注 </a>
          </div>
        </div>

        <div class="nav_coupons">
          <div class="nav_ul fix">
            <div class="li">
              <div class="fix">
                <div class="nav_l l">
                  <a href="" class="title">  <em>￥</em><i>40</i> <span> 全店通用 </span>   </a>
                  <a href="" class="titlemin"> 满199可用 </a>
                </div>
                <div class="nav_r r">
                  <a href=""> 立即领取 </a>
                </div>
              </div>
            </div>
            <div class="li">
              <div class="fix">
                <div class="nav_l l">
                  <a href="" class="title">  <em>￥</em><i>40 </i> <span> 全店通用 </span>   </a>
                  <a href="" class="titlemin"> 满199可用 </a>
                </div>
                <div class="nav_r r on">
                  <a href=""> 已 抢 光 </a>
                </div>
              </div>
            </div>
            <div class="li">
              <div class="fix">
                <div class="nav_l l">
                  <a href="" class="title">  <em>￥</em><i>40</i> <span> 全店通用 </span>   </a>
                  <a href="" class="titlemin"> 满199可用 </a>
                </div>
                <div class="nav_r r">
                  <a href=""> 立即领取 </a>
                </div>
              </div>
            </div>
            <div class="li">
              <div class="fix">
                <div class="nav_l l">
                  <a href="" class="title">  <em>￥</em><i>40 </i> <span> 全店通用 </span>   </a>
                  <a href="" class="titlemin"> 满199可用 </a>
                </div>
                <div class="nav_r r on">
                  <a href=""> 已 抢 光 </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nav_cou_img">
          <div class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/storetu12.png" alt=""> </div>
        </div>

        <div class="navc_title">
          <a href="" class="title"> <img src="../assets/img/storetu14.png" alt=""> 必抢爆款 </a>
        </div>

        <div v-for="(vip,index) in vipData" :key="`${vip.type}-${index}`" class="navdan_box4" @click="$router.push('/static/introduction')">
          <commodity
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="false"
            :btn-go="vip.btnGo"
          >
          </commodity>
        </div>

        <div class="nav_box8 dan_wrap">
          <div class="nav_li fix wp">
            <div class="li active"> 综合  </div>
            <div class="li"> 上新 </div>
            <div class="li"> 价格 <span>  <van-icon name="arrow-up" class="fon-icon12" /> <van-icon name="arrow-down" class="fon-icon13" /> </span> </div>
            <div class="li">  <van-icon name="qr" class="fon-icon" />  </div>
          </div>
        </div>

        <div class="wp">
          <ul class="flex_wrap gwcLits ">
            <li>
              <a href="javascript:;">
                <img src="../../public/static/750商城/images/timg3.png" alt="">
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <p class="p2"><span>特卖</span> <span>新品</span></p>
                <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/static/750商城/images/timg3.png" alt="">
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <p class="p2"><span>特卖</span> <span>新品</span></p>
                <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/static/750商城/images/timg3.png" alt="">
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <p class="p2"><span>特卖</span> <span>新品</span></p>
                <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/static/750商城/images/timg3.png" alt="">
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <p class="p2"><span>特卖</span> <span>新品</span></p>
                <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
import { Icon, Search } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-search': Search
    },
    data() {
      return {
          status: 'loading',
          value: '',
          vipData: [
              {
                  'type': 'list-vip',
                  'discribe': '领券立减20元滋润护唇',
                  'title': '瓷妆润唇膏情侣套装',
                  'vipPriceDiscribe': {
                      'type': '已告罄'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu16.png')
              },
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu12.png')
              }
          ]
      }
    },
    computed: {
    },
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
  @import "../../public/static/750商城/css/app.css";
  @import "../../public/static/750商城/css/style.css";

  h1 {
    background: red;
    width: 375px;
  }
  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .img{  display: block; }
  .img img{ display: block; width: 100%; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .dan_wrap{ background: #f2f2f2; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }

  .header{
    .fix{
      padding-bottom: 10px;
    }
  }

  .hesde_l{
    margin-right: 20px;
    line-height: 38px;
    padding-top: 12px;
    line-height: 20px;
    .van-icon{
      font-size: 20px;
      line-height: 20px;
    }
  }
  .hesde_l3{
    display: none;
    padding-top: 10px;
    padding-right: 10px;
    .van-icon{ font-size: 20px; }
  }
  .van-search{ padding: 0px!important; }
  .hesde_l2{
    position: relative;
    border-radius: 50px;
    padding-top: 10px;
    width: 75%;
    .van-search{
      border-radius: 50px;
    }
    .p{
      position: absolute;
      right: 10px;
      top: 4px; }
  }
  .van-search__content{
    border-radius: 50px;
  }
  .van-search .van-cell{
    padding: 1px 0px;
  }

  .nav_box{
    position: relative;
    .wp{
      position: relative;
      z-index: 4;
    }
  }
  .storetubj{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    overflow: hidden;
  }
  .nav_box {
    padding-bottom: 10px;
    padding-top: 80px;
    background:#f2f2f2;
    background-size: contain;
    position: relative;
    z-index: 3;
    .nav_header{
      .nav_l{
        width: 15%;
        img{  border-radius: 10px;}
      }
      .nav_c{
        padding-left: 20px;
        a{
          display: block;
          color: #fff;
        }
        .title{
          font-size: 20px;
          line-height: 30px;
        }
        .titlemin{
          font-size: 14px;
          line-height: 20px;
        }
      }
      .nav_r{
        a{
          color: #fff;
          background: #fd5e5b;
          padding: 5px 15px;
          line-height: 20px;
          border-radius: 50px;
          position: relative;
        }
        i{
          position: relative;
          top: 3px;
        }
      }
    }

  }

  .nav_coupons{ margin-top: 10px;
    width: 100%;
    overflow-x: hidden;
    .nav_ul{ width: 1000%;
      .li{
        display: inline-block;
        background: #fff;
        border-radius: 10px;
        padding-left: 10px;
        height: 62px;
        overflow: hidden;
        margin-right: 10px;
      }
      a{ display: block }
      .titlemin{
        border-top: 2px solid #f0f0f0;
      }
    }
    .nav_l {
      padding-right: 20px;
      .title{
        line-height: 20px;
        color: #e61340;
        padding-top: 10px;
      }
      em,i{
        font-style: normal;
      }
      i{
        font-size: 20px;
        font-weight: bold;
      }
      em{
        position: relative;
        top: -5px;
      }
      .titlemin{
        color: #808080;
        line-height: 20px;
      }
    }
    .nav_r{
      color: #fff;
      height: 70px;
      background: #f11038;
      a{
        background: #f11038;
        padding: 10px 10px;
        writing-mode: vertical-lr;
        text-align: center;
        box-sizing: border-box;
      }
    }
    .nav_r.on{
      background: #ff5a5e;
      a{
        background: #ff5a5e;
      }
    }
  }

  .nav_cou_img{
    padding-bottom: 20px;
    padding-top: 40px;
    .img{
      img{
        border-radius: 10px;
      }
    }
  }

  .navc_title{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    a{
      display: inline-block;
      box-sizing: border-box;
      img{
        display: inline-block;
        width: 20px;
        position: relative;
        top: 2px;
      }
    }
  }

  .navdan_box4{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    h4{
      color: #fff;
    }
  }

  .nav_box8 .nav_li{
    display: block;
    .li{
      width: 25%; float: left;
      margin:0 auto;
      margin-bottom:10px;
      text-align: center;
      font-size: 12px;
      line-height: 30px;
      padding: 0px;
      color:#202020;
      font-size:14px; }
    .li.active {
      color: #c41b3a;
    }
    .fon-icon{
      font-size: 20px;
      position: relative;
      top: 4px;
    }

    span{
      display: inline-block;
      position: relative;
      .fon-icon12{
        display: block;
        position: absolute;
        top: -15px;
        left: 0px;
      }
      .fon-icon13{
        display: block;
        position: absolute;
        top: -7px;
        left: 0px;
      }
    }
  }

</style>
