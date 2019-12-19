<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 订单列表 </div>
      </div>
    </div>
    <order-list :active="active"></order-list>
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
          active: 0
      }
    },
    computed: {

    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.$route.query ? this.active = this.$route.query.node_code + 1 : ''
            try {
                await this.getOrderList()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getOrderList() {
            const res = await this.$http.post('order/order/list?pageNum=0&pageSize=100', {
                node_code: 0,
                pageNum: 0,
                pageSize: 100
            })
            this.orderList = res.data
        },
        viewOrder(shop) {
            this.$router.push({
                path: '/cart/order_details',
                query: shop
            })
        },
        async pay() {
            /* const data = {
                'receiverId': this.targetOrder.receiverId,
                'receiverName': this.targetOrder.receiverName,
                'receiverPhone': this.targetOrder.receiverPhone,
                'receiverAddress': this.targetOrder.receiverAddress,
                'isInvoices': 0,
                'payType': this.payType,
                'orderType': this.targetOrder.orderType,
                'trueMoney': this.targetOrder.totalMoney,
                'goodsPoList': this.targetOrder.goods
            }*/
            const res = await this.$http.post('order/order/toPayAgain', {
                orderCode: this.targetOrder.orderCode,
                'payType': this.payType
            })
            console.log(res)
        },
        evaluation(shop) {
            this.$router.push({
                path: '/user/addEvaluation',
                query: shop
            })
        },
        showPopup(shop) {
            this.targetOrder = shop
            this.show = true
        },
        refund(msg) {
            console.log(msg)
            this.$router.push({
                path: '/user/refund',
                query: msg
            })
        }
    }
  }

</script>
<style lang='scss' scoped>
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
  >>>.main {
    background: #f2f2f2;
  }
</style>
