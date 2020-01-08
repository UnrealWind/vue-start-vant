<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_r" @click="$router.push('/cart/shopcar')">
          <van-icon name="arrow-left" />
        </div>
      </div>
    </div>

    <div class="content">
      <div class="wp">

        <van-icon name="passed" />

        <div class="pay">
          支付成功
        </div>

        <div class="black" @click="$router.push('/cart/shopcar')">
          返回购物车
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
          status: 'loading'
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
  .main{
    background: #fff!important;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .main{
    background: #fff;
  }

  .header{
    .fix{
      padding-top: 10px;
    }
    .header_r {
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 30px;
      background: rgba(0,0,0,0.5);
      color: #fff;
      border-radius: 50%;
      .van-icon{
        text-align: center;
        line-height: 30px;
      }
    }
  }

  .content{
    background: #fff;
    height: 100%;
    padding-top: 60%;
    text-align: center;
    .van-icon{
      font-size: 30px;
      color: #1989fa;
    }
    .pay{
      font-size: 20px;
      line-height: 30px;
      margin-top: 10px;
    }
    .black{
      margin: 10px auto 0px;
      display: block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: center;
      border:1px solid #ccc;
      border-radius: 50px;
      color: #222;
    }
  }

</style>
