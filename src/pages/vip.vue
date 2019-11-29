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
      <div class=" dan_wrap fix">
        <div class="wp">
          <div class="navdan_box4">
            <ul class="commodityLits flex_wrap">
              <li v-for="(item,index) in activity.children" :key="index">
                <a @click="$router.push({path:'/user/productdetails',query:{id:item.id}})">
                  <div>
                    <img :src="item.goodsStatics[3].url" alt="">
                  </div>
                  <p class="title">{{ item.goodsName }}</p>
                  <div class="p3 flex_betweenc">
                    <p class="price">
                      ¥ {{ item.showPrice }}<span class="pre">¥{{ item.linePrice }}</span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="vip_title dan_wrap fix">-->
    <!--      <div class="wp">-->
    <!--        <div class="title"><img src="../assets/img/viptu13.png" alt=""> 精选好物 <img-->
    <!--          src="../assets/img/viptu14.png"-->
    <!--          alt=""-->
    <!--        ></div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class=" dan_wrap fix">-->
    <!--      <div class="wp">-->
    <!--        <div-->
    <!--          class="navdan_box4"-->
    <!--        >-->

    <!--          <commodity-->
    <!--            v-for="(vip,index) in vipDataMin"-->
    <!--            :key="`${vip.type}-${index}`"-->
    <!--            :type="vip.type"-->
    <!--            :image="vip.image"-->
    <!--            :discribe="vip.discribe"-->
    <!--            :title="vip.title"-->
    <!--            :vip-price="vip.vipPrice"-->
    <!--            :vip-price-discribe="vip.vipPriceDiscribe"-->
    <!--            :btn-go="vip.btnGo"-->
    <!--          >-->
    <!--          </commodity>-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

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
                    await this.getVipData()
                    // await this.getVipDataMin()
                    // await this.getData()
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
                console.log(res)
                res.data.forEach(async(n, i) => {
                    const res = await this.getVipData(n.activityCode)
                    this.$set(n, 'children', res.data[0].goods)
                })
                this.activityData = res.data
            },
            // 今日必抢
            async getVipData(activityCode) {
                const res = await this.$http.post(`product/activity/activityGoodsList`, {
                    activityCode: activityCode
                })
                return res
            }
            // 精选好物
            // async getVipDataMin() {
            //     const res = await this.$http.post('product/activity/activityGoodsList', {
            //         activityCode: 'fb5355bd08d14090aad2f7f2f7d56546'
            //     })
            //     const arr = []
            //     res.data.forEach((n, i) => {
            //         arr.push({
            //             discribe: n.actDetailName
            //         })
            //         n.goods.forEach((good, i) => {
            //             arr.push({
            //                 type: 'list-vip',
            //                 image: good.goodsStatics[i].url,
            //                 title: good.goodsProfile,
            //                 vipPrice: {
            //                     current: good.showPrice,
            //                     pre: good.linePrice
            //                 },
            //                 vipPriceDiscribe: {},
            //                 btnGo: `/user/productdetails?id=${good.id}`
            //             })
            //         })
            //     })
            //     this.vipDataMin = arr
            // }
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
    left: 0px;
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

  .title{
    font-size: 16px;
  }

  .pre {
    color: grey;
    font-size: 12px;
    margin-left: 10px;
    text-decoration: line-through;
  }

</style>
