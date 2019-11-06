<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 支付方式 </div>
      </div>
    </div>

    <div class="dan_wrap fix">
      <div class="wp">

        <div class="title"> 选择消费方式 </div>

        <van-tabs @click="onClick">
          <van-tab title="到店取货">

          </van-tab>

          <van-tab title="上门送货">

            <div class="title"> 确认收货地址 </div>

            <ul class="addr_btom">
              <div class="per-border"></div>
              <li class="user-addresslist defaultAddr fix">
                <div class="address-left">
                  <div class="user DefaultAddr">
                    <span class="buy-address-detail">
                      <span class="buy-user">艾迪 </span>
                      <span class="buy-phone">15871145629</span>
                    </span>
                  </div>
                  <div class="default-address DefaultAddr">
                    <span class="buy-line-title buy-line-title-type">收货地址：</span>
                    <span class="buy--address-detail">
                      <span class="province">湖北</span>省
                      <span class="city">武汉</span>市
                      <span class="dist">洪山</span>区
                      <span class="street">雄楚大道666号(中南财经政法大学)</span>
                    </span>
                  </div>
                  <ins class="deftip">默认地址</ins>
                </div>
                <div class="address-right" @click="$router.push('/cart/address_list')">
                  <a> <van-icon name="arrow" /> </a>
                </div>
                <div class="clear"></div>

                <div class="new-addr-btn">
                  <a href="#" class="hidden">设为默认</a>
                  <span class="new-addr-bar hidden">|</span>
                  <a href="#">编辑</a>
                  <span class="new-addr-bar">|</span>
                  <a href="javascript:void(0);" onclick="delClick(this);">删除</a>
                </div>

              </li>
              <div class="per-border"></div>
            </ul>

          </van-tab>

          <!--选择物流方式-->
          <div class="title"> 选择物流方式 </div>
          <ul class="op_express_delivery_hot fix">
            <li data-value="yuantong" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position:0px -468px"></i>圆通<span></span></li>
            <li data-value="shentong" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position:0px -1008px"></i>申通<span></span></li>
            <li data-value="yunda" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position:0px -576px"></i>韵达<span></span></li>
            <li data-value="zhongtong" class="OP_LOG_BTN op_express_delivery_hot_last "><i class="c-gap-right" style="background-position:0px -324px"></i>中通<span></span></li>
            <li data-value="shunfeng" class="OP_LOG_BTN  op_express_delivery_hot_bottom"><i class="c-gap-right" style="background-position:0px -180px"></i>顺丰<span></span></li>
          </ul>

          <!--支付方式-->
          <div class="title"> 选择支付方式 </div>
          <div class="logistics">
            <ul class="pay-list fix">
              <li class="pay qq"><img src="../../assets/img/cart/weizhifu.jpg">微信<span></span></li>
              <li class="pay cod"><img src="../../assets/img/cart/cod.jpg">货到付款<span></span></li>
            </ul>
          </div>

          <!--确认订单信息-->
          <div class="title"> 确认订单信息 </div>
          <div class="nav_ul">
            <div class="li">
              <div class="wrap fix">
                <div class="nav_l l">
                  <a class="img"> <img src="../../assets/img/prolisttu1.png" alt=""> </a>
                </div>
                <div class="nav_r r">
                  <a class="titl"> Estee Lauder雅诗兰黛ANR小棕... </a>
                  <div class="item-props">
                    <span class="sku-line">颜色：12#川南玛瑙</span>
                    <span class="sku-line">包装：裸装</span>
                  </div>
                  <div class="botom fix">
                    <a class="price"> ￥439 </a>
                  </div>
                </div>
              </div>
              <div class="new_botom fix">
                <p class="l"> 购买数量 </p>
                <div class="r"> <van-stepper v-model="value" /> </div>
              </div>
              <div class="new_botom fix">
                <p class="l"> 配送方式 </p>
                <p class="r"> 快递10元 </p>
              </div>
            </div>
            <div class="li">
              <div class="wrap fix">
                <div class="nav_l l">
                  <a class="img"> <img src="../../assets/img/prolisttu1.png" alt=""> </a>
                </div>
                <div class="nav_r r">
                  <a class="titl"> Estee Lauder雅诗兰黛ANR小棕... </a>
                  <div class="item-props">
                    <span class="sku-line">颜色：12#川南玛瑙</span>
                    <span class="sku-line">包装：裸装</span>
                  </div>
                  <div class="botom fix">
                    <a class="price"> ￥439 </a>
                  </div>
                </div>
              </div>
              <div class="new_botom fix">
                <p class="l"> 购买数量 </p>
                <div class="r"> <van-stepper v-model="value" /> </div>
              </div>
              <div class="new_botom fix">
                <p class="l"> 配送方式 </p>
                <p class="r"> 快递10元 </p>
              </div>

              <div class="new_botommin fix">
                <h4> <span> 买家留言： </span>  <input type="text" placeholder="选填,对本次交易的说明（建议填写已经和卖家达成一致的说明）"> </h4>
              </div>
            </div>
          </div>

          <!--优惠券 -->
          <div class="buy-agio fix">
            <li class="td td-coupon">

              <span class="coupon-title">优惠券</span>
              <select data-am-selected>
                <option value="a">
                  <div class="c-price">
                    <strong>￥8</strong>
                  </div>
                  <div class="c-limit">
                    【消费满95元可用】
                  </div>
                </option>
                <option value="b" selected>
                  <div class="c-price">
                    <strong>￥3</strong>
                  </div>
                  <div class="c-limit">
                    【无使用门槛】
                  </div>
                </option>
              </select>
            </li>

            <li class="td td-bonus">

              <span class="bonus-title">红包</span>
              <select data-am-selected>
                <option value="a">
                  <div class="item-info">
                    ¥50.00<span>元</span>
                  </div>
                  <div class="item-remainderprice">
                    <span>还剩</span>10.40<span>元</span>
                  </div>
                </option>
                <option value="b" selected>
                  <div class="item-info">
                    ¥50.00<span>元</span>
                  </div>
                  <div class="item-remainderprice">
                    <span>还剩</span>50.00<span>元</span>
                  </div>
                </option>
              </select>

            </li>
          </div>

          <!--含运费小计 -->
          <div class="buy-point-discharge ">
            <p class="price g_price ">
              合计（含运费） <span>¥</span><em class="pay-sum">244.00</em>
            </p>
          </div>

          <div class="pay-confirm clearfix">
            <div class="box">
              <div id="holyshit267" tabindex="0" class="realPay"><em class="t">实付款：</em>
                <span class="price g_price ">
                  <span>¥</span> <em id="J_ActualFee" class="style-large-bold-red ">244.00</em>
                </span>
              </div>
            </div>
            <div id="holyshit269" class="submitOrder">
              <div class="go-btn-wrap">
                <a id="J_Go" class="btn-go" tabindex="0" title="点击此按钮，提交订单">提交订单</a>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </van-tabs>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Tab, Tabs, Stepper } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-tab': Tab,
        'van-tabs': Tabs,
        'van-stepper': Stepper
    },
    data() {
      return {
          status: 'loading'
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
    background: #fff;
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

  .title{
    font-size: 12px;
    font-weight: bold;
    border-bottom: 1px solid #F1F1F1;
    line-height: 30px;
    margin-bottom: 10px;
  }

  .dan_wrap{
    padding-bottom: 50px;
    .van-tabs--line{
      padding-top: 60px;
    }
  }

  /*物流*/
  .logistics li i{margin:5px 10px;}
  .logistics li {border:1px solid transparent ; }
  .logistics li.selected {border-color:#F03726 ;position:relative ;}
  .logistics li.selected span {
    position: absolute;
    width: 10px;
    height: 10px;
    font-size: 0;
    line-height: 0;
    right: 0px;
    bottom: 0px;
    background: url(../../assets/img/cart/sys_item_selected.gif) no-repeat right bottom;
  }
  .op_express_delivery_hot li {
    width:32%;
    margin-left: 1%;
    margin-bottom: 10px;
    float: left;
    display: block;
    cursor: pointer;
    overflow: hidden;
  }
  .op_express_delivery_hot i {
    background: transparent url(../../assets/img/cart/kuaidi.png) no-repeat scroll 0px 0px;
    display: inline-block;
    width: 36px;
    height: 30px;
    vertical-align: middle;
    overflow: hidden;
    margin-right: 10px;
  }

  .logistics .pay-list{
    padding-bottom: 40px;
    padding-top: 0px;
    margin-top: -18px;
  }
  .logistics .pay-list li {float: left;cursor: pointer;width:32% ;}
  .pay img {
    position: relative;
    top: 19px;
    display: inline-block;
    width: 100%;
    max-width: 54px;
    margin-right: 5px;
  }

  .nav_ul{
    .img{
      img{
        display: block;
        width: 100%;
      }
    }
    .wrap{
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .li{
      background: #fff;
      border-radius: 10px;
      padding: 0px 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
    .nav_l{
      width: 20%;
      border: 1px solid #eee;
    }
    .nav_r{
      width: 75%;
      a{
        display: block;
      }
      .titl{
        font-size: 14px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        color: #333333;
        line-height: 20px;
      }
      .item-props{
        padding-top: 10px;
        span{
          color: #9C9C9C;
          font-size: 12px;
          font-weight: normal;
        }
      }
      .botom{
        padding-top: 10px;
      }
      .price{
        font-size: 12px;
      }
    }
    .new_botom{
      border-bottom: 1px solid #f5f5f5;
      p{
        font-size: 12px;
      }
    }
  }

  .new_botommin{
    position: relative;
    line-height: 30px;
    h4{
      font-weight: normal;
      margin: 0 auto;
    }
    span{
      position: absolute;
      left: 0px;
      top: 2px;
      line-height: 30px;
    }
    input{
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding-left: 60px;
      border: 0px;
      font-size: 12px;
    }
  }

  ul, li, ol {
    list-style: none;
  }

  /*数量*/
  .td.td-amount .amount-wrapper ,.td.td-oplist,.order-extra,.td.td-coupon,.td.td-bonus{position:relative;width:100%;padding:8px 0px;border-top:1px solid #f5f5f5; ;}
  .td.td-coupon{border-bottom: 1px solid #f5f5f5;}
  .td.td-bonus {border-top: 1px solid transparent;border-bottom: 1px solid #f5f5f5;}
  .td.td-amount .phone-title{display: inline;line-height:24px ;height:24px ;}
  .td.td-amount .sl{position:absolute;top:3px;right:0;width: auto;}
  .td.td-amount .sl .min,.td.td-amount .sl .add{display:inline-block;width:30px}
  .td.td-amount .sl input.text_box{border:1px solid #ddd;}
  /*运费、留言*/
  .pay-total{padding:0px 10px}
  .td.td-oplist .pay-logis,.td.td-coupon select,.td.td-bonus select{position:absolute;top:6px;right:0;}
  .memo{position: relative;}
  .memo label{position: absolute;bottom:1px;left:0;line-height:24px ;}
  .memo-close{width:100%;border: 2px solid #FFF;padding-left:60px;outline:none}

  /*合计*/
  .buy-point-discharge{font-size:14px ;font-weight: 700;padding:10px 0px;text-align: right;}
  .pay-sum{color:#F64000;margin-left:5px ;}
  em{
    font-style: normal;
  }

  .pay-confirm {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #F5F5F5;
    .pay-sum{color:#F64000;margin-left:5px ;}

    .pay-confirm.clearfix{width: 100%;}
    .box{float:left;width:70%;height:40px ;line-height:40px ;font-size: 14px;text-align: right;padding-right:10px ;}
    .pay-address{display: none;}
    .submitOrder a{float:left;width:30%;color:#fff ;background:#f40 ;text-align: center;height:40px ;line-height:40px ;font-size: 14px;}

  }

  /*地址管理*/
  .addr_btom{
    padding-bottom: 10px;
  }
  .per-border{height: 4px;width: 100%;
    background: url(../../assets/img/cart/peraddress.png) repeat-x;
  }
  .concent h3,.logistics h3{border-bottom: 2px solid #F1F1F1; margin-top:10px;}
  h3 { font-size: 14px;font-weight: 700;}
  .control{display: none;}
  .address h3 { border-bottom:none;}
  .address li.user-addresslist{display:none;width:100%;padding:10px;position: relative;min-height:80px ;}
  .address-left{ width:90%;float:left;position: relative;}
  .user.DefaultAddr {font-size: 14px;font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .default-address{
    padding-bottom: 10px;
  }
  .address-right{ float:right; margin-right:5px;padding-top:25px ;
  font-size: 20px;
  }
  .deftip {
    position: absolute;top: 13px;right: 0px;padding: 0px 2px;text-decoration: none;opacity: 0.7; z-index: 3;background: #CCC none repeat scroll 0% 0%;
    color: #FFF;}

  /*地址操作-编辑删除*/
  .new-addr-btn {display:none;font-size: 12px;color: #282828;text-align: right; padding-right:5px ;}
  .new-addr-bar {padding: 0px 5px;vertical-align: top;}

</style>

