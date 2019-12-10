<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_r l">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @focus="focus"
          >
            <div slot="action">搜索</div>
          </van-search>
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="fix">

        <div class="class_left l">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item
              v-for="(item,index) in classTabData"
              :key="index"
              :title="item.categoryName"
              @click="changeTab(index)"
            />
          </van-sidebar>
        </div>
        <div v-for="(model,divIndex) in targetData" v-show="!thisShow" :key="divIndex" class="class_right r">
          <div class="title"> {{ model.categoryName }}</div>
          <div class="class_ul fix">
            <div
              v-for="(opt,liIndex) in model.list"
              :key="liIndex"
              class="li"
              @click="$router.push({path:'/commonalityPage',query:{id:opt.code,title: opt.categoryName}})"
            >
              <van-image :src="opt.categoryImg">
                <template v-slot:error>加载失败</template>
              </van-image>
              <p> {{ opt.categoryName }} </p>
            </div>
            <div v-if="model.list.length === 0" class="hint">当前类目下没有分类</div>
          </div>
        </div>
        <div v-show="thisShow" class="class_right r">
          <div class="hint">当前类目下没有分类</div>
        </div>
      </div>
    </div>

  </van-container>
</template>

<script>
    import { Icon, Image, Search, Sidebar, SidebarItem } from 'vant'

    export default {
        components: {
            'van-icon': Icon,
            'van-search': Search,
            'van-sidebar': Sidebar,
            'van-sidebar-item': SidebarItem,
            'van-image': Image
        },
        data() {
            return {
                status: 'loading',
                value: '',
                activeKey: 0,
                thisShow: false,
                concentrateData: [],
                classCategoryData: [],
                classTabData: [],
                targetData: [],
                keepAlive: true
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                try {
                    await this.getClassTabData()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            changeTab(index) {
                this.thisShow = true
                this.targetData = this.classTabData[index].list
                for (let i = 0; i < this.targetData.length; i++) {
                    if (this.targetData[i].list.length > 0) {
                        this.thisShow = false
                    }
                }
            },
            async getClassTabData() {
                const res = await this.$http.post('manager/dictCategory/listByPcode', {
                    pCode: 12
                })
                this.classTabData = res.data
                this.targetData = this.classTabData[0].list
            },
            // 搜索功能
            focus() {
                this.$router.push('/searchPage')
            }
        }
    }

</script>
<style lang='scss' scoped>
  >>>.header .fix{
    padding-top:30px;
    .hesde_l {
      top:35px;
    }
  }
  > > > .main {
    background: #fff;
  }

  .van-image {
    width: 100%;
    height: 90px;
  }

  > > > .van-image__error {
    width: 85px;
  }

  h1 {
    background: red;
    width: 375px;
  }

  .fix {
    *zoom: 1;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .wp {
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap {
    padding-top: 85px;
    background: #fff;
  }

  .header {
    .fix {
      background: #ffffff;
      padding-bottom: 10px;
    }

    .van-search__content {
      border-radius: 50px;
      overflow: hidden;
      width: 100%;
    }

    .header_r {
      width: 85%;
      margin-top: 10px;
      margin-left: 20px;

      .van-search {
        padding: 0;
        border-radius: 10px;

      }
    }

    .header_l {
      position: relative;
      margin-top: 12px;
      line-height: 30px;

      .van-icon {
        font-size: 18px;
        line-height: 30px;
        color: #333;
      }
    }
  }

  .class_left {
    position: fixed;
    left: 0;
    width: 22%;
    background: #f2f2f2;

    .van-sidebar {
      width: 100%;
    }

    .van-sidebar-item {
      background: #f2f2f2;
    }

    .van-sidebar-item--select {
      .van-sidebar-item__text {
        color: #e9001d;
      }
    }
  }

  .class_right {
    width: 78%;
    padding-left: 2%;
    padding-right: 1%;
    background: #fff;
    padding-top: 20px;

    .title {
      font-size: 14px;
      font-weight: bold;
      color: #1f1f1f;

      span {
        color: #c33144;
        position: relative;
      }

      .van-icon {
        position: relative;
        top: 2px;
      }
    }

    .class_ul {
      margin-bottom: 10px;

      .li {
        float: left;
        width: 32%;
        margin-left: 1%;
        margin-top: 20px;
      }

      img {
        display: block;
        width: 100%;
      }

      p {
        display: block;
        margin: 0;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

  }

  .hint {
    font-size: 14px;
    text-align: center;
  }

  .class_img {
    padding-bottom: 30px;
  }

  .nav_li {
    margin-top: 20px;
  }

</style>
