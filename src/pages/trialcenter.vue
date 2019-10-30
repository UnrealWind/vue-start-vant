<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 试用中心 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
      <div class="hesde_l4" @click="$router.push('/static/introduction')"> <van-icon name="cart-o" />  </div>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item> <img src="../assets/img/hottu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">

      </div>
    </div>

  </van-container>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant'
  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          value: ''
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

  .nav_box4{ background: red; height: 100px; }

</style>
