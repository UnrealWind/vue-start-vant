<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_left" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r">
          <div class="p"> 申请售后 </div>
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="wp">

        <div v-for="(refund, index) in refunds" :key="index" class="refund_top">
          <van-cell-group>
            <van-cell
              :icon="refund.mainImg"
              :title="refund.goodsName"
              :value="refund.price"
              size="large"
              :label="refund.goodsDesc"
            >
            </van-cell>
            <div class="num">
              x{{ refund.amount }}
            </div>
          </van-cell-group>
        </div>

        <div class="refund_top refundBottomMin">
          <van-cell-group>
            <van-cell title="请选择退款类型" :value="refundType" @click="show = !show" />
          </van-cell-group>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <div class="refund_top refundBottom">
          <van-cell-group>
            <van-cell :value="`￥${actMoney}`" class="custom-price">
              <!-- 使用 title 插槽来自定义标题 -->
              <template slot="title">
                <span class="custom-title">退款金额</span>
                <span type="danger"><van-icon name="question-o" /></span>
              </template>
            </van-cell>

            <van-cell title="实付金额" :value="`￥${actMoney}`" />
          </van-cell-group>
        </div>

        <div class="refund_top">
          <van-cell-group>
            <van-cell value="详细说明" />
            <van-field
              v-model="message"
              rows="3"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请你描述详细问题，一边尽快处理售后"
              show-word-limit
            />
            <div class="wp">
              <div class="uploadBox">
                <van-image
                  v-for="(opt,index) in fileList"
                  :key="index"
                  width="78"
                  height="78"
                  :src="opt.url"
                />
                <div>
                  <van-uploader :before-read="beforeRead" :after-read="upload" result-type="text" multiple />
                </div>
              </div>
            </div>

          </van-cell-group>
        </div>

        <van-button type="primary" class="button" @click="refundData"> 申请售后 </van-button>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Field, Cell, CellGroup, Uploader, Button, ActionSheet, Toast, Image } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-field': Field,
        'van-cell': Cell,
        'van-cell-group': CellGroup,
        'van-uploader': Uploader,
        'van-button': Button,
        'van-action-sheet': ActionSheet,
        'van-image': Image
    },
    data() {
      return {
          status: 'loading',
          message: '',
          fileList: [],
          query: {},
          refunds: [
              {
                  title: '南极人中老年保暖内衣男女士',
                  price: '￥59.00',
                  label: '颜色男款-白色尺码: (男170女165 )',
                  img: require('../../assets/img/cart/card.png'),
                  num: 'x1'
              }
          ],
          show: false,
          actions: [
              { name: '退款', value: 1 },
              { name: '退货', value: 2 }
          ],
          refundType: '',
          refundTypeVal: ''
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.query = this.$route.query
            this.refunds[0] = this.$route.query
            console.log(this.query)
            try {
                await this.getActMoney()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getActMoney() {
            const res = await this.$http.post('/order/orderDetail/queryOneByCode', {
                orderDetailCode: this.query.orderDetailCode
            })
            console.log(res)
            this.actMoney = res.data.totalMoney
        },
        onSelect(item) {
            this.show = false
            this.refundType = item.name
            this.refundTypeVal = item.value
            console.log(item)
        },
        async refundData() {
            let imgStr = ''
            this.fileList.forEach((n, i) => {
                i === 0 ? imgStr += n.url : imgStr += `,${n.url}`
            })
            const res = await this.$http.post('/product/orderReturn/add', {
                orderDetailCode: this.query.orderDetailCode,
                returnMoney: this.actMoney,
                returnType: this.refundTypeVal,
                returnReason: this.message,
                imgUrl: imgStr
            })

            Toast.success('已提交！')
            console.log(res)
        },
        beforeRead(file) {
            const judImg = (file) => {
                if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                    Toast('请上传 jpg，png 格式图片')
                    return false
                }
            }
            if (file instanceof Array) {
                file.forEach((n, i) => {
                    judImg(n)
                })
            } else {
                judImg(file)
            }
            return true
        },
        // fydebug 这里是上传文件的例子
        async upload(file) {
            const uploadImg = async(file) => {
                /* const formdata = new FormData()
                formdata.append('file', file.file)
                const res = await this.$http({
                    method: 'post',
                    url: 'common/upload',
                    data: formdata
                    // dataType: 'json'
                })*/
                const res = await this.$upload(file)
                if (res.data.code === 0) {
                    this.fileList.push({ url: res.data.url })
                }
            }
            if (file instanceof Array) {
                file.forEach((n, i) => {
                    uploadImg(n)
                })
            } else {
                uploadImg(file)
            }
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

  .dan_wrap{
    padding-top: 55px;
    padding-bottom: 20px;
    .title{
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 10px;
      span{
        color: #e9001d;
      }
    }
    .van-cell-group,.van-uploader{
      margin-bottom: 2px;
    }
    .van-field{
      margin-bottom: 20px;
    }
    .button{
      display: block;
      width: 100%;
      background: #f21246;
      border-radius: 50px;
      border: 0px;
      font-size: 16px;
    }
  }

  .header{
    .fix{
      color: #686868;
      background: #efefef;
    }
    .wp{
      position: relative;
    }
    .header_left{
      position: absolute;
      left: 0px;
      top: 0px;
    }
    .p{
      text-align: center;
      font-size: 16px;
      color: #333;
    }
  }

  .refund_top{
    margin-bottom: 10px;
    &:first-child>>>.van-cell__value span{
      color: #000;
    }
    >>>.van-cell-group{
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      padding: 5px 0px;
      .num{
        position: absolute;
        top: 30%;
        right: 10px;
        color: #ccc;
        font-size: 12px;
      }
    }
    >>>.van-cell--large{
      padding: 5px 10px;
    }
    .van-cell__left-icon{
      width: 20%;
      min-width: 20%;
      height: auto;
    }
    .van-icon__image{
      width: 100%;
      height: 100%;
    }
    >>>.van-cell--large .van-cell__title{
      font-size: 14px;
      line-height: 20px;
    }
    .van-cell__label{
      font-size: 12px;
      line-height: 20px;
    }

    .mun{
      color: #ccc;
      padding-bottom: 20px;
    }
    >>>.van-cell:not(:last-child)::after{
      border: 0px;
    }
  }

  >>>.van-popup--center{
    text-align: center;
    width: 95%;
    p{
      font-size: 14px;
      line-height: 30px;
    }
  }

  .custom-price{
    .van-cell__value{
      span{
        color: #e9001d;
        font-weight: bold;
      }
    }
  }

  .refundBottom{
    >>>.van-cell:not(:last-child)::after{
      border: 0px;
    }
    >>>.van-cell{
      padding: 4px 10px;
    }
    >>>.van-cell__title{
      font-size: 12px;
      color: #a6a4a5;
    }
    >>>.custom-title{
      font-size: 14px;
      color: #333;
    }
  }

  .refundBottomMin{
    >>>.van-cell:not(:last-child)::after{
      border: 0px;
    }
    >>>.van-cell{
      padding: 4px 10px;
    }
  }

</style>
