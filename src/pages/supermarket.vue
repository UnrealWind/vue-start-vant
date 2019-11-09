<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p">  超市五折天 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>

    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item> <img src="../assets/img/supermarket.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div v-for="(opt, index) in navList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p> {{ opt.title }} </p> </div>
        </div>
      </div>
    </div>
    <div class="nav_box dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div class="title"> <span> 疯狂五折好货 </span> </div>
        </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <div class="wp">
        <div v-for="(rebate,index) in rebateData" :key="`${rebate.type}-${index}`" class="navdan_box4" @click="$router.push('/user/productdetails')">
          <commodity
            :type="rebate.type"
            :image="rebate.image"
            :title="rebate.title"
            :rebate-price="rebate.rebatePrice"
            :btn-go="rebate.btnGo"
            :image-rebate-line="rebate.imageRebateLine"
            :image-rebate="rebate.imageRebate"
          >
          </commodity></div>

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
          rebateData: [
              {
                  'type': 'list-rebate',
                  'title': '宅一起干湿两用毛巾 20条装',
                  'rebatePrice': {
                      'current': '19.9',
                      'pre': '39.9'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/rebate.jpg'),
                  'imageRebateLine': require('assets/img/rebate1.jpg'),
                  'imageRebate': require('assets/img/rebate2.jpg')
              },
              {
                  'type': 'list-rebate',
                  'title': '宅一起干湿两用毛巾 20条装',
                  'rebatePrice': {
                      'current': '19.9',
                      'pre': '39.9'
                  },
                  'btnGo': '/static/introduction',
                  'image': require('assets/img/rebate.jpg'),
                  'imageRebateLine': require('assets/img/rebate1.jpg'),
                  'imageRebate': require('assets/img/rebate2.jpg')
              }
          ],
          navList: [
              {
                  title: '疯抢五折好货',
                  isActive: true
              },
              {
                  title: '超级爆款'
              },
              {
                  title: '精选大牌'
              },
              {
                  title: '返回超市'
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
  .dan_wrap{ background: #f31929; .wp{ width: 95%; margin: 0 auto;  } }
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
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333; }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;  color: #333;  }
  }
  .nav_box5{ position: relative; width:100%;overflow-x: scroll; margin: 0 auto; background: #dd3834; padding: 10px 0px;
    .wp{ position: relative;  }
    .icon{
      padding-left: 10px;
      position: absolute;
      right: 0px;
      top: 15px;
      font-size: 20px;
      background: #f7f7f7;
      z-index: 9;}
    .li1{ display: inline-block; }
    .li1.active p { background: #fff; color: #be4c5f; }
    .li1.hover p { background: #fff; color: #be4c5f; }
    p{ display: inline-block; color: #fff; padding:8px 17px; border-radius: 50px; font-size: 12px; margin: 0 auto;  }
  }

  .nav_box{
    padding-top: 20px;
    padding-bottom: 20px;
    .title{ text-align: center;
      span{
        display: inline-block;
        border: 1px solid #fac596;
        border-radius: 50px;
        color: #f4e3a8;
        font-size: 16px;
        padding: 5px 30px;
        font-weight: 500;
      }
    }
  }
  .nav_box4{  background: #f31927;  }
  .navdan_box4{  height: 182px; background: #fff; margin-bottom: 5px;  }

</style>
