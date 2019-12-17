<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2">
        <div class="p"> 我的银行卡 </div>
      </div>
    </div>
    <div class="main">
      <van-notice-bar
        text="完善银行卡信息，才可及时获得收益奖励哦！"
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
            placeholder="请输入真实姓名下的储蓄卡号"
            required
          />
          <van-cell title="银行" is-link :value="bankName" @click="showBank" />
          <van-action-sheet v-model="bankShow" :actions="bankList" @select="bankSelect" />
          <van-cell title="开户行所在地" is-link :value="address" @click="showAddress" />
          <van-action-sheet v-model="addressShow" :actions="addressList" @select="addressSelect" />
          <van-field
            label="开户支行"
            placeholder="请填写开户行支行"
            required
          />
        </van-cell-group>
      </div>
      <div class="hint">
        目前仅支持的银行为：中国银行，中国工商银行，中国农业银行，中国建设银行，中国交通银行，中国招商银行，中国邮政储蓄银行
      </div>
      <div class="btn">
        <van-button round type="info" size="large">保存</van-button>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, NoticeBar, Cell, CellGroup, Field, ActionSheet, Button } from 'vant'

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
        addressShow: false,
        addressList: [
          { name: '北京' },
          { name: '石家庄' },
          { name: '保定' }
        ],
        bankShow: false,
        bankList: [
          { name: '中国建设银行' },
          { name: '中国工商银行' },
          { name: '中国农业银行' }
        ],
        bankName: '请选择银行信息',
        address: '请选择银行信息'
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
