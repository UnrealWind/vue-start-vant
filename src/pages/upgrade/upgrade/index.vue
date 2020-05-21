<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="back">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 主动升级</div>
        </div>
        <div v-if="customShowNew" class="header_r">
          <div class="p" @click="$router.push('/upgrade/choseOrder')"> 新建升级<van-icon name="add-o" /></div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-tabs v-model="active" @change="changeTab">
        <van-tab v-for="(tab, tabIdx) in tabArr" :key="tabIdx" :title="tab.label">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text=""
              @load="onLoad"
            >
              <van-cell-group class="upgrade">
                <van-cell v-for="(item, index) in targetList" :key="index" :value="item.status|judRecordType" is-link center @click="$router.push({path:'/upgrade/upgradeDetail',query:{orderId:item.id}})">
                  <div slot="title">
                    <div class="">升级编号：{{ item.orderNo }}</div>
                    <div class="">升级时间：{{ item.createTime }}</div>
                    <div class="">升级原因：{{ item.escalationReasons[0]| judReason }}</div>
                  </div>
                </van-cell>
              </van-cell-group>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </van-container>
</template>

<script>
  import { Tab, Tabs, Icon, List, PullRefresh, Cell, CellGroup, Toast } from 'vant'
  import config from '../../../config/config'

  export default {
    components: {
      'van-icon': Icon,
      'van-tab': Tab,
      'van-tabs': Tabs,
      'van-list': List,
      'van-pull-refresh': PullRefresh,
      'van-cell-group': CellGroup,
      'van-cell': Cell
    },
    filters: {
      judReason: (value) => {
        let reason
        value.reasonKey === '5' ? reason = value.supplementReason : reason = value.reasonValue
        if (!reason) return '-'
        return reason
      },
      judRecordType: (value) => {
        return config.recordType[value]
      }
    },
    data() {
      return {
        status: 'loading',
        active: 0,
        targetList: [],
        loading: false,
        finished: false,
        refreshing: false,
        pageNo: 0
      }
    },
    computed: {
      customShowNew() {
        return this.$store.state.userInfo.roleNo === 'R0033' || this.$store.state.userInfo.roleNo === 'R0074'
      },
      tabArr() {
        const tabArr = [{
            label: '全部'
          },
          {
            label: '未完成/未反馈'
          },
          {
            label: '已完成/已反馈'
          }]
        // 服务专家和站长看到的是是否反馈，其他角色看到的是是否完成
        if (this.$store.state.userInfo.roleNo === 'R0091' || this.$store.state.userInfo.roleNo === 'R0074') {
          tabArr.forEach((n, i) => {
            n.label = n.label.split('/')[1]
          })
        } else {
          tabArr.forEach((n, i) => {
            n.label = n.label.split('/')[0]
          })
        }
        return tabArr
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      // todo怎么把container状态与 pull-refresh结合起来
      async init() {
        try {
          // this.getListData()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      async onLoad() {
        const data = {
          roleNo: this.$store.state.userInfo.roleNo,
          roleId: this.$store.state.userInfo.roleId,
          orderStatus: this.active,
          pageSize: 5,
          page: ++this.pageNo,
          keyword: ''
        }
        await this.$http.get('escalation/getEscalationOrderList.aspx', {
          params: data
        }).then((res) => {
          this.targetList = this.targetList.concat(res.data.list)
          res.data.list.length === 0 ? Toast('暂无满足条件服务工单') : ''
          this.loading = false
          this.refreshing = false
          if (this.targetList.length === res.data.total) this.finished = true
        }).catch((e) => {
          this.loading = false
          this.refreshing = false
          // 如果不置为finish则会无线触发触底刷新
          this.finished = true
          throw e
        })
      },
      onRefresh() {
        this.finished = false
        this.loading = true
        this.pageNo = 0
        this.targetList = []
        this.onLoad()
      },
      changeTab() {
        this.onRefresh()
      },
      back() {
        this.$route.query.type ? this.$clientServer.BackToApp() : this.$router.back()
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
      position: absolute;
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
