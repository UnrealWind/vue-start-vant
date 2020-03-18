<!-- home -->
<template>
  <van-container :status="status">
    asdsasd
  </van-container>
</template>

<script>
  import { } from 'vant'

  export default {
    components: {

    },
    data() {
      return {
        status: 'loading'
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
        const res = await this.$http.post('/test', {
          test: '123'
        })
        console.log(res)
      }
    }
  }

</script>
<style lang='scss' scoped>

</style>
