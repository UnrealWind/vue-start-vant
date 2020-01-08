<!-- home -->
<template>
  <iframe style="width:375px;height: 667px;" class="fix-iframe" src="/"></iframe>
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
    display: block;
  }
  .fix-iframe {
    margin:0 auto;
    position: relative;
    top:10%;
  }

</style>
