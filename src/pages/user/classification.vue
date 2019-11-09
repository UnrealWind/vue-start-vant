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

    <div class="dan_wrap">

      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>

      </van-tabs>

    </div>

  </van-container>
</template>

<script>
    import { Icon, Search, Tab, Tabs } from 'vant'
    export default {
        components: {
            'van-icon': Icon,
            'van-search': Search,
            'van-tab': Tab,
            'van-tabs': Tabs
        },
    data() {
      return {
          status: 'loading',
          value: '',
          active: 2
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
    padding-top: 55px;
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

</style>
