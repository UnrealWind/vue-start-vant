<!-- home -->
<template>
  <van-container :status="status">

    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_l r" @click="$router.push('/user/mysearch')">
          <van-icon name="share" />
        </div>
      </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../../assets/img/lunbo1.png" alt=""></van-swipe-item>
      <van-swipe-item @click="$router.push('/supermarketzone')"> <img src="../../assets/img/lunbo1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="sale">
      <div class="wp fix">

        <div class="sale_l l">
          <div class="price"> ￥199~299 <h4> 1209~1379 </h4>  </div>
          <div class="end">
            <span> 距结束 </span> 4天 07:00：00
          </div>
        </div>

        <div class="sale_r r">
          <div class="price"> <em> 限时特卖 </em> </div>
          <div class="end">
            <span class="capsule"> </span>
            <span class="capsuleFont"> 已抢280<i> 仅剩1420</i> </span>
            <span class="capsuleBg"> </span>
          </div>
        </div>

      </div>
    </div>

    <div class="sale-white">
      <div class="wp">

        <div class="title fix">
          <span class="l">  凯司令秋梨膏2瓶凯司令秋梨膏2瓶凯司令秋梨膏2瓶凯司令秋梨膏2瓶凯司令秋梨膏 </span>
          <span class="r">  <van-icon name="like-o" /> 收藏 </span>
        </div>

        <div class="min-title"> 凯司令秋梨膏2瓶 </div>

        <div class="title_ul">
          <div class="li"> 好评率95% </div>
          <div class="li"> 一件也包邮 </div>
          <div class="li"> 月销1996件 </div>
        </div>

        <div class="sale-list fix" @click="$router.push('/productlistmin')">
          <div class="l">
            <em> 榜单 </em>
            <span> 凯司令秋梨膏2瓶 </span>
          </div>
          <span class="r"> 查看 <van-icon name="arrow" /> </span>
        </div>

      </div>
    </div>

    <div class="sale-securities" @click="$router.push('/cart/coupon')">
      <div class="wp fix">

        <div class="l">
          领劵
          <span> 满51减50 </span>
          <span> 满100减8 </span>
        </div>

        <div class="r">
          <span> 领劵 </span>
        </div>

      </div>
    </div>

    <div class="sale-specs">
      <div class="wp fix">

        <div class="li fix">
          <div class="l fix">
            <i> 规格 </i>
            <span> 请选择规格 </span>
          </div>

          <div class="r">
            <van-icon name="ellipsis" />
          </div>
        </div>

        <div class="li fix">
          <div class="l fix">
            <i>  送至 </i>
            <span> 姓名  具体地址 </span>
          </div>

          <div class="r">
            <van-icon name="ellipsis" />
          </div>
        </div>

        <div class="li fix">
          <div class="l fix">
            <i>  服务 </i>
            <span>  正品保证 | 店铺发货 | 支持7天无理由退货 | 邮费政策 | 增退货运费 </span>
          </div>

          <div class="r">
            <van-icon name="ellipsis" />
          </div>
        </div>

        <div class="li fix">
          <div class="l fix">
            <i class="font"> aaa  </i>
            <span> 30天价格保护， 降价无忧，尽享一站式服务 </span>
          </div>

          <div class="r">
            <van-icon name="ellipsis" />
          </div>
        </div>

      </div>
    </div>

    <div class="sale-evaluate">
      <div class="wp fix">

        <div class="evaluate fix">
          <div class="l">
            商品评价 <span> （124） </span>
          </div>
          <div class="r">
            <span> 好评率94% <van-icon name="arrow" /> </span>
          </div>
        </div>

        <div class="logo">
          <img src="../../assets/img/logo.jpg" alt="">
          <span> 小**爱 </span>
        </div>

        <div class="love">
          <span> <van-icon name="star" /> <van-icon name="star" /> <van-icon name="star" /> <van-icon name="star" /> <van-icon name="star" /> </span>
        </div>

        <div class="content">
          质量杠杠的，是真皮的，做工精细又美观，面料也很好，物流也很给力。颜色也很好。质量相当不错，非常完美，和图片.上描述的一-样，车险做工也很精细，款式很好看，摸起来有手感，款式好看,  背着很有气质
        </div>

        <div class="product fix">
          <div class="li">
            <img src="../../assets/img/zonetu12.png" alt="">
          </div>
          <div class="li">
            <img src="../../assets/img/zonetu12.png" alt="">
          </div>
          <div class="li">
            <img src="../../assets/img/zonetu12.png" alt="">
          </div>
          <div class="li">
            <img src="../../assets/img/zonetu12.png" alt="">
          </div>
        </div>

      </div>
    </div>

    <div class="sale-store">
      <div class="wp">

        <div class="logo fix">
          <div class="l">
            <img src="../../assets/img/logo.jpg" alt="">
            <span> 小爱旗舰店 </span>
          </div>
          <div class="r">
            进入店铺 <van-icon name="arrow" />
          </div>
        </div>

        <div class="pinpaitehui">
          <div class="swiper-container ">
            <div class="swiper-wrapper gwcLits fix">
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="sale-store">
      <div class="wp">

        <div class="logo fix">
          <div class="l">
            <strong> 为你推荐</strong>
          </div>
        </div>

        <div class="pinpaitehui">
          <div class="swiper-container ">
            <div class="swiper-wrapper gwcLits fix">
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
              <div class="swiper-slide li">
                <a href="" class="img">
                  <img src="../../assets/img/zonetu12.png" alt="">
                  <p class="p2">特卖 </p>
                </a>
                <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
                <div class="p3 flex_betweenc"><p>¥85 <span>¥39</span></p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="sale-text-details">
      <div class="wp">

        <div class="sale-title"> 图文详情 </div>

        <van-tabs v-model="active">
          <van-tab title="商品介绍 ">

            <div class="sale_order">

              <div class="title">尊敬的用户您好，因为云集双十一-大促火热开展中，导致订单发货会有延迟，感谢您的支持与理解，常规订单发货时效如下 </div>

              <div class="time">
                <div class="ul fix">
                  <div class="li"> 支付订单时间 </div>
                  <div class="li"> 发货时间 </div>
                </div>
                <div class="ul fix">
                  <div class="li"> 11.5 0:00一11.10 23:59:59期间 </div>
                  <div class="li"> 订单支付成功后48小时内 </div>
                </div>
                <div class="ul fix">
                  <div class="li"> 11.11 0:00一23:59:59期间</div>
                  <div class="li"> 订单支付成功后72小时内 </div>
                </div>
                <div class="ul fix">
                  <div class="li"> 11.12 0:00一23:59:59期间 </div>
                  <div class="li"> 订单支付成功后48小时内 </div>
                </div>
              </div>

            </div>

            <div class="sale-material">
              <div class="ul fix">
                <div class="li l"> 材质 </div>
                <div class="li r"> 牛皮 </div>
                <div class="li l"> 外形 </div>
                <div class="li r"> 横款方形 </div>
                <div class="li l"> 图案 </div>
                <div class="li r"> 纯色 </div>
                <div class="li l"> 闭合方式 </div>
                <div class="li r"> 包盖式 </div>
              </div>
            </div>

            <div class="sale-specification">
              <van-cell is-link class="span" @click="showPopup">查看完整规格</van-cell>

              <van-popup v-model="show" class="span-img">
                <img src="../../assets/img/brandtu20.png" alt="">
              </van-popup>
            </div>

            <div class="sale-specimg">
              <img src="../../assets/img/brandtu15.png" alt="">
            </div>

          </van-tab>
          <van-tab title="常见问题">

            <div class="sale-question">
              <div class="ques-title"> 购买须知 </div>

              <div class="ques-title-min"> <van-icon name="medel" /> 服务方提供说明 </div>
              <div class="pues_text">
                所有商品均有海内外认证的供应商或品牌商提供，中国人民财产保险股份有限公司为云集承保，为店主和消费者食品安全保驾护航(2018年8月7日生效)。
              </div>

              <div class="ques-title-min"> <van-icon name="invition" /> 发货与签收 </div>
              <div class="pues_text">
                <p> 1、关于发货:国内商品:订单支付后24H内发货完成。</p>
                <p> 跨境商品:当天14点前支付的订单，当天24点前发货(特殊涉及海关清关，个人信息，节假日等情况会有所延迟，敬请谅解! )。上述情况不包括店主礼包、预售商品和大促活动商品。</p>
                <p>  2、关于快递:云集仓储与多家快递公司合作，保证国内大多数地区均有快递可以送达，暂不支持指定快递。</p>
                <p> 3、关于签收:收到商品后，需要您当场验货确认无误后再签收，如果是包装完好且本人签收后再反馈少发，错发等类似问题，请自理。若非当面签收后发现异常情第一时间联系快递核实。 由于客户自身原因拒收或退货(如不想要了，买多了等)，订单收取的运费，退款不予退还，请客户慎重操作。 </p>
              </div>

              <div class="ques-title-min"><van-icon name="youzan-shield" /> 售后保障 </div>
              <div class="pues_text">
                收到商品之日起7天(含)在商品未拆封，未使用，未激活的情况下，支持售后无理由退货，跨境商品不支持七天无理由遊货。
              </div>

              <div class="ques-title-min"> <van-icon name="service" /> 联系客服 </div>
              <div class="pues_text">
                在APP直接联系在线客服。客服在线时间08:00至24:00,节假日正常工作。
              </div>

              <div class="ques-title-min"> <van-icon name="balance-list" /> 价格说明 </div>
              <div class="pues_text">
                <p>
                  划线价格:划线的价格可能是庭品的专柜吊牌价格或证明零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。
                </p>
                <p>
                  未划线价格:未划线的价格是商品在云集上销售的标价，具体的成交价格可能因使用优惠券，云币等会发生变化。最终以订单确认页价格为准。
                </p>
              </div>

              <div class="ques-title-min"> <van-icon name="umbrella-circle" /> 限购说明 </div>
              <div class="pues_text">
                <p>
                  为了维护以个人消费为目的的消费者权益，在符台法律法规的前提下，发生同一用户通过各种手段绕过平台规则进行购买或购买数量超出为生活所需购买商品的曾通消费者的合理数量的行为，商家可以认定其为异常订单。对异常订单商家可以采取包含但不限于取消订单、追回商品井退款至支付账户、不支持七天无理由退货、会员降级、账号封停等方式进行处理。
                </p>
                <p>
                  同一用户定义:包含但不限于同一账户、同-设备。相似P、相似收货地址、相似收件人。相同支付账户等维度识别为同一人。下单即表示下单人确认同意上述规则
                </p>
              </div>
            </div>
          </van-tab>
        </van-tabs>

      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/shoppingcart')" />
      <van-goods-action-icon icon="shop-o" text="进店" @click="$router.push('/store')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="$router.push('/shoppingcart')" />
      <van-goods-action-button type="danger" text="立即购买" @click="$router.push('/cart/confirm_order')" />
    </van-goods-action>
  </van-container>
</template>

<script>
  import { Swipe, SwipeItem, Icon, Tab, Tabs, Popup, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'

  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon,
        'van-tab': Tab,
        'van-tabs': Tabs,
        'van-popup': Popup,
        'van-goods-action-icon': GoodsActionIcon,
        'van-goods-action': GoodsAction,
        'van-goods-action-button': GoodsActionButton
    },
    data() {
      return {
          status: 'loading',
          active: 0,
          show: false
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
        },
        showPopup() {
            this.show = true
        }
    }
  }

</script>
<style lang='scss' scoped>

  .main{
    background: #f8f8f8;
  }
  i{
    font-style: normal;
  }
  h1 {
    background: red;
    width: 375px;
  }
  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 55px;
    background: #f2f2f2;
  }

  .van-swipe {
    img {
      display: block;
      width:100%;
    }
  }

  .header{
    .fix{
      padding-bottom: 5px;
      padding-top: 10px;
    }
    .header_l{
      position: relative;
      line-height: 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      background: rgba(0,0,0,0.5);
      .van-icon{
        font-size: 22px;
        line-height: 30px;
        color: #fff;
      }
    }
  }

  .sale{
    position: relative;
    z-index: 9;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fb1925;
    margin-top: -10px;
    border-radius: 10px 10px 0px 0px;

    .sale_l{
      color: #fff;
      .price{
        font-weight: bold;
        font-size: 16px;
        color: #f5ffff;
        line-height: 20px;
        h4{
          display: inline-block;
          color: #fbcad0;
          font-size: 12px;
          padding: 0px;
          margin: 0 auto;
          line-height: 20px;
        }
      }
      .end{
        border: 1px solid #fff;
        border-radius: 10px;
        line-height: 20px;
        margin-top: 2px;
        padding:1px 10px 0px 0px;
        span{
          display: inline-block;
          background: #fff;
          padding: 0px 10px;
          color: #d84e4c;
          border-radius: 10px 0px 0px 10px;
          position: relative;
          left: -1px;
          padding-top: 1px;
        }
      }
    }
    .sale_r{
      .price{
        color: #f6ffff;
        font-weight: bold;
        font-size: 16px;
        text-align: right;
      }
      .end{
        position: relative;
        background: #f73e2c;
        border-radius: 50px;
        line-height: 20px;
        padding: 0px 10px;
        margin-top: 5px;
      }
      .capsule{
        background: #f73e2c;
        background: rgba(247,62,44,0.1);
        width: 100%;
        color: #8a603d;
        z-index: 8;
        top: 0;
        right: 0.16rem;
        height: 20px;
      }
      .capsuleBg{
        height: 20px;
        position: absolute;
        background: #ffd9ab;
        z-index: 9;
        top: 0;
        left: 0px;
        width: 20%;
        border-radius: 50px 0px 0px 50px;
      }
      .capsuleFont{
        color: #552a0a;
        position: relative;
        width:100%;
        z-index: 10;
        i{
          color: #fff;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }

  .sale-white{
    background: #fff;
    padding: 10px 0px 10px;

    .title{
      .l{
        width: 75%;
        line-height: 24px;
        font-size: 14px;
        color: #333333;
      }
      .van-icon{
        display: inline-block;
        position: relative;
        top: 2px;
      }
      .r{
        display: block;
        background: #f8f8f8;
        line-height: 20px;
        padding: 5px 15px;
        border-radius: 50px;
        text-align: center;
      }
    }

    .min-title{
      color: #a7a7a7;
      line-height: 24px;
      font-size: 14px;
    }

    .title_ul{
      display: flex;
      flex-wrap:wrap ;
      justify-content: space-between;
      font-size: 14px;
      .li{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #aeaeae;
      }
    }

    .sale-list{
      border-radius: 5px;
      margin-top: 10px;
      background: #f8f8f8;
      line-height: 20px;
      padding: 10px 10px;

      .l{
        color: #404040;
        font-size: 14px;
        em{
          color: #2e0932;
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          padding-right: 10px;
        }
      }

      .r{
        color: #aeaeae;
        font-size: 12px;
      }
    }
  }

  .sale-securities{
    margin-top: 10px;
    background: #fff;
    line-height: 20px;
    padding: 10px 0px;
    color: #868686;
    font-size: 14px;
    .l{
      span{
        display: inline-block;
        background: #f21541;
        color: #fff;
        padding: 3px 10px 2px;
        border-radius: 50px;
        margin-left: 5px;
      }
    }

    .r{
      span{
        border: 1px solid #868686;
        padding: 3px 10px 2px;
        border-radius: 50px;
        color: #e92636;
      }
    }
  }

  .sale-specs{
    margin-top: 10px;
    background: #fff;
    line-height: 20px;
    padding: 10px 0px 0px;
    color: #868686;
    font-size: 14px;
    margin-bottom: 10px;

    .li{
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 5px;
      &:last-child{
        border-bottom: 0px;
      }
    }

    .l{
      width: 90%;
      i{
        display: block;
        width: 10%;
        float: left;
      }
      span{
        color: #313131;
        display: block;
        float: left;
        width: 90%;
        padding-left: 10px;
        color: #333333;
      }
    }

    .r{
      width: 9%;
       font-size: 20px;
      line-height: 16px;
    }
    .font{
      font-size: 0px;
    }
  }

  .sale-evaluate{
    padding: 20px 0px 10px;
    background: #fff;
    margin-bottom: 20px;

    .evaluate{
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 15px;
      span{
        font-weight: normal;
        font-size: 12px;
      }
      .l{
        span{
          color: #a7a7a7;
        }
      }
      .r{
        span{
          color: #e9001d;
        }
      }
    }

    .logo{
      img{
        display: inline-block;
        max-width: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
      span{
        position: relative;
        top: -15px;
        padding-left: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
    }

    .love{
      color: #e9001d;
      .van-icon{
        color: #e9001d;
      }
    }

    .content{
      color: #3b3b3b;
      font-size: 14px;
      line-height: 22px;
    }

    .product{
      .li{
        float: left;
        width: 25%;
      }
      img{
        display: block;
        width: 95%;
        margin: 0 auto;
        border-radius: 5px;
      }
    }

  }

  .sale-store{
    background: #fff;
    padding-top: 20px;
    margin-bottom: 10px;
    .logo{
      img{
        display: inline-block;
        max-width: 40px;
        border-radius: 10px;
        border: 1px solid #eeeeee;
        overflow: hidden;
      }
      span{
        position: relative;
        top: -15px;
        padding-left: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
      strong{
        display: block;
        position: relative;
        padding-bottom: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
      .r{
        font-size: 12px;
        color: #e9001d;
        position: relative;
        top: 10px;
      }
    }
  }

  .pinpaitehui{
    background: #fff;
    .swiper-container{
      width: 100%;
      overflow-x: scroll;
    }
    .gwcLits{
      width: 180%;
    }

    p{
      margin: 0 auto;
      margin-top: 5px;
    }
    .li img{ width: 100%;  display: block }
    .gwcLits .li{
      width: 120px;
       padding: 0px;
      float: left;
       position: relative;
       margin-right: 1%;
     }
     .gwcLits p{
       padding: 0;
       color: #191919;
      font-size: 14px;
      font-weight: bold;
      span{
        font-weight: normal;
        text-decoration: line-through;
      }
    }
    .gwcLits .p1{
      color: #838383;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      height: 40px;
      overflow: hidden;
    }
    .gwcLits{
      .img{
        display: block;
        position: relative;
        background: #eee;
        p{
          margin: 0px;
          position: absolute;
          bottom: 4px;
          left: 1px;
          border: 1px solid #f8cad7;
          color: #e30f38;
          background: #fff;
          border-radius: 50px;
          font-size: 12px;
          padding: 0px 10px;
          line-height: 20px;
        }
      }
    }
  }

  .sale-text-details{
    background: #fff;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-bottom: 10px;

    .sale-title{
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }

  }

  .van-tabs{
    padding-top: 60px;
  }

  .sale_order{
    background: #f8f8f8;
    padding: 10px 14px;
    border-radius: 5px;
    overflow: hidden;

    .title{
      color: #c92a3c;
      font-size: 12px;
      line-height: 20px;
    }

    .time{
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid #dfdfdf;
      border-bottom: 0px;
      text-align: center;
      line-height: 16px;
      .li{
        padding: 8px 5px;
        box-sizing: border-box;
        &:first-child{
          border-right: 1px solid #dfdfdf;
        }
        float: left;
        width: 50%;
        border-bottom: 1px solid #dfdfdf;
      }
    }

  }

  .sale-material{
    background: #f2f2f2;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    .li{
      padding: 8px 5px;
      box-sizing: border-box;
      border: 1px solid #ffffff;
      line-height: 18px;
    }
    .li.l{
      width: 20%;
      background: #f2f2f2;
      text-align: center;
    }
    .li.r{
      width: 80%;
      background: #f8f8f8;
    }

  }

  .sale-specification{
    color: #373737;
    text-align: center;
    margin-top: 10px;
    display: none;
    .span{
      display: inline-block;
      margin: 0 auto;
      padding: 2px 10px;
      line-height: 20px;
      border-radius: 50px;
      border: 1px solid #cccccc;
    }
    .span-img{
      img{
        display: block;
        width: 100%;
      }
    }
  }

  .sale-specimg{
    margin-top: 10px;
    img{
      display: block;
      width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

  .sale-question{
    .ques-title{
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .ques-title-min{
      font-size: 14px;
      .van-icon{
        position: relative;
        top: 5px;
        color: #f40137;
        font-size: 20px;
      }
    }

    .pues_text{
      margin-top: 10px;
      margin-bottom: 10px;
      color: #7e7e7e;
      font-size: 12px;
      line-height: 20px;
      p{
        margin: 0 auto;
      }
    }
  }

</style>

