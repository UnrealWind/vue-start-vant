<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 试用中心</div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
      <div class="hesde_l4" @click="$router.push('/cart/shopcar')"> <van-icon name="cart-o" />  </div>
    </div>

    <div v-if="vipDataMin.length>0" class="nav_box4 dan_wrap fix">
      <div class="wp">
        <commodity
          v-for="(commodity,index) in vipDataMin"
          :key="`${commodity.type}-${index}`"
          :type="commodity.type"
          :image="commodity.image"
          :discribe="commodity.discribe"
          :title="commodity.title"
          :index-price="commodity.indexPrice"
          :index-price-discribe="commodity.indexPriceDiscribe"
          :btn-go="commodity.btnGo"
        >
        </commodity>
      </div>
    </div>
    <p v-else class="marginT-80">
      暂无数据！
    </p>

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
                value: '',
                vipDataMin: []
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
                    await this.getVipDataMin()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getVipDataMin() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: 'e211c6bf6edf4b1aaaa4d80b568c4fdb'
                })
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        n.goods.forEach((good, i) => {
                            arr.push({
                                'type': 'list-index',
                                'image': good.goodsStatics[0].url,
                                'discribe': good.goodsProfile,
                                'title': good.goodsName,
                                'indexPrice': { 'current': good.showPrice, 'pre': good.linePrice },
                                'indexPriceDiscribe': {},
                                'btnGo': `/user/productdetails?id=${good.id}`
                            })
                        })
                    })
                }
                this.vipDataMin = arr
            }
        }
    }

</script>
<style lang='scss' scoped>
  .marginT-80{
    margin-top:80px;
    text-align: center;
    font-size:15px;
  }
  >>>.main {
    background: #f7f7f7;
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
  .img{  display: block; }
  .img img{ display: block; width: 100%; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .dan_wrap{ background: #f7f7f7; .wp{ width: 95%; margin: 0 auto;  } }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333;  }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 33px; font-size: 20px;  color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;  color: #333;  }
  }

  .nav_box4{
    padding-top: 60px;
    padding-bottom: 20px;
    .navdan_box4{
      margin-bottom: 10px;
      overflow: hidden;
      border-radius: 5px;
    }
  }

</style>
