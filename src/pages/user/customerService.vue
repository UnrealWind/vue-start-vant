<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_left" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r">
          <div class="p"> <img :src="$route.query.attr.headImg" alt=""> </div>
        </div>
      </div>
    </div>
    <div class="content dan_wrap">
      <div class="wp fix">

        <!--<div class="left">
          <div class="product fix">
            <div class="img l">
              <img src="../../assets/img/zonetu12.png" alt="">
            </div>
            <div class="productRight r">
              <div class="title">撒的撒发生的供电所覆盖 </div>
              <div class="productPrice fix">
                <span class="price l"> ￥295 </span>
                <span class="button r"> 咨询此商品 </span>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="product fix">
            <div class="img l">
              <img src="../../assets/img/zonetu12.png" alt="">
            </div>
            <div class="productRight r">
              <div class="title">撒的撒发生的供电所覆盖 </div>
              <div class="productPrice fix">
                <span class="price l"> ￥295 </span>
              </div>
            </div>
          </div>
        </div>-->
        <div v-for="(opt, index) in chatData" :key="index">
          <div v-if="opt.type === 'other'" class="left">
            <div class="questionTitle">
              {{ $route.query.attr.nickName }}
            </div>
            <div class="question">
              <span v-if="opt.contentType === 'text'">{{ opt.content }}</span>
              <span v-if="opt.contentType === 'img'" class="content-img-box">
                <img :src="opt.content">
              </span>
            </div>
          </div>

          <div v-if="opt.type === 'mine'" class="right">
            <div class="answerTitle">
              {{ $store.state.user.nickName }}
            </div>
            <div class="answer">
              <span v-if="opt.contentType === 'text'">{{ opt.content }}</span>
              <span v-if="opt.contentType === 'img'" class="content-img-box">
                <img :src="opt.content">
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="wp">

        <van-collapse v-model="activeNames">

          <div class="footerLeft">
            <van-cell-group>
              <van-field
                ref="input"
                v-model="message"
                rows="1"
                autosize
                type="textarea"
                placeholder="请输入您想咨询的问题"
                @focus="focusInput"
              />
            </van-cell-group>
          </div>
          <van-button class="position-button" size="small" round type="primary" @click="sendMsg">发送</van-button>
          <div class="add">
            <!-- <van-icon name="add-o" />-->
            <van-collapse-item title="">
              <div class="shoe_emoji-ul fix">
                <div class="li">
                  <label class="upload" for="fileInput">
                    <van-icon name="newspaper-o" />
                    访问照片
                  </label>
                </div>
                <div class="li">
                  <van-icon name="paid" />
                  拍照
                </div>
                <div class="li">
                  <van-icon name="upgrade" />
                  上传文件
                </div>
              </div>
              <input v-show="false" id="fileInput" ref="file" type="file" @change="uploadImg($event)">
            </van-collapse-item>
          </div>

        </van-collapse>
      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Field, CellGroup, Collapse, CollapseItem, Button, Toast } from 'vant'

  export default {
    components: {
        'van-icon': Icon,
        'van-field': Field,
        'van-cell-group': CellGroup,
        'van-collapse': Collapse,
        'van-collapse-item': CollapseItem,
        'van-button': Button
    },
    data() {
      return {
          status: 'loading',
          message: '',
          focus: false,
          reData: {},
          chatData: [],
          activeNames: ['1']
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.$socket.onmessage = this.onMessage
            this.status = 'success'
        },
        onMessage(e) {
            const reData = JSON.parse(e.data)
            this.reData = reData

            if (reData.msgType === 2) {
                let contentType = 'text'
                if (reData.objData.object.contentType === 2) contentType = 'img'
                this.chatData.push({
                    content: this.reData.objData.object.content,
                    type: 'other',
                    contentType: contentType
                })
            }
        },
        focusInput() {
            this.focus = true
        },
        blurInput() {
            this.focus = false
        },
        sendMsg() {
            this.blurInput()
            this.chatData.push({
                content: this.message,
                type: 'mine',
                contentType: 'text'
            })
            this.$socket.sendMsg({
                msgType: 2,
                receiveUserType: this.$route.query.userType,
                receiveUserCode: this.$route.query.userCode,
                content: this.message,
                contentType: 0 // 0 文本 1 表情 2 图片 3 视频 4 音乐 5 文件 6富文本
            })
            // 重置了
            this.message = ''
        },
        async uploadImg(e) {
            const file = this.$refs.file.files[0]
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                Toast('请上传 jpg，png 格式图片')
                return false
            }
            const formdata = new FormData()
            formdata.append('file', file)
            const res = await this.$http({
                method: 'post',
                url: 'common/upload',
                data: formdata
                // dataType: 'json'
            })
            this.chatData.push({
                content: res.url,
                type: 'mine',
                contentType: 'img'
            })
            this.$socket.sendMsg({
                msgType: 2,
                receiveUserType: this.$route.query.userType,
                receiveUserCode: this.$route.query.userCode,
                content: res.url,
                contentType: 2 // 0 文本 1 表情 2 图片 3 视频 4 音乐 5 文件 6富文本
            })
        }
  }
}

</script>
<style lang='scss' scoped>
  >>>.header {
    background: #f8f8f8;
  }
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
    padding-bottom: 50px;
    background: #efefef;
  }

  .header{
    .fix{
      background: #f8f8f8;
      color: #686868;
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
      img{
        display: block;
        width: 100%;
        margin: 0 auto;
        max-width: 40px;
        border-radius: 50%;
      }
    }
  }
  .position-button {
    position: absolute;
    right: 40px;
    top:9px;
    z-index: 2;
  }
  .left{
    text-align: left;
    margin-bottom: 20px;
    .questionTitle{
      color: #686868;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 5px;
    }
    .question{
      display: inline-block;
      width: 60%;
      background: #fff;
      padding: 10px;
      border-radius: 0px 10px 10px 10px;
      line-height: 20px;
      font-size: 14px;
    }
  }
  .right{
    text-align: right;
    margin-bottom: 20px;
    .answerTitle{
      display: inline-block;
      width: 60%;
      color: #686868;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 5px;
    }
    .answer{
      display: inline-block;
      width: 60%;
      text-align: left;
      background: #fff;
      padding: 10px;
      border-radius: 10px 0px 10px 10px;
      line-height: 20px;
      font-size: 14px;
    }
  }
  .product{
    border: 1px solid #dcbfc4;
    border-radius: 5px;
    padding: 5px 10px;
    background: #fff;
    width: 95%;
    display: inline-block;
    .img{
      width: 25%;
      img{
        display: block;
        max-width: 200px;
        width: 100%;
        margin: 0 auto;
        border-radius: 10px;
      }
    }
    .productRight{
      width: 73%;
      text-align: left;
      .title{
        color: #3f3f3f;
        font-size: 14px;
        line-height: 30px;
      }
      .productPrice{
        padding-top: 5px;
      }
      .price{
        display: block;
        color: #c92d59;
        line-height: 30px;
        font-size: 16px;
        font-weight: bold;
      }
      .button{
        display: block;
        color: #fff;
        background: #f11246;
        border-radius: 50px;
        line-height: 30px;
        padding: 0px 10px;
        font-size: 12px;
      }
    }
  }

  .footer{
    width: 100%;
    position: fixed;
    bottom: -55px;
    background: #fff;

    .wp{
      position: relative;
    }

    .footerLeft{
      display: inline-block;
      width: 68%;
      box-sizing: border-box;
      background: #f3f3f3;
      border-radius: 50px;
      position: relative;
      z-index: 2;
      .van-cell{
        background: #f3f3f3;
        border-radius: 50px;
        height: 30px;
        line-height: 30px;
        padding: 0px 10px;
      }
    }

    .add{
      display: inline-block;
      text-align: right;
      box-sizing: border-box;
      width: 100%;
      font-size: 30px;
      color: #999999;
      line-height: 30px;
      position: relative;
      z-index: 1;
      top:-50px;
      right: 0px;
    }
    .van-collapse-item{
      .van-cell__title{
        display: none;
        height: 0px;
        padding: 0px;
        color: #fff;
      }
      .van-cell__right-icon{
        color: #fff;
      }
    }
    .van-cell{
      background: transparent;
      padding: 0px;
      border: 0px;
      padding-bottom: 10px;
    }
    >>>.van-cell--clickable:active{
      background: #fff;
    }
  }
  .shoe_emoji-ul{
    .li{
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 14px;
    }
    .van-icon{
      display: block;
      text-align: center;
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
  .content-img-box {
    display: inline-block;
    max-width:300px;
    img{
      width:100%;
    }
  }

</style>
