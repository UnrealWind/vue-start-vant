<!-- home -->
<template>
  <van-container :tabbar="true" :status="status">
    <div slot="header">首页</div>
    <div class="commodityBox">
      <commodity
        v-for="(commodity,index) in concentrateData"
        :key="`${commodity.type}-${index}`"
        :type="commodity.type"
        :image="commodity.image"
        :discribe="commodity.discribe"
        :title="commodity.title"
        :concentrate-price="commodity.concentratePrice"
        :concentrate-price-discribe="commodity.concentratePriceDiscribe"
        :btn-go="commodity.btnGo"
      >
      </commodity>
      <commodity
        v-for="(commodity,index) in indexData"
        :key="`${commodity.type}-${index}`"
        :type="commodity.type"
        :image="commodity.image"
        :discribe="commodity.discribe"
        :title="commodity.title"
        :index-price="commodity.indexPrice"
        :index-price-discribe="commodity.indexPriceDiscribe"
        :btn-go="commodity.btnGo"
      >
      </commodity>
      <commodity
        v-for="(vip,index) in vipData"
        :key="`${vip.type}-${index}`"
        :type="vip.type"
        :image="vip.image"
        :discribe="vip.discribe"
        :title="vip.title"
        :vip-price="vip.vipPrice"
        :vip-price-discribe="vip.vipPriceDiscribe"
        :btn-go="vip.btnGo"
      >
      </commodity>
      <commodity
        v-for="(hot,index) in hotData"
        :key="`${hot.type}-${index}`"
        :type="hot.type"
        :image="hot.image"
        :discribe="hot.discribe"
        :title="hot.title"
        :hot-price="hot.hotPrice"
        :hot-price-discribe="hot.hotPriceDiscribe"
        :btn-go="hot.btnGo"
        :popularity="hot.popularity"
        :preferential="hot.preferential"
        :evaluate="hot.evaluate"
      >
      </commodity>
      <commodity
        v-for="(rebate,index) in rebateData"
        :key="`${rebate.type}-${index}`"
        :type="rebate.type"
        :image="rebate.image"
        :title="rebate.title"
        :rebate-price="rebate.rebatePrice"
        :btn-go="rebate.btnGo"
        :image-rebate-line="rebate.imageRebateLine"
        :image-rebate="rebate.imageRebate"
      >
      </commodity>
    </div>
  </van-container>
</template>

<script>
  export default {
    data() {
      return {
          status: 'loading',
          active: 'index',
          concentrateData: [
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              }
          ],
          indexData: [
              {
                  'type': 'list-index',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'indexPriceDiscribe': {
                      'type': '已告罄'
                  },
                  'indexPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-index',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'indexPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'indexPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              }
          ],
          vipData: [
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '已告罄'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-vip',
                  'discribe': '直降7元',
                  'title': '麻辣多拿，纯素火锅-快乐元素  300g*3盒',
                  'vipPriceDiscribe': {
                      'type': '抢购中',
                      'num': '1234',
                      'percent': '12'
                  },
                  'vipPrice': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              }
          ],
          hotData: [
              {
                  'type': 'list-hot',
                  'discribe': '【三段有效期至 2019-01-01】，爱尔兰原装罐装奶粉，贼好喝。后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述',
                  'title': '受妈妈欢迎的爆款奶粉',
                  'hotPriceDiscribe': '￥',
                  'hotPrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png'),
                  'popularity': '人气2.2w',
                  'preferential': '满100减50',
                  'evaluate': '很实惠，后续评价，这是一条评论'
              },
              {
                  'type': 'list-hot',
                  'discribe': '【三段有效期至 2019-01-01】，爱尔兰原装罐装奶粉，贼好喝。后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述',
                  'title': '受妈妈欢迎的爆款奶粉',
                  'hotPriceDiscribe': '￥',
                  'hotPrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png'),
                  'popularity': '人气2.2w',
                  'preferential': '满100减50',
                  'evaluate': '很实惠，后续评价，这是一条评论'
              }
          ],
          rebateData: [
              {
                  'type': 'list-rebate',
                  'title': '宅一起干湿两用毛巾 20条装',
                  'rebatePrice': {
                      'current': '19.9',
                      'pre': '39.9'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/rebate.jpg'),
                  'imageRebateLine': require('assets/img/rebate1.jpg'),
                  'imageRebate': require('assets/img/rebate2.jpg')
              }
          ]
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
  .commodityBox {
    padding:3px 8px 8px 8px;
    >div{
      margin-top:5px;
    }
  }
</style>
