<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 选择收货地址 </div>
      </div>
    </div>

    <div class="dan_wrap fix">
      <div class="wp">

        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
        />

        <div class="add" @click="$router.push('/cart/address_list')">
          <van-address-list />
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
          chosenAddressId: '1',
          list: [
              {
                  id: '1',
                  name: '张三',
                  tel: '13000000000',
                  address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
              },
              {
                  id: '2',
                  name: '李四',
                  tel: '1310000000',
                  address: '浙江省杭州市拱墅区莫干山路 50 号'
              }
          ],
          disabledList: [
              {
                  id: '3',
                  name: '王五',
                  tel: '1320000000',
                  address: '浙江省杭州市滨江区江南大道 15 号'
              }
          ]
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

</style>
