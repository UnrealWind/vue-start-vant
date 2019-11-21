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

    <div class="vip_title dan_wrap fix">
      <div class="wp">
        <div class="title"><img src="../assets/img/viptu13.png" alt=""> 今日必抢 <img
          src="../assets/img/viptu14.png"
          alt=""
        ></div>
      </div>
    </div>

    <div class=" dan_wrap fix">
      <div class="wp">
        <div
          v-for="(vip,index) in vipData"
          :key="`${vip.type}-${index}`"
          class="navdan_box4"
          @click="$router.push({path:vip.path,query:{id:vip.id}})"
        >

          <commodity
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="vip.vipPriceDiscribe"
            :btn-go="vip.btnGo"
          >
          </commodity>

        </div>
      </div>
    </div>

    <div class="vip_title dan_wrap fix">
      <div class="wp">
        <div class="title"><img src="../assets/img/viptu13.png" alt=""> 精选好物 <img
          src="../assets/img/viptu14.png"
          alt=""
        ></div>
      </div>
    </div>

    <div class=" dan_wrap fix">
      <div class="wp">
        <div
          class="navdan_box4"
          @click="$router.push({path:vip.path,query:{id:vip.id}})"
        >

          <commodity
            v-for="(vip,index) in vipDataMin"
            :key="`${vip.type}-${index}`"
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="vip.vipPriceDiscribe"
            :btn-go="vip.btnGo"
          >
          </commodity>

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
                vipData: [],
                vipDataMin: []

            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getVipData()
                    await this.getVipDataMin()
                    // await this.getData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            // 今日必抢
            async getVipData() {
                const res = await this.$http.post(`product/activity/activityGoodsList`, {
                    activityCode: 'b1f034550b31468c93dec8535a3dc1aa'
                })
                console.log(res)
                const arr = []
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            type: 'list-vip',
                            image: good.goodsStatics[i].url,
                            title: good.goodsName,
                            discribe: good.goodsProfile,
                            vipPrice: {
                                current: good.linePrice,
                                pre: '508'
                            },
                            vipPriceDiscribe: {},
                            btnGo: '/user/productdetails',
                            id: good.id
                        })
                    })
                })
                this.vipData = arr
            },
            // 精选好物
            async getVipDataMin() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: 'fb5355bd08d14090aad2f7f2f7d56546'
                })
                const arr = []
                res.data.forEach((n, i) => {
                    arr.push({
                        discribe: n.actDetailName
                    })
                    n.goods.forEach((good, i) => {
                        arr.push({
                            type: 'list-vip',
                            image: good.goodsStatics[i].url,
                            title: good.goodsProfile,
                            vipPrice: {
                                current: good.linePrice,
                                pre: '300'
                            },
                            vipPriceDiscribe: {
                                type: '已告罄'
                            },
                            btnGo: '/user/productdetails',
                            id: good.id,
                            path: '/user/productdetails'
                        })
                    })
                })
                this.vipDataMin = arr
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

</style>
