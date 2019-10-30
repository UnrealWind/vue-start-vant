<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 热销榜单 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
      <div class="hesde_l4" @click="$router.push('/static/introduction')"> <van-icon name="cart-o" />  </div>

    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item> <img src="../assets/img/hottu1.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div v-for="(opt, index) in navList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p> {{ opt.title }} </p> </div>
        </div>
        <div class="icon"> <van-icon name="arrow-down" /> </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div v-for="(hot,index) in hotData" :key="`${hot.type}-${index}`" class="navdan_box4" @click="$router.push('/static/introduction')">
          <commodity
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
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant'
  export default {
    components: {
        'van-swipe': Swipe,
        'van-swipe-item': SwipeItem,
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          value: '',
          hotData: [
              {
                  'type': 'list-hot',
                  'discribe': '【三段有效期至 2019-01-01】，爱尔兰原装罐装奶粉，贼好喝。后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述后面都是奶粉描述',
                  'title': '受妈妈欢迎的爆款奶粉',
                  'hotPriceDiscribe': '￥',
                  'hotPrice': '1200',
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/hottu13.png'),
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
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/hottu12.png'),
                  'popularity': '人气2.2w',
                  'preferential': '满100减50',
                  'evaluate': '很实惠，后续评价，这是一条评论'
              }
          ],
          navList: [
              {
                  title: '全部',
                  isActive: true
              },
              {
                  title: '美食'
              },
              {
                  title: '美妆'
              },
              {
                  title: '服饰'
              },
              {
                  title: '美妆'
              },
              {
                  title: '运动'
              },
              {
                  title: '玩具'
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
  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .img{  display: block; }
  .img img{ display: block; width: 100%; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .dan_wrap{ background: #f8f8f8; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    margin-top: 45px;
    img {
      display: block;
      width:100%;
     }
  }
  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;   color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333; }
  }
  .nav_box4{  background: #f8f8f8;  }
  .nav_box5{ position: relative; width:100%;overflow-x: scroll; margin: 0 auto;
    .wp{ position: relative; overflow: hidden; }
    .nav_ul{ width: 1000%}
    .icon{
      padding-left: 10px;
      position: absolute;
      right: 0px;
      top: 15px;
      font-size: 20px;
      background: #f7f7f7;
      z-index: 9;}
    .li1{ display: inline-block; }
    .li1.active p { background: #ef0d3b; color: #fff; }
    p{ display: inline-block; color: #777; padding:8px 15px; border-radius: 50px; font-size: 12px;  }

  }

  .navdan_box4{
    background: #fff;
    margin-bottom: 5px;
  }

</style>
