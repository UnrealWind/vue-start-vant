<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r l">
          <van-search v-model="value" placeholder="画画" />
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="fix">

        <div class="class_left l">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="为你推荐" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="服饰内饰" />
            <van-sidebar-item title="为你推荐" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="服饰内饰" />
            <van-sidebar-item title="为你推荐" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="服饰内饰" />
            <van-sidebar-item title="为你推荐" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="服饰内饰" />
          </van-sidebar>
        </div>
        <div class="class_right r" @click="$router.push('/user/productdetails')">
          <div class="title"> 为你推荐 </div>
          <div class="class_ul fix">
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
          </div>
          <div class="title fix">
            冬装
            <span class="r"> 热销榜 <van-icon name="arrow" /> </span>
          </div>
          <div class="class_ul fix">
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
            <div class="li">
              <img src="../../assets/img/zonetu12.png" alt="">
              <p> 用品 </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="false" class="class_img wp">
        <div v-for="(commodity,index) in concentrateData" :key="`${commodity.type}-${index}`" class="nav_li">
          <commodity
            :type="commodity.type"
            :image="commodity.image"
            :discribe="commodity.discribe"
            :title="commodity.title"
            :concentrate-price="commodity.concentratePrice"
            :concentrate-price-discribe="commodity.concentratePriceDiscribe"
            :btn-go="commodity.btnGo"
          >
          </commodity>
        </div>
      </div>

    </div>

  </van-container>
</template>

<script>
    import { Icon, Search, Sidebar, SidebarItem } from 'vant'
    export default {
        components: {
            'van-icon': Icon,
            'van-search': Search,
            'van-sidebar': Sidebar,
            'van-sidebar-item': SidebarItem
        },
    data() {
      return {
          status: 'loading',
          value: '',
          activeKey: 0,
          concentrateData: [
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
              },
              {
                  'type': 'list-concentrate',
                  'discribe': '日本进口',
                  'title': '神户龙虾450g*4袋',
                  'concentratePriceDiscribe': '新品福利￥',
                  'concentratePrice': '1200',
                  'btnGo': '/test',
                  'image': require('assets/img/test.png')
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
    background: #fff;
  }

  .header{
    .fix{
      background: #ffffff;
      padding-bottom: 10px;
    }

    .van-search__content{
      border-radius: 50px;
      overflow: hidden;
      width: 100%;
    }
    .header_r{
      width: 85%;
      margin-top: 10px;
      margin-left: 20px;
      .van-search{
        padding: 0px;
        border-radius: 10px;

      }
    }
    .header_l{
      position: relative;
      margin-top: 12px;
      line-height: 30px;
      .van-icon{
        font-size: 18px;
        line-height: 30px;
        color: #333;
      }
    }
  }

  .class_left{
    width: 22%;
    background: #f2f2f2;
    .van-sidebar{
      width: 100%;
    }
    .van-sidebar-item{
      background: #f2f2f2;
    }
    .van-sidebar-item--select{
      .van-sidebar-item__text{
        color: #e9001d;
      }
    }
  }

  .class_right{
    width: 78%;
    padding-left: 2%;
    padding-right: 1%;
    background: #fff;
    padding-top: 20px;

    .title{
      font-size: 14px;
      font-weight: bold;
      color: #1f1f1f;
      span{
        color: #c33144;
        position: relative;
      }
      .van-icon{
        position: relative;
        top: 2px;
      }
    }

    .class_ul{
      margin-bottom: 10px;
      .li{
        float: left;
        width: 32%;
        margin-left: 1%;
        margin-top: 20px;
      }
      img{
        display: block;
        width: 100%;
      }
      p{
        display: block;
        margin: 0px;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
    }

  }

  .class_img{
    padding-bottom: 30px;
  }
  .nav_li{
    margin-top: 20px;
  }

</style>
