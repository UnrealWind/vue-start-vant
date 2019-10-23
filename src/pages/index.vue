<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header">首页</div>
  </van-container>
</template>

<script>
  export default {
    data() {
      return {
          status: 'loading'
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
                await this.getData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getData() {
            const res = await this.$http.get('/user/12345')
            console.log(res)
        }
    }
  }

</script>
<style lang='scss' scoped>
  h1 {
    background: red;
    width: 375px;
  }
</style>
