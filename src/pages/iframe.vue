<!-- home -->
<template>
  <iframe style="width:380px;height: 667px;" class="fix-iframe" src="/"></iframe>
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
  #app {
    text-align: center;
  }
  iframe {
    border:0;
  }
  .fix-iframe {
    margin:0 auto;
  }

</style>
