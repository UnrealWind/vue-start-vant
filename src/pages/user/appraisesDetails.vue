<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="header_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 跨境电商</div>
      </div>
    </div>
    <div class="dan_wrap">
      <div v-if="good.orderAppraisesList && good.orderAppraisesList.length>0" class="sale-evaluate">
        <div class="wp fix">
          <div class="evaluate fix">
            <div class="l">
              商品评价 <span> （{{ good.orderAppraisesList.length }}） </span>
            </div>
            <div class="r" @click="$router.push({path:'/user/appraisesDetails',query:good})">
              <span>查看全部 <van-icon name="arrow" /> </span>
            </div>
          </div>
          <div v-for="(appraises, index) in good.orderAppraisesList" :key="index">
            <!--<div class="logo">
              <img src="../../assets/img/logo.jpg" alt="">
              <span> 小**爱 </span>
            </div>-->
            <div class="content">
              {{ appraises.userCode }}：{{ appraises.content|judNull }}
            </div>
            <div class="love">
              <span> <van-icon v-for="(n,idx) in appraises.goodsScore" :key="idx" name="star" :size="16" />  </span>
            </div>
            <div class="product fix">
              <div v-for="(n,idx) in appraises.images" :key="idx" class="li">
                <img :src="n.url" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon } from 'vant'

  export default {
    components: {
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          good: {}
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.good = this.$route.query
            try {
                // await this.getData()
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
  .header {
    background: #fff;
  }
  .header_l {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    color: #fff;
    display: inline-block;
  }

  .header_l2 {
    position: relative;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    top:-5px;
    .p {
      height: 37.5px;
      line-height: 37.5px;
      font-size: 16px;
      color: #000;
    }
  }
  >>>.main{
    background: #fff;
  }
  i{
    font-style: normal;
  }
  h1 {
    background: red;
    width: 375px;
  }
  .fix {
    *zoom: 1;
    background: #fff;
    border-bottom: 1px solid #ccc;
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
    background: #f2f2f2;
  }

  .van-swipe {
    img {
      display: block;
      width:100%;
    }
  }

  .header{
    .fix{
      padding-bottom: 5px;
      padding-top: 10px;
    }
    .header_l{
      position: relative;
      line-height: 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      .van-icon{
        font-size: 22px;
        line-height: 30px;
        color: #000;
      }
    }
  }

  .sale{
    position: relative;
    z-index: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fb1925;
    margin-top: -10px;
    border-radius: 10px 10px 0px 0px;

    .sale_l{
      color: #fff;
      .price{
        font-weight: bold;
        font-size: 16px;
        color: #f5ffff;
        line-height: 20px;
        h4{
          display: inline-block;
          color: #fbcad0;
          font-size: 12px;
          padding: 0px;
          margin: 0 auto;
          line-height: 20px;
        }
      }
      .end{
        border: 1px solid #fff;
        border-radius: 10px;
        line-height: 20px;
        margin-top: 2px;
        padding:1px 10px 0px 0px;
        span{
          display: inline-block;
          background: #fff;
          padding: 0px 10px;
          color: #d84e4c;
          border-radius: 10px 0px 0px 10px;
          position: relative;
          left: -1px;
          padding-top: 1px;
        }
      }
    }
    .sale_r{
      .price{
        color: #f6ffff;
        font-weight: bold;
        font-size: 16px;
        text-align: right;
      }
      .end{
        position: relative;
        background: #f73e2c;
        border-radius: 50px;
        line-height: 20px;
        padding: 0px 10px;
        margin-top: 5px;
      }
      .capsule{
        background: #f73e2c;
        background: rgba(247,62,44,0.1);
        width: 100%;
        color: #8a603d;
        z-index: 8;
        top: 0;
        right: 0.16rem;
        height: 20px;
      }
      .capsuleBg{
        height: 20px;
        position: absolute;
        background: #ffd9ab;
        z-index: 9;
        top: 0;
        left: 0px;
        width: 20%;
        border-radius: 50px 0px 0px 50px;
      }
      .capsuleFont{
        color: #552a0a;
        position: relative;
        width:100%;
        z-index: 10;
        i{
          color: #fff;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }

  .sale-white{
    background: #fff;
    padding: 10px 0px 10px;

    .title{
      .l{
        width: 75%;
        line-height: 24px;
        font-size: 14px;
        color: #333333;
      }
      .van-icon{
        display: inline-block;
        position: relative;
        top: 2px;
      }
      .r{
        display: block;
        background: #f8f8f8;
        line-height: 20px;
        padding: 5px 15px;
        border-radius: 50px;
        text-align: center;
      }
    }

    .min-title{
      color: #a7a7a7;
      line-height: 24px;
      font-size: 14px;
    }

    .title_ul{
      display: flex;
      flex-wrap:wrap ;
      justify-content: space-between;
      font-size: 14px;
      .li{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #aeaeae;
      }
    }

    .sale-list{
      border-radius: 5px;
      margin-top: 10px;
      background: #f8f8f8;
      line-height: 20px;
      padding: 10px 10px;

      .l{
        color: #404040;
        font-size: 14px;
        em{
          color: #2e0932;
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          padding-right: 10px;
        }
      }

      .r{
        color: #aeaeae;
        font-size: 12px;
      }
    }
  }

  .sale-securities{
    margin-top: 10px;
    background: #fff;
    line-height: 20px;
    padding: 10px 0px;
    color: #868686;
    font-size: 14px;
    .l{
      span{
        display: inline-block;
        background: #f21541;
        color: #fff;
        padding: 3px 10px 2px;
        border-radius: 50px;
        margin-left: 5px;
      }
    }

    .r{
      span{
        border: 1px solid #868686;
        padding: 3px 10px 2px;
        border-radius: 50px;
        color: #e92636;
      }
    }
  }

  .sale-specs{
    margin-top: 10px;
    background: #fff;
    line-height: 20px;
    padding: 10px 0px 0px;
    color: #868686;
    font-size: 14px;
    margin-bottom: 10px;

    .li{
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      margin-bottom: 5px;
      &:last-child{
        border-bottom: 0px;
      }
    }

    .l{
      width: 90%;
      i{
        display: block;
        width: 10%;
        float: left;
      }
      span{
        color: #313131;
        display: block;
        float: left;
        width: 90%;
        padding-left: 10px;
        color: #333333;
      }
    }

    .r{
      width: 9%;
       font-size: 20px;
      line-height: 16px;
    }
    .font{
      font-size: 0px;
    }
  }

  .sale-evaluate{
    padding: 20px 0px 10px;
    background: #fff;
    margin-bottom: 20px;

    .evaluate{
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 15px;
      span{
        font-weight: normal;
        font-size: 12px;
      }
      .l{
        span{
          color: #a7a7a7;
        }
      }
      .r{
        span{
          color: #e9001d;
        }
      }
    }

    .logo{
      img{
        display: inline-block;
        max-width: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
      span{
        position: relative;
        top: -15px;
        padding-left: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
    }

    .love{
      color: #e9001d;
      .van-icon{
        color: #e9001d;
      }
    }

    .content{
      color: #3b3b3b;
      font-size: 14px;
      line-height: 28px;
    }

    .product{
      .li{
        float: left;
        width: 25%;
      }
      img{
        display: block;
        width: 95%;
        margin: 0 auto;
        border-radius: 5px;
      }
    }

  }

  .sale-store{
    background: #fff;
    padding-top: 20px;
    margin-bottom: 10px;
    .logo{
      img{
        display: inline-block;
        max-width: 40px;
        border-radius: 10px;
        border: 1px solid #eeeeee;
        overflow: hidden;
      }
      span{
        position: relative;
        top: -15px;
        padding-left: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
      strong{
        display: block;
        position: relative;
        padding-bottom: 10px;
        font-size: 16px;
        line-height: 30px;
        color: #313131;
      }
      .r{
        font-size: 12px;
        color: #e9001d;
        position: relative;
        top: 10px;
      }
    }
  }

  .pinpaitehui{
    background: #fff;
    .swiper-container{
      width: 100%;
      overflow-x: scroll;
    }
    .gwcLits{
      width: 180%;
    }

    p{
      margin: 0 auto;
      margin-top: 5px;
    }
    .li img{ width: 100%;  display: block }
    .gwcLits .li{
      width: 120px;
       padding: 0px;
      float: left;
       position: relative;
       margin-right: 1%;
     }
     .gwcLits p{
       padding: 0;
       color: #191919;
      font-size: 14px;
      font-weight: bold;
      span{
        font-weight: normal;
        text-decoration: line-through;
      }
    }
    .gwcLits .p1{
      color: #838383;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      height: 40px;
      overflow: hidden;
    }
    .gwcLits{
      .img{
        display: block;
        position: relative;
        background: #eee;
        p{
          margin: 0px;
          position: absolute;
          bottom: 4px;
          left: 1px;
          border: 1px solid #f8cad7;
          color: #e30f38;
          background: #fff;
          border-radius: 50px;
          font-size: 12px;
          padding: 0px 10px;
          line-height: 20px;
        }
      }
    }
  }

  .sale-text-details{
    background: #fff;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-bottom: 10px;

    .sale-title{
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }

  }

  .van-tabs{
    padding-top: 20px;
  }

  .sale_order{
    background: #f8f8f8;
    padding: 10px 14px;
    border-radius: 5px;
    overflow: hidden;

    .title{
      color: #c92a3c;
      font-size: 12px;
      line-height: 20px;
    }

    .time{
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid #dfdfdf;
      border-bottom: 0px;
      text-align: center;
      line-height: 16px;
      .li{
        padding: 8px 5px;
        box-sizing: border-box;
        &:first-child{
          border-right: 1px solid #dfdfdf;
        }
        float: left;
        width: 50%;
        border-bottom: 1px solid #dfdfdf;
      }
    }

  }

  .sale-material{
    background: #f2f2f2;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    .li{
      padding: 8px 5px;
      box-sizing: border-box;
      border: 1px solid #ffffff;
      line-height: 18px;
    }
    .li.l{
      width: 20%;
      background: #f2f2f2;
      text-align: center;
    }
    .li.r{
      width: 80%;
      background: #f8f8f8;
    }

  }

  .sale-specification{
    color: #373737;
    text-align: center;
    margin-top: 10px;
    display: none;
    .span{
      display: inline-block;
      margin: 0 auto;
      padding: 2px 10px;
      line-height: 20px;
      border-radius: 50px;
      border: 1px solid #cccccc;
    }
    .span-img{
      img{
        display: block;
        width: 100%;
      }
    }
  }

  .sale-specimg{
    margin-top: 10px;
    img{
      display: block;
      width: 100%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

  .sale-question{
    .ques-title{
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .ques-title-min{
      font-size: 14px;
      .van-icon{
        position: relative;
        top: 5px;
        color: #f40137;
        font-size: 20px;
      }
    }

    .pues_text{
      margin-top: 10px;
      margin-bottom: 10px;
      color: #7e7e7e;
      font-size: 12px;
      line-height: 20px;
      p{
        margin: 0 auto;
      }
    }
  }
  .isList {
    text-align: right;
    li {
      display: inline-block;
    }
    span {
      height: 20px;
      line-height: 20px;
      display: inline-block;
      border-radius: 10px;
      padding: 0 10px;
      border:1px solid #fff;
      color:#fff;
    }
  }

  .header_wrapper{
    padding-top: 20px;
    padding-bottom: 40px;
    .title{
      text-align: center;
      font-size: 12px;
      color: #cb2f44;
      span{
        font-size: 30px;
      }
    }
    .share{
      text-align: center;
      color: #ababab;
      line-height: 20px;
      font-size: 14px;
      margin-top: 10px;
    }
    .header_ul{
      padding-top: 20px;
      .li{
        float: left;
        width: 25%;
        text-align: center;
        margin-bottom: 20px;
      }
      img{
        display: block;
        width: 60%;
        max-width: 100px;
        margin: 0 auto;
      }
      span{
        display: block;
        font-size: 14px;
        padding-top: 10px;
      }
    }
    .van-button{
      width: 100%;
      background: #f8f8f8;
      color: #292929;
      border: 0px;
      border-radius: 50px;
    }
  }
</style>

