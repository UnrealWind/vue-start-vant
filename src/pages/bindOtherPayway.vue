<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 微信，支付宝绑定 </div>
      </div>
    </div>
    <div class="main">
      <van-notice-bar
        text="绑定微信支付宝，提现更方便快捷！"
        background="#f21244"
        color="#fff"
      />
      <div class="message">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="真实姓名"
            placeholder="请填写真实姓名"
            @blur="chc"
          />
          <van-field
            v-model="IDnumber"
            required
            clearable
            label="身份证号"
            placeholder="请填写真实姓名对应的身份证号"
          />
          <van-field
            v-model="cardNo"
            label="卡号"
            placeholder="请输入真实姓名下的微信支付宝账号"
            required
          />
          <van-cell title="途径" is-link :value="bankName" @click="showBank" />
          <van-action-sheet v-model="bankShow" :actions="bankList" @select="bankSelect" />
          <van-field
            label="备注"
            placeholder="请填写备注信息  "
            required
          />
        </van-cell-group>
      </div>
      <div class="hint">
        申请提现后，1-3个工作日内到账
      </div>
      <div class="btn">
        <van-button round type="info" size="large" @click="save">保存</van-button>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, NoticeBar, Cell, CellGroup, Field, ActionSheet, Button, Toast } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-notice-bar': NoticeBar,
      'van-cell': Cell,
      'van-cell-group': CellGroup,
      'van-field': Field,
      'van-button': Button,
      'van-action-sheet': ActionSheet
    },
    data() {
      return {
        status: 'loading',
        value1: 0,
        thisPopup: false,
        username: '',
        IDnumber: '',
        cardNo: '',
        bankShow: false,
        bankList: [
          { name: '微信' },
          { name: '支付宝' }
        ],
        bankName: '请选择绑定途径'
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          await this.chc()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      showBank() {
        this.bankShow = true
      },
      bankSelect(item) {
        this.bankShow = false
        this.bankName = item.name
      },
      showAddress() {
        this.addressShow = true
      },
      addressSelect(item) {
        this.addressShow = false
        this.address = item.name
      },
      chc() {
        if (this.username !== '') {
          console.log(this.username)
        }
      },
      save() {
          Toast.success('绑定成功')
      }
    }
  }

</script>

<style lang='scss' scoped>
  .l {
    float: left;
  }

  .r {
    float: right;
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

  .van-icon-arrow-left {
    color: #000;
    font-size: 22px;
  }

  >>>.scroll{
    padding: 0;
    margin-top: 70px;
  }

  .header_l2{
    .p{
      text-align: center;
      color: #000000;
    }
  }

  .message{
    margin-top: 20px;
  }
  .hint{
    color: #888;
    width: 100% ;
    padding: 15px 10px 0;
    margin-bottom: 40px;
  }
  .btn{
    padding: 0 30px;
  }
</style>
