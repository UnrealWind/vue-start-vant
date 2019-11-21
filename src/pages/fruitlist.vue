<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> 品质水果 - 苹果</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="certificate" />
      </div>
      <div class="hesde_l4" @click="$router.push('/user/productdetails')">
        <van-icon name="cart-o" />
      </div>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/user/productdetails')"><img src="../assets/img/fruittu1.png" alt="">
      </van-swipe-item>
    </van-swipe>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div
          class="nav_wrap"
        >
          <commodity
            v-for="(vip,index) in vipData"
            :key="`${vip.type}-${index}`"
            :type="vip.type"
            :image="vip.image"
            :describe="vip.describe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-describe="vip.vipPriceDescribe"
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
                value: '',
                vipData: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getFruitListData()
                    // await this.getData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async getFruitListData() {
                const res1 = await this.$http.post(`product/content/list?level=3&parentId=${this.$route.query.id}`)
                const res = await this.$http.post('product/goods/listByLastCategoryCode', {
                    categoryCodeList: [res1.rows[0].dictCategoryIds],
                    pageSize: 3,
                    pageNum: 1
                })
                const arr = []
                if (res.rows) {
                    res.rows.forEach((n, i) => {
                        arr.push({
                            type: 'list-vip',
                            describe: n.goodsProfile,
                            title: n.goodsName,
                            vipPrice: { 'current': n.showPrice, 'pre': n.linePrice },
                            vipPriceDescribe: {},
                            id: n.id,
                            btnGo: `/user/productdetails?id=${n.id}`,
                            image: n.mainImg
                        })
                    })
                }
                console.log(arr)
                this.vipData = arr
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
    background: #f2f2f2;

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
