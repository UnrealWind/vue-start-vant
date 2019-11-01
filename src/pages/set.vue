<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 设置 </div>
      </div>
    </div>

    <div class="dan_wrap">

      <div class="set_cen">
        <van-cell title="个人资料" icon="manager-o" is-link @click="$router.push('personaldata')" />
        <van-cell title="账户与安全" icon="completed" is-link />
        <van-cell title="更换邀请店铺" icon="shop-o" is-link value="云妈妈公益" />
      </div>

      <div class="set_cen">
        <van-cell title="消息及模式设置" icon="volume-o" is-link />
        <van-cell title="清除缓存" icon="fire-o" is-link value="56.19MB" />
      </div>

      <div class="set_cen">
        <van-cell title="关于电商" icon="warning-o" is-link />
      </div>

      <div class="set_cen">
        <van-cell title="问题反馈" icon="chat-o" is-link />
      </div>

      <div class="set_cen">
        <van-cell title="当前版本" icon="medel-o" value="3.68.10190（0.43.2）" />
      </div>

      <div class="set_cen">
        <div class="go" @click="$router.back()"> 退出登录 </div>
      </div>

    </div>

  </van-container>
</template>

<script>
import { Icon, Cell } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-cell': Cell
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
  .l{ float: left; }
  .r{ float: right; }
  .img{  display: block; }
  .img img{ display: block; width: 100%; }
  .fix {
    *zoom: 1;
  }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }

  .dan_wrap{
    background: #f3f3f3;
    padding-top: 55px;
    .set_cen{
      padding-bottom: 20px;
    }

    .go{
      background: #fff;
      text-align: center;
      color: #e32257;
      line-height: 30px;
      padding: 5px 0px;
    }
  }

</style>
