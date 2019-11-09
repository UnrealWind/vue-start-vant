<!-- home -->
<template>
  <van-container :status="status">

    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r l">
          <van-search v-model="value" placeholder="画画" />
        </div>
      </div>
    </div>

    <div class=" dan_wrap">
      <div class="wp">

        <div class="header_top fix" @click="$router.push('/user/myshop')">
          <div class="head_l l">
            <img src="../../assets/img/user/myshoplogo.png" alt="">
          </div>

          <div class="head_c l">
            <div class="title"> 丹丹爱画画 </div>
            <div class="title_min">
              <span> 155 </span> 粉丝
            </div>
          </div>

          <div class="head_r r">
            <span class="head_rspan"> 关注 </span>
          </div>
        </div>

        <div class="header_top fix" @click="$router.push('/user/myshop')">
          <div class="head_l l">
            <img src="../../assets/img/user/myshoplogo.png" alt="">
          </div>

          <div class="head_c l">
            <div class="title"> 爱画画 </div>
            <div class="title_min">
              <span> 155 </span> 粉丝
            </div>
          </div>

          <div class="head_r r">
            <span class="head_rspan"> 关注 </span>
          </div>
        </div>

        <div class="header_top fix" @click="$router.push('/user/myshop')">
          <div class="head_l l">
            <img src="../../assets/img/user/myshoplogo.png" alt="">
          </div>

          <div class="head_c l">
            <div class="title"> 春天画画 </div>
            <div class="title_min">
              <span> 155 </span> 粉丝
            </div>
          </div>

          <div class="head_r r">
            <span class="head_rspan"> 关注 </span>
          </div>
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Search } from 'vant'
    export default {
        components: {
            'van-icon': Icon,
            'van-search': Search
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
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 65px;
    background: #f2f2f2;
  }

  .header{
    .fix{
      background: #ffffff;
      padding-bottom: 10px;
    }

    .van-search__content{
      border-radius: 50px;
      overflow: hidden;
      width: 100%;
    }
    .header_r{
      width: 85%;
      margin-top: 10px;
      margin-left: 20px;
      .van-search{
        padding: 0px;
        border-radius: 10px;

      }
    }
    .header_l{
      position: relative;
      margin-top: 12px;
      line-height: 30px;
      .van-icon{
        font-size: 18px;
        line-height: 30px;
        color: #333;
      }
    }
  }

  .header_top {
      background: #fff;
      border-radius: 5px;
      padding: 10px 10px;
      margin-bottom: 10px;

    .head_l {
      width: 15%;
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }

    .head_c {
      width: 60%;
      padding-left: 2%;
    }

    .head_r {
      width: 20%;
    }

    .title {
      font-weight: bold;
      line-height: 26px;
      color: #302426;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .title_min{
      color: #868686;
    }
    .head_rspan{
      position: relative;
      top: 10px;
      display: inline-block;
      text-align: center;
      line-height: 20px;
      background: #fb3e42;
      color: #fff;
      border-radius: 50px;
      padding: 5px 15px;
      font-size: 14px;
    }
  }

</style>
