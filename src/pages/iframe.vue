<!-- home -->
<template>
  <van-container :iframe="true" :tabbar="true" :status="status" :active="3">
    <iframe style="width:100%;height: 100%;" src="static/html/静态页面-商城模板/one/person/index.html"></iframe>
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
            }
        }
    }

</script>
<style lang='scss' scoped>
  iframe {
    border:0;
  }
</style>
