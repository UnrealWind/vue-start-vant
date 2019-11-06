<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" @click="$router.back()">
      <van-nav-bar title="物流信息" left-text="" left-arrow color="#fff" />
    </div>
    <div class="main">
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
  </van-container>
</template>

<script>
import { NavBar, Step, Steps } from 'vant'
export default {
  components: {
    'van-nav-bar': NavBar,
    'van-step': Step,
    'van-steps': Steps
  },
  data() {
    return {
      status: 'loading',
      active: 0
    }
  },
  computed: {},
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
    },
    onClickLeft() {
      // Toast('返回')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
