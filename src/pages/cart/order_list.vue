<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 订单列表 </div>
      </div>
    </div>

    <div class="dan_wrap fix">
      <van-tabs v-model="active">
        <van-tab title="全部">

          <div v-for="(shop, index) in NavList" :key="index" class="card_top">
            <div class="wp">

              <!-- 店铺标题-->
              <div class="title fix"> <van-icon name="friends" />  {{ shop.label }} <a class="r">  {{ shop.state }} </a>  </div>

              <!--卡片-->
              <div v-for="(commodity, idx) in shop.commodity" :key="idx" class="list_wrap">

                <van-card
                  :num="1"
                  :price="commodity.price"
                  :desc="commodity.desc"
                  :title="commodity.title"
                  :thumb="commodity.img"
                >
                  <div slot="tags" class="tags">
                    <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                  </div>

                  <div slot="footer">
                    <van-button size="mini" class="font_bottom active"> {{ commodity.pay }} </van-button>
                    <van-button size="mini" class="font_bottom" @click="$router.push('/cart/stepspage')">  {{ commodity.statelogistics }}  </van-button>
                    <van-button size="mini" class="font_bottom">  {{ commodity.statedelete }}   </van-button>
                  </div>

                </van-card>

                <div class="font_top">
                  共 {{ commodity.num }} 件商品 应付款：<span>￥{{ commodity.price }}</span>  （含运费0.00）
                </div>
              </div>
            </div>

          </div>

        </van-tab>
        <van-tab title="待付款">

          <div class="card_top">
            <div class="wp">
              <div class="title fix"> <van-icon name="friends" />云妈妈公益 <a class="r"> 待付款 </a>  </div>

              <van-card
                num="1"
                price="59.00"
                desc="颜色男款-白色尺码: (男170女165 )"
                title="南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花.."
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags" class="tags">
                  <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                </div>

                <div slot="footer">
                  <van-button size="mini" class="font_bottom active"> 付款 </van-button>
                </div>
              </van-card>

              <div class="font_top">
                共一件商品 应付款：<span>￥59.00</span>  （含运费0.00）
              </div>

            </div>
          </div>

        </van-tab>
        <van-tab title="待发货">

          <div class="card_top">
            <div class="wp">
              <div class="title fix"> <van-icon name="friends" />云妈妈公益 <a class="r"> 待发货 </a>  </div>

              <van-card
                num="1"
                price="59.00"
                desc="颜色男款-白色尺码: (男170女165 )"
                title="南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花.."
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags" class="tags">
                  <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                </div>

                <div slot="footer">
                  <van-button size="mini" class="font_bottom"> 查看物流 </van-button>
                  <van-button size="mini" class="font_bottom"> 删除订单 </van-button>
                </div>

              </van-card>

              <div class="font_top">
                共一件商品 应付款：<span>￥59.00</span>  （含运费0.00）
              </div>

            </div>
          </div>

        </van-tab>
        <van-tab title="待收货">

          <div class="card_top">
            <div class="wp">
              <div class="title fix"> <van-icon name="friends" />云妈妈公益 <a class="r"> 待收货 </a>  </div>

              <van-card
                num="1"
                price="59.00"
                desc="颜色男款-白色尺码: (男170女165 )"
                title="南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花.."
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags" class="tags">
                  <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                </div>

                <div slot="footer">
                  <van-button size="mini" class="font_bottom"> 查看物流 </van-button>
                  <van-button size="mini" class="font_bottom"> 确认收货 </van-button>
                </div>
              </van-card>

              <div class="font_top">
                共一件商品 应付款：<span>￥59.00</span>  （含运费0.00）
              </div>

            </div>
          </div>

        </van-tab>
        <van-tab title="待评价">

          <div class="card_top">
            <div class="wp">
              <div class="title fix"> <van-icon name="friends" />云妈妈公益 <a class="r"> 待评价 </a>  </div>

              <van-card
                num="1"
                price="59.00"
                desc="颜色男款-白色尺码: (男170女165 )"
                title="南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花.."
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags" class="tags">
                  <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                </div>

                <div slot="footer">
                  <van-button size="mini" class="font_bottom"> 评价 </van-button>
                  <van-button size="mini" class="font_bottom"> 删除订单 </van-button>
                </div>
              </van-card>

              <div class="font_top">
                共一件商品 应付款：<span>￥59.00</span>  （含运费0.00）
              </div>

            </div>
          </div>

        </van-tab>
      </van-tabs>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Tab, Tabs, Card } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-tab': Tab,
        'van-tabs': Tabs,
        'van-card': Card
    },
    data() {
      return {
          status: 'loading',
          active: 0,
          NavList: [
              {
                  label: '旗舰店a',
                  state: '待付款',
                  commodity: [
                      {
                          num: '1',
                          title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                          price: '59.00',
                          desc: '颜色男款-白色尺码: (男170女165 )',
                          img: require('../../assets/img/cart/card.png'),
                          danger: '特卖',
                          dangermin: '新品',
                          pay: '付款'
                      },
                      {
                          num: '1',
                          title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                          price: '59.00',
                          desc: '颜色男款-白色尺码: (男170女165 )',
                          img: require('../../assets/img/cart/card.png'),
                          danger: '特卖',
                          dangermin: '新品',
                          pay: '付款'
                      }
                  ]
              },
              {
                  label: '旗舰店b',
                  state: '待收货',
                  commodity: [
                      {
                          num: '1',
                          state: '代付款',
                          title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                          price: '59.00',
                          desc: '颜色男款-白色尺码: (男170女165 )',
                          img: require('../../assets/img/cart/card.png'),
                          danger: '特卖',
                          dangermin: '新品',
                          statelogistics: '查看物流',
                          statedelete: '确认收货'
                      },
                      {
                          num: '1',
                          state: '代付款',
                          title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                          price: '59.00',
                          desc: '颜色男款-白色尺码: (男170女165 )',
                          img: require('../../assets/img/cart/card.png'),
                          danger: '特卖',
                          dangermin: '新品',
                          statelogistics: '查看物流',
                          statedelete: '确认收货'
                      }
                  ]
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
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .dan_wrap{
    padding-top: 55px;
    background: #f2f2f2;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{
    position: absolute;
    left: 0px;
    top: 2px;
    font-size: 20px;
    color: #333;
  }
  .hesde_l2{
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;
    .p {
      font-size: 16px;
      color: #333;
    }
  }

  .card_top{
    margin-top: 15px;
    padding-bottom: 10px;
    position: relative;
    .wp{
      background: #fff;
      border-radius: 10px;
      padding-bottom: 5%;
    }
    .van-card{
      background: #fff;
    }
    .title{
      width: 95%;
      margin: 0 auto;
      padding-top: 10px;
      line-height: 30px;
      a{
        color: #d8120e;
      }
    }
    .van-icon{
      font-size: 20px;
      position: relative;
      top: 0px;
      margin-right: 5px;
      background: #f68829;
      color: #fff;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
      border-radius: 5px;
    }
    .tagsvan{
      display: inline-block;
      padding: 0px 10px;
      border-radius: 5px;
      line-height: 20px;
      background: #fde9e8 ;
      color: #d23359;
      font-size: 12px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .van-card__title{
      font-weight: bold;
      margin-bottom: 5px;
    }
    .font_bottom{
      border: 1px solid #cbcbcb;
      padding: 0px 10px;
      line-height: 26px;
      font-size: 12px;
      box-sizing: border-box;
      display: inline-block;
      border-radius: 50px;
    }
    .font_bottom.active{
      background: #e9001d;
      color: #fff;
      border-color: #e9001d;
    }
    .van-card__footer{
      padding-top: 40px;
    }
    .font_top{
      position: absolute;
      bottom: 25%;
      right: 10px;
      z-index: 9;
      width: 100%;
      text-align: right;
      color: #818181;
      span{
        color: #333;
        font-size: 14px;
      }
    }

  }

  .list_wrap{
    position: relative;
  }

</style>
