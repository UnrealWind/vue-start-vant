<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l " @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 云集超市-奶制品 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="certificate" />  </div>
    </div>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item @click="$router.push('/static/introduction')"> <img src="../assets/img/supermarketlist.png" alt=""></van-swipe-item>
    </van-swipe>

    <div class="nav_box5 dan_wrap ">
      <div class="wp">
        <div class="nav_ul ">
          <div v-for="(opt, index) in navList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p> {{ opt.title }} </p> </div>
        </div>
        <div class="icon"> <van-icon name="arrow-down" /> </div>
      </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="wp">

        <div class="title"> 精选推荐 </div>

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
          navList: [
              {
                  title: '精选推荐',
                  isActive: true
              },
              {
                  title: '乳品'
              },
              {
                  title: '果汁饮料'
              },
              {
                  title: '酒'
              },
              {
                  title: '冲调早餐'
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
  .dan_wrap{ background: #86c8e8; .wp{ width: 95%; margin: 0 auto;  } }
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
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333;  }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;   color: #333;  }
  }

  .nav_box5{ position: relative; width:100%;overflow-x: scroll; margin: 0 auto;
    .wp{ position: relative; overflow: hidden; }
    .nav_ul{ width: 1000%}
    .icon{
      padding-left: 10px;
      position: absolute;
      right: 0px;
      top: 15px;
      font-size: 20px;
      color: #346e84;
      background: #86c8e8;
      z-index: 9;}
    .li1{ display: inline-block; }
    .li1.active p { background: #ffffff; color: #86c8e8; }
    p{ display: inline-block; color: #777; padding:8px 15px; border-radius: 50px; font-size: 12px; color: #fff;  }
  }

  .nav_box{
    .title{
      font-size: 16px;
      line-height: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

</style>
