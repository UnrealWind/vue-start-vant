<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> VIP专享福利</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="share" />
      </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item><img src="../assets/img/viptu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div v-for="(activity,actIndex) in activityData" :key="actIndex">
      <div class="vip_title dan_wrap fix">
        <div class="wp">
          <div class="title"><img src="../assets/img/viptu13.png" alt=""> {{ activity.activityName }} <img
            src="../assets/img/viptu14.png"
            alt=""
          ></div>
        </div>
      </div>
      <div class="dan_wrap fix">
        <div class="wp">
          <div class="navdan_box4">
            <ul class="commodityLits flex_wrap">
              <li v-for="(item,index) in activity.children" :key="index">
                <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
                  <div class="imgBox">
                    <img :src="item.goodsStatics[3].url" alt="">
                  </div>
                  <div class="messageBox">
                    <p class="title">{{ item.goodsName }}</p>
                    <div class="p3 flex_betweenc">
                      <p class="price">
                        ¥ {{ item.showPrice }}<span class="pre">¥{{ item.linePrice }}</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="goodErr" class="vipRrrorBox">
          该活动下暂无商品
        </div>
      </div>

    </div>
  </van-container>
</template>

<script>
  import { Icon, Swipe, SwipeItem } from 'vant'

  export default {
    components: {
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
      'van-icon': Icon
    },
    data() {
      return {
        status: 'loading',
        goodErr: false,
        vipData: [],
        activityData: []

      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          // 活动
          await this.getActivityData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      // 活动
      async getActivityData() {
        const res = await this.$http.post('product/activity/contentActivityRel', {
          contentId: this.$route.query.id
        })
        this.goodErr = false
        if (res.data) {
          res.data.forEach(async(n, i) => {
            const res1 = await this.getVipData(n.activityCode)
            if (res.data[i].goods) {
              this.$set(n, 'children', res1.data[i].goods)
            } else {
              this.goodErr = true
            }
          })
        }
        this.activityData = res.data
      },
      // 今日必抢
      async getVipData(activityCode) {
        return await this.$http.post(`product/activity/activityGoodsList`, {
          activityCode: activityCode,
          pageSize: 4
        })
      }
    }
  }

</script>
<style lang='scss' scoped>
  .vipRrrorBox {
    margin: 10px 0 50px;
    height: 100px;
    text-align: center;
    color: #fff;
  }

  h1 {
    background: red;
    width: 375px;
  }

  .fix {
    *zoom: 1;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .img {
    display: block;
  }

  .img img {
    display: block;
    width: 100%;
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

  .dan_wrap {
    background: #c70b1a;

    .wp {
      width: 95%;
      margin: 0 auto;
    }
  }

  .van-swipe {
    margin-top: 45px;

    img {
      display: block;
      width: 100%;
    }
  }

  .header {
    .fix {
      background: #fff;
    }
  }

  .hesde_l {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l3 {
    display: none;
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l4 {
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 20px;
    color: #333;
  }

  .hesde_l2 {
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;

    .p {
      font-size: 16px;
      color: #333;
    }
  }

  .vipsnap {
    background: #fff;
    border-radius: 5px;
  }

  .vip_title {
    padding-top: 10px;
    padding-bottom: 20px;

    .title {
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 18px;

      img {
        display: inline-block;
        width: 30px;
      }
    }
  }

  .navdan_box4 {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .price {
    color: red;
    font-size: 18px;
  }

  .title {
    font-size: 16px;
  }

  .pre {
    color: grey;
    font-size: 12px;
    margin-left: 10px;
    text-decoration: line-through;
  }

  .commodityLits {
    display: block;

    li {
      width: 100%;

      .imgBox {
        img {
          width: 100%;
          height: 200px;
        }
      }

      .messageBox {
        p {
          float: left;
          margin-left: 20px;
        }

        .p3 {
          float: right;
          margin-right: 20px;
        }
      }
    }
  }

</style>
