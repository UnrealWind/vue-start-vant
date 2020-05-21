<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" size="27" />
        </div>
        <div class="header_title">
          <div class="p"> 选择服务工单</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <van-cell-group>
        <van-field
          v-model="serviceId"
          right-icon="search"
          placeholder="请输入服务工单号检索"
          clearable
          @click-right-icon="onRefresh"
        />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad"
          >
            <van-cell-group class="upgrade">
              <van-cell v-for="(item, index) in targetList" :key="index" center @click="$router.push({path:'/upgrade/newUpgrade',query:{targetOrder:JSON.stringify(item)}})">
                <div slot="title">
                  <div class="">服务编号：{{ item.orderNo |judNull }}</div>
                  <div class="">发动机序列号：{{ item.esn |judNull }}</div>
                  <div class="">SMN：{{ item.smn |judNull }}</div>
                  <div class="">SMN故障描述：{{ item.customerComplaint |judNull }}</div>
                </div>
              </van-cell>
            </van-cell-group>
          </van-list>
        </van-pull-refresh>
      </van-cell-group></div>
  </van-container>
</template>

<script>
  import { Field, Icon, List, PullRefresh, Cell, CellGroup, Toast } from 'vant'

  export default {
    components: {
      'van-icon': Icon,
      'van-list': List,
      'van-pull-refresh': PullRefresh,
      'van-cell-group': CellGroup,
      'van-cell': Cell,
      'van-field': Field
    },
    data() {
      return {
        status: 'loading',
        targetList: [
          // {
          //   serviceId: 'id489489194616',
          //   machineId: '77141414',
          //   desc: '发动机无法启动，冒黑烟',
          //   smn: 'adsd6254186'
          // }
        ],
        serviceId: '',
        loading: false,
        finished: false,
        refreshing: false,
        pageNo: 0
      }
    },
    computed: {},
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
          pageSize: 5,
          page: ++this.pageNo,
          keyword: this.serviceId
        }
        await this.$http.get('escalation/getWorkOrderListForEscalation.aspx', {
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
