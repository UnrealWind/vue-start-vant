<template>
  <div>
    <div class="dan_wrap fix">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div v-for="(shop, index) in orderList" :key="index">
            <div class="card_top">
              <div class="wp">
                <!-- 店铺标题-->
                <div class="title fix"> <van-icon name="friends" />  {{ shop.shopName }} <a class="r">  {{ shop.orderContent }} </a>  </div>
                <!--卡片-->
                <div v-for="(commodity, idx) in shop.goods" :key="idx" class="list_wrap">
                  <van-card
                    :num="commodity.amount"
                    :price="commodity.unitPrice"
                    :desc="commodity.goodsDesc"
                    :title="commodity.goodsName"
                    :thumb="commodity.mainImg"
                  >
                    <!--<div slot="tags" class="tags">
                      <van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>
                    </div>-->
                    <div v-if="idx === shop.goods.length-1" slot="footer">
                      <van-button v-if="shop.nodeCode === '0'" size="mini" class="font_bottom active" @click="showPopup(shop)"> 支付  </van-button>
                      <!--<van-button size="mini" class="font_bottom active" @click="showPopup(shop)"> 支付 </van-button>-->
                      <!--<van-button size="mini" class="font_bottom" @click="$router.push('/cart/stepspage')"> 查看物流 </van-button>-->
                      <van-button size="mini" class="font_bottom" @click="viewOrder(shop)"> 查看详情 </van-button>
                      <van-button v-if="shop.nodeCode === '2'" size="mini" class="font_bottom"> 确认收货 </van-button>
                    </div>
                  </van-card>
                  <div class="font_top">
                    共 {{ commodity.amount|judNull }} 件商品
                    <span v-if="idx === shop.goods.length-1">
                      应付款：<span>￥{{ shop.goodsMoney }}</span>  （含运费 {{ shop.deliverMoney }}元）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab v-for="(tab, tabIdx) in tabArr" :key="tabIdx" :title="tab.label">
          <p v-if="tab.length === 0" class="emptyMsg">暂无数据！</p>
          <div v-for="(shop, index) in orderList" :key="index">
            <div v-if="shop.nodeCode === tab.node_code" class="card_top">
              <div class="wp">
                <!-- 店铺标题-->
                <div class="title fix"> <van-icon name="friends" />  {{ shop.shopName }} <a class="r">  {{ shop.orderContent }} </a>  </div>
                <!--卡片-->
                <div v-for="(commodity, idx) in shop.goods" :key="idx" class="list_wrap">
                  <van-card
                    :num="commodity.amount"
                    :price="commodity.unitPrice"
                    :desc="commodity.goodsDesc"
                    :title="commodity.goodsName"
                    :thumb="commodity.mainImg"
                  >
                    <!--<div v-if="shop.nodeCode !== '0'" slot="tags" class="tags">
                      &lt;!&ndash;<van-tag plain type="danger" class="tagsvan"> 特卖 </van-tag>&ndash;&gt;
                    </div>-->

                    <div slot="footer">
                      <span v-if="idx === shop.goods.length-1">
                        <van-button v-if="shop.nodeCode === '0'" size="mini" class="font_bottom active" @click="showPopup(shop)"> 支付 </van-button>
                        <!--<van-button size="mini" class="font_bottom" @click="$router.push('/cart/stepspage')"> 查看物流 </van-button>-->
                        <van-button size="mini" class="font_bottom" @click="viewOrder(shop)"> 查看详情 </van-button>
                        <van-button v-if="shop.nodeCode === '2'" size="mini" class="font_bottom"> 确认收货 </van-button>
                        <van-button size="mini" class="font_bottom" @click="evaluation(shop)"> 评价 </van-button>
                      </span>
                      <van-button v-if="shop.nodeCode!=='0'" size="mini" class="font_bottom" @click="refund(commodity)"> 售后 </van-button>
                      <van-button v-else size="mini" class="font_bottom" @click="refund(commodity)"> 售后 </van-button>
                    </div>
                  </van-card>
                  <div class="font_top">
                    共 {{ commodity.amount|judNull }} 件商品
                    <span v-if="idx === shop.goods.length-1">
                      应付款：<span>￥{{ shop.goodsMoney }}</span>  （含运费 {{ shop.deliverMoney }}元）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="or_sub">
      <van-cell close-icon="close" class="cop_van_cell" @click="showPopup"></van-cell>
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        class="cou_bottom"
      >
        <div class="title"> ￥{{ targetOrder.totalMoney }}  </div>
        <van-radio-group v-model="payType">
          <van-cell-group>
            <div class="img">
              <img src="../assets/img/cart/card.png" alt="">
              <van-cell title="支付宝支付" clickable @click="payType = '2'">
                <van-radio slot="right-icon" name="2" />
              </van-cell>
            </div>
            <div class="img">
              <img src="../assets/img/cart/card.png" alt="">
              <van-cell title="微信支付" clickable @click="payType = '1'">
                <van-radio slot="right-icon" name="1" />
              </van-cell>
            </div>
          </van-cell-group>
          <van-submit-bar
            button-text="立即支付"
            class="cup_bottom"
            @submit="pay"
          />
        </van-radio-group>
      </van-popup>
    </div>
  </div>
</template>

<script>
    import { Icon, Tab, Tabs, Card, Button, SubmitBar, Cell, Popup, RadioGroup, Radio, CellGroup } from 'vant'
    export default {
        components: {
            'van-icon': Icon,
            'van-tab': Tab,
            'van-tabs': Tabs,
            'van-card': Card,
            'van-button': Button,
            'van-submit-bar': SubmitBar,
            'van-cell': Cell,
            'van-popup': Popup,
            'van-radio-group': RadioGroup,
            'van-radio': Radio,
            'van-cell-group': CellGroup
        },
        props: {
            active: {
                type: Number,
                default: 0 // error empty waiting
            }
        },
        data() {
            return {
                orderList: [],
                show: false,
                payType: '1',
                targetOrder: {},
                tabArr: [
                    {
                        label: '待付款',
                        node_code: '1',
                        length: 0
                    },
                    {
                        label: '待发货',
                        node_code: '2',
                        length: 0
                    },
                    {
                        label: '待收货',
                        node_code: '3',
                        length: 0
                    },
                    {
                        label: '待评价',
                        node_code: '4',
                        length: 0
                    },
                    {
                        label: '已完成',
                        node_code: '5',
                        length: 0
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
                    await this.getOrderList()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getOrderList() {
                const res = await this.$http.post('order/order/list?pageNum=0&pageSize=100', {
                    node_code: 0,
                    pageNum: 0,
                    pageSize: 100
                })
                this.orderList = res.data
                this.orderList.forEach((n, i) => {
                    this.tabArr.forEach((ni, ii) => {
                        n.nodeCode === ni.node_code ? ni['length']++ : ''
                    })
                })
                console.log(this.tabArr)
            },
            viewOrder(shop) {
                this.$router.push({
                    path: '/cart/order_details',
                    query: shop
                })
            },
            async pay() {
                /* const data = {
                    'receiverId': this.targetOrder.receiverId,
                    'receiverName': this.targetOrder.receiverName,
                    'receiverPhone': this.targetOrder.receiverPhone,
                    'receiverAddress': this.targetOrder.receiverAddress,
                    'isInvoices': 0,
                    'payType': this.payType,
                    'orderType': this.targetOrder.orderType,
                    'trueMoney': this.targetOrder.totalMoney,
                    'goodsPoList': this.targetOrder.goods
                }*/
                const res = await this.$http.post('order/order/toPayAgain', {
                    orderCode: this.targetOrder.orderCode,
                    'payType': this.payType
                })
                console.log(res)
            },
            evaluation(shop) {
                this.$router.push({
                    path: '/user/addEvaluation',
                    query: shop
                })
            },
            showPopup(shop) {
                this.targetOrder = shop
                this.show = true
            },
            refund(msg) {
                console.log(msg)
                this.$router.push({
                    path: '/user/refund',
                    query: msg
                })
            }
        }
    }
</script>

<style lang=scss scoped>
  h1 {
    background: red;
    width: 375px;
  }
  .tags {
    padding:10px 0 10px 0;
    text-align: right;
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

  .or_sub{
    position: relative;
    z-index: 999;
    .cop_van_cell{
      position: fixed;
      bottom: 0px;
      right: 0px;
      width: 100%;
      z-index: 102;
      line-height: 55px;
      height: 55px;
      background: transparent;
    }
  }
  .van-submit-bar__bar{
    height: 50px;
  }
  .van-button--large{
    line-height: 50px;
    height: 50px;
    font-size: 14px;
  }
  .van-submit-bar__price{
    font-size: 12px;
  }
  .van-address-list__add{
    display: none;
  }

  .card_top{
    margin-top: 15px;
    padding-bottom: 0px;
    position: relative;
    border-radius: 5px;
    .wp{
      background: #fff;
      border-radius: 10px;
      width: 100%;
      overflow: hidden;
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
      font-size: 12px;
      box-sizing: border-box;
      display: inline-block;
      border-radius: 50px;
    }
    .van-card__footer{
      padding-top: 40px;
    }
    .font_top{
      width: 95%;
      margin: 0 auto;
      color: #818181;
      padding-top: 10px;
      span{
        color: #333;
        font-size: 12px;
      }
      input{
        border: 0px;
        width: 80%;
        padding-left: 10px;
      }
    }

    .font_botom{
      margin-top: 10px;
      background: #fbfbfb;
      padding: 10px 5%;

      .r{
        color: #b73b53;
      }
    }
  }

  .font_popup{
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 102;
    position: fixed;
    height: 50px;
  }

  .van-cell{
    font-size: 12px;
  }

  .cou_bottom{
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 30px;

    .title{
      font-weight: bold;
    }
  }

  .cou_bottom{

    .van-radio-group{
      position: relative;
      .van-cell__title{
        text-align: left;
      }
      .van-cell{
        padding-left: 0px;
      }
      .img{
        position: relative;
        padding-left: 40px;
        img{
          position: absolute;
          left: 10px;
          top: 10px;
          width: 20px;
          height: 20px;
        }
      }
    }

  }
  .van-radio-group{
    .cup_bottom{
      display: block;
      width: 100%;
      border-radius: 50px;
    }
    .van-submit-bar{
      position: relative;
      margin-top: 10px;
    }
    .van-submit-bar .van-button{
      width: 100%;
      border-radius: 50px;
      height: 35px;
      line-height: 30px;
      font-size: 14px;
    }
  }

  .title_time{
    display: inline-block;
    background: #f7f7f7;
    padding: 5px 10px;
    border-radius: 50px;
    margin-top: 10px;
    font-size: 12px;
    color: #757575;
    span{
      color: #a14760;
    }
  }
  .addAddress {
    padding:5px 0;
    margin:5px 0 0 0;
    .van-icon {
      position: relative;
      top:2px;
    }
    color:red;
    text-align: center;
    font-size:16px;
  }
  .emptyMsg {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>
