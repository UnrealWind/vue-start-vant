<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 试用中心 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
      <div class="hesde_l4" @click="$router.push('/user/productdetails')"> <van-icon name="cart-o" />  </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div v-for="(vip,index) in vipDataMin" :key="`${vip.type}-${index}`" class="navdan_box4" @click="$router.push('/user/productdetails')">

          <commodity
            :type="vip.type"
            :image="vip.image"
            :discribe="vip.discribe"
            :title="vip.title"
            :vip-price="vip.vipPrice"
            :vip-price-discribe="vip.vipPriceDiscribe"
            :btn-go="vip.btnGo"
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
          vipDataMin: [
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '申请试用'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu12.png')
              },
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu12.png')
              },
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '申请试用'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu12.png')
              },
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/viptu12.png')
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
  .dan_wrap{ background: #f7f7f7; .wp{ width: 95%; margin: 0 auto;  } }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333;  }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;  color: #333;  }
  }

  .nav_box4{
    padding-top: 60px;
    padding-bottom: 20px;
    .navdan_box4{
      margin-bottom: 10px;
      overflow: hidden;
      border-radius: 5px;
    }
  }

</style>
