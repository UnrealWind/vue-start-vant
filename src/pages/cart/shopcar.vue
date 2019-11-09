<!-- home -->
<template>
  <van-container :active="'cart'" :status="status" :tabbar="true">
    <div slot="header" class="fix"></div>
    <van-nav-bar title="购物车" color="#fff" />
    <div class="main">
      <div style="background:#ef0e38;height:40px"></div>
      <div class="commodity">
        <div v-for="(shop, index) in cartList" :key="index" class="card_top">
          <div class="comm-list">
            <div>
              <!-- 店铺标题-->
              <div class="comm-title">
                <span @click="$router.push('/store')">  {{ shop.shopName }}  <van-icon name="arrow" class="con_titl_arr" /></span>
                <van-checkbox v-model="shop.checked" @click="checkShop(shop)"></van-checkbox>
                <i @click="$router.push('/cart/coupon')">领券</i>
              </div>
              <!--卡片-->
              <div v-for="(goods, idx) in shop.goods" :key="idx" class="list_wrap">
                <van-checkbox v-model="goods.checked"></van-checkbox>
                <van-card
                  :origin-price="goods.goodsMoney"
                  :price="goods.activityMoney"
                  :desc="goods.activityTitle"
                  :title="goods.goodsName"
                  :thumb="goods.img"
                >
                  <!-- 按钮-->
                  <div slot="tags">
                    <van-tag plain type="danger"> 特卖 </van-tag>
                    <van-tag plain type="danger"> 新品 </van-tag>
                  </div>
                  <!--删除-->
                  <div slot="footer" class="comm-btn clearfix">
                    <van-icon name="delete" @click="delComm" />
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
        closeable="true"
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
                    <img :src="goods.img" alt="">
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
  </van-container>
</template>

<script>
  import {
    Icon,
    Card,
    Tag,
    Button,
    Stepper,
    NavBar,
    Dialog,
    Checkbox,
    SubmitBar,
    Popup,
    Toast
  } from 'vant'
  export default {
    components: {
      'van-icon': Icon,
      'van-card': Card,
      'van-tag': Tag,
      'van-button': Button,
      'van-stepper': Stepper,
      'van-nav-bar': NavBar,
      'van-checkbox': Checkbox,
      'van-submit-bar': SubmitBar,
      'van-popup': Popup
    },
    data() {
      return {
          status: 'loading',
          showDiscount: false,
          showDetails: false,
          cartList: [],
          value: 1,
          active: 0,
          checkedAll: false
      }
    },
    computed: {
        customTotalPrice() {
            let price = 0
            this.cartList.forEach((n, i) => {
                n.goods.forEach((good, i) => {
                    if (good.checked) price += good.activityMoney * good.num
                })
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
          await this.login()
          await this.getData()
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
      async getData() {
          const res = await this.$http.post('order/shoppingCart/list', {
              userCode: this.$store.state.userCode
          })
          res.data.forEach((n, i) => {
              n['checked'] = false
              n.goods.forEach((good, i) => {
                  // 现在没有商品图片，先临时拿一个代替
                  good['checked'] = false
                  if (!good.img) good['img'] = require('../../assets/img/cart/card.png')
                  if (!good.activityMoney) {
                      good.activityMoney = good.goodsMoney
                      good.annulMoney = 0
                  }
              })
          })
          this.cartList = JSON.parse(JSON.stringify(res.data))
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
              'goodsVos': [],
              'orderType': 2 // 1是直接下单，2是购物车下单
          }
          this.cartList.forEach((n, i) => {
              n.goods.forEach((good, i) => {
                  if (good.checked) {
                      goodsVoList.goodsVos.push({
                          'amount': good.num,
                          'skuCode': good.skuCode
                      })
                  }
              })
          })
          if (goodsVoList.goodsVos.length === 0) {
              Toast.fail('请选择商品')
              return
          }
          const res = await this.$http.post('product/goods/orderByCart', goodsVoList)
          this.$store.commit('setTargetOrder', res.data)
          this.$router.push('/cart/confirm_order')
      },
      // 删除按钮弹窗
      delComm() {
        Dialog.confirm({
          message: '确定将该宝贝删除？'
        }).then(() => {
          alert('确认')
        })
        .catch(() => {
          alert('取消')
        })
      },
      // 明细
      showPopup() {
          this.showDetails = true
      }
    }
}

</script>
<style lang="scss" scoped>
i {
  font-style: normal;
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
    bottom: 35%;
    left: 33%;
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
