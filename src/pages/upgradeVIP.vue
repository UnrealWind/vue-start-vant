<template>
  <van-container :status="status">
    <!-- 头部 -->
    <div slot="header" class="fix">
      <span @click="$router.back()"> <van-icon name="arrow-left" /> </span>
      会员升级
    </div>
    <div class="main">
      <div class="topImgBox">
        <img src="../assets/img/VipTop.png" alt="">
      </div>
      <!-- 礼包部分 -->
      <div class="gift clearfix">
        <div class="title">
          <div class="firstLine">
            购买以下产品
            <img src="../../src/assets/img/VIP.png" alt>
          </div>
          <span>即可升级永久钻石VIP</span>
        </div>
        <!-- commodity 商品 -->
        <div class="commodity">
          <ul>
            <li
              v-for="(item,index) in registeredItemsData"
              :key="index"
              @click="$router.push({path:item.path,query:{id:item.id}})"
            >
              <div class="imgBox">
                <img :src="item.image" alt>
              </div>
              <span class="tag">{{ item.title }}</span>
              <span class="intro">{{ item.discribe }}</span>
              <span class="money">
                ￥ {{ item.current }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottomImgBox">
        <div class="bottomTitle">
          <div class="firstLine">
            部分入驻品牌
            <img src="../../src/assets/img/brand.png" alt>
          </div>
          <span>SOME BRANDS SETTLED IN</span>
        </div>
        <img src="../assets/img/VipBottom.png" alt="">
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
        const arr = []
        if (res.data) {
          res.data.forEach((n, i) => {
            arr.push({
              image: require('../../src/assets/img/图层 6.png'),
              title: n.goodsName,
              discribe: n.goodsProfile,
              current: '200',
              pre: n.linePrice,
              path: '/user/productdetails',
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
  > > > .header {
    background: #312F3B;
  }

  i {
    font-style: normal;
  }

  img {
    vertical-align: middle;
  }

  .main {
    background: #312F3B;
  }

  .fix {
    *zoom: 1;
    height: 1.3rem;
    border-bottom: 0.01rem solid rgb(220, 220, 220);
    font-size: 0.45rem;
    line-height: 1.3rem;
    text-align: center;
    background: #312F3B;
    color: #fff;

    .van-icon {
      position: absolute;
      left: 14px;
      top: 43px;
      font-size: 0.5rem;
    }
  }

  .topImgBox {
    img {
      width: 100%;
    }
  }

  .gift {
    padding-top: 10px;
    margin-top: 10px;
    background: url("../assets/img/VipBackGround.png") repeat-y;

    .title {
      text-align: center;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      letter-spacing: 1px;

      .firstLine {
        margin-bottom: 10px;
        padding-left: 25px;

        img {
          width: 40px;
          vertical-align: bottom;
        }
      }
    }

    .commodity {
      ul {
        padding: 0.6rem 0.2rem 0 0.2rem;

        li {
          float: left;
          width: 4.4rem;
          height: 6.25rem;
          margin-bottom: 0.4rem;
          padding: 20px 10px;
          box-sizing: border-box;
          border: 0.02rem solid #f1f1f1;
          border-radius: 10px;
          background-color: #fff;

          &:nth-child(2n-1) {
            margin-right: 0.74rem;
          }

          .imgBox {
            text-align: center;
            margin-bottom: 20px;

            img {
              width: 3.4rem;
            }
          }

          .tag {
            margin-bottom: 10px;
            font-size: 0.28rem;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: bolder;
          }

          .intro {
            display: block;
            margin-bottom: 25px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .money {
            display: block;
            font-size: 0.42rem;
            color: #000000;
          }
        }
      }
    }
  }

  .bottomImgBox {
    padding: 15px 10px;
    background-color: #4A4357;

    .bottomTitle {
      padding-top: 30px;
      text-align: center;
      letter-spacing: 1px;
      margin-bottom: 20px;

      .firstLine {
        color: #fff;
        margin-bottom: 10px;
        padding-left: 25px;
        font-size: 22px;

        img {
          width: 40px;
          vertical-align: middle;
        }
      }

      span {
        font-size: 14px;
        color: #dddddd;
      }
    }

    img:last-child {
      width: 100%;
    }
  }
</style>
