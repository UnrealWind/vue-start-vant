<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="back">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 升级详情</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-cell-group>
        <van-cell-group class="upgrade">
          <van-cell center>
            <div slot="title">
              <div class="">升级原因：{{ targetOrder.upgradeReasion }}<span class="red">{{ targetOrder.upgradeType }}</span></div>
            </div>
          </van-cell>
          <van-cell center>
            <div slot="title">
              <div class="">升级编号：{{ targetOrder.orderNo }}</div>
              <div class="">升级时间：{{ targetOrder.createTime }}</div>
              <div class="">服务编号：{{ targetOrder.serviceId }}<span class="red">点击查看</span></div>
              <div class="">发动机序列号：{{ targetOrder.machineId }}</div>
              <div class="">SMN：{{ targetOrder.smn }}</div>
              <div class="">故障描述：{{ targetOrder.desc }}</div>
              <div class="">解决方案：{{ targetOrder.plan }}<span class="red" @click="imgPreview">点击查看附件</span></div>
            </div>
          </van-cell>
        </van-cell-group>
      </van-cell-group>

      <van-steps direction="vertical" :active="0" active-color="#38f">
        <van-step
          v-for="(item, index) in serveiceList"
          :key="index"
        >
          <h3>服务技师：（{{ item.technician }}<a href="tel:18515889438">{{ item.phone }}</a>）{{ item.desc }}</h3>
          <h3>升级原因：{{ item.reasion }}</h3>
          <p>{{ item.createTime }}</p>
        </van-step>
      </van-steps>
      <div class="fixed-btn-box">
        <!--todo  状态比较简单，可抽出-->
        <div class="btn-container" :class="{double: targetOrder && (targetOrder+$store.state.userInfo.roleNo === '2R0033'||targetOrder+$store.state.userInfo.roleNo === '1R0074')}">
          <!--工单状态为：待服务技师确认2  角色为：服务技师R0033-->
          <van-button v-if="targetOrder && targetOrder+$store.state.userInfo.roleNo === '2R0033'" round plain hairline type="danger" size="large">继续升级</van-button>
          <!--工单状态为：待服务技师确认2  角色为：服务技师R0033-->
          <van-button v-if="targetOrder && targetOrder+$store.state.userInfo.roleNo === '2R0033'" round type="danger" size="large">升级完成</van-button>
          <!--工单状态为：待区域工程师反馈1  角色为：服务技师R0033-->
          <van-button v-if="targetOrder && targetOrder+$store.state.userInfo.roleNo === '1R0033'" round type="danger" size="large">我要催单</van-button>
          <!--工单状态为：待区域工程师反馈1  角色为：区域工程师R0074-->
          <!--工单状态为：待服务专家反馈3  角色为：服务专家R0091-->
          <van-button v-if="targetOrder && (targetOrder+$store.state.userInfo.roleNo === '1R0074'||targetOrder+$store.state.userInfo.roleNo === '3R0091')" round plain hairline type="danger" size="large">升级反馈</van-button>
          <!--工单状态为：待区域工程师反馈1  角色为：区域工程师R0074-->
          <van-button v-if="targetOrder && targetOrder+$store.state.userInfo.roleNo === '1R0074'" round type="danger" size="large">立即升级</van-button>
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Cell, CellGroup, Button, Step, Steps, ImagePreview } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-cell-group': CellGroup,
      'van-cell': Cell,
      'van-button': Button,
      'van-steps': Steps,
      'van-step': Step
    },
    data() {
      return {
        status: 'loading',
        targetOrder: {
          upgradeId: '648486864864486',
          upgradeTime: '2020-04-04 00:00:00',
          serviceId: 'id489489194616',
          machineId: '77141414',
          desc: '发动机无法启动，冒黑烟',
          smn: 'adsd6254186',
          upgradeReasion: '发动机无法启动',
          plan: '更换零件',
          upgradeType: '待区域工程师反馈'
        },
        serveiceList: [{
          technician: '张大炮',
          phone: '122344444444',
          desc: '创建主动升级工单',
          reasion: '发动机无法启动，冒黑烟',
          createTime: '2020-04-04 00:00:00'
        }]
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          await this.getDetail()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      getDetail() {
        const data = {
          'roleId': this.$store.state.userInfo.roleId,
          'roleNo': this.$store.state.userInfo.roleNo,
          'orderId': this.$route.query.orderId
        }
        this.$http.get('escalation/getEscalationOrderDetail.aspx', {
          params: data
        }).then((res) => {
          this.targetOrder = res.data.orderResponse
        }).catch((e) => {
          throw e
        })
      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle()
      },
      changeChecked() {
        console.log(this.result)
      },
      imgPreview() {
        ImagePreview([
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ])
      },
      back() {
        this.$clientServer.BackToApp()
      }
    }
  }

</script>
<style lang='scss' scoped>
  .wrap {
    background: #ffffff;
    padding-top:45px;
    height: 100%;
    .circle{
      width:100%;
      height:100px;
      text-align: center;
      padding: 20px;
    }
    h3 {
      margin: 5px 0 0 0 ;
      font-weight: 300;
    }
  }
  .header {
    .header_l {
      line-height: 40px;
      color: #fff;
      font-size: 20px;
      float:left;
      padding-top:5px;
    }
    .header_title {
      text-align: center;
      color: #212121;
      color:#fff;
    }
    .header_r {
      position: absolute;
      right: 0;
      top: 0;
      font-size:15px;
      .van-icon {
        position: relative;
        top:1.5px;
        margin:0 5px;
      }
    }
  }
  .upgrade {
    .van-cell {
      font-size:14px;
      >>>.van-cell__value {
        flex: 0 0 95px;
        color:#f10d3b;
      }
      >>>.van-cell__right-icon {
        color:#f10d3b;
      }
    }
  }
  .red {
    color:#f10d3b;
    float:right;
  }
  .fixed-btn-box {
    position: fixed;
    bottom:20px;
    text-align: center;
    width:100%;
    .btn-container {
      width:90%;
      margin:0 auto;
    }
  }
  .van-steps {
    padding-bottom:75px;
  }

</style>
