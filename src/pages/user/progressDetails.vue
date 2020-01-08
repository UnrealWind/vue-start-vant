<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesdeLeft" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesdeTitle">
        <div class="p"> 进度详情 </div>
      </div>
    </div>

    <div class="wp dan_wrap">
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>退款￥14.9将退回至您的支付宝，请及时关注到账情况</h3>
          <p>2019-11-16 15:40:02</p>
        </van-step>
        <van-step>
          <h3> 店家已同意退款，系统已通知支付宝办理退款，请耐心等待 </h3>
          <p>2019-11-16 15:39:57</p>
        </van-step>
        <van-step>
          <h3>您的申请已通过，店家将在24小时内为您退款</h3>
          <div class="state"> 货物状态: <span> 未收到货 </span>  </div>
          <p>2019-11-16 15:39:57 {{ nowTime }} </p>
        </van-step>
      </van-steps>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Step, Steps } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-step': Step,
        'van-steps': Steps
    },
    data() {
      return {
          status: 'loading',
          nowTime: ''
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    created() {
        this.getTime()
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
        getTime() {
            setInterval(() => {
                // new Date() new一个data对象，当前日期和时间
                // toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
                this.nowtime = new Date().toLocaleString()
            }, 1000)
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

  .header{
    .fix{
      background: #efefef;
    }
    .hesdeLeft{
      position: absolute;
      left: 0px;
      top: 2px;
      font-size: 18px;
      color: #333;
    }
    .hesdeTitle{
      position: relative;
      width: 62%;
      margin: 0 auto;
      text-align: center;
      .p {
        font-size: 16px;
        color: #333;
      }
    }
  }

  .dan_wrap{
    padding-top: 55px;
    .van-steps{
      border-radius: 5px;
    }
    h3{
      font-size: 14px;
      color: #9a9a9a;
      line-height: 20px;
      padding: 0px;
      margin: 0px;
      font-weight: normal;
    }
    p{
      margin: 0px;
      line-height: 20px;
      margin-top: 5px;
      font-size: 12px;
    }
    >>>.van-step--vertical:not(:last-child)::after{
      border: 0px;
    }
    >>>.van-icon-checked{
      color: #f00d3b!important;
    }
    >>>.van-step--process {
      h3{
        color: #333;
      }
      p{
        color: #9a9a9a!important;
      }
    }
    .state{
      background: #f7f7f7;
      padding: 5px 10px;
      line-height: 20px;
      margin: 10px 0px;
      color: #808080;
      border-radius: 5px;
      span{
        color: #4a4a4a;
      }
    }
  }

</style>
