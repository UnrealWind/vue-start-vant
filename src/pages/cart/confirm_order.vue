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

        <div class="address" @click="$router.push('/cart/address_list')">
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
          />
        </div>

        <div v-for="(opt, index) in minNavList" :key="index" class="card_top">
          <div class="wp">
            <div class="title fix"> <van-icon name="friends" /> 云妈妈公益 </div>
            <van-card
              :num="opt.num"
              :price="opt.price"
              :desc="opt.desc"
              :title="opt.title"
              :thumb="opt.img"
            >
              <div slot="tags" class="tags">
                <van-tag plain type="danger" class="tagsvan"> {{ opt.danger }} </van-tag>
              </div>
            </van-card>

            <div class="font_top">
              <span>
                订单备注
              </span>
              <input type="text" placeholder="不接受指定快递，特殊需求请联系买家">
            </div>

            <div class="font_botom fix">
              <div class="p l"> 小计 </div>
              <div class="p r"> ￥{{ opt.price * opt.num }}  </div>
            </div>

          </div>
        </div>

        <div class="coupin fix" @click="$router.push('/cart/coupon')">
          <van-cell title="优惠券" is-link value="暂无可用" />
        </div>

        <div class="coupin fix">
          <van-cell-group>
            <div>
              <van-cell title="商品金额" :value="'￥'+custom" />
            </div>
            <van-cell title="运费" value="+￥0.00" />
          </van-cell-group>
        </div>

        <div class="or_sub">
          <van-submit-bar
            :price="custom*100"
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

            <div class="title"> ￥{{ custom }}  </div>
            <div class="title_time">
              请在 <span> 12.00 </span> 内完成支付
            </div>

            <van-radio-group v-model="radio">
              <van-cell-group>
                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="支付宝支付" clickable @click="radio = '1'">
                    <van-radio slot="right-icon" name="1" />
                  </van-cell>
                </div>

                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="微信支付" clickable @click="radio = '2'">
                    <van-radio slot="right-icon" name="2" />
                  </van-cell>
                </div>

                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="云闪付" clickable @click="radio = '3'">
                    <van-radio slot="right-icon" name="3" />
                  </van-cell>
                </div>

                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="京东支付" clickable @click="radio = '4'">
                    <van-radio slot="right-icon" name="4" />
                  </van-cell>
                </div>

                <div class="img">
                  <img src="../../assets/img/cart/card.png" alt="">
                  <van-cell title="花呗" clickable @click="radio = '5'">
                    <van-radio slot="right-icon" name="5" />
                  </van-cell>
                </div>

              </van-cell-group>
              <van-submit-bar
                button-text="立即支付"
                class="cup_bottom"
              />

            </van-radio-group>

          </van-popup>

        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, AddressList, Cell, SubmitBar, Card, Popup, RadioGroup, Radio } from 'vant'

    export default {
        components: {
          'van-icon': Icon,
          'van-address-list': AddressList,
          'van-cell': Cell,
          'van-submit-bar': SubmitBar,
          'van-card': Card,
          'van-popup': Popup,
            'van-radio-group': RadioGroup,
            'van-radio': Radio
        },
    data() {
      return {
          status: 'loading',
          radio: '1',
          chosenAddressId: '1',
          show: false,
          list: [
              {
                  id: '1',
                  name: '张三',
                  tel: '13000000000',
                  address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
              }
          ],
          minNavList: [
              {
                  num: '1',
                  title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                  price: '59.00',
                  desc: '颜色男款-白色尺码: (男170女165 )',
                  img: require('../../assets/img/cart/card.png'),
                  danger: '特卖'
              },
              {
                  num: '2',
                  title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                  price: '59.00',
                  desc: '颜色男款-白色尺码: (男170女165 )',
                  img: require('../../assets/img/cart/card.png'),
                  danger: '新品'
              }
          ]
      }
    },
    computed: {
        custom() {
            let price = 0
            this.minNavList.forEach((n, i) => {
                price += Number(n.price) * Number(n.num)
            })
          return price
        }
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
        onSubmit() {
            // Toast('save')
        },
        showPopup() {
            this.show = true
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

</style>
