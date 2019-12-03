<!-- home -->
<template>
  <van-container :status="status">
    <van-swipe
      indicator-color="white"
      class="van-swipe"
      :loop="false"
    >
      <van-swipe-item>
        <img src="../assets/img/index/index1.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/index/index2.png" alt="" @touchmove="touchRight" @touchstart="touchStart" @touchend="touchEnd">
      </van-swipe-item>
    </van-swipe>
  </van-container>
</template>

<script>
    import { Swipe, SwipeItem } from 'vant'

    export default {
        components: {
            'van-swipe': Swipe,
            'van-swipe-item': SwipeItem
        },
        data() {
            return {
                status: 'loading',
                bannerData: [],
                flag: 0,
                lastX: 0,
                laseY: 0
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
            start() {
                this.$router.push('/')
            },
            touchRight(e) { // 向右移动
                console.log('移动中')
                if (this.flag !== 0) {
                    return
                }
                const currentX = e.touches[0].pageX
                const currentY = e.touches[0].pageY
                const tx = currentX - this.lastX
                const ty = currentY - this.laseY
                let text = ''
                this.mindex = -1
                // 左右方向滑动
                if (Math.abs(tx) > Math.abs(ty)) {
                    if (tx < 0) {
                        text = '向左滑动'
                        this.flag = 1
                        console.log(text)
                        this.start()
                    } else if (tx > 0) {
                        text = '向右滑动'
                        this.flag = 2
                        console.log(text)
                    }
                }
            },
            touchStart: function(e) { // 开始移动
                console.log('开始移动')
                // this.showDrawer('left');
                this.lastX = e.touches[0].pageX
                this.laseY = e.touches[0].pageY
            },
            touchEnd: function(e) { // 结束移动
                console.log('结束移动')
                this.flag = 0
                this.text = '没有滑动'
            }
        }
    }

</script>
<style lang='scss' scoped>
  .van-swipe-item {
    img {
      width:100%;
      height:100%;
    }
  }

</style>
