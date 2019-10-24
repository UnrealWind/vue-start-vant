<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header">首页</div>
    <div class="commodityBox">
      <commodity v-for="(commodity,index) in data" :key="index" :type="commodity.type" :image="commodity.image" :discribe="commodity.discribe" :title="commodity.title" :price="commodity.price" :price-discribe="commodity.priceDiscribe" :btn-go="commodity.btnGo"></commodity>
    </div>
  </van-container>
</template>

<script>
  export default {
    data() {
      return {
          status: 'loading',
          data: [
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'priceDiscribe': '新品福利￥',
                  'price': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'priceDiscribe': '新品福利￥',
                  'price': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-index',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'priceDiscribe': {
                      'type': '已告罄'
                  },
                  'price': {
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
                  'priceDiscribe': {
                      'type': '已告罄'
                  },
                  'price': {
                      'current': '123',
                      'pre': '134'
                  },
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
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
