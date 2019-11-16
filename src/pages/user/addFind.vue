<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p"> 新增发现</div>
        </div>
        <div class="header-right" @click="postFindData"><van-icon class="fix-icon" name="success" />保存</div>
      </div>
    </div>
    <div class="dan_wrap">
      <van-cell-group>
        <van-field v-model="msg" placeholder="请输入文本描述信息" />
      </van-cell-group>
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
  </van-container>
</template>

<script>
    import Vue from 'vue'
    import { /* Button,*/ CellGroup, Field, Icon, Toast, Uploader, Image } from 'vant'

    Vue.use(Toast)
    export default {
        components: {
            'van-icon': Icon,
            'van-field': Field,
            'van-cell-group': CellGroup,
            'van-uploader': Uploader,
            'van-image': Image
            /* 'van-button': Button*/
        },
        data() {
            return {
                status: 'loading',
                msg: '',
                fileList: []
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    // await this.login()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async postFindData() {
                if (!this.msg) {
                    Toast.fail('请输入描述信息！')
                    return
                }
                const res = await this.$http.post('product/discover/add', {
                    text: this.msg,
                    imgUrl: JSON.stringify(this.fileList)
                })
                Toast.success('保存成功')
                this.$router.back()
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
            async upload(file) {
                const uploadImg = async(file) => {
                    const formdata = new FormData()
                    formdata.append('file', file.file)
                    const res = await this.$http({
                        method: 'post',
                        url: 'common/upload',
                        data: formdata
                        // dataType: 'json'
                    })
                    if (res.code === 0) {
                        this.fileList.push({ url: res.url })
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

  .main {
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
