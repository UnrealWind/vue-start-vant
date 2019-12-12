<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p"> 评价</div>
        </div>
        <div class="header-right" @click="postFindData"><van-icon class="fix-icon" name="success" />保存</div>
      </div>
    </div>
    <div class="dan_wrap">
      <div v-for="(commodity, idx) in shopInfo.goods" :key="idx" class="evaluation">
        <h2>{{ commodity.goodsName }}
          <span>（{{ commodity.goodsDesc }}）</span>
        </h2>
        <van-cell-group>
          <van-field v-model="commodity.content" placeholder="请输入文本描述信息" />
        </van-cell-group>
        <div class="uploadBox">
          <van-image
            v-for="(opt,index) in commodity.fileList"
            :key="index"
            width="78"
            height="78"
            :src="opt.url"
          />
          <div @click="mark(idx)">
            <van-uploader :before-read="beforeRead" :after-read="upload" result-type="text" multiple />
          </div>
          <h3>商品评分</h3>
          <van-rate v-model="commodity.goodsScore" />
          <h3>服务评分</h3>
          <van-rate v-model="commodity.serveiceScore" />
          <h3>时效评分</h3>
          <van-rate v-model="commodity.timeScore" />
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
    import Vue from 'vue'
    import { /* Button,*/ CellGroup, Field, Icon, Toast, Uploader, Image, Rate } from 'vant'

    Vue.use(Toast)
    export default {
        components: {
            'van-icon': Icon,
            'van-field': Field,
            'van-cell-group': CellGroup,
            'van-uploader': Uploader,
            'van-image': Image,
            'van-rate': Rate
            /* 'van-button': Button*/
        },
        data() {
            return {
                status: 'loading',
                msg: '',
                shopInfo: {},
                targetInfo: 0
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    this.judShopInfo()
                    // await this.login()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            mark(idx) {
                // 这里vant的回调函数并不能提供自定义传参，所以无法定位到具体的fileList 暂时只想到这种办法
              console.log(idx)
                this.targetInfo = idx
            },
            judShopInfo() {
                this.$route.query.goods.forEach((n, i) => {
                    n['fileList'] = []
                    n['content'] = ''
                    n['goodsScore'] = 0
                    n['serveiceScore'] = 0
                    n['timeScore'] = 0
                })
                this.shopInfo = this.$route.query
            },
            async postFindData() {
                console.log(this.shopInfo)
                const data = {
                    orderCode: this.shopInfo.orderCode,
                    orderAppraisesList: [],
                    nodeCode: 5
                }
                this.shopInfo.goods.forEach((n, i) => {
                    data.orderAppraisesList.push({
                        shopCode: n.shopCode,
                        orderDetailCode: n.orderDetailCode,
                        spuCode: n.spuCode,
                        userCode: this.shopInfo.userCode,
                        goodsScore: n.goodsScore,
                        serveiceScore: n.serveiceScore,
                        timeScore: n.timeScore,
                        content: n.content,
                        images: JSON.stringify(n.fileList),
                        isAnonymous: 0,
                        arrpaisesType: 0
                    })
                })
                const res = await this.$http.post('order/orderAppraises/addAppraise', data)
                console.log(res, JSON.stringify(data))
                res.code === 0 ? this.$router.back() : Toast.fail('评价失败！')
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
                const uploadImg = async(file, i) => {
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
                        this.shopInfo.goods[this.targetInfo].fileList.push({ url: res.data.url })
                    }
                }
                if (file instanceof Array) {
                    file.forEach((n, i) => {
                        uploadImg(n, i)
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

  h2 {
    font-size:14px;
    padding-left: 15px;
    span {
      font-weight: 300;
    }
  }
  .fix {
    *zoom: 1;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }
  .uploadBox {
    padding: 10px;
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

  >>>.main {
    background: #ffffff;
  }

  .wp {
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap {
    padding-top: 20%;
    height: 100%;
    background: #ffffff;
    border-top: 1px solid #dddddd;

    .title {
      font-size: 30px;
      padding-top: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .nextSte {
      margin-top: 50%;
      width: 100%;
      border-radius: 50px;
      color: #fff;
      background: #f10d3b;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
      padding: 6px 0px;
    }

  }

  .goLogin {
    text-align: center;
    margin-top: 50px;

    a {
      font-size: 14px;
      color: blue;
      text-decoration: underline;
    }
  }

  .header {
    .fix {
      position: relative;
      background: #ffffff;
    }

    .header_l {
      position: absolute;
      left: 0px;
      top: 0px;
      color: #212121;
      font-size: 20px;
    }

    .header_title {
      text-align: center;
      margin-right: 10px;
      color: #212121;
    }

  }
  .header-right {
    float: right;
    position: absolute;
    right: 10px;
    top:0;
    color: #000;
  }

  .fix-icon {
    position: relative;
    top:2px;
    right:3px;
  }

  .uploadBox {
    .van-image {
      margin:0px 10px 10px 0;
    }
  }
</style>
