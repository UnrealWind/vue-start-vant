<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 香水彩妆秋 上新 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/static/introduction')"> <img src="../assets/img/perfume.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap">
      <div class="wp">
        <div class="nav_ul fix">
          <div class="li l">
            <div class="wrap">
              <div class="top fix">
                <div class="topl l"> ¥ <span> 20 </span>  </div>
                <div class="topr r">
                  <div class="title"> 满99元可用 </div>
                  <p> 立即领取 </p>
                </div>
              </div>
              <div class="bot_title">瓷妆优惠券满99减20  </div>
            </div>
          </div>
          <div class="li r">
            <div class="wrap">
              <div class="top fix">
                <div class="topl l"> ¥ <span> 20 </span>  </div>
                <div class="topr r">
                  <div class="title"> 满99元可用 </div>
                  <p> 立即领取 </p>
                </div>
              </div>
              <div class="bot_title">瓷妆优惠券满99减20  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap">
      <div class="wp">
        <div class="nav_ul fix">
          <div class="li">
            <div class="wrap">
              <div class="top fix">
                <div class="topl l"> ¥ <span> 20 </span>  </div>
                <div class="topr r">
                  <div class="title"> 满99元可用 </div>
                  <p> 立即领取 </p>
                </div>
              </div>
              <div class="bot_title">瓷妆优惠券满99减20  </div>
            </div>
          </div>
          <div class="li">
            <div class="wrap">
              <div class="top fix">
                <div class="topl l"> ¥ <span> 20 </span>  </div>
                <div class="topr r">
                  <div class="title"> 满99元可用 </div>
                  <p> 立即领取 </p>
                </div>
              </div>
              <div class="bot_title">瓷妆优惠券满99减20  </div>
            </div>
          </div>
          <div class="li">
            <div class="wrap">
              <div class="top fix">
                <div class="topl l"> ¥ <span> 20 </span>  </div>
                <div class="topr r">
                  <div class="title"> 满99元可用 </div>
                  <p> 立即领取 </p>
                </div>
              </div>
              <div class="bot_title">瓷妆优惠券满99减20  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav_box3 dan_wrap">
      <div class="wp">
        <div class="title">爆款推荐口碑精选</div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap">
      <div class="wp">
        <div v-for="(vip,index) in vipData" :key="`${vip.type}-${index}`" class="navdan_box4" @click="$router.push('/static/introduction')">
          <commodity
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="vip.vipPriceDiscribe"
            :btn-go="vip.btnGo"
          >
          </commodity></div>
      </div>
    </div>

  </van-container>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant'
  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
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
  .dan_wrap{ .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }
  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }
  .nav_box{
    background: #ffe3e7;
    .nav_ul{ padding-top: 8px; }
    .li{
      width: 48%;
      background: #ffe4ad;
    }
    .top{
      padding: 12px 10px 0px;
      border-bottom: 1px dashed #dcc38d;
      padding-bottom: 10px;
    }
    .bot_title{
      padding: 5px 10px;
      color: #a15718;
      text-align: center;
    }
    .topl{
      color: #fd5105;
      font-size: 12px;
      span{ font-size: 30px; }
    }
    .topr{ text-align: right;
      .title{
        color: #d76121;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 5px;
      }
      p{
        margin: 0 auto;
        background: #e22d9e;
        color: #fff;
        display: inline-block;
        padding: 5px 20px;
        border-radius: 50px;
        font-size: 12px;
      }
    }
  }

  .nav_box2{
    background: #ffe3e7;
    .nav_ul{ padding-top: 8px; display: block;
      justify-content:space-around;}
    .li{
      width: 32%;
      display: inline-block;
      background: #ffe4ad;
    }
    .top{
      padding: 12px 5px 0px;
      border-bottom: 1px dashed #dcc38d;
      padding-bottom: 10px;
    }
    .bot_title{
      padding: 5px 5px;
      color: #a15718;
      text-align: center;
    }
    .topl{
      color: #fd5105;
      font-size: 12px;
      position: relative;
      top:10px;
      span{ font-size: 22px; }
    }
    .topr{ text-align: right;
      .title{
        color: #d76121;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 5px;
      }
      p{
        margin: 0 auto;
        background: #e22d9e;
        color: #fff;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 50px;
        font-size: 12px;
      }
    }
  }

  .nav_box3{
    background: #e28eca;
    color: #fff;
    text-align: center;
    line-height: 52px;
    font-size: 20px;
  }

  .nav_box4{ background: #ffe3e7; padding-bottom: 1px; padding-top: 10px; }
  .navdan_box4{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

</style>
