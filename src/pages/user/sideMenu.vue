<template>
  <van-container :status="status">
    <div
      slot="header"
      class="fix"
    >
      <div
        class="header_l "
        @click="$router.back()"
      >
        <van-icon name="arrow-left" />
      </div>
      <div class="header_title">
        <div class="p"> 关系</div>
      </div>
    </div>
    <div class="content">
      <van-sidebar
        v-if="listData && listData.length"
        v-model="activeKey"
      >
        <van-sidebar-item
          v-for="(item, index) in listData"
          :key="index"
          :title="item.user.userTypeName"
          @click="fnClickTab(item, 1)"
        />

      </van-sidebar>
      <van-sidebar
        v-if="activeItem1.id"
        v-model="activeMenuKey"
      >
        <van-sidebar-item
          v-for="(iitem,index_s) in activeItem1.list"
          :key="index_s"
          :title="iitem.user.userTypeName"
          @click="fnClickTab(iitem, 2)"
        />
      </van-sidebar>
      <van-sidebar
        v-if="activeItem2.id"
        v-model="activeNavKey"
      >
        <van-sidebar-item
          v-for="(iiitem,index_t) in activeItem2.list"
          :key="index_t"
          :title="iiitem.user.userTypeName"
          @click="fnClickTab(iiitem, 3)"
        />
      </van-sidebar>
    </div>
  </van-container>
</template>
<script>
import { Sidebar, SidebarItem, Icon } from 'vant'
export default {
  components: {
    'van-icon': Icon,
    'van-sidebar': Sidebar,
    'van-sidebar-item': SidebarItem
  },
  data() {
    return {
      status: 'loading',
      listData: [], // menu数据
      activeItem1: {}, // 一级菜单选中
      activeItem2: {}, // 二级菜单选中
      activeItem3: {}, // 三级菜单选中
      activeKey: 0,
      activeNavKey: 0,
      activeMenuKey: 0
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
        await this.getMenuList()
      } catch (e) {
        this.status = 'error'
        throw e
      }
      this.status = 'success'
    },
    async getMenuList() {
      const res = await this.$http.post(`user/distributionRel/treeList`)
      this.listData = [res.data]
      this.loopDeep(this.listData, 1)
    },
    loopDeep(list, level) { // 数据初始化
      let child_check = false
      list.map(el => {
        if (el.list && el.list.length) {
          const el_check = this.loopDeep(el.list, level + 1)
          if (el_check) {
            child_check = true
            this['activeItem' + level] = el
          }
        }
        if (el.sign === 1) {
          child_check = true
          this['activeItem' + level] = el
        }
      })
      return child_check
    },
    fnClickTab(item, level) { // 菜单点击事件 item点击数据 level级别
      switch (level) {
        case 1:
          this.activeItem1 = item
          this.activeItem2 = {}
          this.activeItem3 = {}
          break
        case 2:
          this.activeItem2 = item
          this.activeItem3 = {}
          break
        case 3:
          this.activeItem3 = item
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 44px;
  height: 100%;
  width: 100%;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  .van-sidebar-item {
    border-left: 0.08rem solid #ccc;
  }
  .van-sidebar-item--select {
    border-left: 0.08rem solid #ee0a24;
    background-color: antiquewhite;
  }
  .wall {
    color: #333;
    font-size: 20px;
    background-color: #fff;
  }
  ul li {
    line-height: 50px;
    width: 80px;
    text-align: center;
    border-left: 3px solid rgba(255, 255, 255, 0);
  }
  .active {
    background-color: blanchedalmond;
    color: #666;
    border-left: 3px solid red;
    padding-left: 10px;
  }
}
.header {
  .fix {
    position: relative;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
  .header_l {
    position: absolute;
    left: 0px;
    top: 0px;
    color: #212121;
    font-size: 20px;
  }

  .header_title {
    text-align: center;
    color: #212121;
  }
}
</style>
