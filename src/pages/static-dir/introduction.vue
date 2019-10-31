<!-- home -->
<template>
  <van-container :status="status" :iframe="true">
    <iframe id="scroll" style="width:100%;height: 100%;" src="/static/html/malltemplate/one/home/introduction.html"></iframe>
  </van-container>
</template>

<script>
    export default {
        components: {
        },
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
            },
            back() {
                if (window.frames[0].history.length > 0) window.frames[0].history.back()
            }
        }
    }

</script>
<style lang='scss' scoped>
  iframe {
    border:0;
  }
</style>
