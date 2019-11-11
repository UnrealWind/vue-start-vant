<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p">  注册APP </div>
        </div>
      </div>
    </div>

    <div class="dan_wrap">

      <div class="nav_img">
        <img src="../../assets/img/lunbo1.png" alt="">
        <span>
          库存1314
        </span>
      </div>

      <div class="wp">
        <div class="vip_title">
          礼包套餐价￥<span>399</span>
        </div>
        <div class="vip_title-min">
          礼包套餐价
        </div>
        <div class="vip-wantonly">
          购买任意礼包套餐，就能获得超值礼包和云集店铺，享受云集钻石会员权益
        </div>
        <div class="vip-Equity">
          钻石会员权益
        </div>
        <div class="vip_ul fix">
          <div class="li">
            <van-icon name="discount" />
            <p> 自购省钱 </p>
          </div>
          <div class="li">
            <van-icon name="gold-coin-o" />
            <p> 分享赚钱 </p>
          </div>
          <div class="li">
            <van-icon name="browsing-history-o" />
            <p> IT云服务 </p>
          </div>
          <div class="li">
            <van-icon name="thumb-circle-o" />
            <p> 专属服务 </p>
          </div>
        </div>

        <div class="vip_mintitle">
          钻石会员，购物享受批发价。购物可享5%- -40%的的返利。
        </div>

      </div>
    </div>

    <div class="vipMessage">
      <div class="wp">

        <div class="messTitle">
          商品信息
        </div>
        <div class="mess_ul fix">
          <div class="li fix">
            <span class="title l"> 品牌 </span>
            <span class="message l"> 欧诗漫 </span>
          </div>
          <div class="li fix">
            <span class="title l"> 名称 </span>
            <span class="message l"> 欧诗漫珍珠白沁白亮采礼盒 </span>
          </div>
          <div class="li fix">
            <span class="title l"> 产地 </span>
            <span class="message l"> 中国 </span>
          </div>
          <div class="li fix">
            <span class="title l"> 规格 </span>
            <span class="message l">
              <i>  1.欧诗漫珍珠白净透洁面泡沫100g</i>
              <i>  2.欧诗漫珍珠白丝润亮采柔肤水135ml</i>
              <i>  3.欧诗漫珍珠白净透丰润赋采凝乳100ml</i>
              <i>  4.欧诗漫珍珠肌源紧致精华30ml</i>
              <i>  5.欧诗漫珍珠白净透润白精华液5ml*4</i>
            </span>
          </div>
          <div class="li fix">
            <span class="title l"> 功效 </span>
            <span class="message l"> 美白淡斑，补水保湿，紧致修护 </span>
          </div> <div class="li fix">
            <span class="title l"> 主要成分 </span>
            <span class="message l"> 珍珠原生多肽、烟酰胺、水解大米蛋白、掌叶树提取物、豌豆提取物 </span>
          </div>
          <div class="li fix">
            <span class="title l"> 适合人群 </span>
            <span class="message l"> 所有人群 </span>
          </div> <div class="li fix">
            <span class="title l"> 保质期 </span>
            <span class="message l"> 3年 </span>
          </div>

        </div>
      </div>
    </div>

    <div class="vipIntroduce">
      <div class="wp">
        <div class="messTitle">
          品牌介绍
        </div>
        <div class="introduce_ul fix">
          <div class="li fix">
            <span class="title l">
              <img src="../../assets/img/user/myshoplogo.png" alt="">
            </span>
            <span class="message l">
              浙江欧诗漫集团有限公司地处世界珍珠养殖技术发源地- -中国德清，始于1967年， 拥有“欧诗漫"、“百花萃”和“樱尚"三大品牌，被誉为“珍珠美肤世家”。
            </span>
          </div>
        </div>
        <div class="img">
          <img src="../../assets/img/brandtu19.png" alt="">
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="wp" @click="$router.push('/user/logon')">
        <span> 马上成为钻石会员 </span>
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
  i{
    font-style: normal;
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
  .main{
    background: #f1f5f8;
  }
  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 45px;
    padding-bottom: 10px;
    background: #ffffff;
  }
  .vipMessage{
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #ffffff;
  }
  .vipIntroduce{
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
    background: #ffffff;
    .img{
      img{
        display: block;
        width: 100%;
      }
    }
  }

  .footer{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: #fff;
    padding: 10px;
    span{
      display: block;
      background: #ee2633;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border-radius: 50px;
      line-height: 26px;
      padding: 10px 0px;
    }

  }

  .header{
    .fix{
      position: relative;
      background: #ffffff;
      border-bottom: 1px solid #dddddd;
    }
    .header_l{
      position: absolute;
      left: 0px;
      top: 0px;
      color: #212121;
      font-size: 20px;
    }
    .header_title{
      text-align: center;
      margin-right: 10px;
      color: #212121;
    }

  }

  .nav_img{
    background: #fff;
    position: relative;
    img{
      display: block;
      width: 100%;
      background: #fff;
    }
    span{
      position: absolute;
      bottom: 2px;
      right: 0px;
      background: #f5f5f5;
      color: #959595;
      border-radius: 50px 0px 0px 50px;
      line-height: 24px;
      padding: 0px 10px;
    }
  }

  .vip_title{
    padding-top: 10px;
    text-align: center;
    color: #636363;
    font-size: 14px;
    span{
      color: #e9001d;
      font-size: 18px;
    }
  }

  .vip_title-min{
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    line-height: 26px;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .vip-wantonly{
    color: #bc3556;
    font-size: 12px;
    line-height: 20px;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 10px;
  }

  .vip-Equity{
    font-size: 14px;
    line-height: 30px;
    padding-top: 5px;
    padding-bottom: 10px;
  }
  .vip_ul{
    background: #fff;
    p {
      margin:0;
      padding: 5px 0;
    }
    .li{
      float: left;
      width: 25%;
      text-align: center;
      color: #656565;
      font-size: 14px;
    }
    .van-icon{
      font-size: 26px;
    }
  }
  .vip_mintitle{
    padding-top: 10px;
    color: #858585;
    font-size: 14px;
  }

  .messTitle{
    font-size:16px;
    line-height: 30px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .mess_ul{
    font-size: 14px;
    line-height: 24px;
    .li{
      margin-top: 10px;
    }
    .title{
      display: block;
      width: 20%;
      color: #676767;
    }
    .message{
      display: block;
      width: 80%;
      color: #333333;
    }
    i{
      display: block;
    }
  }

  .introduce_ul{
    font-size: 12px;
    line-height: 20px;
    .li{
      margin-top: 10px;
    }
    .title{
      display: block;
      width: 20%;
      color: #676767;
      img{
        display: block;
        width: 100%;
      }
    }
    .message{
      display: block;
      width: 80%;
      color: #333333;
      padding-left: 2%;
    }
    i{
      display: block;
    }
  }

</style>
