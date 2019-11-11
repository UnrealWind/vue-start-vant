<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="wp">
        <div class="header_l" @click="$router.back()">
          <van-icon name="arrow-left" />
        </div>
        <div class="header_title">
          <div class="p">  注册APP </div>
        </div>
      </div>
    </div>

    <div class="dan_wrap">
      <div class="wp">

        <div class="title"> 填写注册信息 </div>

        <van-cell-group>
          <van-field v-model="user" label="用户名" placeholder="请输入用户名" />

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
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="sendMsg">发送验证码</van-button>
          </van-field>
        </van-cell-group>

        <div class="nextSte" @click="logon">
          下一步
        </div>

      </div>
    </div>

  </van-container>
</template>

<script>
  import { Icon, Field, CellGroup, Button } from 'vant'

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
          password: ''
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
                await this.login()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async login() {
            const res = await this.$http({
                method: 'post',
                url: `login?username=17342062325&password=123456&rememberMe=true`,
                data: {
                    username: '17342062325',
                    password: '123456',
                    rememberMe: true
                }
            })
            console.log(res)
        },
        async logon() {
            const res = await this.$http.post('user/userRegistration/register', {
                phoneNum: this.phone,
                type: '0',
                code: this.sms,
                pid: '12',
                password: this.password
            })
            console.log(res)
            this.$router.push('/')
        },
        async sendMsg() {
            await this.$http.post('user/userRegistration/sendSms', {
                phoneNum: this.phone,
                type: '0'
            })
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
  .l{ float: left; }
  .r{ float: right; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .main{
    background: #ffffff;
  }
  .wp{
    width: 95%;
    margin: 0 auto;
  }

  .dan_wrap{
    padding-top: 30%;
    height: 100%;
    background: #ffffff;
    border-top: 1px solid #dddddd;

    .title{
      font-size: 30px;
      padding-top: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .nextSte{
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

  .header{
    .fix{
      position: relative;
      background: #ffffff;
    }
    .header_l{
      position: absolute;
      left: 0px;
      top: 0px;
      color: #212121;
      font-size: 20px;
    }
    .header_title{
      text-align: center;
      margin-right: 10px;
      color: #212121;
    }

  }

</style>
