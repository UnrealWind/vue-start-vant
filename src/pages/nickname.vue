<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 昵称 </div>
      </div>
      <div class="hesde_l3">
        <div class="p"> 保存 </div>
      </div>
    </div>

    <div class="dan_wrap">
      <van-cell-group class="name_box">
        <van-field v-model="value" placeholder="请输入昵称" />
      </van-cell-group>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Field } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-field': Field
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

  .header{
    .fix{
      background: #fff;
    }
  }

  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px; color: #333; }
  .hesde_l3{ position: absolute; right: 10px; top: 2px; font-size: 14px; color: #333; }
  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }

  .dan_wrap{
    background: #f3f3f3;
    padding-top: 55px;
    .name_box{
      border: 1px solid #f5f5f5;
    }
  }

</style>
