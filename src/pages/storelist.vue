<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l l" @click="$router.back()"> <van-icon name="arrow-left" />  </div>
      <div class="hesde_l2 l">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="hesde_l3 r"> <van-icon name="share" />  </div>
    </div>

    <div class="nav_box dan_wrap fix">
      <div class="storetubj img"><img src="../assets/img/storetubj.png" alt=""> </div>
      <div class="wp">

        <div class="nav_header fix">
          <div class="nav_l l">
            <a href="" class="img"> <img src="../assets/img/storetu1.png" alt=""> </a>
          </div>
          <div class="nav_c l">
            <a href="" class="title"> 裂帛旗舰店 </a>
            <a href="" class="titlemin"> 在线商品<span>350 </span> 粉丝数量<span>3333 </span> </a>
          </div>
          <div class="nav_r r">
            <a href=""> <van-icon name="like-o" /> 关注 </a>
          </div>
        </div>

        <div class="nav_bottom">

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 每周新品 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 每周新品 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

          <div class="nav_list">
            <a href="" class="title" @click="$router.push('/productlist')"> 热卖爆款 </a>
            <div class="nav_mintitle">
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
              <a href="" @click="$router.push('/productlist')"> 热卖爆款 </a>
            </div>
          </div>

        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
import { Icon, Search } from 'vant'
  export default {
    components: {
        'van-icon': Icon,
        'van-search': Search
    },
    data() {
      return {
          status: 'loading',
          value: ''
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
  .dan_wrap{ background: #f2f2f2; .wp{ width: 95%; margin: 0 auto;  } }
  .van-swipe {
    img {
      display: block;
      width:100%;
     }
  }

  .header{
    .fix{
      padding-bottom: 10px;
    }
  }

  .hesde_l{
    margin-right: 20px;
    line-height: 38px;
    padding-top: 12px;
    line-height: 20px;
    .van-icon{
      font-size: 20px;
      line-height: 20px;
    }
  }

  .hesde_l3{
    display: none;
    padding-top: 10px;
    padding-right: 10px;
    .van-icon{ font-size: 20px; }
  }
  .van-search{ padding: 0px!important; }
  .hesde_l2{
    position: relative;
    border-radius: 50px;
    padding-top: 10px;
    width: 75%;
    .van-search{
      border-radius: 50px;
    }
    .p{
      position: absolute;
      right: 10px;
      top: 4px; }
  }
  .van-search__content{
    border-radius: 50px;
  }
  .van-search .van-cell{
    padding: 1px 0px;
  }

  .nav_box{
    position: relative;
    .wp{
      position: relative;
      z-index: 4;
    }
  }
  .storetubj{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    overflow: hidden;
  }
  .nav_box {
    padding-bottom: 10px;
    padding-top: 80px;
    background:#f2f2f2;
    background-size: contain;
    position: relative;
    z-index: 3;
    .nav_header{
      .nav_l{
        width: 15%;
        img{  border-radius: 10px;}
      }
      .nav_c{
        padding-left: 20px;
        a{
          display: block;
          color: #fff;
        }
        .title{
          font-size: 20px;
          line-height: 30px;
        }
        .titlemin{
          font-size: 14px;
          line-height: 20px;
        }
      }
      .nav_r{
        a{
          color: #fff;
          background: #fd5e5b;
          padding: 5px 15px;
          line-height: 20px;
          border-radius: 50px;
          position: relative;
        }
        i{
          position: relative;
          top: 3px;
        }
      }
    }

  }

  .nav_bottom{
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 15px;
    .title{
      font-weight: bold;
      line-height: 30px;
      font-size: 14px;
      margin-bottom: 25px;
    }
    .nav_mintitle{
      a{
        display: inline-block;
        width: 48%;
        margin-right: 1%;
        background: #eeeeee;
        line-height: 30px;
        padding: 0px 10px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
    }
  }

</style>
