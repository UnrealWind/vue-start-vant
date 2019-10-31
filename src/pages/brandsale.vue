<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 福玛玛品牌特卖 </div>
      </div>
      <div class="hesde_l3"> <van-icon name="share" />  </div>
    </div>

    <div class="nav_box danNav_box dan_wrap fix">
      <div class="wp">
        <div class="nav_concent">

          <a href="" class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/brandtu1.png" alt=""> </a>

          <div class="nav_img fix">
            <a href="" class="img l" @click="$router.push('/static/introduction')"> <img src="../assets/img/brandtu12.png" alt="">  </a>
            <a href="" class="img l" @click="$router.push('/static/introduction')"> <img src="../assets/img/brandtu13.png" alt="">  </a>
          </div>

          <div class="img"><img src="../assets/img/brandtu14.png" alt=""> </div>
        </div>
      </div>
    </div>

    <div class="nav_box2 dan_wrap fix">
      <div class="wp">
        <a href="" class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/brandtu15.png" alt=""> </a>
      </div>
    </div>

    <div class="nav_box nav_box3 dan_wrap fix">
      <div class="wp">
        <div class="nav_concent">
          <a href="" class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/brandtu16.png" alt=""> </a>
          <div class="nav_ul fix">
            <div class="li l" @click="$router.push('/static/introduction')">
              <a href="" class="img"> <img src="../assets/img/brandtu17.png" alt="">  </a>
              <p>
                <a href=""> <strong> #100%棉# </strong> 刺绣盘口T恤 </a>
              </p>
              <div class="price"> ￥69 </div>
            </div>
            <div class="li r" @click="$router.push('/static/introduction')">
              <a href="" class="img"> <img src="../assets/img/brandtu18.png" alt="">  </a>
              <p>
                <a href=""> 加宽松紧腰舒适休闲裤 </a>
              </p>
              <div class="price"> ￥69 </div>
            </div>
          </div>

          <a href="" class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/brandtu19.png" alt=""> </a>

        </div>
      </div>
    </div>

    <div class="nav_box4 dan_wrap fix">
      <a href="" class="img" @click="$router.push('/static/introduction')"><img src="../assets/img/brandtu20.png" alt=""> </a>
    </div>

    <div class="nav_box5 dan_wrap fix">
      <div class="wp">
        <div class="nav_ul fix">
          <div class="li l" @click="$router.push('/static/introduction')">
            <a href="" class="img"> <img src="../assets/img/brandtu17.png" alt="">  </a>
            <p>
              <a href=""> <strong> #100%棉# </strong> 刺绣盘口T恤 </a>
            </p>
            <div class="price"> ￥69 </div>
          </div>
          <div class="li r" @click="$router.push('/static/introduction')">
            <a href="" class="img"> <img src="../assets/img/brandtu18.png" alt="">  </a>
            <p>
              <a href=""> 加宽松紧腰舒适休闲裤 </a>
            </p>
            <div class="price"> ￥69 </div>
          </div>
          <div class="li l" @click="$router.push('/static/introduction')">
            <a href="" class="img"> <img src="../assets/img/brandtu17.png" alt="">  </a>
            <p>
              <a href=""> <strong> #100%棉# </strong> 刺绣盘口T恤 </a>
            </p>
            <div class="price"> ￥69 </div>
          </div>
          <div class="li r" @click="$router.push('/static/introduction')">
            <a href="" class="img"> <img src="../assets/img/brandtu18.png" alt="">  </a>
            <p>
              <a href=""> 加宽松紧腰舒适休闲裤 </a>
            </p>
            <div class="price"> ￥69 </div>
          </div>
        </div>
      </div>
    </div>

    <div class=" nav_box6 dan_wrap fix">
      <div class="wp">

        <div class="nav_box8 ">
          <div class="nav_li fix wp">
            <div v-for="(opt, index) in minNavList" :key="index" class="li1" :class="{ active:opt.isActive }">  <p>  {{ opt.title }} </p> </div>
          </div>
        </div>

        <ul class="flex_wrap gwcLits ">
          <li>
            <a href="javascript:;">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/static/750商城/images/timg3.png" alt="">
              <p class="p1">Touch Miss日系小浪漫与温暖羊毛针织拼接网纱百褶中长收腰连衣裙</p>
              <p class="p2"><span>特卖</span> <span>新品</span></p>
              <div class="p3 flex_betweenc"><p>¥155 <span>¥199</span></p><img src="../../public/static/750商城/images/gwc2.png" alt=""></div>
            </a>
          </li>
        </ul>
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
          value: '',
          minNavList: [
              {
                  title: '风衣外套',
                  isActive: true
              },
              {
                  title: '暖冬新品'
              },
              {
                  title: '时尚上衣'
              },
              {
                  title: '百搭下装'
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
  @import "../../public/static/750商城/css/app.css";
  @import "../../public/static/750商城/css/style.css";

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
    background: #9b393a;
    padding-top: 16px;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }
  .dan_wrap2{
    background: #9b393a;
    .wp{
      width: 95%;
      margin: 0 auto;
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
    position: absolute; right: 15px; top: 5px; font-size: 20px;  color: #333;
  }
  .hesde_l4{
    position: absolute; right: 50px; top: 5px; font-size: 20px; color: #333;
  }

  .hesde_l2{ position: relative; width: 62%; margin: 0 auto; text-align: center;
    .p { font-size: 16px; color: #333;  }
  }

  .nav_box .wp{
    background: #fff;
    padding: 0px 5px;
    box-sizing: border-box;
    border: 1px solid #cab5b2;
    border-top: 0px;
    border-bottom: 0px;
    .nav_concent{
      border: 1px solid #b2b2b0;
      border-top: 0px;
      border-bottom: 0px;
    }

  }
  .nav_img{
    background: #fff;
    border-top: 1px solid #9a9c99;
    border-bottom: 1px solid #9a9c99;
    .img{
      display: block;
    }
    .img:first-child{
      width: 60%;
    }
    .img:last-child{
      width: 39%;
    }
  }

  .nav_box3{
    padding-bottom: 20px;
    .wp{
      padding-bottom: 10px;
      .nav_concent{
        border-bottom: 1px solid #b2b2b0;
      }
    }
    .nav_ul{
      padding: 10px 5px 20px;
      .li{
        width: 49%;
      }
      p{
        margin: 0 auto;
        color: #303032;
        line-height: 20px;
        padding-top: 10px;
      }
      strong{
        color: #9b393a;
      }
      .price{
        color: #252724;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  .nav_box5{
    background: #fff;
    padding-bottom: 40px;
    .nav_ul{
      padding: 10px 5px 20px;
      .li{
        width: 49%;
        margin-bottom: 10px;
      }
      p{
        margin: 0 auto;
        color: #303032;
        line-height: 20px;
        padding-top: 10px;
      }
      strong{
        color: #9b393a;
      }
      .price{
        color: #252724;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  .danNav_box{
    padding-top: 55px;
  }

  .nav_box6{
    background: #f2f2f2;
  }
  .nav_box8 .nav_li{ display: block;
    a{ display: block; }
    .li1{
      width: 25%; float: left;
    }
    p{ width:80%; margin:0 auto; margin-bottom:10px; text-align: center;  font-size: 12px; line-height: 30px; padding: 0px; border-radius:50px;
       color:#656565; font-size:10px; }
    .li1.active p{  background: #ed0e3b; color: #fff;    }
  }

</style>
