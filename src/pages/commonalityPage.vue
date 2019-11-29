<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> {{ this.$route.query.title }}</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="certificate" />
      </div>
      <div class="hesde_l4" @click="$router.push('/cart/shopcar')">
        <van-icon name="cart-o" />
      </div>
    </div>
    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <commodity
          v-for="(commodity,index) in commodityData"
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
        <div v-show="hintShow" class="nav_box10 dan_wrap">
          <div class="hint">当前类目下没有分类</div>
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
                value: '',
                hintShow: false,
                commodityData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getListData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getListData() {
                const res = await this.$http.post('product/goods/listByLastCategoryCode?pageSize=4&pageNum=1', {
                    categoryCode: this.$route.query.id
                })
                console.log(res)
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            'type': 'list-index',
                            'discribe': n.goodsProfile,
                            'title': n.goodsName,
                            'indexPriceDiscribe': {},
                            'indexPrice': {
                                'current': n.showPrice,
                                'pre': n.linePrice
                            },
                            'btnGo': `/user/productdetails?id=${n.id}`,
                            'image': n.mainImg
                        })
                    })
                    this.commodityData = arr
                    if (this.commodityData.length === 0) {
                        this.hintShow = true
                    }
                }
            }
        }
    }

</script>
<style lang='scss' scoped>
  .hint {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
  }
  .fix {
    *zoom: 1;
  }
  .wp .container >>> {
    margin-top: 15px;
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
    background: #f2f2f2;

    .wp {
      width: 95%;
      margin: 50px auto;
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

  .nav_box {
    padding-top: 10px;
  }

  .nav_wrap {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 1px;
    margin-bottom: 20px;
  }

</style>
