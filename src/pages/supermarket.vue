<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="hesde_l2">
        <div class="p"> 超市五折天</div>
      </div>
      <div class="hesde_l3">
        <van-icon name="share" />
      </div>

    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item><img src="../assets/img/supermarket.png" alt=""></van-swipe-item>
    </van-swipe>
    <div class="nav_box dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div class="title"><span> 疯狂五折好货 </span></div>
        </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div v-for="(rebate,index) in rebateData" :key="`${rebate.type}-${index}`" class="navdan_box4">
          <commodity
            :type="rebate.type"
            :image="rebate.image"
            :title="rebate.title"
            :rebate-price="rebate.rebatePrice"
            :btn-go="rebate.btnGo"
            :image-rebate-line="rebate.imageRebateLine"
            :image-rebate="rebate.imageRebate"
          >
          </commodity>
        </div>
        <div v-show="errBox" class="errorBox">
          没有查询到数据。请刷新重试
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
              errBox: false,
                rebateData: [],
                isActive: '',
                navList: [
                    {
                        title: '疯抢五折好货',
                        id: 1
                    },
                    {
                        title: '超级爆款',
                        id: 2
                    },
                    {
                        title: '精选大牌',
                        id: 3
                    },
                    {
                        title: '返回超市',
                        id: 4
                    }
                ]
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            changeTab(index) {
                this.isActive = index
            },
            // tab栏下商品
            async getData() {
              const res = await this.$http.post('product/activity/activityGoodsList', {
                  activityCode: '42e3d8dad21b433cbaf85019214694fc'
              })
                const arr = []
               this.errBox = false
                  if (res.data) {
                      res.data.forEach((n, i) => {
                          n.goods.forEach((good, i) => {
                              arr.push({
                                  type: 'list-rebate',
                                  rebatePrice: {
                                      current: good.showPrice,
                                      pre: good.linePrice
                                  },
                                  title: good.goodsName,
                                  btnGo: `/user/productdetails?id=${good.id}`,
                                  image: good.goodsStatics[0].url,
                                  imageRebateLine: require('assets/img/rebate1.jpg'),
                                  imageRebate: require('assets/img/rebate2.jpg')
                              })
                          })
                      })
                  } else {
                    this.errBox = true
                  }
                  this.rebateData = arr
            }
        }
    }

</script>
<style lang='scss' scoped>
  >>>.main{
    background: #f31929;
  }
  .errorBox{
    text-align: center;
    color: #fff;
    font-size:15px;
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
    background: #f31929;

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

  .nav_box5 {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    margin: 0 auto;
    background: #dd3834;
    padding: 10px 0px;

    .wp {
      position: relative;
    }

    .icon {
      padding-left: 10px;
      position: absolute;
      right: 0px;
      top: 15px;
      font-size: 20px;
      background: #f7f7f7;
      z-index: 9;
    }

    .li1 {
      display: inline-block;
    }

    .li1.active p {
      background: #fff;
      color: #be4c5f;
    }

    .li1.hover p {
      background: #fff;
      color: #be4c5f;
    }

    p {
      display: inline-block;
      color: #fff;
      padding: 8px 17px;
      border-radius: 50px;
      font-size: 12px;
      margin: 0 auto;
    }
  }

  .nav_box {
    padding-top: 20px;
    padding-bottom: 20px;

    .title {
      text-align: center;

      span {
        display: inline-block;
        border: 1px solid #fac596;
        border-radius: 50px;
        color: #f4e3a8;
        font-size: 16px;
        padding: 5px 30px;
        font-weight: 500;
      }
    }
  }

  .nav_box4 {
    background: #f31927;
  }

  .navdan_box4 {
    height: 182px;
    background: #fff;
    margin-bottom: 5px;
  }

  >>>.img-box img {
    width: 65%;
    margin-left: 30px;
  }

</style>
