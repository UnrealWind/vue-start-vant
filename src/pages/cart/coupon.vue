<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 优惠券 </div>
      </div>
    </div>

    <div class="dan_wrap fix">
      <div class="wp">

        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />

        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>

        <!--  确认-->
        <div class="coupon_bottom" @click="$router.back()">
          确认
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, CouponCell, CouponList, Popup } from 'vant'
  const coupon = {
      available: 1,
      condition: '无使用门槛\n最多优惠12元',
      reason: '',
      value: 150,
      name: '优惠券名称',
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元'
  }
  export default {
    components: {
        'van-icon': Icon,
        'van-coupon-cell': CouponCell,
        'van-coupon-list': CouponList,
        'van-popup': Popup
    },
    data() {
      return {
          status: 'loading',
          chosenCoupon: -1,
          coupons: [coupon],
          disabledCoupons: [coupon],
          showList: false
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
                // await this.getData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getData() {
            const res = await this.$http.get('/user/12345')
            console.log(res)
        },
        onChange(index) {
            this.showList = false
            this.chosenCoupon = index
        },
        onExchange(code) {
            this.coupons.push(coupon)
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
  .l{ float: left; }
  .r{ float: right; }
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
    padding-top: 55px;
    background: #f2f2f2;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{
    position: absolute;
    left: 0px;
    top: 2px;
    font-size: 20px;
    color: #333;
  }
  .hesde_l2{
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;
    .p {
      font-size: 16px;
      color: #333;
    }
  }

  .coupon_bottom{
    background: #fff;
    line-height: 30px;
    text-align: center;
    padding: 10px 10px;
    margin-top: 10px;
    font-size: 14px;
    color: #e9001d;
  }

</style>
