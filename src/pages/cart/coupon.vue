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
        <div class="coupon_bottom" @click="back">
          确认
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, CouponCell, CouponList, Popup } from 'vant'
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
          coupons: [],
          disabledCoupons: [],
          showList: true
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
                await this.getCoupon()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getCoupon() {
            const res = await this.$http.post('/manager/userTicket/list')
            res.data.forEach((n, i) => {
                switch (n.ticketType) {
                    case 0: n['valueDesc'] = JSON.parse(n.ticketContent).drop; n['unitDesc'] = '元'; break
                    case 1: n['valueDesc'] = `满${JSON.parse(n.ticketContent).full}减${JSON.parse(n.ticketContent).minus}`
                        n['unitDesc'] = `满${JSON.parse(n.ticketContent).full}减`; break
                    case 2: n['valueDesc'] = `${JSON.parse(n.ticketContent).discount}`; n['unitDesc'] = '折'; break
                }
                this.coupons.push({
                    condition: '优惠卷',
                    value: '',
                    name: n.ticketName,
                    reason: '',
                    startAt: new Date(n.ticketBeginTime).getTime() / 1000,
                    endAt: new Date(n.ticketEndTime).getTime() / 1000,
                    valueDesc: n.valueDesc,
                    unitDesc: n.unitDesc
                })
            })
        },
        onChange(index) {

        },
        onExchange(code) {

        },
        back() {
            this.$router.back()
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
