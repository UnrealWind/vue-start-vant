<!-- home -->
<template>
  <van-container :status="status" :tabbar="true" :active="'zone'">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l l" @click="$router.push('/user/myshop')">
          <van-icon name="user-o" />
        </div>
        <div class="header_l r" @click="$router.push('/user/mysearch')">
          <van-icon name="search" />
        </div>
      </div>
    </div>

    <div class="content dan_wrap">

      <div class="store">
        <div class="wp">
          <div class="img" @click="$router.push('/user/myshop')"><img src="../../assets/img/logo.jpg" alt=""> </div>

          <div class="con-Title fix">
            <div class="l" @click="$router.push('/user/myshop')"> 四叶草2号店 </div>
            <div class="r">
              <span> 加关注 </span>
              <van-icon name="cross" />
            </div>
          </div>

          <div class="con-Title-min">
            拖鞋舒适好穿！性比价高
          </div>

          <div class="con-img">
            <img src="../../assets/img/user/tuoxie.png" alt="">
          </div>

          <div class="con-commodity fix" @click="$router.push('/user/productdetails')">

            <div class="comm_l l fix">
              <div class="comm_img l">
                <img src="../../assets/img/user/tuoxielogo.png" alt="">
              </div>
              <div class="comm-title r">
                <div class="titlemin"> Home Store 日式清雅浴室 </div>
                <div class="money"> ￥39.0 </div>
              </div>
            </div>

            <div class="comm_r r">
              查看详情
            </div>

          </div>

          <div class="comm-share fix">

            <div class="share_l l">
              <span>13</span> 人已分享
            </div>

            <div class="share_r r">
              <span> <van-icon name="chat-o" /> </span>
              <span> <van-icon name="upgrade" /> </span>
              <span> <van-icon name="like-o" /> </span>

            </div>

          </div>

          <div class="comm-message">

            <div class="mess_title">  <strong> 小丫： </strong> 哎呦！不错呦  </div>
            <div class="mess_title">  <strong> 小黄： </strong> 我稀罕的狠呀！  </div>
            <div class="mess_title">  <van-cell is-link @click="showPopup">  <strong> 查看全部<i>4</i>条回复 </strong>   </van-cell>  </div>
            <van-popup
              v-model="show"
              closeable
              round
              position="bottom"
              style="height: 50%"
            >

              <div class="mess-comment fix">

                <div class="title"> 评论 <span>4 条 </span>  </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小丫： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        哎呦！不错呦
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小黄： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        我稀罕的狠呀！
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小丫： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        哎呦！不错呦
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小黄： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        我稀罕的狠呀！
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

              </div>

            </van-popup>

          </div>

        </div>
      </div>

      <div class="store">
        <div class="wp">
          <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>

          <div class="con-Title fix">
            <div class="l"> 四叶草2号店 </div>
            <div class="r">
              <span> 加关注 </span>
              <van-icon name="cross" />
            </div>
          </div>

          <div class="con-Title-min">
            拖鞋舒适好穿！性比价高
          </div>

          <div class="con-img">
            <img src="../../assets/img/user/tuoxie.png" alt="">
          </div>

          <div class="con-commodity fix">

            <div class="comm_l l fix">
              <div class="comm_img l">
                <img src="../../assets/img/user/tuoxielogo.png" alt="">
              </div>
              <div class="comm-title r">
                <div class="titlemin"> Home Store 日式清雅浴室 </div>
                <div class="money"> ￥39.0 </div>
              </div>
            </div>

            <div class="comm_r r">
              查看详情
            </div>

          </div>

          <div class="comm-share fix">

            <div class="share_l l">
              <span>13</span> 人已分享
            </div>

            <div class="share_r r">
              <span> <van-icon name="chat-o" /> </span>
              <span> <van-icon name="upgrade" /> </span>
              <span> <van-icon name="like-o" /> </span>

            </div>

          </div>

          <div class="comm-message">

            <div class="mess_title">  <strong> 小丫： </strong> 哎呦！不错呦  </div>
            <div class="mess_title">  <strong> 小黄： </strong> 我稀罕的狠呀！  </div>
            <div class="mess_title">  <van-cell is-link @click="showPopup">  <strong> 查看全部<i>4</i>条回复 </strong>   </van-cell>  </div>
            <van-popup
              v-model="show"
              closeable
              round
              position="bottom"
              style="height: 50%"
            >

              <div class="mess-comment fix">

                <div class="title"> 评论 <span>4 条 </span>  </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小丫： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        哎呦！不错呦
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小黄： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        我稀罕的狠呀！
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小丫： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        哎呦！不错呦
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

                <div class="mess_conent">
                  <div class="img"><img src="../../assets/img/logo.jpg" alt=""> </div>
                  <div class="mess-Title fix">
                    <div class="l">
                      <div class="title_min">
                        <strong> 小黄： </strong> <div class="time"> 10-28 </div>
                      </div>
                      <div class="title_cont">
                        我稀罕的狠呀！
                      </div>
                    </div>
                    <div class="r">
                      <span> 赞 </span>
                      <van-icon name="like" />
                    </div>
                  </div>
                </div>

              </div>

            </van-popup>

          </div>

        </div>
      </div>

    </div>

  </van-container>
</template>

<script>
  import { Icon, Popup } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-popup': Popup
    },
    data() {
      return {
          status: 'loading',
          value: '',
          show: false
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

  i{
    font-style: normal;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 52px;
    background: #ffffff;
  }

  .header{
    .fix{
      background: #ffffff;
      padding-bottom: 5px;
    }
    .van-search{
      margin: 0 auto;
      padding: 0px;
    }
    .van-search__content{
      border-radius: 50px;
      overflow: hidden;
      width: 100%;
      padding: 0px;
      padding-left: 10px;
    }
    .header_r{
      margin-top: 5px;
      margin-left: 10px;
      width: 85%;
    }
    .header_l{
      position: relative;
      line-height: 30px;
      padding-top: 10px;
      .van-icon{
        font-size: 22px;
        line-height: 30px;
        color: #333;
      }
    }
  }

  .store{
    border-top: 1px solid #f1f1f1;
    box-sizing: border-box;
    padding-left: 50px;
    position: relative;
    padding-bottom: 20px;
    padding-top: 20px;

    .img{
      position: absolute;
      left: 10px;
      top: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      overflow: hidden;
      img{
        display: block;
        width: 100%;
      }
    }

    .con-Title{
      .l{
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
      }
      .r{
        span{
          background: #fdf1f1;
          color: #ff443b;
          display: inline-block;
          padding: 2px 10px;
          line-height: 20px;
          border-radius: 5px;
        }
      }
    }

    .con-Title-min{
      font-size: 14px;
      line-height: 30px;
    }

    .con-img{
      img{
        display: block;
        width: 100%;
      }
    }

    .comm-title{
      width: 76%;
    }
    .comm_img{
      display: block;
      width: 20%;
      img{
        display: block;
        width: 100%;
      }
    }

    .titlemin{
      line-height: 26px;
      word-break:keep-all;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .con-commodity{
      margin-top: 10px;
      >div{
        border: 1px solid #dbdbdb;
        padding: 5px 5px;
        border-radius: 5px;
      }

      .comm_l{
        width: 83%;
        background: #f7f7f7;
      }
      .comm_r{
        width: 15%;
        background: #fff;
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        color: #acacac;
      }
    }

    .comm-share{
      padding-top: 10px;
      padding-bottom: 10px;
      color: #b3b3b3;
      font-size: 14px;
      line-height: 24px;
      .share_r{
        font-size: 18px;
        span{
          display: inline-block;
          margin-left: 10px;
        }
        .van-icon{
          font-size: 22px;
        }
      }

    }

    .comm-message{
      background: #f7f7f7;
      border-radius: 8px;
      line-height: 24px;
      overflow: hidden;
      padding: 10px 10px;
      color: #4f4f4f;
      .mess_title{
        font-size: 14px;
        margin-bottom: 5px;
        color: #333;
      }

    }

  }

  .mess-comment{
    padding: 10px 20px;
    border-radius: 10px 10px 0px 0px;
    .title{
      font-weight: bold;
      font-size: 18px;
      color: #3a3a3a;
      span{
        font-weight: normal;
        color: #989898;
        font-size: 12px;
      }
    }

  }

  .mess_conent{
    position: relative;
    padding-left: 50px;
    padding-top: 10px;
    margin-top: 10px;
    .img{
      position: absolute;
      left: 0px;
      top: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      overflow: hidden;
      img{
        display: block;
        width: 100%;
      }
    }

    .mess-Title{
      sotong{
        display: inline-block;
        font-size: 16px;
      }
      .time{
        display: inline-block;
        font-size: 12px;
        color: #b6b6b6;
      }
      .r{
        font-size: 14px;
        color: #a0a0a0;
      }
      .van-icon{
          font-size: 20px;
          color: #4c4a58;
          position: relative;
          top: 6px;
      }
    }

  }

</style>
