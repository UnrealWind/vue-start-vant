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
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main v-if="status === 'success'" class="main" :style="customMain">
      <div class="scroll">
        <slot></slot>
      </div>
      <slot name="body-cover" class="body-cover">

      </slot>
    </main>
    <div v-if="status === 'loading'" class="cover-translucent"></div>
    <footer v-if="tabbar" class="footer">
      <slot name="footer">
      </slot>
    </footer>
  </div>
</template>

<script>
    import {
        Button,
        Icon,
        Loading
    } from 'vant'
    export default {
        components: {
            'van-button': Button,
            'van-icon': Icon,
            'van-loading': Loading
        },
        props: {
            status: {
                type: String,
                default: 'loading' // error empty waiting
            },
            active: {
                type: String,
                default: 'home'
            },
            tabbar: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            customMain() {
                return `margin-top:${this.height + 45}px`
            }
        },
        methods: {
            reload() {

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
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
  }

  .header{
    background: #fff;
    color: #000;
    font-size:16px;
    font-weight:500;
    line-height:32px;
    height:38px;
    position: fixed;
    top:0;
    width:100%;
    z-index: 100;
    padding: 3px 10px;
    van-icon {
      position: relative;
      top:3px;
    }
    view {
      display: inline-block;
    }
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
