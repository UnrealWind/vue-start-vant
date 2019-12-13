<!-- home -->
<template>
  <van-container :active="'cart'" :status="status" :tabbar="true">
    <div slot="header" class="fix">
      <div class="header_l2">
        <div class="p"> 购物车</div>
      </div>
    </div>
    <div class="main">
      <div v-if="cartList.length >0" class="commodity">
        <div v-for="(shop, index) in cartList" :key="index" class="card_top">
          <div class="comm-list">
            <div>
              <!-- 店铺标题-->
              <div class="comm-title">
                <span @click="goStore(shop)">  {{ shop.shopName }}  <van-icon name="arrow" class="con_titl_arr" /></span>
                <van-checkbox v-model="shop.checked" @click="checkShop(shop)"></van-checkbox>
                <!--<i v-if="!shop.targetShopCoupon" @click="useCoupon(shop)">优惠券</i>
                <i v-else class="red" @click="useCoupon(shop)">{{ shop.targetShopCoupon.ticketName }}</i>-->
              </div>
              <!--卡片-->
              <div v-for="(goods, idx) in shop.goods" :key="idx" class="list_wrap">
                <van-checkbox v-model="goods.checked"></van-checkbox>
                <van-card
                  :price="goods.goodsMoney"
                  :desc="goods.activityTitle"
                  :title="goods.goodsName"
                  :thumb="goods.mainImg"
                >
                  <!-- 按钮-->
                  <div v-if="goods.skuAttribute" slot="tags">
                    <van-tag plain type="danger">{{ goods.skuAttribute }}</van-tag>
                  </div>
                  <!--删除-->
                  <div slot="footer" class="comm-btn clearfix">
                    <van-icon name="delete" @click="delComm(goods)" />
                    <van-stepper
                      v-model="goods.num"
                    />
                  </div>
                </van-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="customTotalPrice*100"
      button-text="结算"
      @submit="postOrder"
    >
      <van-checkbox v-model="checkedAll" @click="checkAllShop">全选</van-checkbox>
      <div
        is-link
        class="detail"
        @click="showPopup"
      > 明细  <van-icon name="arrow-up" /> </div>
      <van-popup
        v-model="showDetails"
        closeable
        close-icon="close"
        position="bottom"
      >
        <div class="wp">
          <div class="title"> 明细 </div>
          <div class="titlemin"> 勾选商品 </div>
          <div class="img_wrap">
            <div class="ul">
              <span v-for="(shop, index) in cartList" :key="index">
                <span v-for="(goods, idx) in shop.goods" :key="idx">
                  <div v-if="goods.checked" class="img">
                    <img :src="goods.mainImg" alt="">
                    <span> x{{ goods.num }} </span>
                  </div>
                </span>
              </span>
            </div>
          </div>
          <div class="titlemin"> 金额明细 </div>
          <div class="title_span">
            (优惠券，云币，余额不包含在已优惠的金额中，需在订单页面使用)
          </div>
          <div class="title_priject">
            商品金额 <i> -------------------------</i>   <span> ￥{{ customPreTotalPrice }} </span>
          </div>
          <div class="title_priject">
            活动优惠 <i> -------------------------</i>    <span>  -￥{{ customAuTotalPrice }} </span>
          </div>
          <div class="title_priject">
            <span> 合计 </span> <i> -------------------------</i>   <span>{{ customTotalPrice }}</span>
          </div>
          <van-button type="primary" size="large" class="sha_bottom" @click="postOrder"> 立即结算 </van-button>
        </div>
      </van-popup>
    </van-submit-bar>
    <van-popup v-model="showCoupon" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </van-container>
</template>

<script>
  import {
    Icon,
    Card,
    Tag,
    Button,
    Stepper,
    Dialog,
    Checkbox,
    SubmitBar,
    Popup,
    Toast,
    CouponList
  } from 'vant'
  export default {
    components: {
      'van-icon': Icon,
      'van-card': Card,
      'van-tag': Tag,
      'van-button': Button,
      'van-stepper': Stepper,
      'van-checkbox': Checkbox,
      'van-submit-bar': SubmitBar,
      'van-popup': Popup,
      'van-coupon-list': CouponList
    },
    data() {
      return {
          status: 'loading',
          showDiscount: false,
          showDetails: false,
          cartList: [],
          value: 1,
          active: 0,
          checkedAll: false,
          showCoupon: false,
          chosenCoupon: -1,
          coupons: [],
          disabledCoupons: []
      }
    },
    computed: {
        customTotalPrice() {
            let price = 0
            this.cartList.forEach((n, i) => {
                n.goods.forEach((good, i) => {
                    if (good.checked && good.activityList.length > 0) {
                        switch (good.activityList[0].activityType) {
                            case 0: good.activityMoney = good.goodsMoney * good.num - JSON.parse(good.activityList[0].resultJson).drop; break
                            case 1:
                                if (JSON.parse(good.activityList[0].resultJson).full < good.goodsMoney * good.num) {
                                    good.activityMoney = good.goodsMoney * good.num - JSON.parse(good.activityList[0].resultJson).minus
                                }
                                break
                            case 2:good.activityMoney = good.goodsMoney * good.num * JSON.parse(good.activityList[0].resultJson).discount / 10; break
                        }
                        price += good.activityMoney
                    } else if (good.checked && good.activityList.length > 0) {
                        price += good.goodsMoney * good.num
                    }
                })

                if (n['targetShopCoupon']) {
                    switch (n['targetShopCoupon'].ticketType) {
                        case 0: price = price - JSON.parse(n['targetShopCoupon'].ticketContent).drop; break
                        case 1:
                            if (JSON.parse(n['targetShopCoupon'].ticketContent).full < price) {
                                price = price - JSON.parse(n['targetShopCoupon'].ticketContent).minus
                            }
                            break
                        case 2:price = price * JSON.parse(n['targetShopCoupon'].ticketContent).discount / 10; break
                    }
                }
            })
            return price
        },
        customPreTotalPrice() {
            let price = 0
            this.cartList.forEach((n, i) => {
                n.goods.forEach((good, i) => {
                    if (good.checked) price += good.goodsMoney * good.num
                })
            })
            return price
        },
        customAuTotalPrice() {
            return this.customPreTotalPrice - this.customTotalPrice
        }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          await this.getData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      async getData() {
          let res = await this.$http.post('order/shoppingCart/list', {})
          if (!res.data) {
              res = {
                  data: []
              }
          }
          res.data.forEach((n, i) => {
              n['checked'] = false
              n.goods.forEach((good, i) => {
                  good['checked'] = false
              })
          })
          this.cartList = JSON.parse(JSON.stringify(res.data))
      },
      useCoupon(shop) {
          this.coupons = []
          const res = shop.shopTicketList
          this.showCoupon = true
          res.forEach((n, i) => {
              n.shopCode = shop.shopCode
              if (n['used']) return
              switch (n.ticketType) {
                  case 0: n['valueDesc'] = JSON.parse(n.ticketContent).drop; n['unitDesc'] = '元'; break
                  case 1: n['valueDesc'] = `满${JSON.parse(n.ticketContent).full}减${JSON.parse(n.ticketContent).minus}`
                      n['unitDesc'] = `满${JSON.parse(n.ticketContent).full}减`; break
                  case 2: n['valueDesc'] = `${JSON.parse(n.ticketContent).discount}`; n['unitDesc'] = '折'; break
              }
              this.coupons.push({
                  condition: '优惠卷',
                  value: '',
                  name: n.ticketName,
                  reason: '',
                  startAt: new Date(n.ticketBeginTime).getTime() / 1000,
                  endAt: new Date(n.ticketEndTime).getTime() / 1000,
                  valueDesc: n.valueDesc,
                  unitDesc: n.unitDesc,
                  data: n // 这里把后台的数据存在data里，上面的数据只是作为显示
              })
          })
      },
      onChange(index) {
          console.log(index)
          this.showCoupon = false
          if (index === -1) return
          this.cartList.forEach((n, i) => {
              if (n.shopCode === this.coupons[index].data.shopCode) {
                  n['targetShopCoupon'] = this.coupons[index].data
                  n.shopTicketList.forEach((ni, ii) => {
                      ni['used'] = false
                      if (this.coupons[index].data.ticketCode === ni.ticketCode) ni['used'] = true
                  })
              }
          })
      },
      onExchange(code) {
          return
      },
      checkShop(shop) {
          shop.checked = !shop.checked
          shop.goods.forEach((n, i) => {
              n.checked = shop.checked
          })
      },
      checkAllShop() {
          this.checkedAll = !this.checkedAll
          this.cartList.forEach((n, i) => {
              n.checked = this.checkedAll
              n.goods.forEach((good, i) => {
                  good.checked = this.checkedAll
              })
          })
      },
      async postOrder() {
          const goodsVoList = {
              'shopVos': [],
              'orderType': 2, // 1是直接下单，2是购物车下单
              'total': this.customTotalPrice
          }
          this.cartList.forEach((n, i) => {
              const data = {
                  shopCode: n.shopCode,
                  shopName: n.shopName,
                  goodsVos: []
              }
              if (n.targetShopCoupon) data['ticketCode'] = n.targetShopCoupon.ticketCode
              n.goods.forEach((good, i) => {
                  if (good.checked) {
                      let activityResultId
                      good.activityList.length > 0 ? (activityResultId = good.activityList[0].id, delete data['ticketCode']) : activityResultId = null
                      data.goodsVos.push({
                          'amount': good.num,
                          'skuCode': good.skuCode,
                          'activityResultId': activityResultId
                      })
                  }
              })
              goodsVoList.shopVos.push(data)
          })
          if (!this.customTotalPrice) {
              Toast.fail('请选择商品')
              return
          }
          console.log(JSON.stringify(goodsVoList))
          const res = await this.$http.post('product/goods/createOrderInfo', goodsVoList)
          this.$store.commit('setTargetOrder', res.data)
          this.$router.push('/cart/confirm_order')
      },
      // 删除按钮弹窗
      delComm(goods) {
        Dialog.confirm({
          message: '确定将该宝贝删除？'
        }).then(async() => {
            await this.$http.post(`order/shoppingCart/remove?ids=${goods.shoppingCartId}`, {
                ids: goods.shoppingCartId
            })
            await this.getData()
        })
        .catch(() => {

        })
      },
      // 明细
      showPopup() {
          this.showDetails = true
      },
      goStore(shop) {
          this.$router.push({
              path: '/store',
              query: {
                  shopCode: shop.shopCode
              }
          })
      }
    }
}

</script>
<style lang="scss" scoped>
>>>.header {
  background: red;
  .header_l2 {
    text-align: center;
  }
}
i {
  font-style: normal;
}
.red {
  color:red
}
.van-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 53px;
  line-height: 53px;
  z-index: 1099;
  margin: 0px auto;
  background: #fff;
  text-align: center;
  background-color: #ef0e38;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
    font-size: 16px;
  }
}
.main {
  margin: 50px 0;
  position: relative;
  .commodity {
    position: absolute;
    top: -5px;
    padding-bottom: 60px;
    width: 100%;
    .comm-list {
      width: 95%;
      margin: 0 auto;
      background: #fff;
      border-radius: 10px;
      padding: 10px 0px;
      margin-top: 20px;
      .list_wrap {
        position: relative;
        padding-left: 50px;
      }
      .comm-title {
        padding-left: 50px;
        position: relative;
        font-size: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
        .van-checkbox {
          top: 9px;
          font-size: 12px;
        }
        .con_titl_arr{
          display: inline-block;
          float: none;
          position: relative;
          top: 2px;
        }
        i {
          float: right;
          margin-right: 10px;
        }
      }
      .van-checkbox {
        position: absolute;
        left: 15px;
        top: 32%;
      }
      .van-card {
        padding: 0px;
        background: #fff;
        margin: 10px;
        border-radius: 10px;
        margin-left: 0px;
        .van-card__content div {
          margin-bottom: 5px;
        }
        .van-card__title {
          font-weight: 700;
        }
        .comm-btn {
          .van-stepper {
            float: right;
          }
          i {
            float: right;
            margin-left: 15px;
            margin-top: 5px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
.jiesuan {
  position: relative;
  .detail {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.van-submit-bar .van-button{
  border-radius: 50px;
  height: 30px;
  line-height: 26px;
  font-size: 14px;
  width: 70px;
}

.van-submit-bar {
  bottom: 50px;
  padding: 0px 10px;

  .detail{
    position: absolute;
    bottom: 33%;
    left: 25%;
    color: #f44;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }
  .van-popup{
    padding-bottom: 30px;
  }
  .title{
    padding-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .img_wrap{
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 20px;
    width: 100%;
    overflow: scroll;
    .ul{
      width: 150%;
    }
    .img{
      position: relative;
      margin-top: 10px;
      width: 100px;
      margin-right: 10px;
      display: inline-block;
      span{
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 100%;
        background: rgba(204,204,204,0.5);
        color: #333;
        line-height: 26px;
        text-align: right;
        padding-right: 10px;
      }
      img{
        display: block;
        max-width: 100px;
        width: 100%;
      }
    }
  }

  .title_span{
    color: #9c9c9c;
    font-size: 12px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .title_priject{
    text-align: right;
    font-size: 14px;
    color: #313131;
    line-height: 26px;
    span{
      font-weight: 700;
      font-size: 14px;
      color: #3a3a3a;
      width: 60px;
      display: inline-block;
    }
    i{
      display: inline-block;
      margin: 0px 10px;
    }
  }

  .sha_bottom{
    margin-top: 50px;
    display: block;
    width: 100%;
    background: #f8185f;
    font-size: 16px;
    text-align: center;
    border: 0px;
    box-sizing: border-box;
    line-height: 40px;
    height: 40px;
  }
}

</style>
