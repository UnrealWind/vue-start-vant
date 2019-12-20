<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="wp">

        <div class="title"> 账号登录</div>

        <div class="account">
          <div class="acc-Title"> 账号</div>
          <van-cell-group>
            <van-field v-model="valuemin" placeholder="请输入用户名" />
          </van-cell-group>
        </div>

        <div class="account">
          <div class="acc-Title"> 密码</div>

          <van-cell-group>
            <van-field
              v-model="password"
              type="password"
              placeholder="请输入密码"
            />
          </van-cell-group>

        </div>

        <van-button plain type="info" @click="login ">登陆</van-button>

      </div>
    </div>

  </van-container>
</template>

<script>
    import Vue from 'vue'
    import { CellGroup, Field, Icon, Toast, Button } from 'vant'

    Vue.use(Toast)

    export default {
        components: {
            'van-icon': Icon,
            'van-field': Field,
            'van-cell-group': CellGroup,
            'van-button': Button
        },
        data() {
            return {
                status: 'loading',
                value: '',
                valuemin: '',
                showKeyboard: true,
                password: ''
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
            async login() {
                if (this.valuemin === '' || this.password === '') {
                    Toast('用户名或密码不能为空，请重新登陆')
                    return false
                }
                const res = await this.$http({
                    method: 'post',
                    url: `login`,
                    data: {
                        username: this.valuemin,
                        password: this.password,
                        rememberMe: true
                    }
                })
                if (!res.data || !res.data.userCode) {
                    Toast.fail('用户名密码错误')
                    return false
                }
                this.$store.commit('setUserCode', res.data.userCode)
                this.$store.commit('setUserType', res.data.userType)

                // fydebug 最初设计的时候上面的code和type都不要，只需要用token就能够确认用户，现在搞得啥信息都要传递了，干脆一起存在store里
                this.$store.commit('setUser', res.data)
                this.$router.push('/')
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
    height: 10px;
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

  .dan_wrap {
    padding-top: 30%;
    height: 100%;
    background: #ffffff;
    border-top: 1px solid #dddddd;

    .title {
      font-size: 20px;
      padding-top: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      font-weight: bold;
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

  .account {
    .acc-Title {
      margin-top: 20px;
      color: #ccc;
      font-size: 16px;
      margin-bottom: 10px;
    }

  }
  .van-button{
    margin-top: 10%;
    width: 100%;
  }

  /*.register {*/
  /*  margin-top: 10%;*/
  /*  width: 100%;*/
  /*  border-radius: 5px;*/
  /*  color: #fff;*/
  /*  background: #1989fa;*/
  /*  font-size: 16px;*/
  /*  text-align: center;*/
  /*  line-height: 30px;*/
  /*  padding: 6px 0px;*/
  /*}*/

</style>
