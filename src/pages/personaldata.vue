<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 个人资料 </div>
      </div>
    </div>

    <div class="dan_wrap">

      <div class="set_cen set_cenpad set_img">
        <img src="../assets/img/getAvatar.do.jpg" alt="">
        <van-cell title="个人头像" is-link />
      </div>

      <div class="set_cen">
        <van-cell title="昵称" is-link value="修改个人昵称" />
      </div>

      <div class="set_cen">
        <van-cell title="生日" is-link value="未填写" />
      </div>

      <div class="set_cen">
        <van-field
          readonly
          clickable
          label="性别"
          :value="value"
          right-icon="arrow"
          placeholder="未填写"
          input-align="right"
          @click="showPicker = true"
        />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>

      </div>

      <div class="set_cen">
        <van-cell title="地区" is-link value="未填写" />
      </div>

      <div class="set_cen set_cenpad" @click="$router.push('/static/address')">
        <van-cell title="收货地址" is-link value="新建/修改" />
      </div>

      <div class="set_cen set_cenpad">
        <van-cell title="实名认证" is-link value="未填写" />
      </div>

    </div>

  </van-container>
</template>

<script>
import { Icon, Cell, Picker, Popup, Field } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-cell': Cell,
        'van-picker': Picker,
        'van-popup': Popup,
        'van-field': Field
    },
    data() {
      return {
          status: 'loading',
          value: '',
          showPicker: false,
          columns: ['男', '女']
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
        },
        onConfirm(value) {
            this.value = value
            this.showPicker = false
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

  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }

  .dan_wrap{
    background: #f3f3f3;
    padding-top: 45px;
    .set_cen{
      padding-bottom: 2px;
    }
    .set_cenpad{
      background: #fff;
      padding: 5px 0px;
      margin-top: 10px;
      margin-bottom: 2px;
    }
    .set_img{
      position: relative;
      img{
        position: absolute;
        top: 5px;
        right: 40px;
        max-width: 40px;
        max-height: 40px;
        border-radius: 50%;
        z-index: 9;
      }
    }
  }

</style>
