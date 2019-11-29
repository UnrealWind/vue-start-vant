<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 美国馆 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">
        <div class="nav_ul">
          <!--          <div class="li" @click="$router.push('/user/productdetails')">-->
          <!--            <div class="wrap fix">-->
          <!--              <div class="nav_l l">-->
          <!--                <a  class="img"> <img src="../assets/img/prolisttu1.png" alt=""> </a>-->
          <!--              </div>-->
          <!--              <div class="nav_r r">-->
          <!--                <a  class="title"> Estee Lauder雅诗兰黛ANR小棕... </a>-->
          <!--                <a  class="titlemin"> 直降30元护肤必备小棕瓶</a>-->
          <!--                <div class="botom fix">-->
          <!--                  <a  class="price l"> ￥439 <span> ￥660 </span> </a>-->
          <!--                  <a  class="car r"> <van-icon name="cart-o" /> </a>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->

          <commodity
            v-for="(commodity,index) in concentrateData"
            :key="`${commodity.type}-${index}`"
            :type="commodity.type"
            :image="commodity.image"
            :discribe="commodity.discribe"
            :title="commodity.title"
            :concentrate-price="commodity.concentratePrice"
            :concentrate-price-discribe="commodity.concentratePriceDiscribe"
            :btn-go="commodity.btnGo"
          >
          </commodity>
        </div>
      </div>

    </div></van-container>
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
          concentrateData: []
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
                await this.getIndexData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getIndexData() {
            const res = await this.$http.post('product/activity/activityGoodsList', {
                activityCode: 'e211c6bf6edf4b1aaaa4d80b568c4fdb'
            })
            console.log(res)
            const arr = []
            if (res.data) {
                res.data.forEach((n, i) => {
                    n.goods.forEach((good, i) => {
                        arr.push({
                            'type': 'list-concentrate',
                            'image': good.goodsStatics[i].url,
                            'discribe': good.goodsProfile,
                            'title': good.goodsName,
                            'concentratePriceDiscribe': '新品福利￥',
                            'concentratePrice': '1200',
                            'btnGo': `/user/productdetails?id=${good.id}`
                        })
                    })
                })
            }
            this.concentrateData = arr
        }
    }
  }

</script>
<style lang='scss' scoped>
  .container{
    margin-bottom: 10px;
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
  .dan_wrap{
    margin-top: 45px;
    background: #f2f2f2 url("../assets/img/hottu2.png") no-repeat center top;
    background-size: contain;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }

  .nav_ul{
    padding-top: 30px;
    .li{
      background: #fff;
      border-radius: 10px;
      padding: 0px 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
    .nav_l{
      width: 35%;
    }
    .nav_r{
      width: 60%;
      padding-top: 10px;
      a{
        display: block;
      }
      .title{
        font-size: 14px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        color: #333333;
        line-height: 20px;
      }
      .titlemin{
        font-size: 14px;
        color: #808080;
        line-height: 20px;
      }
      .botom{
        padding-top: 50px;
      }
      .price{
        color: #f00d3b;
        font-size: 18px;
        span{
          color: #808080;
          text-decoration: line-through;
          font-size: 12px;
          font-weight: normal;
        }
      }
      .car{
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
  }

</style>
