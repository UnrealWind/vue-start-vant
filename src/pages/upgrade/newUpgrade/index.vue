<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="back">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 主动升级</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-cell-group v-if="!this.$route.query.type" class="upgrade">
        <van-cell center>
          <div slot="title">
            <div class="">服务编号：{{ targetOrder.orderNo |judNull }}</div>
            <div class="">发动机序列号：{{ targetOrder.esn |judNull }}</div>
            <div class="">SMN：{{ targetOrder.smn |judNull }}</div>
            <div class="">SMN故障描述：{{ targetOrder.customerComplaint |judNull }}</div>
          </div>
        </van-cell>
      </van-cell-group>

      <van-radio-group v-model="result" @change="changeChecked">
        <van-cell-group title="升级原因：">
          <div
            v-for="(item, index) in resultList"
            :key="index"
          >
            <van-cell
              clickable
              :title="`${item.label}`"
              @click="choseReason(index)"
            >
              <template #right-icon>
                <van-radio :name="index" checked-color="#f10d3b" />
              </template>
            </van-cell>
            <van-field
              v-if="result === index"
              :ref="'Field'+index"
              v-model="item.remark"
              rows="3"
              autosize
              maxlength="200"
              show-word-limit
              label=""
              type="textarea"
              :placeholder="'请详细描述'+item.label+'原因'"
            >
              <button slot="right-icon" class="voice-btn" @touchstart="getVoice" @touchend="setVoice">
                <img style="pointer-events: none;width:40px;height: 40px;" src="../../../assets/img/voice.png">
              </button>
            </van-field>
          </div>
        </van-cell-group>
      </van-radio-group>

      <div class="fixed-btn-box">
        <div class="btn-container">
          <van-button round type="danger" size="large" @click="makeSure">提交</van-button>
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Cell, CellGroup, RadioGroup, Radio, Button, Field, Dialog, Toast } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-cell-group': CellGroup,
      'van-cell': Cell,
      'van-radio-group': RadioGroup,
      'van-radio': Radio,
      'van-button': Button,
      'van-field': Field
      },
      data() {
        return {
          status: 'loading',
          targetOrder: {
            // orderNo: 'id489489194616',
            // esn: '77141414',
            // customerComplaint: '发动机无法启动，冒黑烟',
            // smn: 'adsd6254186'
          },
          result: '',
          resultList: [{
            'label': '疑难杂症',
            'remark': ''
          }, {
            'label': '需要OEM配合',
            'remark': ''
          }, {
            'label': '费用相关',
            'remark': ''
          }, {
            'label': '零件相关',
            'remark': ''
          }, {
            'label': '其他',
            'remark': ''
          }]
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        window.getStr = this.getStr
        if (this.$route.query.targetOrder) this.targetOrder = JSON.parse(this.$route.query.targetOrder)
        try {
          // await this.getListData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      changeChecked() {
        console.log(this.result)
      },
      makeSure() {
        // this.result未设值时无法获取数组元素，排除了0=false的情况
        if (!this.resultList[this.result]) {
          Toast.fail('请选择主动升级原因！')
          return false
        }
        // 选择其他且没有填写备注，result是下标
        if (this.result + 1 === 5 && !this.resultList[this.result].remark) {
          Toast.fail('请填写其他主动升级原因！')
          return false
        }

        Dialog.confirm({
          message: '确认提交主动升级原因？'
        }).then(() => {
          this.commitReasion()
        }).catch(() => {
          // on cancel
        })
      },
      commitReasion() {
        let type = 1
        // 角色字典  config.role
        if (this.$store.state.userInfo.roleNo === 'R0033') {
          this.$route.query.upgradeAgain ? type = 4 : type = 1
        } else {
          this.$route.query.upgradeAgain ? type = 2 : type = 3
        }
        this.$http.post('escalation/submitEscalation.aspx', {
          'type': type,
          'roleId': this.$store.state.userInfo.roleId,
          'roleNo': this.$store.state.userInfo.roleNo,
          'workOrderId': this.targetOrder.id || this.$store.state.userInfo.workOrderId,
          'reasonKey': this.result + 1,
          'reasonValue': this.resultList[this.result].label,
          'supplementInfo': this.resultList[this.result].remark
        }).then((res) => {
          Toast.success('新建主动升级成功！')
          this.$clientServer.refreshWOAfterCreateUpgradeOrder()
          // this.$clientServer.uploadRecordH5({
          //   actionName: '主动升级-升级详情',
          //   recordInfo: `升级编号：${res.data.escalationOrderNo}；
          //               服务编号：${this.targetOrder.orderNo}；`
          // }),
        }).catch((e) => {
          throw e
        })
      },
      choseReason(index) {
        this.result = index
      },
      getVoice() {
        this.$clientServer.StartRecordVoice()
      },
      getStr(voice) {
        this.resultList[this.result].remark += voice
        this.resultList[this.result].remark.length > 200 ? this.resultList[this.result].remark = this.resultList[this.result].remark.substr(0, 200) : ''
      },
      setVoice() {
        this.$clientServer.StopRecordVoice()
      },
      back() {
        this.$route.query.type ? this.$clientServer.BackToApp() : this.$router.back()
      }
    }
  }

</script>
<style lang='scss' scoped>
  .wrap {
    background: #ffffff;
    padding-top:45px;
    .circle{
      width:100%;
      height:100px;
      text-align: center;
      padding: 20px;
    }
    padding-bottom: 100px;
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
  .fixed-btn-box {
    /*position: fixed;*/
    /*bottom:20px;*/
    text-align: center;
    width:100%;
    margin-top:20px;
    .btn-container {
      width:90%;
      margin:0 auto;
    }
  }
  >>>.scroll {
    background: #ffffff;
  }
  .voice-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    background: #fff;
  }
  >>>.van-field__control {
    width: 93%;
  }
  .van-field {
    border-bottom:1px solid #ccc
  }

  >>>.van-field__word-limit {
    padding-right:70px;
  }
</style>
