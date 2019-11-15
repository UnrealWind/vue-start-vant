<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p"> 修改</div>
        </div>
        <div class="header-right" @click="save"><van-icon class="fix-icon" name="success" />保存</div>
      </div>
    </div>
    <div class="dan_wrap">
      <van-cell-group>
        <van-field v-model="changedMsg.value" placeholder="请输入要修改的内容" />
      </van-cell-group>
    </div>
  </van-container>
</template>

<script>
    import Vue from 'vue'
    import { /* Button,*/ CellGroup, Field, Icon, Toast } from 'vant'

    Vue.use(Toast)
    export default {
        components: {
            'van-icon': Icon,
            'van-field': Field,
            'van-cell-group': CellGroup
            /* 'van-button': Button*/
        },
        data() {
            return {
                status: 'loading',
                changedMsg: ''
            }
        },
        computed: {},
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                this.changedMsg = this.$route.query
                try {
                    // await this.login()
                } catch (e) {
                    this.status = 'error'
                    throw e
                }
                this.status = 'success'
            },
            async save() {
                const data = {
                    code: this.changedMsg.code
                }
                data[this.changedMsg.key] = this.changedMsg.value
                await this.$http.post('/manager/user/edit', data)
                this.$router.back()
            }
        }
    }

</script>
<style lang='scss' scoped>

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

  .main {
    background: #ffffff;
  }

  .wp {
    width: 95%;
    margin: 0 auto;
  }
  .fix-icon {
    position: relative;
    top:2px;
    right:3px;
  }
  .dan_wrap {
    padding-top: 20%;
    height: 100%;
    background: #ffffff;
    border-top: 1px solid #dddddd;

    .title {
      font-size: 30px;
      padding-top: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .nextSte {
      margin-top: 50%;
      width: 100%;
      border-radius: 50px;
      color: #fff;
      background: #f10d3b;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
      padding: 6px 0px;
    }

  }

  .goLogin {
    text-align: center;
    margin-top: 50px;

    a {
      font-size: 14px;
      color: blue;
      text-decoration: underline;
    }
  }

  .header {
    .fix {
      position: relative;
      background: #ffffff;
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
      margin-right: 10px;
      color: #212121;
    }

  }
  .header-right {
    float: right;
    position: absolute;
    right: 10px;
    top:0;
    color: #000;
  }

</style>
