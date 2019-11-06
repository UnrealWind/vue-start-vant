<!-- home -->
<template>
  <van-container :active="3" :status="status" :tabbar="true">
    <div slot="header" class="fix"></div>
    <van-nav-bar title="购物车" right-text="编辑" color="#fff" />
    <div class="main">
      <div style="background:#ef0e38;height:40px"></div>
      <div class="commodity">

        <div v-for="(shop, index) in NavList" :key="index" class="card_top">

          <div class="comm-list">
            <van-checkbox-group ref="checkboxGroup" v-model="result">

              <!-- 店铺标题-->
              <div class="comm-title">
                <span @click="$router.push('/store')">  {{ shop.label }}  <van-icon name="arrow" class="con_titl_arr" />  </span>
                <van-checkbox :name="shop.maxchename"></van-checkbox>
                <i @click="$router.push('/cart/coupon')">领券</i>
              </div>

              <!--卡片-->
              <div v-for="(commodity, idx) in shop.commodity" :key="idx" class="list_wrap">
                <van-checkbox :name="commodity.chename"></van-checkbox>
                <van-card
                  :price="commodity.price"
                  :desc="commodity.desc"
                  :title="commodity.title"
                  :thumb="commodity.img"
                >
                  <!-- 按钮-->
                  <div slot="tags">
                    <van-tag plain type="danger"> {{ commodity.danger }} </van-tag>
                    <van-tag plain type="danger"> {{ commodity.dangermin }} </van-tag>
                  </div>
                  <!--删除-->
                  <div slot="footer" class="comm-btn clearfix">
                    <van-icon name="delete" @click="delComm" />
                    <van-stepper
                      :value="value"
                    />
                  </div>
                </van-card>

              </div>

            </van-checkbox-group>

          </div>

        </div>

      </div>
    </div>

    <van-submit-bar
      :price="5900"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>

      <van-cell
        is-link
        class="detail"
        @click="showPopup"
      > 明细  <van-icon name="arrow-up" /> </van-cell>
      <van-popup
        v-model="showmoder"
        closeable="true"
        close-icon="close"
        position="bottom"
      >
        <div class="wp">
          <div class="title"> 明细 </div>
          <div class="titlemin"> 勾选商品 </div>
          <div class="img_wrap">
            <div class="ul">
              <div class="img">
                <img src="../../assets/img/cart/card.png" alt="">
                <span> x1 </span>
              </div>
              <div class="img">
                <img src="../../assets/img/cart/card.png" alt="">
                <span> x1 </span>
              </div>
              <div class="img">
                <img src="../../assets/img/cart/card.png" alt="">
                <span> x1 </span>
              </div>
              <div class="img">
                <img src="../../assets/img/cart/card.png" alt="">
                <span> x1 </span>
              </div>
            </div>
          </div>

          <div class="titlemin"> 金额明细 </div>
          <div class="title_span">
            (优惠券，云币，余额不包含在已优惠的金额中，需在订单页面使用)
          </div>

          <div class="title_priject">
            商品金额 <i> -------------------------</i>   <span> ￥59.00 </span>
          </div>
          <div class="title_priject">
            活动优惠 <i> -------------------------</i>    <span>  -￥0 </span>
          </div>
          <div class="title_priject">
            <span> 合计 </span> <i> -------------------------</i>   <span> ￥59.00 </span>
          </div>

          <van-button type="primary" size="large" class="sha_bottom"> 立即结算 </van-button>

        </div>

      </van-popup>

    </van-submit-bar>

    <van-action-sheet v-model="showAction" title="标题" :actions="actions">
    </van-action-sheet>
    <van-popup
      v-model="show"
      :get-container="getContainer"
      closeable="true"
      close-icon="close"
      round
      position="bottom"
      :style="{height:'30%'}"
    />
  </van-container>

</template>

<script>
  import {
    Icon,
    Card,
    Tag,
   Button,
    // Sku,
    Stepper,
    NavBar,
    // Tabbar,
    // TabbarItem,
    Dialog,
    Checkbox,
    CheckboxGroup,
    SubmitBar,
    Actionsheet,
    Popup
  } from 'vant'
  export default {
    components: {
      'van-icon': Icon,
      'van-card': Card,
      'van-tag': Tag,
      'van-button': Button,
     // 'van-sku': Sku,
      'van-stepper': Stepper,
      'van-nav-bar': NavBar,
      // 'van-tabbar': Tabbar,
      // 'van-tabbar-item': TabbarItem,
      'van-checkbox': Checkbox,
      'van-checkbox-group': CheckboxGroup,
      'van-submit-bar': SubmitBar,
      'van-action-sheet': Actionsheet,
      'van-popup': Popup
    },
  // props: ['price'],
  data() {
    return {
        status: 'loading',
        show: false,
        showmoder: false,
        result: ['b'],
        showAction: false,
        actions: [
            { name: '选项' },
            { name: '选项' },
            { name: '选项', subname: '描述信息' }
        ],
        NavList: [
            {
               label: '旗舰店a',
                commodity: [
                    {
                        maxchename: 'a',
                        chename: 'b',
                        title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                        price: '59.00',
                        desc: '颜色男款-白色尺码: (男170女165 )',
                        img: require('../../assets/img/cart/card.png'),
                        danger: '特卖',
                        dangermin: '新品'
                    },
                    {
                        maxchename: 'c',
                        chename: 'd',
                        title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                        price: '59.00',
                        desc: '颜色男款-白色尺码: (男170女165 )',
                        img: require('../../assets/img/cart/card.png'),
                        danger: '特卖',
                        dangermin: '新品'
                    },
                    {
                        maxchename: 'o',
                        chename: 'j',
                        title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                        price: '59.00',
                        desc: '颜色男款-白色尺码: (男170女165 )',
                        img: require('../../assets/img/cart/card.png'),
                        danger: '特卖',
                        dangermin: '新品'
                    }
                ]
            },
            {
                label: '旗舰店2',
                commodity: [
                    {
                        maxchename: 'e',
                        chename: 'f',
                        title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                        price: '59.00',
                        desc: '颜色男款-白色尺码: (男170女165 )',
                        img: require('../../assets/img/cart/card.png'),
                        danger: '特卖',
                        dangermin: '新品'
                    },
                    {
                        maxchename: 'h',
                        chename: 'm',
                        title: '南极人中老年保暖内衣男女士加大码加绒加厚舒服绒提花..',
                        price: '59.00',
                        desc: '颜色男款-白色尺码: (男170女165 )',
                        img: require('../../assets/img/cart/card.png'),
                        danger: '特卖',
                        dangermin: '新品'
                    }
                ]
            }

        ],
      sku: {
        tree: [
          {
            skuKeyName: '颜色',
            v: [
              {
                id: '3030',
                name: '红色',
                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: 'https://img.yzcdn.cn/1p.jpg' // 用于预览显示的规格类目图片
              },
              {
                id: '3030',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: 'https://img.yzcdn.cn/1p.jpg' // 用于预览显示的规格类目图片
              }
            ],
            k_s: 'sl' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有sku的组合列表
        list: [
          {
            id: 222, // skuId 下单时后端需要
            price: 100, // 单价（单位分）
            s1: '1215', // 规格类目k_s为s1的对应规格值id
            s2: '1193', // 规格类目k_s为s2的对应规格值id
            s3: '0', // 最多包含3个规定值。为0表示不存在该规格
            stock_num: 110 // 当前sku组合对应的库存
          }
        ],
        price: '1.00', // 默认价格。单位元
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品skuId取collection_id。否则取所选sku组合对应的id
        none_sku: false, // 是否无规格商品
        hide_stock: true
      },
      goods: {
        goods: '商品信息',
        goodsId: 1
      },
      messageConfig: {},
      quota: 10,
      quotaUsed: 1,
      value: 1,
      active: 0,
      checked: 1
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
    },
    onAddCartClicked() {
      alert('点击购物车回调')
    },
    onBuyClicked() {
      alert('点击购买回调')
    },
    // 删除按钮弹窗
    delComm() {
      Dialog.confirm({
        message: '确定将该宝贝删除？'
      })
        .then(() => {
          alert('确认')
        })
        .catch(() => {
          alert('取消')
        })
    },
    // 提交订单
    onSubmit() {
        this.$router.push('/cart/confirm_order')
        // alert('提交订单')
    },
    // 优惠券弹窗
    /* showTicket() {

    },*/
    // 明细
    getContainer() {
      return document.querySelector('.detail')
    },
    // 全选
    checkAll() {
        this.$refs.checkboxGroup.toggleAll(true)
    },
    // 明细
    showPopup() {
        this.showmoder = true
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
