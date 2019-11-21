<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> 人气面膜榜</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="share" />
      </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav_ul">
          <commodity
            v-for="(commodity,index) in productListMinData"
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
                current: '',
                productListMinData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getProductListMinData()
                    // await this.getData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getProductListMinData() {
                const res = await this.$http.post('product/activity/activityGoodsList', {
                    activityCode: 'e211c6bf6edf4b1aaaa4d80b568c4fdb'
                })
                const arr = []
                if (res.data) {
                    res.data.forEach((n, i) => {
                        n.goods.forEach((good, i) => {
                            arr.push({
                                'type': 'list-index',
                                'image': good.goodsStatics[i].url,
                                'discribe': good.goodsProfile,
                                'title': good.goodsName,
                                'indexPrice': { 'current': good.linePrice, 'pre': good.showPrice },
                                'indexPriceDiscribe': {},
                                'btnGo': `/user/productdetails?id=${good.id}`
                            })
                        })
                    })
                }
                this.productListMinData = arr
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
    margin-top: 50px;
    background: #f2f2f2;
    background-size: 100% 50%;

    .wp {
      width: 95%;
      margin: 0 auto;
    }
  }

  .van-swipe {
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
    right: 50px;
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

    color: #333;
  }

  .header {
    .fix {
      background: #fff;
    }
  }

  .nav_ul {
    padding-top: 10px;

    .li {
      background: #fff;
      border-radius: 10px;
      padding: 0px 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .nav_l {
      width: 35%;
    }

    .nav_r {
      width: 60%;
      padding-top: 10px;

      a {
        display: block;
      }

      .title {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333333;
        line-height: 20px;
      }

      .titlemin {
        font-size: 14px;
        color: #808080;
        line-height: 20px;
      }

      .botom {
        padding-top: 20px;
      }

      .price {
        color: #f00d3b;
        font-size: 18px;

        span {
          color: #808080;
          text-decoration: line-through;
          font-size: 12px;
          font-weight: normal;
        }
      }

      .car {
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        color: #fff;
        background: #f00d3b;
        font-size: 16px;
      }
    }

    .sale {
      padding-top: 5px;

      span {
        display: inline-block;
        border: 1px solid #dc94a2;
        color: #d41c42;
        padding: 1px 5px;
        border-radius: 5px;
        line-height: 14px;
      }
    }
  }

</style>
