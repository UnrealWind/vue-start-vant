<template>
  <div :status="status" class="container">
    <div v-if="status === 'loading'" class="cover loading">
      <van-loading size="50px" color="#666" />
    </div>
    <div v-if="status === 'error'" class="cover error">
      <van-icon :name="'warning-o'" size="50px"></van-icon>
      <p>加载错误</p>
      <van-button type="default" size="normal" btn-class="mb15" @click="reload">重新加载</van-button>
    </div>
    <div v-if="status === 'empty'" class="cover empty">
      <p>没有找到数据哦 (*￣︶￣*)</p>
      <van-icon :name="'smile-comment-o'" size="50px"></van-icon>
    </div>
    <header v-if="!iframe" class="header" :class="{ 'hasScroll': scroll }">
      <slot name="header"></slot>
    </header>
    <main v-if="status === 'success'" class="main" :style="customMain">
      <div id="scroll" class="scroll">
        <slot></slot>
      </div>
      <slot name="body-cover" class="body-cover">

      </slot>
    </main>
    <div v-if="status === 'loading'" class="cover-translucent"></div>
    <footer v-if="tabbar" class="footer">
      <slot name="footer">
        <van-tabbar v-model="target">
          <van-tabbar-item name="index" icon="home-o" @click="go('/')">首页</van-tabbar-item>
          <van-tabbar-item name="concentrate" icon="star-o" @click="go('/concentrate')">精选</van-tabbar-item>
          <van-tabbar-item name="cart" icon="cart-circle-o" @click="go('/static/cart')">购物车</van-tabbar-item>
          <van-tabbar-item name="mine" icon="friends-o" @click="go('/static/mine')">我的</van-tabbar-item>
        </van-tabbar>
      </slot>
    </footer>
  </div>
</template>

<script>
    import {
        Button,
        Icon,
        Loading,
        Tabbar,
        TabbarItem
    } from 'vant'
    export default {
        components: {
            'van-button': Button,
            'van-icon': Icon,
            'van-loading': Loading,
            'van-tabbar': Tabbar,
            'van-tabbar-item': TabbarItem
        },
        props: {
            status: {
                type: String,
                default: 'loading' // error empty waiting
            },
            active: {
                type: Number,
                default: 0
            },
            tabbar: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
                default: () => {}
            },
            iframe: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                height: 0,
                target: 0,
                scroll: false
            }
        },
        computed: {
            customMain() {
                // const str = `margin-top:${this.height + 45}px`
                if (this.iframe) {
                    return ''
                } else {
                    // return str
                    return ''
                }
            }
        },
        mounted() {
          this.target = this.active
          window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            go(page) {
                this.$router.push(page)
            },
            handleScroll() {
                const scrollTop = document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    document.querySelector('#scroll').scrollTop
                scrollTop === 0 ? this.scroll = false : this.scroll = true
                console.log(scrollTop, 22222)
            }
        }
    }
</script>

<style lang=scss>
  page{
    width: 100%;
    height:100%;
    background: #eee;
  }
  .cover-translucent {
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index:1000;
  }
  .body-cover {
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index:1000;
  }
  .back {
    display: inline-block;
    position: relative;
    top:2px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
  }

  .header{
    color: #fff;
    font-size:16px;
    font-weight:500;
    line-height:45px;
    position: fixed;
    top:0;
    width:100%;
    z-index: 100;
    van-icon {
      position: relative;
      top:3px;
    }
    view {
      display: inline-block;
    }
  }
  #app .hasScroll{
    background: rgba(0,0,0,0.5);
  }
  .main{
    flex: 1;
    position: relative;
    background: #efefef;
    .scroll {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: scroll;
    }
  }

  .footer{
    background: #fff;
    color: #000;
    line-height: 50px;
    flex: 0 0 50px;
  }

  .cover {
    z-index:999;
    text-align: center;
    position: absolute;
    padding:200px 0 0 0;
    min-width:100%;
    min-height:100%;
    background-color: #fff;
    >van-icon{
      font-size:48px;
    }
  }
  .loading {
    >div{
      margin: 0 auto;
    }
  }
  .empty{
    >p {
      text-align: center;
      font-size:16px;
    }
  }
  .waiting {
    background-color: #ccc;
  }
  .error {
    >p {
      text-align: center;
      font-size:16px;
    }
    >van-button {
      position:relative;
      top:20px;
    }
  }

</style>
