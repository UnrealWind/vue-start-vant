<!-- home -->
<template>
  <van-container :status="status" :header-color="''">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_left" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r">
          <div class="p"> 消息列表 </div>
        </div>
      </div>
    </div>

    <div v-if="infoList.length>0" class="dan_wrap">
      <div v-for="(info, index) in infoList" :key="index" class="refund_top">
        <van-cell-group @click="goChat(info)">
          <van-cell
            :icon="info.attr.headImg"
            :title="info.attr.nickName"
            :value="info.value"
            size="large"
            :label="info.label"
          >
          </van-cell>
        </van-cell-group>
      </div>
    </div>
    <p v-else class="nInfo">
      暂无消息！！
    </p>
  </van-container>
</template>

<script>
    import { Icon, Cell, CellGroup } from 'vant'
    export default {
        components: {
            'van-icon': Icon,
            'van-cell': Cell,
            'van-cell-group': CellGroup
        },
        data() {
            return {
                status: 'loading',
                infoList: []
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
                this.getList()
                this.status = 'success'
            },
            getList() {
                this.$socket.sendMsg({
                    msgType: 0
                })
            },
            onMessage(e) {
                console.log(JSON.parse(e.data))
                const res = JSON.parse(e.data)
                this.infoList = res.objData
            },
            goChat(info) {
                this.$router.push({
                    path: '/user/customerService',
                    query: info
                })
            }
        }
    }

</script>
<style lang='scss' scoped>
  >>>.header{
    background: #f8f8f8
  }
  .nInfo {
    margin-top:80px;
    text-align: center;
    font-size:15px;
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
    >>>.van-icon{
      width:50px;
      height:50px;
      display: inline-block;
      margin-right: 10px;
    }
    >>>img{
      width:50px;
      height:50px;
      display: inline-block;
    }
  }

  .header_r {
    text-align: center;
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
    right: 0;
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
      width: 75%;
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

</style>
