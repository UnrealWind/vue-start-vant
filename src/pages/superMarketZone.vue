<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 超市任选专区 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
      <div class="hesde_l4" @click="$router.push('/user/productdetails')"> <van-icon name="cart-o" />  </div>
    </div>

    <div class="nav_wrapper">

      <div v-for="(item,index) in zoneListData" :key="index" class="nav_box dan_wrap fix">
        <div class="wp">
          <a href="" class="img" @click="$router.push('/user/productdetails')">  <img :src="item.img" alt=""> </a>
          <div class="nav_wrap">
            <div class="nva_ul fix">
              <div v-for="(items,indexs) in item.goods" :key="indexs" class="li" @click="$router.push('/user/productdetails')">
                <a href="" class="img">  <img :src="items.img" alt=""> </a>
                <p><a href="">  ¥{{ items.current }} <span>  ¥{{ items.pre }} </span>  </a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
import { Icon } from 'vant'
  export default {
    components: {
        'van-icon': Icon
    },
    data() {
      return {
          status: 'loading',
          zoneListData: [
              {
                  img: require('../assets/img/zonetu1.png'),
                  goods: [
                      {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      },
                      {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      }, {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      }
                  ]
              },
              {
                  img: require('../assets/img/zonetu1.png'),
                  goods: [
                      {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      },
                      {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      },
                      {
                          img: require('../assets/img/zonetu12.png'),
                          current: '29.7',
                          pre: '42.5'
                      }
                  ]
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
        async getZoneData() {
            await this.$http.post(`product/content/list?parentId=${this.$route.query.id}`)
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
  .dan_wrap{
    background: #f1f5f8;
    padding-bottom: 10px;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }
  .nav_wrapper {
    margin-top: 55px;
  }
  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{ position: absolute; left: 0px; top: 2px; font-size: 20px;  color: #333;  }
  .hesde_l3{
    display: none;
    position: absolute; right: 15px; top: 2px; font-size: 20px;  color: #333;
  }
  .hesde_l4{
    position: absolute; right: 15px; top: 2px; font-size: 20px;  color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px;  color: #333;  }
  }
  .nav_box4{ background: #f1f5f8; }

  .nav_wrap{width: 100%; overflow-x: scroll; }
  .nva_ul{ background: #fff; padding:2px 2px 10px; box-sizing: border-box; width: 180%;
    .li{display: inline-block; width: 95px;  }
    p{ color: #aa2a41;
      span{ text-decoration: line-through; color: #7d7d7d; }
    }
  }

</style>
