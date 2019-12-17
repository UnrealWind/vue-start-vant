<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2 l">
        <div class="p"> 选择银行卡 </div>
      </div>
      <div class="header_r r">
        <van-icon name="plus" @click="$router.push('/newBankCard')" />
      </div>
    </div>

    <div class="main">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="中国建设银行" label="尾号1588 储蓄卡" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>

  </van-container>
</template>

<script>
  import { Icon, RadioGroup, Radio, Cell, CellGroup } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-radio-group': RadioGroup,
      'van-radio': Radio,
      'van-cell': Cell,
      'van-cell-group': CellGroup
    },
    data() {
      return {
        status: 'loading',
        radio: 1
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          //
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
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

  >>>.scroll{
    padding: 0;
    margin-top: 70px;
  }

  .van-icon-arrow-left {
    color: #108EE9;
    font-size: 22px;
    line-height: inherit;
  }
  .header_l2{
    margin-left: 15px;
    .p{
      text-align: left;
      color: #000000;
    }
  }
  .header_r{
    .van-icon-plus{
      color: #108EE9;
      font-weight: 700;
      font-size: 16px;
      margin-right: 15px;
    }
  }

  .van-cell__title span{
    font-size: 15px;
    font-weight: 700;
  }

</style>
