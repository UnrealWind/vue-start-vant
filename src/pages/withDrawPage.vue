<template>
  <van-container :tabber="true" :status="status">
    <div slot="header" class="fix">
      <div class="header_l l" @click="$router.back()">
        <van-icon name="arrow-left" />
      </div>
      <div class="header_l2 l">
        <div class="p"> 提现列表 </div>
      </div>
    </div>
    <div class="mainBox">
      <van-cell-group v-for="(item,index) in withDrawMoney" :key="index">
        <van-cell :title="item.title" :value="item.value" :label="item.label" />
      </van-cell-group>
    </div>
  </van-container>
</template>

<script>
  import { Cell, CellGroup, Icon } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-cell': Cell,
      'van-cell-group': CellGroup
    },
    data() {
      return {
        status: 'loading',
        withDrawMoney: [
          {
            title: '提现',
            value: '￥115',
            label: '11：45'
          },
          {
            title: '提现',
            value: '￥315',
            label: '13：23'
          },
          {
            title: '提现',
            value: '￥15.6',
            label: '14：33'
          },
          {
            title: '提现',
            value: '￥12.5',
            label: '17：21'
          }
        ]
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

  .van-icon-arrow-left {
    color: #000;
    font-size: 22px;
    line-height: inherit;
  }
  .mainBox{
    margin-top: 50px;
  }
  .header_l2{
    margin-left: 15px;
    .p{
      text-align: left;
      color: #000000;
    }
  }
</style>
