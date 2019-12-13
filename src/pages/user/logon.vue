<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p"> 注册APP</div>
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="wp">

        <div class="title"> 填写注册信息</div>

        <van-cell-group>
          <van-field
            v-model="user"
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="password"
            label="密码"
            type="password"
            placeholder="请输入密码"
          />
          <van-field
            v-model="pid"
            label="推荐人"
            placeholder="请输入pid"
          />
          <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button v-show="timeShow" slot="button" size="small" type="primary" @click="sendMsg(),getCode()">发送验证码
            </van-button>
            <van-button v-show="!timeShow" slot="button" size="small" disabled type="primary" class="count">
              {{ timer }} S后重发
            </van-button>
          </van-field>
        </van-cell-group>
        <div class="goLogin"><a @click="$router.push('/user/accountLogin')">已有账号，点击登录</a></div>
        <div class="nextSte" @click="logon">
          确认
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
import Vue from 'vue'
import { Button, CellGroup, Field, Icon, Toast } from 'vant'

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
      user: '',
      phone: '',
      sms: '',
      password: '',
      timeShow: true,
      timer: 60,
      pid: ''
    }
  },
  computed: {},
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      try {
        // await this.login()
      } catch (e) {
        this.status = 'error'
        throw e
      }
      this.status = 'success'
    },
    async login() {
      const res = await this.$http({
        method: 'post',
        url: `login?username=${this.user}&password=${this.password}&rememberMe=true`,
        data: {
          username: this.user,
          password: this.password,
          rememberMe: true
        }
      })
      console.log(res)
    },
    async logon() {
      if (this.user === '') {
        Toast('请填写用户名')
        return false
      }
      if (this.phone === '') {
        Toast('请填写手机号')
        return false
      }
      if (this.sms === '') {
        Toast('请填写验证码')
        return false
      }
      if (this.password === '') {
        Toast('请填写密码')
        return false
      }
      await this.$http.post('user/userRegistration/register', {
        phoneNum: this.phone,
        type: '0',
        code: this.sms,
        password: this.password,
        nickName: this.user,
        pid: this.pid
      })
      this.$router.push('/')
      this.login()
    },
    async sendMsg() {
      if (this.phone === '') {
        Toast('请填写手机号')
        return false
      }
      await this.$http.post('user/userRegistration/sendSms', {
        phoneNum: this.phone,
        type: '0'
      })
    },
    getCode() {
      if (this.phone === '') {
        Toast('请填写手机号')
        return false
      }
      this.timeShow = false
      const auth_timer = setInterval(() => {
        this.timer--
        if (this.timer <= 0) {
          this.timeShow = true
          clearInterval(auth_timer)
          this.timer = 60
        }
      }, 1000)
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

    .dan_wrap {
        padding-top: 30%;
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

</style>
