<template>
  <div class="container">
    <div v-if="type === 'list-concentrate'" class="list-concentrate-box">
      <van-row>
        <van-col span="8">
          <div class="img-box">
            <img :src="image">
          </div>
        </van-col>
        <van-col span="16">
          <div class="info-box">
            <h4>#{{ discribe }}#</h4>
            <h3>{{ title }}</h3>
            <p>
              <span class="priceDiscribe">{{ priceDiscribe }}</span>
              <span class="price">{{ price }}</span>
            </p>
            <span class="button-concentrate" @click="btnCallBack">
              <van-icon :name="'play-circle'" color="red" size="27px"></van-icon>
            </span>
          </div>
        </van-col>
      </van-row>
    </div>
    <div v-if="type === 'list-index'" class="list-index-box">
      <div class="img-box">
        <img :src="image">
        <van-button type="default" size="small" round>抢购</van-button>
        <img src="" title="今日爆款">
      </div>
      <div class="info-box">
        <van-row>
          <van-col span="16">
            <h3>{{ title }}</h3>
            <h4>#{{ discribe }}#</h4>
          </van-col>
          <van-col span="8">
            <span class="price">
              <span class="current">
                <i class="yuan">￥</i>
                {{ price.current }}
              </span>
              <span class="pre">
                <i class="yuan">￥</i>
                {{ price.pre }}
              </span>
            </span>
            <span class="priceDiscribe">
              <van-button type="default" size="mini" round>{{ priceDiscribe.type }}</van-button>
            </span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
    import { Row, Col, Icon, Button } from 'vant'
    export default {
        components: {
            'van-row': Row,
            'van-col': Col,
            'van-icon': Icon,
            'van-button': Button
        },
        props: {
            type: {
                type: String,
                default: 'list-index'
                /*
                    list-index 用于首页样式的列表模板
                 */
            },
            // fydebug 这里加载静态图片必须通过require的方式进行加载，如果是放在服务器上的就不用这么写了
            image: {
                type: String,
                default: 'assets/img/404.png'
            },
            title: {
                type: String,
                default: '标题'
            },
            discribe: {
                type: String,
                default: '描述'
            },
            price: {
                type: String,
                default: '价格'
            },
            priceDiscribe: {
                type: String,
                default: '价格'
            },
            btnGo: {
                type: String,
                default: '/'
            }
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {

        },
        methods: {
            btnCallBack() {
                this.$router.push(this.btnGo)
            }
        }
    }
</script>

<style lang=scss>
  .list-concentrate-box {
    overflow: hidden;
    border-radius: 5px;
    background:#fff;
    width:100%;
    .info-box {
      position: relative;
      h4{
        color:#e41818;
        font-size:13px;
        margin:15px 0 0 20px;
        font-weight: 300;
      }
      h3 {
        font-size:15px;
        margin:10px 0 0 20px;
      }
      p {
        margin:40px 0 0 20px;
        font-weight: 700;
        .priceDiscribe {
          font-size:12px;
        }
        .price{
          font-size:20px;
        }
      }
    }
    .van-col--8 {
      height: 130px;
    }
    .img-box {
      height:100%;
      width:100%;
      display: inline-block;
      overflow: hidden;
      img {
        height:100%;
        width:100%;
        display: inline-block;
      }
    }
    .button-concentrate {
      position: absolute;
      right: 10px;
      bottom: -3px;
      .van-icon {

      }
    }
  }
  .list-index-box {
    background:#fff;
    .img-box {
      width:100%;
      height:140px;
      border-radius:5px 5px 0px 0px;
      overflow: hidden;
      position: relative;
      .van-button {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
      >img {
        width:100%;
        height:100%;
      }
    }
    .info-box {
      h4 {
        margin:7px 0 15px 10px;
      }
      h3 {
        margin:15px 0 0 10px;
      }
      .yuan {
        font-style: normal;
      }
      .price {
        display: inline-block;
        margin:10px 0 0 0;
      }
      .priceDiscribe {
        display: inline-block;
        margin:10px 0 0 0;
        font-size:12px;
      }
    }
  }

</style>
