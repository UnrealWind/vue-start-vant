<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesdeLeft" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesdeTitle">
        <div class="p"> 售后进度 </div>
      </div>
      <div class="hesdeRight" @click="$router.push('/user/progressDetails')">  进度详情 </div>
    </div>

    <div class="dan_wrap  examine">
      <div class="wp">
        <van-steps :active="active">
          <van-step> 电商审核 </van-step>
          <van-step> 退款成功 </van-step>
        </van-steps>
      </div>
    </div>

    <div class="refund">
      <div class="wp">

        <van-cell-group @click="$router.push('/user/progressDetails')">
          <van-cell title="已同意退款" is-link />
        </van-cell-group>

        <div class="titleMin">
          已同意退款，系统已通知支付宝办理退款，请耐心等待
        </div>
        <div class="service" @click="$router.push('/user/customerService')">
          <span> 联系客服 </span>
        </div>

      </div>
    </div>

    <div class="refund_top">
      <div class="wp">
        <van-cell-group>
          <van-cell value="￥14.9" class="custom-price">
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
              <span class="custom-title">退款金额</span>
              <van-tag type="danger"><van-icon name="question-o" /></van-tag>
            </template>
          </van-cell>

          <van-cell title="实付金额" value="14.9" />
          <van-cell title="余额" value="0" />
        </van-cell-group>
      </div>
    </div>

    <div class="afderProduct wp">

      <div v-for="(refund, index) in refunds" :key="index">
        <van-cell-group>
          <van-cell
            :icon="refund.img"
            :title="refund.title"
            :value="refund.price"
            size="large"
            :label="refund.label"
          >
          </van-cell>
          <div class="num">
            {{ refund.num }}
          </div>

          <div class="numbers">
            售后单号：1465465465 <span> 复制 </span>
          </div>
          <div class="numbers">
            申请时间：2019-11-19 15:36
          </div>

        </van-cell-group>
      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Step, Steps, Cell, CellGroup, Tag } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-step': Step,
        'van-steps': Steps,
        'van-cell': Cell,
        'van-cell-group': CellGroup,
        'van-tag': Tag
    },
    data() {
      return {
          status: 'loading',
          active: 0,
          refunds: [
              {
                  title: '南极人中老年保暖内衣男女士',
                  price: '￥14.9',
                  label: '颜色男款-白色尺码: (男170女165 )',
                  img: require('../../assets/img/cart/card.png'),
                  num: 'x1'
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
    background: #f4f3f1;
  }

  .header{
    .fix{
      background: #f41146;
    }
    .hesdeLeft{
      position: absolute;
      left: 0px;
      top: 2px;
      font-size: 18px;
      color: #f1f5f4; }
    .hesdeRight{
      position: absolute;
      right: 15px;
      top: -2px;
      font-size: 12px;
      color: #f1f5f4;
    }

    .hesdeTitle{
      position: relative;
      width: 62%;
      margin: 0 auto;
      text-align: center;
      .p {
        font-size: 16px;
        color: #f1f5f4;
      }
    }
  }

  .examine{
    background: #f41146;
    padding-bottom: 40px;
    .wp{
      width: 50%;
    }
    .van-steps{
      background: transparent;
    }
    >>>.van-step--horizontal .van-step__circle-container{
      background: transparent;
    }
    >>>.van-icon-checked{
      background: #fff;
      border-radius: 50px;
      padding: 2px;
      color: #f41146!important;
    }
    .van-step{
      color: #ecc7ce!important;
    }
    >>>.van-step--process .van-step__title{
      color: #fff!important;
    }
  }

  .refund{
    margin-top: -20px;
    .wp{
      background: #fff;
      border-radius: 10px;
      padding: 10px 10px;
      box-sizing: border-box;
    }
    >>>.van-cell--clickable:active{
      background: #fff;
    }
    >>>.van-cell{
      padding: 0px;
    }
    >>>.van-cell__title, .van-cell__value{
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
    }
    >>>.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
      border: 0px;
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
    }
    .titleMin{
      font-size: 12px;
      color: #7c7c7c;
      line-height: 18px;
      margin-top: 5px;
    }
    .service{
      text-align: right;
      margin-top: 10px;
      span{
        display: inline-block;
        color: #f00d3b;
        border: 1px solid #f00d3b;
        line-height: 20px;
        padding: 0px 10px;
        border-radius: 50px;
      }
    }
  }

  .refund_top{
    margin-top: 10px;
    margin-bottom: 10px;

    >>>.van-cell:not(:last-child)::after{
      border: 0px;
    }
    >>>.van-cell{
      padding: 4px 10px;
    }
    >>>.van-cell__title{
      font-size: 12px;
      color: #a6a4a5;
    }
    >>>.custom-title{
      font-size: 14px;
      color: #333;
    }
    .custom-price{
      .van-cell__value{
        span{
          color: #e9001d;
          font-weight: bold;
        }
      }
    }
  }

  .afderProduct{
    .van-cell-group{
      border-radius: 10px;
      overflow: hidden;
      padding-bottom: 10px;
      position: relative;
    }
    .van-cell__left-icon{
      width: 20%;
      min-width: 20%;
      height: auto;
    }
    .van-icon__image{
      width: 100%;
      height: 100%;
    }
    >>>.van-cell--large .van-cell__title{
      font-size: 14px;
      line-height: 20px;
    }
    .van-cell__label{
      font-size: 12px;
      line-height: 20px;
    }
    .mun{
      color: #ccc;
      padding-bottom: 20px;
    }
    .num{
      position: absolute;
      top: 22%;
      right: 10px;
      color: #ccc;
      font-size: 12px;
    }
    >>>.van-cell__value span{
      color: #333;
    }
    >>>.van-cell:not(:last-child)::after{
      border: 0px;
    }
    >>>.van-cell--large{
      padding: 10px
    }
    .numbers{
      color: #9e9c9d;
      padding: 0px 10px;
      line-height: 20px;
      span{
        display: inline-block;
        border: 1px solid #9e9c9d;
        padding: 0px 10px;
        border-radius: 50px;
        line-height: 14px;
        margin-left: 5px;
      }
    }
  }

  >>>.van-tag--danger{
    background: #fff;
    color: #969799;
    padding: 0px;
    font-size: 14px;
  }

</style>
