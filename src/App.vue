<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view v-if="doRefresh" class="router"></router-view>
    </keep-alive>
    <router-view v-if="doRefresh" class="router"></router-view>
    <!--</transition>-->
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        doRefresh: true // 控制router-view的隐藏与展示
      }
    },
    provide() {
      return {
        refresh: this.refresh
      }
    },
    computed: {
        transitionName() {
            return this.$store.state.direction
        }
    },
    methods: {
      refresh() {
        this.doRefresh = false
        // $nextTick() 将回调延迟到下次 DOM 更新循环之后执行
        this.$nextTick(() => {
          this.doRefresh = true
        })
      }
    }
  }

</script>
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .router {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-color: #fff;
  }
</style>
