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
        <van-cell v-if="upUser" title="邀请人" icon="shop-o" :value="upUser.nickName" />
      </div>
      <div class="set_cen">
        <div class="go" @click="logout"> 退出登录 </div>
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
          status: 'loading',
          upUser: {}
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
                await this.getUpUserData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getUpUserData() {
            const res = await this.$http.post('/user/distributionRel/puser')
            this.upUser = res.data
        },
        async logout() {
            await this.$http.post('/manager/user/loginOut')
            sessionStorage.removeItem('token')
            this.$router.push('/')
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
