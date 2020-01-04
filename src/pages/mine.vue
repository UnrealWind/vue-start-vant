<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2 l">
        <div class="p"> 我的</div>
      </div>
      <div class="header_r r">
        <van-icon name="cross" />
      </div>
    </div>
    <div class="mainBody clearfix base">
      <div class="user clearfix">
        <div class="imgBox">
          <van-image
            round
            width="1.5rem"
            height="1.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="title">
          <h3 class="name">发芽</h3>
          <span class="influence">影响力&nbsp;101</span>
        </div>
      </div>
      <ul class="table clearfix">
        <li class="table-li l">
          <span class="title">累计收益</span>
          <span class="money">￥0</span>
        </li>
        <li class="table-li l">
          <span class="title">未到账金额
            <van-icon name="info-o" />
          </span>
          <span class="money">￥0</span>
        </li>
        <li class="table-li l">
          <span class="title">可提现金额</span>
          <span class="money">￥0</span>
        </li>
        <li class="table-li l">
          <span class="btn">还差10.00元可提现</span>
        </li>
      </ul>
      <ul class="cellBox">
        <li class="cellBox-li" @click="$router.push('/withDrawPage')">
          <van-cell title="提现记录" icon="orders-o" value="&gt;" />
        </li>
      </ul>
    </div>
    <div class="btnBox">
      <van-button type="info" size="large" @click="$router.push('/depositPage')"> 提现 </van-button>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Image, Cell, Button } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-image': Image,
      'van-cell': Cell,
      'van-button': Button
    },
    data() {
      return {
        status: 'loading'
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

  .base {
    padding: 0 20px;
  }

  > > > .main {
    background-color: #fff;
  }

  .fix {
    border-bottom: 1px solid #e1e1e1;

    .van-icon-arrow-left {
      color: #000;
      font-size: 22px;
      line-height: inherit;
    }

    .header_l2 {
      margin-left: 15px;

      .p {
        text-align: center;
        color: #000000;
      }
    }

    .header_r {
      .van-icon-cross {
        color: #000000;
        font-weight: 700;
        font-size: 16px;
        margin-right: 15px;
      }
    }
  }

  .mainBody {
    margin-top: 70px;

    .user {
      margin-top: 50px;
      margin-bottom: 30px;

      .imgBox {
        float: left;
      }

      .title {
        float: left;
        margin-left: 20px;

        .name {
          margin: 0 0 10px 0;
        }

        .influence {
          display: block;
          background-color: #FBE09D;
          color: #674927;
          width: 83px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border-radius: 15px;
        }
      }
    }

    .table {
      width: 100%;
      padding: 0 20px;
      box-shadow: 0 0 12px #e1e1e1;

      .table-li {
        font-size: 16px;
        width: 45%;
        padding-bottom: 20px;

        .title {
          display: block;
          margin-top: 15px;
          margin-bottom: 15px;
          height: 20px;
        }

        .money {
          font-size: 16px;
          font-weight: 700;
        }

        &:nth-child(1), &:nth-child(2) {
          border-bottom: 1px solid #e1e1e1;
        }

        .btn {
          display: block;
          margin-top: 30px;
          width: 100%;
          background-color: #D0D0D0;
          color: #fff;
          border-radius: 15px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
        }
      }

    }

    .cellBox {
      margin-top: 20px;
      padding: 0 20px;

      .cellBox-li {
        border-bottom: 1px solid #e1e1e1;
      }
    }
    .btnBox{
      margin-top: 50px;
      padding: 0 20px;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }

</style>
