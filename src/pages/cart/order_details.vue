<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 订单详情 </div>
      </div>
    </div>
    <order-detail :shop="shop"></order-detail>
  </van-container>
</template>

<script>
 import { Icon } from 'vant'
 import OrderDetail from '../../directive/orderDetail'
  export default {
    components: {
        OrderDetail,
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          shop: {}
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.shop = this.$route.query
            this.status = 'success'
        }
    }
  }

</script>
<style lang='scss' scoped>
  .align-right {
    text-align: right;
  }
  h1 {
    background: red;
    width: 375px;
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

</style>
