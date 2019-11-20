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

        <div v-for="(refund, index) in refund" :key="index" class="refund_top">
          <van-cell-group>
            <van-cell
              :icon="refund.img"
              :title="refund.title"
              :value="refund.price"
              size="large"
              :label="refund.label"
            >
            </van-cell>
            <div class="num">
              {{ refund.num }}
            </div>
          </van-cell-group>
        </div>

        <div class="refund_top refundBottomMin">
          <van-cell-group>
            <van-cell title="货物状态" value="未收到货" />
            <van-cell is-link title="退款原因" value="请选择退款原因" @click="showPopup" />
            <van-popup v-model="show">
              <p> 样式一 </p>
              <p> 样式二 </p>
              <p> 样式三 </p>
            </van-popup>

            <van-cell title="退款数量" value="1" />
          </van-cell-group>
        </div>

        <div class="refund_top refundBottom">
          <van-cell-group>
            <van-cell value="￥14.9" class="custom-price">
              <!-- 使用 title 插槽来自定义标题 -->
              <template slot="title">
                <span class="custom-title">退款金额</span>
                <van-tag type="danger"><van-icon name="question-o" /></van-tag>
              </template>
            </van-cell>

            <van-cell title="实付金额" value="14.9" />
            <van-cell title="余额" value="0" />
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
              <van-uploader v-model="fileList" :max-count="5" multiple class="van-uploader" />
              <div class="mun"> 最多上传五张照片 </div>
            </div>

          </van-cell-group>
        </div>

        <van-button type="primary" class="button" @click="$router.push('/user/afterSale')"> 申请售后 </van-button>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Field, Cell, CellGroup, Uploader, Button, Popup } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-field': Field,
        'van-cell': Cell,
        'van-cell-group': CellGroup,
        'van-uploader': Uploader,
        'van-button': Button,
        'van-popup': Popup
    },
    data() {
      return {
          status: 'loading',
          message: '',
          fileList: [],
          show: false,
          refund: [
              {
                  title: '南极人中老年保暖内衣男女士',
                  price: '￥59.00',
                  label: '颜色男款-白色尺码: (男170女165 )',
                  img: require('../../assets/img/cart/card.png'),
                  num: 'x1'
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
        },
        showPopup() {
            this.show = true
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
