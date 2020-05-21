<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 工单进度</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-cell-group class="upgrade">
        <van-cell center>
          <div slot="title">
            <div class="">服务编号：{{ targetOrder.serviceId }}</div>
            <div class="">发动机序列号：{{ targetOrder.machineId }}</div>
            <div class="">SMN：{{ targetOrder.smn }}</div>
            <div class="">SMN故障描述：{{ targetOrder.desc }}</div>
          </div>
        </van-cell>
        <van-cell center>
          <div slot="title">
            <div class="user">
              <span><van-icon name="flag-o" />20.0km</span>
              <span><van-icon name="user-o" />张大炮</span>
              166846165
              <van-icon class="f-r" size="22" name="photograph" />
            </div>
          </div>
        </van-cell>
      </van-cell-group>
      <van-steps direction="vertical" :active="0" active-color="#38f">
        <van-step
          v-for="(item, index) in serveiceList"
          :key="index"
        >
          <h3>{{ item.desc }}</h3>
          <p>{{ item.createTime }}</p>
        </van-step>
      </van-steps>
      <div class="fixed-btn-box">
        <div class="btn-container">
          <van-button round type="danger" size="large">开始诊断和维修</van-button>
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, CellGroup, Cell, Step, Steps, Button } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-cell': Cell,
      'van-cell-group': CellGroup,
      'van-steps': Steps,
      'van-step': Step,
      'van-button': Button
    },
    data() {
      return {
        status: 'loading',
        targetOrder: {
          serviceId: 'id489489194616',
          machineId: '77141414',
          desc: '发动机无法启动，冒黑烟',
          smn: 'adsd6254186'
        },
        serveiceList: [{
          desc: '服务技师已到达',
          createTime: '2020-04-04 00:00:00'
        }, {
          desc: '服务技师已出发请耐心等待',
          createTime: '2020-04-04 00:00:00'
        }, {
          desc: '已指派服务技师，服务准备中',
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
          // await this.getData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      async getData() {
        const res = await this.$http.post('/test', {
          test: '123'
        })
        console.log(res)
      },
      search() {

      }
    }
  }

</script>
<style lang='scss' scoped>
  .f-r {
    float: right;
  }
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
    img {
      height:300px;
    }
    .user {
      span {
        >>> .van-icon {
          margin:0 15px 0 5px;
        }
      }
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
</style>
