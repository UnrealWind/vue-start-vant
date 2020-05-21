<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 升级反馈</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-field
        v-model="otherReasion"
        rows="1"
        autosize
        label="解决方案"
        type="textarea"
        placeholder="请输入解决方案"
      />
      <h3>上传附件</h3>
      <van-uploader v-model="fileList" :after-read="afterRead" />
      <div class="fixed-btn-box">
        <div class="btn-container">
          <van-button round type="danger" size="large">提交</van-button>
        </div>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Icon, Button, Field, Uploader } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-button': Button,
      'van-field': Field,
      'van-uploader': Uploader
    },
    data() {
      return {
        status: 'loading',
        otherReasion: '',
        fileList: [
          {
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            status: 'uploading',
            message: '上传中...'
          },
          {
            url: 'https://img.yzcdn.cn/vant/tree.jpg',
            status: 'failed',
            message: '上传失败'
          },
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
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
          // await this.getListData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      afterRead(file) {
        file.status = 'uploading'
        file.message = '上传中...'

        setTimeout(() => {
          file.status = 'failed'
          file.message = '上传失败'
        }, 1000)
      }
    }
  }

</script>
<style lang='scss' scoped>
  .wrap {
    background: #ffffff;
    padding-top:45px;
    height: 100%;
    .circle{
      width:100%;
      height:100px;
      text-align: center;
      padding: 20px;
    }
    h3 {
      font-weight: 300;
      margin :30px 0 0 10px;
    }
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
    position: fixed;
    bottom:20px;
    text-align: center;
    width:100%;
    .btn-container {
      width:90%;
      margin:0 auto;
    }
  }
  .van-uploader {
    margin: 10px;
  }

</style>
