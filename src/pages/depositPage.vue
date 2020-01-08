<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2 l">
        <div class="p"> 提现 </div>
      </div>
      <div class="header_r r">
        <van-icon name="question-o" />
      </div>
    </div>
    <div class="main">
      <div class="bankBox clearfix" @click="$router.push('/selectBankCard')">
        <div class="imgBox">
          <van-image
            round
            width="1.5rem"
            height="1.5rem"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576563730751&di=723860cce122a68a92955d9c43f6f188&imgtype=0&src=http%3A%2F%2Fawb.img.xmtbang.com%2Fimg%2Fupload%2F20141212%2Fd7358ef4c6ef46818098061e80f2284b.jpg"
          />
        </div>
        <div class="title">
          <h3 class="name">中国建设银行</h3>
          <span class="influence">尾号1584&nbsp;储蓄卡</span>
        </div>
        <div class="rightBox r">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="moneyBox">
        <span>提现金额（收取0.1%服务费）</span>
        <div class="line">
          <span class="symbol">￥</span>
          <van-field v-model="value" focus />
        </div>
        <div class="balance">
          <span>可用余额{{ money }}元</span>
          <div class="btn r" @click="allMoney">全部提现</div>
        </div>
      </div>
      <div class="btnBox">
        <van-button type="info" size="large" disabled>预计两小时内到账，确认提现</van-button>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Image, Field, Button } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-image': Image,
      'van-field': Field,
      'van-button': Button
    },
    data() {
      return {
        status: 'loading',
        money: '1512',
        value: ''
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          //
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      allMoney() {
        this.value = this.money
      }
    }
  }

</script>

<style lang='scss' scoped>
  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .van-icon-arrow-left {
    color: #108EE9;
    font-size: 22px;
    line-height: inherit;
  }
  .header_l2{
    margin-left: 15px;
    .p{
      text-align: left;
      color: #000000;
    }
  }
  .header_r{
    .van-icon-question-o{
      color: #108EE9;
      font-weight: 700;
      font-size: 20px;
      margin-right: 15px;
      line-height: inherit;
    }
  }
  .main{
    margin-top: 60px;
  }
  .van-cell__title span{
    font-size: 15px;
    font-weight: 700;
  }
  .van-cell__value span{
    font-size: 22px;
  }

  .bankBox{
    padding: 10px 20px;
    background-color: #fff;
    .imgBox {
      float: left;
    }

    .title {
      float: left;
      margin-left: 20px;
      margin-top: 5px;

      .name {
        margin: 0 0 10px 0;
      }

      .influence {
        color: #929292;
        width: 83px;
        height: 18px;
        line-height: 18px;
        text-align: center;
      }
    }
    .rightBox{
      font-size: 24px;
      margin-top: 15px;
    }
  }

  .moneyBox{
    padding: 20px 10px;
    margin-top: 20px;
    background-color: #fff;
    .line{
      border-bottom: 1px solid #e1e1e1;
      .symbol{
        display: inline-block;
        font-size: 30px;
      }
      .van-field{
        display: inline-block;
        padding: 0;
        width: 80%;
        font-size: 32px;
      }
    }

    .balance{
      padding-top: 20px;
      span{
        font-size: 16px;
        color: #888888;
      }
      .btn {
        font-size: 18px;
        color: #1791E9;
      }
    }

  }

  .btnBox{
    margin-top: 30px;
    padding: 0 20px;
  }

</style>
