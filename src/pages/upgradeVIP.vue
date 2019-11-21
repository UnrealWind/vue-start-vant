<template>
  <van-container :status="status">
    <!-- 头部 -->
    <div slot="header" class="fix">
      <span @click="$router.back()"> <van-icon name="arrow-left" /> </span>
      注册电商app
    </div>
    <div class="main">
      <div class="name clearfix">
        <div class="logo fl">
          <img src="../../src/assets/img/logo.jpg" alt>
        </div>
        <div class="fl text">
          <p>
            Hi,我是
            <i>云妈妈公益</i>
          </p>
          <p>分享一个正品购物平台给你~</p>
        </div>
      </div>
      <!-- 会员卡部分 -->
      <div class="card clearfix">
        <div class="pic">
          <img src="../../src/assets/img/图层 1.png" alt>
        </div>
        <ul class="">
          <li>
            <img src="../../src/assets/img/图层 2.png" alt>
            <p>尊享礼包</p>
          </li>
          <li>
            <img src="../../src/assets/img/图层 3.png" alt>
            <p>年省5000元</p>
          </li>
          <li>
            <img src="../../src/assets/img/图层 4.png" alt>
            <p>最高返利40%</p>
          </li>
          <li>
            <img src="../../src/assets/img/图层 5.png" alt>
            <p>3000+品牌</p>
          </li>
        </ul>
      </div>
      <!-- 礼包部分 -->
      <div class="gift clearfix">
        <div class="title">
          <img src="../../src/assets/img/钻石.jpg" alt>
          <span>请选择任一礼包，购买注册</span>
        </div>
        <!-- commodity 商品 -->
        <div class="commodity">
          <ul>
            <li
              v-for="(item,index) in registeredItemsData"
              :key="index"
              @click="$router.push({path:item.path,query:{id:item.id}})"
            >
              <div>
                <img :src="item.image" alt>
              </div>
              <div class="label">{{ item.discribe }}</div>
              <span class="tag">{{ item.title }}</span>
              <span class="money">
                ￥ {{ item.current }}
                <i style="text-decoration:line-through">市场价：{{ item.pre }}</i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- trade price批发价 -->
      <div class="tradePrice clearfix">
        <div class="title">
          <span>购物享受批发价！</span>
          <span>“批发价”帮你搞定全年生活必需品</span>
        </div>
        <ul>
          <li class="clearfix">
            <div class="pic">
              <img src="../../src/assets/img/图层 7.png" alt>
            </div>
            <div class="text">
              <span>
                每人每月用2支舒客牙膏，一个人，一年就
                <i>省342.65元!</i>
              </span>
              <i>会员价￥58.35/6支</i>
              <i style="text-decoration:line-through">市场价￥144/6支</i>
            </div>
          </li>
          <li class="clearfix">
            <div class="pic">
              <img src="../../src/assets/img/图层 7.png" alt>
            </div>
            <div class="text">
              <span>
                每人每月用2支舒客牙膏，一个人，一年就
                <i>省342.65元!</i>
              </span>
              <i>会员价￥58.35/6支</i>
              <i style="text-decoration:line-through">市场价￥144/6支</i>
            </div>
          </li>
          <li class="clearfix">
            <div class="pic">
              <img src="../../src/assets/img/图层 7.png" alt>
            </div>
            <div class="text">
              <span>
                每人每月用2支舒客牙膏，一个人，一年就
                <i>省342.65元!</i>
              </span>
              <i>会员价￥58.35/6支</i>
              <i style="text-decoration:line-through">市场价￥144/6支</i>
            </div>
          </li>
          <li class="clearfix">
            <div class="pic">
              <img src="../../src/assets/img/图层 7.png" alt>
            </div>
            <div class="text">
              <span>
                每人每月用2支舒客牙膏，一个人，一年就
                <i>省342.65元!</i>
              </span>
              <i>会员价￥58.35/6支</i>
              <i style="text-decoration:line-through">市场价￥144/6支</i>
            </div>
          </li>
        </ul>
      </div>
      <!-- cutOff 分割线 -->
      <div class="cutOff">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <!-- share 分享 -->
      <div class="share">
        <div class="title">
          <span>分享商品有返利!</span>
          <span>返利最高达40% 分享越多赚得越多</span>
        </div>
        <ul class="clearfix">
          <li>
            <div class="pic">
              <img src="../../src/assets/img/图层 8.png" alt>
            </div>
            <span>
              分享赚 ￥
              <i>24.5</i>
            </span>
            <span>台湾TT蜗牛胶原天丝面膜三盒</span>
            <span>会员价￥129</span>
          </li>
          <li>
            <div class="pic">
              <img src="../../src/assets/img/图层 8.png" alt>
            </div>
            <span>
              分享赚 ￥
              <i>24.5</i>
            </span>
            <span>台湾TT蜗牛胶原天丝面膜三盒</span>
            <span>会员价￥129</span>
          </li>
          <li>
            <div class="pic">
              <img src="../../src/assets/img/图层 8.png" alt>
            </div>
            <span>
              分享赚 ￥
              <i>24.5</i>
            </span>
            <span>台湾TT蜗牛胶原天丝面膜三盒</span>
            <span>会员价￥129</span>
          </li>
          <li>
            <div class="pic">
              <img src="../../src/assets/img/图层 8.png" alt>
            </div>
            <span>
              分享赚 ￥
              <i>24.5</i>
            </span>
            <span>台湾TT蜗牛胶原天丝面膜三盒</span>
            <span>会员价￥129</span>
          </li>
        </ul>
      </div>
      <!-- brand 商标 -->
      <div class="brand">
        <h2>·一线大牌直供·</h2>
        <span>直接与品牌合作，从源头确保低价正品</span>
        <div class="pic">
          <img src="../../src/assets/img/图层 9.png" alt>
        </div>
        <h2>电商速度 不断刷新</h2>
        <div class="list">
          <ul class="clearfix">
            <li>
              <div class="pic">
                <img src="../../src/assets/img/图层 10.png" alt>
              </div>
              <div class="text">
                <span>
                  <i>30秒</i>卖出32万枚鸡蛋
                </span>
                <span>2017年3月5日，德青源安全鸡蛋首次上架电商，仅30秒，1万组32万枚鸡蛋被“秒杀”。</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../../src/assets/img/图层 10.png" alt>
              </div>
              <div class="text">
                <span>
                  <i>30秒</i>卖出32万枚鸡蛋
                </span>
                <span>2017年3月5日，德青源安全鸡蛋首次上架电商，仅30秒，1万组32万枚鸡蛋被“秒杀”。</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../../src/assets/img/图层 10.png" alt>
              </div>
              <div class="text">
                <span>
                  <i>30秒</i>卖出32万枚鸡蛋
                </span>
                <span>2017年3月5日，德青源安全鸡蛋首次上架电商，仅30秒，1万组32万枚鸡蛋被“秒杀”。</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../../src/assets/img/图层 10.png" alt>
              </div>
              <div class="text">
                <span>
                  <i>30秒</i>卖出32万枚鸡蛋
                </span>
                <span>2017年3月5日，德青源安全鸡蛋首次上架电商，仅30秒，1万组32万枚鸡蛋被“秒杀”。</span>
              </div>
            </li>
          </ul>
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
                registeredItemsData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getRegisteredItemsData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getRegisteredItemsData() {
                const res = await this.$http.post('product/goods/listByRegister')
                console.log(res)
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        arr.push({
                            image: require('../../src/assets/img/图层 6.png'),
                            title: n.goodsName,
                            discribe: n.goodsProfile,
                            current: '200',
                            pre: n.linePrice,
                            path: '/user/vipLogon',
                            id: n.id
                        })
                    })
                }
                this.registeredItemsData = arr
            }
        }
    }
</script>

<style lang="scss" scoped>
  i {
    font-style: normal;
  }

  .main {
    background: #fff;
  }

  .fix {
    *zoom: 1;
    /*position: relative;*/
    height: 1.3rem;
    border-bottom: 0.01rem solid rgb(220, 220, 220);
    font-size: 0.45rem;
    line-height: 1.3rem;
    text-align: center;
    background: #fff;
    color: #000;

    .van-icon {
      position: absolute;
      left: 14px;
      top: 14px;
      font-size: 0.5rem;
    }
  }

  .name {
    height: 2rem;
    margin-top: 1.3rem;
    margin-left: 0.3rem;
    padding-top: 0.3rem;

    .logo {
      float: left;
      margin-right: 0.3rem;

      img {
        height: 1.2rem;
        text-align: center;
      }
    }

    .text {
      p:nth-child(1) {
        font-size: 0.4rem;
        color: #989898;

        i {
          font-weight: 700;
          color: #000;
        }
      }

      p:nth-child(2) {
        font-size: 0.4rem;
        font-weight: 500;
      }
    }
  }

  .card {
    text-align: center;
    height: 9rem;

    .pic {
      background: -webkit-linear-gradient(left, #fba96c, #fe8271);
      padding-top: 0.4rem;

      img {
        width: 9.6rem;
        vertical-align: middle;
        border-radius: 8%;
      }
    }

    ul {
      li {
        float: left;
        padding: 0.8rem 0;
        width: 25%;
        text-align: center;

        img {
          width: 1.5rem;
        }

        p {
          text-align: center;
          font-size: 3px;
        }
      }
    }
  }

  .gift {
    .title {
      margin: 0 2rem;
      position: relative;

      img {
        height: 0.45rem;
        vertical-align: middle;
        position: relative;
        top: -3px;
      }

      span {
        font-size: 0.45rem;
        font-weight: 700;
      }

      i {
        display: block;
        width: 0.9rem;
        height: 0.05rem;
        background-color: #949494;
      }

      .line-left {
        position: absolute;
        top: 22px;
        left: -58px;
      }

      .line-right {
        position: absolute;
        top: 22px;
        right: -50px;
      }
    }

    .commodity {
      ul {
        padding: 0.6rem 0.2rem 0 0.2rem;

        li {
          float: left;
          width: 4.4rem;
          height: 6.25rem;
          text-align: center;
          margin-bottom: 0.4rem;
          padding-top: 0.8rem;
          box-sizing: border-box;
          border: 0.02rem solid #f1f1f1;
          border-radius: 10%;

          &:nth-child(2n-1) {
            margin-right: 0.74rem;
          }

          img {
            width: 3.4rem;
          }

          .label {
            height: 0.54rem;
            width: 3.26rem;
            background-color: red;
            border-radius: 0 20px 20px 0;
            color: #fff;
            text-align: center;
            padding-top: 0.13rem;
            margin-bottom: 0.3rem;
          }

          span {
            display: block;
            margin-left: 0.2rem;
          }

          .tag {
            font-size: 0.28rem;
            text-align: left;
          }

          .money {
            font-size: 0.42rem;
            color: red;

            i {
              font-size: 0.3rem;
              color: #c6c6c6;
              margin-left: 0.36rem;
            }
          }
        }
      }
    }
  }

  .tradePrice {
    padding: 0 0.9rem;

    .title {
      height: 2.1rem;

      span {
        display: block;
        text-align: center;
      }

      span:nth-child(1) {
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
      }

      span:nth-child(2) {
        font-size: 0.44rem;
        color: #818181;
      }
    }

    ul {
      li {
        margin-bottom: 1rem;

        .pic {
          float: left;

          img {
            height: 2.5rem;
            vertical-align: middle;
          }
        }

        .text {
          float: left;
          width: 5.1rem;
          margin-left: 0.18rem;

          span {
            width: 6rem;
            font-size: 0.4rem;

            i {
              color: red;
            }
          }

          i:nth-child(2) {
            margin-top: 0.56rem;
            margin-bottom: 0.1rem;
            display: block;
            color: red;
          }

          i:nth-child(3) {
            display: block;
            color: #c6c6c6;
          }
        }
      }
    }
  }

  .cutOff {
    padding: 0 0.4rem;
    height: 0.3rem;
    margin-bottom: 1.2rem;

    i:nth-child(2n-1) {
      display: inline-block;
      width: 4.32rem;
      height: 0.02rem;
      background-color: #efefef;
    }

    i:nth-child(2) {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: #efefef;
    }
  }

  .share {
    margin-bottom: 0.68rem;

    .title {
      height: 2.1rem;

      span {
        display: block;
        text-align: center;
      }

      span:nth-child(1) {
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
      }

      span:nth-child(2) {
        font-size: 0.44rem;
        color: #818181;
      }
    }

    ul {
      width: 100%;

      li {
        width: 50%;
        float: left;

        .pic {
          text-align: center;

          img {
            width: 3rem;
          }
        }

        span {
          display: block;
          text-align: center;
        }

        span:nth-child(2) {
          color: red;
          font-size: 0.4rem;

          i {
            font-size: 0.56rem;
          }
        }

        span:nth-child(3),
        span:nth-child(4) {
          color: #adadad;
        }
      }
    }
  }

  .brand {
    background-color: red;
    text-align: center;
    padding: 0.6rem 0.3rem;

    h2 {
      color: #fff;
      margin: 0.58rem auto;
    }

    span {
      color: #fff;
      font-size: 0.4rem;
    }

    .pic {
      padding-top: 0.3rem;

      img {
        width: 100%;
      }
    }

    .list {
      ul {
        li {
          background: -webkit-linear-gradient(left, #ffe4b6, #fe9f56);
          height: 3.2rem;
          border-radius: 0.3rem;
          padding-left: 0.7rem;
          padding-top: 0.2rem;
          margin-bottom: 0.15rem;
          text-align: center;

          .pic {
            float: left;

            img {
              float: left;
              width: 2rem;
            }
          }

          .text {
            span {
              display: block;
            }

            & span:nth-child(1) {
              font-size: 0.43rem;
              color: #000;
              margin-bottom: 0.38rem;

              i {
                font-size: 0.74rem;
              }
            }

            & span:nth-child(2) {
              font-size: 0.3rem;
              color: #a67c51;
            }
          }
        }
      }
    }
  }
</style>
