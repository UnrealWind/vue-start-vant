<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 确认订单 </div>
      </div>
    </div>
    <div class="dan_wrap fix">
      <div class="wp">
        <div class="address">
          <van-address-list
            v-model="chosenAddressId"
            :list="addressList"
            @edit="changeAddress"
          />
        </div>
        <p class="addAddress" @click="$router.push('/cart/address_list')"><van-icon name="add-o" /> 新增收货地址</p>
        <div v-for="(goods, index) in orderList" :key="index" class="card_top">
          <div class="wp">
            <div class="title fix"> <van-icon name="friends" /> {{ goods.shopName }} </div>
            <span v-for="(good, idx) in goods.goods" :key="idx">
              <van-card
                :num="good.num"
                :price="good.goodsMoney"
                :desc="good.activityTitle"
                :title="good.goodsName"
                :thumb="good.mainImg"
              >
              </van-card>
              <div class="font_top">
                <span>
                  订单备注
                </span>
                <input type="text" placeholder="不接受指定快递，特殊需求请联系买家">
              </div>
              <div class="font_botom fix">
                <div class="p l"> 小计 </div>
                <div class="p r"> ￥{{ good.activityMoney }}  </div>
              </div>
            </span>
          </div>
        </div>

        <div class="coupin fix" @click="useCoupon">
          <van-cell title="优惠券" is-link :value="targetCoupon.ticketName" />
        </div>

        <div class="coupin fix">
          <van-cell-group>
            <div>
              <van-cell title="商品金额" :value="'￥'+customTotalPrice" />
            </div>
            <van-cell title="运费" value="+￥0.00" />
          </van-cell-group>
        </div>

        <div class="or_sub">
          <van-submit-bar
            :price="customTotalPrice*100"
            button-text="提交订单"
            @click="showPopup"
          />
          <van-cell close-icon="close" class="cop_van_cell" @click="showPopup"></van-cell>
          <van-popup
            v-model="show"
            closeable
            position="bottom"
            class="cou_bottom"
          >
            <div class="title"> ￥{{ customTotalPrice }}  </div>
            <div class="title_time">
              请在 <span> 12.00 </span> 内完成支付
            </div>
            <van-radio-group v-model="payType">
              <van-cell-group>
                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="支付宝支付" clickable @click="payType = '2'">
                    <van-radio slot="right-icon" name="2" />
                  </van-cell>
                </div>
                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
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
    </div>
    <div v-show="false" ref="paystr" v-html="html"></div>
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
    import { Icon, AddressList, Cell, SubmitBar, Card, Popup, RadioGroup, Radio, CellGroup, CouponList } from 'vant'
    export default {
        components: {
          'van-icon': Icon,
          'van-address-list': AddressList,
          'van-cell': Cell,
          'van-submit-bar': SubmitBar,
          'van-card': Card,
          'van-popup': Popup,
          'van-radio-group': RadioGroup,
          'van-radio': Radio,
          'van-cell-group': CellGroup,
          'van-coupon-list': CouponList
        },
    data() {
      return {
          status: 'loading',
          payType: '1',
          chosenAddressId: null,
          show: false,
          addressList: [],
          orderList: [],
          html: '',
          showCoupon: false,
          chosenCoupon: -1,
          coupons: [],
          disabledCoupons: [],
          targetCoupon: {}
      }
    },
    computed: {
        customTotalPrice() {
            let price = 0
            this.orderList.forEach((n, i) => {
                n.goods.forEach((good, i) => {
                   price += good.activityMoney
                })
            })
            switch (this.targetCoupon.ticketType) {
                case 0: price = price - JSON.parse(this.targetCoupon.ticketContent).drop; break
                case 1:
                    if (JSON.parse(this.targetCoupon.ticketContent).full < price) {
                        price = price - JSON.parse(this.targetCoupon.ticketContent).minus
                    }
                    break
                case 2:price = price * JSON.parse(this.targetCoupon.ticketContent).discount / 10; break
            }
            return price
        },
        customPreTotalPrice() {
            let price = 0
            this.orderList.forEach((n, i) => {
                n.goods.forEach((good, i) => {
                    price += good.activityMoney
                })
            })
            return price
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.orderList = this.$store.state.targetOrder
            try {
                await this.getAddressList()
                await this.getCouponList()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getAddressList() {
            const res = await this.$http.post('product/userAddress/list', {})
            res.data.forEach((n, i) => {
                n.address = n.addressDetail
                n.tel = n.receiverPhone
                n.name = n.receiverName
                n.id = i + 1
                if (n.isDefault && !this.chosenAddressId) this.chosenAddressId = i + 1
            })
            this.addressList = JSON.parse(JSON.stringify(res.data))
            this.addressList.length = 3
        },
        async getCouponList() {
            const res = await this.$http.post('/manager/userTicket/list')
            this.couponList = res.data
            this.couponList.forEach((n, i) => {
                let use = false
                if (n.useType === 1) {
                    this.orderList.forEach((ni, ii) => {
                        if (ni.shopCode === n.shopCode) {
                            n['use'] = true
                            use = true
                        }
                    })
                }/* else if (n.useType === 3) {
                    this.orderList.forEach((ni, ii) => {
                        ni.goods.forEach((nx, ix) => {
                            if (nx.brandCode === n.brandCode) {
                                this.trueCouponList.push(n)
                                use = true
                            }
                        })
                    })
                }*/
                if (!use) n['use'] = false
            })
        },
        changeAddress(item, index) {
            this.$router.push({
                path: '/cart/address_list',
                query: item
            })
        },
        useCoupon() {
            this.coupons = []
            const res = this.couponList
            this.showCoupon = true
            const pushCoupon = (n, target) => {
                target.push({
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
            }
            res.forEach((n, i) => {
                if (n['used']) return
                switch (n.ticketType) {
                    case 0: n['valueDesc'] = JSON.parse(n.ticketContent).drop; n['unitDesc'] = '元'; break
                    case 1: n['valueDesc'] = `满${JSON.parse(n.ticketContent).full}减${JSON.parse(n.ticketContent).minus}`
                        n['unitDesc'] = `满${JSON.parse(n.ticketContent).full}减`; break
                    case 2: n['valueDesc'] = `${JSON.parse(n.ticketContent).discount}`; n['unitDesc'] = '折'; break
                }
                n['use'] ? pushCoupon(n, this.coupons) : pushCoupon(n, this.disabledCoupons)
            })
        },
        async pay() {
            const targetAddress = this.addressList[this.chosenAddressId - 1]
            this.orderList.forEach((n, i) => {
                if (n.shopCode === this.targetCoupon.shopCode) {
                    n['ticketCode'] = this.targetCoupon.ticketCode
                    n['ticketMoney'] = this.customPreTotalPrice - this.customTotalPrice
                }
            })
            const data = {
                'receiverId': targetAddress.id,
                'receiverName': targetAddress.receiverName,
                'receiverPhone': targetAddress.tel,
                'receiverAddress': targetAddress.address,
                'isInvoices': 0,
                'payType': this.payType,
                'trueMoney': this.customTotalPrice,
                'goodsPoList': this.orderList
            }
            if (this.orderList.length !== 0) {
                data['orderType'] = this.orderList[0].orderType
            }
            const res = await this.$http.post('order/order/placeOrder', data)
            console.log(res)
            this.html = res.data.form
            this.$nextTick(() => {
                const ele = document.createElement('script')
                ele.innerHTML = 'document.forms[0].submit();'
                this.$refs.paystr.append(ele)
            })
        },
        showPopup() {
            this.show = true
        },
        onChange(index) {
            this.showCoupon = false
            if (index === -1) return
            this.targetCoupon = this.coupons[index].data
        },
        onExchange(code) {
            return
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
    padding-bottom: 50px;
    background: #f2f2f0;
    > .wp{
      width: 95%;
      margin: 0 auto;
      padding-bottom: 10px;
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

  .coupin{
    padding-top: 10px;
  }

  .address{
    padding-bottom: 0px;
    .van-address-list{
      padding-bottom: 0px;
    }
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
      line-height: 26px;
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

</style>
