<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 我的工单</div>
        </div>
        <div class="header_r">
          <div class="p" @click="searchOrder"><van-icon size="18" name="search" /></div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-tabs v-if="type === 'normal'" v-model="active">
        <van-tab v-for="(tab, tabIdx) in tabArr" :key="tabIdx" :title="tab.label">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <van-cell-group class="upgrade">
                <van-cell v-for="(item, index) in targetList" :key="index" :value="item.orderType" is-link center>
                  <div slot="title">
                    <div class="">工单编号：{{ item.orderId }}</div>
                    <div class="">{{ item.createTime }}</div>
                    <div class="">{{ item.reasion }}</div>
                    <div class="">工单来源：{{ item.origin }}</div>
                  </div>
                </van-cell>
              </van-cell-group>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
      <div v-if="type === 'search'">
        <van-cell-group class="upgrade">
          <van-field v-model="value" placeholder="请输入服务站名称进行搜索" />
          <van-cell v-for="(item, index) in targetList" :key="index" :value="item.orderType" is-link center>
            <div slot="title">
              <div class="">工单编号：{{ item.orderId }}</div>
            </div>
            <div slot="label">
              <div class="">{{ item.createTime }}</div>
              <div class="">{{ item.reasion }}</div>
              <div class="">工单来源：{{ item.origin }}</div>
            </div>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </van-container>
</template>

<script>
  import { Tab, Tabs, Icon, List, PullRefresh, Cell, CellGroup, Field } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-tab': Tab,
      'van-tabs': Tabs,
      'van-list': List,
      'van-pull-refresh': PullRefresh,
      'van-cell-group': CellGroup,
      'van-cell': Cell,
      'van-field': Field
    },
    data() {
      return {
        status: 'loading',
        active: 0,
        type: 'normal',
        targetList: [
          {
            orderId: 'id489489194616',
            createTime: '2020-04-27 00:00:00',
            reasion: '发动机无法启动，冒黑烟',
            origin: '400派工',
            orderType: '待服务技师接单'
          }
        ],
        loading: false,
        finished: false,
        refreshing: false,
        value: '',
        tabArr: [
          {
            label: '全部'
          },
          {
            label: '未完成'
          },
          {
            label: '已完成'
          }
        ]
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          await this.getListData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      async getListData() {

      },
      searchOrder() {
        this.type = 'search'
      },
      onLoad() {
        setTimeout(() => {
          this.targetList.push({
            orderId: 'id489489194616',
            createTime: '2020-04-27 00:00:00',
            reasion: '发动机无法启动，冒黑烟',
            origin: '400派工',
            orderType: '服务完成'
          })

          // 加载状态结束
          this.loading = false

          // 假设数据全部加载完成
          if (this.targetList.length >= 10) {
            this.finished = true
          }
        }, 1000)
      },
      onRefresh() {
        this.finished = false
        this.loading = true
        this.getListData()
      }
    }
  }

</script>
<style lang='scss' scoped>
  .wrap {
    background: #ffffff;
    padding-top:45px;
    height: 100%;
    .circle{
      width:100%;
      height:100px;
      text-align: center;
      padding: 20px;
    }
  }
  .header {
    .header_l {
      line-height: 40px;
      color: #fff;
      font-size: 20px;
      float:left;
      padding-top:5px;
    }
    .header_title {
      text-align: center;
      color: #212121;
      color:#fff;
    }
    .header_r {
      position: absolute;
      right: 0;
      top: 0;
      font-size:15px;
      .van-icon {
        position: relative;
        top:1.5px;
        margin:0 5px;
      }
    }
  }
  .upgrade {
    .van-cell {
      font-size:14px;
      >>>.van-cell__value {
        flex: 0 0 95px;
        color:#f10d3b;
      }
      >>>.van-cell__right-icon {
        color:#f10d3b;
      }
    }
  }

</style>
