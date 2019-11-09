<!-- home -->
<template>
  <van-container :status="status">

    <div class="body_warpper">
      <div class="body_img">
        <img src="../../assets/img/user/myshopbj.png" alt="">
      </div>

      <div slot="header">
        <div class="wp fix">
          <div class="header_r l" @click="$router.back()">
            <van-icon name="arrow-left" />
          </div>
          <div class="header_r r">
            <van-icon name="share" />
          </div>
        </div>
      </div>

      <div class="dan_wrap">
        <div class="wp">

          <div class="header_top fix">
            <div class="head_l l">
              <img src="../../assets/img/user/myshoplogo.png" alt="">
            </div>

            <div class="head_c l">

              <div class="title"> 丹丹川味厨房 <span class="v"> v </span> </div>
              <div class="title_min">
                <span> 云集达人  </span>
                认证 ：云集达人 | 丹丹川味厨房
              </div>

            </div>

            <div class="head_r r">
              <span class="head_rspan"> 关注 </span>
            </div>
          </div>

          <div class="follow fix">
            <div class="li">
              <span> 513</span>
              关注
            </div>
            <div class="li">
              <span> 513</span>
              粉丝
            </div> <div class="li">
              <span> 513</span>
              获赞
            </div>
          </div>

          <div class="followmin fix">
            <div class="li">
              口碑图文
            </div>
          </div>

          <div class="my-Shop-Conent">

            <div class="header_top fix">
              <div class="head_l l">
                <img src="../../assets/img/user/myshoplogo.png" alt="">
              </div>

              <div class="head_c l">
                <div class="title"> 丹丹川味厨房 </div>
                <div class="title_min">
                  10-12
                </div>
              </div>

            </div>

            <div class="words">
              味道已经跟大家尝了巴虾肉很饱满喜欢吃变态辣的朋友选麻辣味,不太喜欢吃辣的朋友选十三香
            </div>

            <div class="shop_ul fix">
              <div class="li mln">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
              <div class="li">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div><div class="li">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
              <div class="li mln">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
            </div>

            <div class="comm-share fix">
              <div class="share_l l">
                <span>13</span>人已发圈
              </div>
              <div class="share_r r">
                <span class="oo"> <van-icon name="ellipsis" /> </span>
                <span class="on"> 下载朋友圈 </span>
                <span class="action"> 一键发圈 </span>
              </div>
            </div>
          </div>

          <div class="my-Shop-Conent">

            <div class="header_top fix">
              <div class="head_l l">
                <img src="../../assets/img/user/myshoplogo.png" alt="">
              </div>

              <div class="head_c l">
                <div class="title"> 丹丹川味厨房 </div>
                <div class="title_min">
                  10-12
                </div>
              </div>

            </div>

            <div class="words">
              味道已经跟大家尝了巴虾肉很饱满喜欢吃变态辣的朋友选麻辣味,不太喜欢吃辣的朋友选十三香
            </div>

            <div class="shop_ul fix">
              <div class="li mln">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
              <div class="li">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div><div class="li">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
              <div class="li mln">
                <div class="img"><img src="../../assets/img/user/wordtu.png" alt=""> </div>
              </div>
            </div>

            <div class="comm-share fix">
              <div class="share_l l">
                <span>13</span>人已发圈
              </div>
              <div class="share_r r">
                <span class="oo"> <van-icon name="ellipsis" /> </span>
                <span class="on"> 下载朋友圈 </span>
                <span class="action"> 一键发圈 </span>
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
  .body_warpper{
    position: relative;
    .body_img{
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }

  .mln{
    margin-left: 0px!important;
  }
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

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .main{
    background: #f2f2f2;
  }
  .dan_wrap{
    padding-top: 10px;
    position: relative;
    z-index: 99;
  }

  .header_r{
    padding-top: 10px;
    padding-bottom: 10px;
    .van-icon{
      font-size: 20px;
    }
  }

  .header_top{

    .head_l{
      width: 15%;
      img{
        display: block;
        width: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }

    .head_c{
      width: 60%;
      padding-left: 2%;
    }

    .head_r{
      width: 20%;
    }

    .title{
      font-weight: bold;
      line-height: 26px;
      color: #302426;
      font-size: 16px;
      margin-bottom: 5px;
      .v{
        display: inline-block;
        background: #ef3a41;
        color: #fff;
        width: 16px;
        height: 16px;
        font-size: 14px;
        text-align: center;
        line-height: 14px;
        border-radius: 50%;
      }
    }

    .title_min{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      color: #8f898b;
      span{
        display: inline-block;
        background: #c2b9b0;
        color: #fff;
        line-height: 20px;
        padding: 0px 10px;
        border-radius: 4px;
      }
    }

    .head_rspan{
      position: relative;
      top: 10px;
      display: inline-block;
      text-align: center;
      line-height: 20px;
      background: #fb3e42;
      color: #fff;
      border-radius: 5px;
      padding: 5px 20px;
      font-size: 14px;
    }

  }

  .follow{
    padding-top: 20px;
    padding-bottom: 25px;
    .li{
      float: left;
      width: 33.33%;
      text-align: center;
      line-height: 20px;
      color: #8d868e;
      font-size: 14px;
    }
    span{
      display: block;
      color: #282a27;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 1px;
    }
  }

  .followmin{
    .li{
      display: inline-block;
      background: #fff;
      line-height: 20px;
      color: #959698;
      font-size: 12px;
      padding: 5px 10px;
      line-height: 20px;
      border-radius: 5px;
    }
  }

  .my-Shop-Conent{
    margin-top: 20px;
    background: #fff;
    padding: 20px 10px;
    border-radius: 5px;
    .header_top .title{
      font-size: 14px;
    }

    .words{
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 14px;
      line-height: 24px;
    }

    .shop_ul{
      .li{
        width: 31%;
        float: left;
        margin-left: 1%;
        margin-bottom: 2%;
      }
      img{
        display: block;
        width: 100%;
        border-radius: 5px;
      }
    }

    .comm-share{
      padding-top: 10px;
      padding-bottom: 10px;
      color: #b3b3b3;
      font-size: 14px;
      line-height: 24px;
      .share_r{
        font-size: 12px;
        line-height: 24px;
        span{
          display: inline-block;
          margin-left: 10px;
        }
        .oo{
          position: relative;
          top: 5px;
        }
        .on{
          border: 1px solid #cdcdcd;
          border-radius: 5px;
          padding: 0px 10px;
        }
        .action{
          border: 1px solid #f93d3e;
          border-radius: 5px;
          padding: 0px 10px;
          background: #f93d3e;
          color: #fff;
        }
        .van-icon{
          font-size: 22px;
        }
      }
    }

  }

</style>
