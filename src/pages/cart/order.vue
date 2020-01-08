<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 选择收货地址 </div>
      </div>
      <div class="header_l r black">
        <van-icon name="delete" size="20" @click="delAddress" />
      </div>
    </div>

    <div class="dan_wrap fix">
      <div class="wp">
        <div class="address">
          <van-address-list
            v-model="chosenAddressId"
            :list="addressList"
            @edit="changeAddress"
            @add="$router.push('/cart/address_list')"
          />
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, AddressList } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-address-list': AddressList
    },
    data() {
      return {
          status: 'loading',
          chosenAddressId: 1,
          show: false,
          addressList: []
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
                await this.getAddressList()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getAddressList() {
            const res = await this.$http.post('product/userAddress/list', {})
            res.data.forEach((n, i) => {
                n.address = n.addressDetail
                n.tel = n.receiverPhone
                n.name = n.receiverName
                n.id = i + 1
            })
            this.addressList = JSON.parse(JSON.stringify(res.data))
        },
        changeAddress(item, index) {
            this.$router.push({
                path: '/cart/address_list',
                query: item
            })
        },
        async delAddress() {
            const targetAddress = this.addressList[this.chosenAddressId - 1]
            const res = await this.$http.post('product/userAddress/remove', { ids: targetAddress.id })
            console.log(res)
        }
    }
  }

</script>
<style lang='scss' scoped>
  .black {
    color:#000;
  }
  .r{
    position: absolute;
    top:35px !important;
    right: 10px;
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

</style>
